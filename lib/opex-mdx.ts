import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const opexDirectory = path.join(process.cwd(), 'content', 'opex');

export interface OpexCoreValue {
    slug: string;
    frontmatter: {
        id: number;
        title: string;
        image: string;
        color: string;
        textColor: string;
        gradientColor: string;
        quote: string;
        description: string;
        published?: boolean;
    };
    content: string;
}

/**
 * Get all opex core value slugs for static generation
 */
export function getAllOpexSlugs(): string[] {
    if (!fs.existsSync(opexDirectory)) {
        return [];
    }

    const files = fs.readdirSync(opexDirectory);
    return files
        .filter(file => file.endsWith('.mdx'))
        .map(file => file.replace(/\.mdx$/, ''));
}

/**
 * Get a single opex core value by slug
 */
export function getOpexBySlug(slug: string): OpexCoreValue | null {
    try {
        const filePath = path.join(opexDirectory, `${slug}.mdx`);
        
        if (!fs.existsSync(filePath)) {
            return null;
        }

        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            frontmatter: {
                id: data.id || 1,
                title: data.title || 'Untitled',
                image: data.image || '',
                color: data.color || 'bg-bosch_blue',
                textColor: data.textColor || 'text-bosch_blue',
                gradientColor: data.gradientColor || 'from-bosch_blue',
                quote: data.quote || '',
                description: data.description || '',
                published: data.published !== false,
            },
            content,
        };
    } catch (error) {
        console.error(`Error reading opex core value: ${slug}`, error);
        return null;
    }
}

/**
 * Get all opex core values
 */
export function getAllOpexCoreValues(): OpexCoreValue[] {
    const slugs = getAllOpexSlugs();
    return slugs
        .map(slug => getOpexBySlug(slug))
        .filter((value): value is OpexCoreValue => value !== null)
        .sort((a,b ) => a.frontmatter.id - b.frontmatter.id);
}

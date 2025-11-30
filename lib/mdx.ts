import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'service-highlights');

export interface ServiceHighlight {
    slug: string;
    frontmatter: {
        title: string;
        date: string;
        description: string;
        author?: string;
        tags?: string[];
        featuredImage?: string;
        published?: boolean;
        // galleryImages?: string[];
    };
    content: string;
}

/**
 * Convert title to URL-safe slug
 * Removes non-alphanumeric characters, converts to lowercase, replaces spaces with hyphens
 */
export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric except spaces and hyphens
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
}

/**
 * Get all service highlight slugs for static generation
 */
export function getAllServiceHighlightSlugs(): string[] {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    const files = fs.readdirSync(contentDirectory);
    return files
        .filter(file => file.endsWith('.mdx'))
        .map(file => file.replace(/\.mdx$/, '')).map(slug => generateSlug(slug));
}

/**
 * Get a single service highlight by slug
 */
export function getServiceHighlightBySlug(slug: string): ServiceHighlight | null {
    try {
        const filePath = path.join(contentDirectory, `${slug}.mdx`);
        
        if (!fs.existsSync(filePath)) {
            return null;
        }

        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            frontmatter: {
                title: data.title || 'Untitled',
                date: data.date || new Date().toISOString(),
                description: data.description || '',
                author: data.author,
                tags: data.tags || [],
                featuredImage: data.featuredImage,
                // galleryImages: data.galleryImages || [],
                published: data.published,
            },
            content,
        };
    } catch (error) {
        console.error(`Error reading service highlight: ${slug}`, error);
        return null;
    }
}

/**
 * Get all service highlights
 */
export function getAllServiceHighlights(): ServiceHighlight[] {
    const slugs = getAllServiceHighlightSlugs();
    return slugs
        .map(slug => getServiceHighlightBySlug(slug))
        .filter((highlight): highlight is ServiceHighlight => highlight !== null && Boolean(highlight.frontmatter.published))
        .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getServiceHighlightsTags(): string[] {
    const highlights = getAllServiceHighlights();
    const tags: string[] = []
    highlights.forEach(highlight => tags.push(...highlight.frontmatter.tags || []));
    return [...new Set(tags)]
}

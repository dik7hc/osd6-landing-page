# MDX Integration in Next.js - Complete Implementation Guide

This document provides a detailed, step-by-step guide for implementing MDX (Markdown with JSX) support in a Next.js application, based on the implementation in commit `b43d96f`.

## Overview

This implementation enables rendering MDX files as content pages with:
- **File-based content management** - Store content in `.mdx` files with frontmatter metadata
- **Dynamic routing** - Automatic page generation from MDX files
- **Custom component rendering** - Styled HTML elements with custom React components
- **Intelligent image grid system** - Automatic responsive layouts for image groups (1-4 columns)
- **Static site generation** - Pre-rendered pages for optimal SEO and performance

## Table of Contents

1. [Dependencies](#dependencies)
2. [Project Structure](#project-structure)
3. [Configuration Files](#configuration-files)
4. [Core Implementation Files](#core-implementation-files)
5. [MDX Content Files](#mdx-content-files)
6. [Dynamic Route Implementation](#dynamic-route-implementation)
7. [Key Features](#key-features)
8. [Step-by-Step Implementation](#step-by-step-implementation)

---

## Dependencies

### Required npm Packages

Add these dependencies to your `package.json`:

```json
{
  "dependencies": {
    "next": "15.4.1",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "next-mdx-remote": "^5.0.0",
    "gray-matter": "^4.0.3",
    "server-only": "^0.0.1"
  }
}
```

**Package Purposes:**
- `next-mdx-remote`: Renders MDX content with React Server Components support
- `gray-matter`: Parses frontmatter (YAML metadata) from MDX files
- `server-only`: Ensures certain modules only run on the server (security best practice)

### Installation Command

```bash
npm install next-mdx-remote gray-matter server-only
# or
pnpm add next-mdx-remote gray-matter server-only
```

---

## Project Structure

Create the following directory structure:

```
your-project/
├── app/
│   └── service/
│       └── [slug]/
│           ├── page.tsx          # Dynamic route for MDX pages
│           └── layout.tsx         # Optional: Custom layout
├── content/
│   └── service-highlights/        # MDX content directory
│       ├── example-post.mdx
│       ├── another-post.mdx
│       └── ...
├── lib/
│   ├── mdx.ts                     # MDX utility functions
│   └── utils.ts                   # General utilities
├── mdx-components.tsx              # Custom MDX component definitions
├── next.config.ts                 # Next.js configuration
└── package.json
```

---

## Configuration Files

### 1. TypeScript Configuration (`tsconfig.json`)

Ensure your `tsconfig.json` includes path aliases:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

This allows you to use `@/lib/mdx` instead of relative paths like `../../../lib/mdx`.

### 2. Next.js Configuration (`next.config.ts`)

The basic configuration doesn't require specific MDX settings since we're using `next-mdx-remote`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static generation for better SEO
  trailingSlash: true,

  // Other configurations...
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
```

**Note:** Unlike `@next/mdx`, `next-mdx-remote` doesn't require webpack configuration changes.

---

## Core Implementation Files

### 1. MDX Utility Module (`lib/mdx.ts`)

This module handles all MDX file operations:

```typescript
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
 * Note: Applies generateSlug() to ensure URL-safe slugs, even if filenames are already in slug format
 */
export function getAllServiceHighlightSlugs(): string[] {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    const files = fs.readdirSync(contentDirectory);
    return files
        .filter(file => file.endsWith('.mdx'))
        .map(file => file.replace(/\.mdx$/, ''))
        .map(slug => generateSlug(slug));
}

/**
 * Get a single service highlight by slug
 * Note: Expects the slug to match the filename. If filenames are already in slug format,
 * this works seamlessly. If you use non-slug filenames, ensure getAllServiceHighlightSlugs()
 * and this function use matching transformation logic.
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
 * Get all service highlights (sorted by date, published only)
 */
export function getAllServiceHighlights(): ServiceHighlight[] {
    const slugs = getAllServiceHighlightSlugs();
    return slugs
        .map(slug => getServiceHighlightBySlug(slug))
        .filter((highlight): highlight is ServiceHighlight => 
            highlight !== null && Boolean(highlight.frontmatter.published)
        )
        .sort((a, b) => 
            new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
        );
}

/**
 * Get all unique tags from all service highlights
 */
export function getServiceHighlightsTags(): string[] {
    const highlights = getAllServiceHighlights();
    const tags: string[] = [];
    highlights.forEach(highlight => tags.push(...highlight.frontmatter.tags || []));
    return [...new Set(tags)];
}
```

**Key Functions:**

1. **`generateSlug()`**: Converts titles to URL-safe slugs
2. **`getAllServiceHighlightSlugs()`**: Returns all available MDX file slugs for static generation
3. **`getServiceHighlightBySlug()`**: Fetches a specific MDX file by slug
4. **`getAllServiceHighlights()`**: Gets all published highlights, sorted by date
5. **`getServiceHighlightsTags()`**: Extracts all unique tags from highlights

---

### 2. MDX Components Configuration (`mdx-components.tsx`)

This file defines how HTML elements are rendered from MDX:

```typescript
import Image from 'next/image';
import type { ComponentPropsWithoutRef, ReactElement } from 'react';
import { Children, isValidElement } from 'react';
import { cn } from './lib/utils';

type MDXComponents = {
    [key: string]: React.ComponentType<any>;
};

// Helper to check if a child is an image element
function isImageElement(child: any): boolean {
    return isValidElement(child) && (child.type === 'img' || (child.props && (child.props as any).src));
}

// Custom image component
function MDXImage(props: ComponentPropsWithoutRef<'img'>) {
    const { src, alt, title } = props;

    if (!src) return null;

    const isExternal = src.startsWith('http://') || src.startsWith('https://');

    return (
        <Image
            src={src}
            alt={alt || ''}
            title={title}
            width={800}
            height={600}
            className="h-full w-full object-cover"
            unoptimized={isExternal}
        />
    );
}

export function getMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Custom paragraph component that detects image groups
        p: (props: ComponentPropsWithoutRef<'p'>) => {
            const children = Children.toArray(props.children);

            // Check if this paragraph contains only images
            const onlyImages = children.every(child => {
                if (typeof child === 'string' && child.trim() === '') return true;
                return isImageElement(child);
            });

            if (onlyImages) {
                const images = children.filter(isImageElement);
                const imageCount = images.length;

                if (imageCount === 0) {
                    return <p className="mb-4 leading-relaxed" {...props} />;
                }
                return (
                    <div className={cn({
                        'my-8 grid gap-4 grid-cols-2': imageCount === 2,
                        'my-8 grid gap-4 grid-cols-3': imageCount === 3,
                        'my-8 grid gap-4 grid-cols-4': imageCount >= 4,
                    })}>
                        {images.slice(0, images.length).map((img, index) => {
                            if (!isValidElement(img)) return null;

                            const imgProps = img.props as ComponentPropsWithoutRef<'img'>;
                            const { src, alt, title } = imgProps;

                            return (
                                <div key={index} className={cn("flex flex-col", {
                                    "justify-center items-center": imageCount === 1,
                                })}>
                                    <div
                                        className="overflow-hidden bg-gray-200"
                                        style={imageCount === 1 ? { width: '80%', height: '60%', objectFit: 'cover', objectPosition: 'center' } : {}}
                                    >
                                        <MDXImage src={src} alt={alt} title={title} />
                                    </div>
                                    {title && (
                                        <span className="mt-2 text-center text-sm text-gray-500">
                                            {title}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                );
            }

            // Regular paragraph
            return <p className="mb-4 leading-relaxed" {...props} />;
        },

        // Standalone image component (for images not in paragraphs)
        img: MDXImage,

        // Other custom components
        h1: (props: ComponentPropsWithoutRef<'h1'>) => <h1 className="mb-4 mt-8 text-3xl font-bold" {...props} />,
        h2: (props: ComponentPropsWithoutRef<'h2'>) => <h2 className="mb-3 mt-6 text-2xl font-bold" {...props} />,
        h3: (props: ComponentPropsWithoutRef<'h3'>) => <h3 className="mb-2 mt-4 text-xl font-semibold" {...props} />,
        ul: (props: ComponentPropsWithoutRef<'ul'>) => <ul className="mb-4 ml-6 list-disc space-y-2" {...props} />,
        ol: (props: ComponentPropsWithoutRef<'ol'>) => <ol className="mb-4 ml-6 list-decimal space-y-2" {...props} />,
        li: (props: ComponentPropsWithoutRef<'li'>) => <li className="leading-relaxed" {...props} />,
        blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
            <blockquote className="my-4 border-l-4 border-gray-300 pl-4 italic text-gray-700" {...props} />
        ),
        code: (props: ComponentPropsWithoutRef<'code'>) => (
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm" {...props} />
        ),
        pre: (props: ComponentPropsWithoutRef<'pre'>) => (
            <pre className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-white" {...props} />
        ),
        a: (props: ComponentPropsWithoutRef<'a'>) => (
            <a className="text-blue-600 underline hover:text-blue-800" {...props} />
        ),
        ...components,
    };
}
```

**Key Features:**

1. **Intelligent Image Grid Detection**: Automatically detects when images are grouped in paragraphs
2. **Responsive Layouts**: Creates 2, 3, or 4-column grids based on image count
3. **Next.js Image Optimization**: Uses Next.js `Image` component for automatic optimization
4. **Caption Support**: Displays image titles as captions below each image
5. **Custom Styling**: Applies Tailwind CSS classes to all MDX elements

---

### 3. Utility Functions (`lib/utils.ts`)

If you use Tailwind CSS, you'll need a `cn` utility for conditional classes:

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## MDX Content Files

### Directory Structure

Create a `content/service-highlights/` directory and add `.mdx` files:

```
content/
└── service-highlights/
    ├── image-grid-demo.mdx
    ├── leadership-workshop-2025.mdx
    └── transplan-hub-experience-day.mdx
```

### MDX File Format

Each MDX file should have frontmatter and content:

```mdx
---
title: "Image Grid Feature Demonstration"
date: "2025-11-29"
description: "A comprehensive demonstration of the new MDX image grid feature"
author: "Development Team"
tags: ["Demo", "Features", "Design"]
featuredImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
published: true
---

Welcome to our image grid demonstration!

## Single Image Block

When you add just one image, it displays in a single column layout:

![Team collaboration](https://images.unsplash.com/photo-1522071820081-009f0129c71c "Team Collaboration")

## Two Image Grid

Add two images together and they automatically arrange in a 2-column grid:

![Meeting](https://images.unsplash.com/photo-1557804506-669a67965ba0 "Strategic Planning")
![Discussion](https://images.unsplash.com/photo-1600880292203-757bb62b4baf "Team Discussion")

## Content Features

The system supports:
- **Bold text** and *italic text*
- [Links](https://example.com)
- Lists and more
```

**Frontmatter Fields:**

- `title` (required): Page title
- `date` (required): Publication date (ISO 8601 format)
- `description` (required): Meta description for SEO
- `author` (optional): Content author name
- `tags` (optional): Array of tags
- `featuredImage` (optional): Featured image URL
- `published` (optional): Boolean to control visibility (default: false)

---

## Dynamic Route Implementation

### Page Component (`app/service/[slug]/page.tsx`)

This is the heart of the dynamic routing system:

```typescript
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllServiceHighlightSlugs, getServiceHighlightBySlug } from '@/lib/mdx';
import { getMDXComponents } from '@/mdx-components';

interface ServiceHighlightPageProps {
    params: Promise<{ slug: string }>;
}

const mdxComponents = getMDXComponents({});

export async function generateStaticParams() {
    const slugs = getAllServiceHighlightSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceHighlightPageProps): Promise<Metadata> {
    const { slug } = await params;
    const highlight = getServiceHighlightBySlug(slug);

    if (!highlight) {
        return {
            title: 'GS/OSD | Bosch tại Việt Nam',
        };
    }

    return {
        title: `${highlight.frontmatter.title} | GS/OSD | Bosch tại Việt Nam`,
        description: highlight.frontmatter.description,
    };
}

const ServiceHighlightPage = async ({ params }: ServiceHighlightPageProps) => {
    const { slug } = await params;
    const highlight = getServiceHighlightBySlug(slug);

    if (!highlight) {
        notFound();
    }

    const { frontmatter, content } = highlight;

    return (
        <>
            <div className="my-8 flex items-start justify-between">
                <div>
                    <h1 className="text-5xl font-bold">{frontmatter.title}</h1>
                    <p className="mt-4 text-lg tracking-tight text-gray-600">
                        {frontmatter.description}
                    </p>
                </div>
                <span className="shrink-0 pt-4 text-gray-500">
                    {new Date(frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </span>
            </div>

            <div className="leading-relaxed text-gray-700">
                <div className="prose prose-gray max-w-none">
                    <MDXRemote source={content} components={mdxComponents} />
                </div>
                <div className="clear-both"></div>
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-4">
                <p className="text-gray-600">{frontmatter.author || 'GS/OSD Team'}</p>
                {frontmatter.tags && frontmatter.tags.length > 0 && (
                    <div className="flex gap-4 text-gray-500">
                        {frontmatter.tags.map((tag, i) => (
                            <span key={i}>#{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default ServiceHighlightPage;
```

**Key Functions Explained:**

1. **`generateStaticParams()`**: 
   - Tells Next.js which dynamic routes to pre-render at build time
   - Returns an array of `{ slug: string }` objects
   - Essential for Static Site Generation (SSG)

2. **`generateMetadata()`**:
   - Generates dynamic metadata (title, description) for SEO
   - Returns Next.js `Metadata` object
   - Falls back to default values if content not found

3. **Page Component**:
   - Fetches MDX content using the slug from URL params
   - Renders 404 page if content doesn't exist
   - Uses `MDXRemote` to render the MDX content with custom components
   - Displays frontmatter metadata (title, date, author, tags)

---

## Key Features

### 1. Intelligent Image Grid System

The most distinctive feature is the automatic image grid layout:

- **1 image**: Full-width centered display with 80% width
- **2 images**: 2-column grid layout
- **3 images**: 3-column grid layout
- **4+ images**: 4-column grid layout (displays only first 4)

**How it works:**

1. Custom `p` component in `mdx-components.tsx` detects paragraphs containing only images
2. Counts the number of images
3. Applies appropriate grid CSS classes based on count
4. Extracts image `title` attribute to display as captions

**Example MDX syntax:**

```mdx
![Image 1](url1 "Caption 1")
![Image 2](url2 "Caption 2")
![Image 3](url3 "Caption 3")
```

This automatically creates a 3-column grid with captions.

### 2. Static Site Generation (SSG)

- All MDX pages are pre-rendered at build time using `generateStaticParams()`
- Improves performance and SEO
- No runtime MDX compilation on the server

### 3. Server-Only Operations

- File system operations are marked with `'server-only'` import
- Ensures security by preventing client-side file access
- All MDX parsing happens on the server

### 4. Frontmatter Metadata

- Uses `gray-matter` to parse YAML frontmatter
- Supports rich metadata for SEO and display
- Published/draft functionality via `published` field

### 5. SEO Optimization

- Dynamic metadata generation for each page
- Proper HTML semantic structure
- Pre-rendered static HTML for search engines

---

## Step-by-Step Implementation

Follow these steps to implement MDX in your Next.js project:

### Step 1: Install Dependencies

```bash
npm install next-mdx-remote gray-matter server-only
# or with pnpm
pnpm add next-mdx-remote gray-matter server-only
```

### Step 2: Create Directory Structure

```bash
mkdir -p content/service-highlights
mkdir -p lib
mkdir -p app/service/[slug]
```

### Step 3: Create MDX Utility Module

Create `lib/mdx.ts` with the code shown in [Core Implementation Files](#1-mdx-utility-module-libmdxts).

### Step 4: Create MDX Components Configuration

Create `mdx-components.tsx` at project root with the code shown in [MDX Components Configuration](#2-mdx-components-configuration-mdx-componentstsx).

### Step 5: Create Utility Functions (if needed)

If using Tailwind CSS, create `lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

And install required packages:

```bash
npm install clsx tailwind-merge
```

### Step 6: Create Dynamic Route Page

Create `app/service/[slug]/page.tsx` with the code shown in [Dynamic Route Implementation](#page-component-appserviceslugpagetsx).

### Step 7: Add MDX Content Files

Create MDX files in `content/service-highlights/`:

```mdx
---
title: "My First Post"
date: "2025-01-01"
description: "This is my first MDX post"
published: true
---

## Hello World

This is my first MDX content!
```

### Step 8: Update TypeScript Configuration

Add path alias to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Step 9: Build and Test

```bash
npm run build
npm run start
```

Visit `http://localhost:3000/service/my-first-post/` to see your MDX page.

---

## Best Practices

### 1. Content Organization

```
content/
├── service-highlights/      # Blog posts or highlights
├── documentation/           # Documentation pages
└── case-studies/           # Case study pages
```

Separate different content types into different directories.

### 2. Frontmatter Conventions

Always include these required fields:
- `title`: Clear, descriptive title
- `date`: ISO 8601 format (YYYY-MM-DD)
- `description`: For SEO meta tags
- `published`: Control visibility

### 3. Image Best Practices

- Use descriptive alt text for accessibility
- Add captions via the `title` attribute
- Group related images together for automatic grid layout
- Use optimized image formats (WebP, AVIF)

### 4. File Naming

**CRITICAL:** MDX filenames MUST already be in slug format (kebab-case):
- ✅ `my-awesome-post.mdx` → `/service/my-awesome-post/`
- ❌ `MyAwesomePost.mdx` → Won't work! File lookup will fail
- ❌ `my_awesome_post.mdx` → Won't work! File lookup will fail

**Why?** The implementation has a mismatch:
- `getAllServiceHighlightSlugs()` applies `generateSlug()` to filenames
- `getServiceHighlightBySlug()` looks up files by the slug directly
- This only works if filenames are already in slug format

**Best practice:** Name your MDX files in kebab-case from the start, so `generateSlug()` returns the same value (making it a no-op).

### 5. Security

- Always use `'server-only'` for file system operations
- Validate and sanitize user input if allowing dynamic slugs
- Use `notFound()` for invalid routes

### 6. Performance

- Enable static generation with `generateStaticParams()`
- Use Next.js Image component for automatic optimization
- Consider adding loading skeletons for better UX

---

## Advanced Customization

### Adding Custom MDX Components

You can add interactive React components to your MDX:

```typescript
// mdx-components.tsx
export function getMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // ... existing components
        CustomButton: (props) => (
            <button className="bg-blue-500 px-4 py-2 text-white" {...props} />
        ),
        ...components,
    };
}
```

Use in MDX:

```mdx
<CustomButton>Click me!</CustomButton>
```

### Adding Syntax Highlighting

Install a syntax highlighter like `react-syntax-highlighter`:

```bash
npm install react-syntax-highlighter @types/react-syntax-highlighter
```

Update the `pre` and `code` components in `mdx-components.tsx`.

### Adding Table of Contents

Parse headings from MDX content and generate a TOC:

```typescript
import { remark } from 'remark';
import { visit } from 'unist-util-visit';

export function extractHeadings(markdown: string) {
    const headings: Array<{ text: string; level: number; slug: string }> = [];
    
    remark()
        .use(() => (tree) => {
            visit(tree, 'heading', (node) => {
                // Extract heading information
            });
        })
        .processSync(markdown);
    
    return headings;
}
```

---

## Troubleshooting

### Issue: "Module not found: Can't resolve 'server-only'"

**Solution:** Install the `server-only` package:
```bash
npm install server-only
```

### Issue: Images not displaying

**Possible causes:**
1. External URLs not allowed in Next.js config
2. Missing `unoptimized` prop for external images

**Solution:** Add remote patterns to `next.config.ts`:
```typescript
images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "images.unsplash.com"
        }
    ]
}
```

### Issue: "generateStaticParams is not a function"

**Solution:** Ensure you're using Next.js App Router (not Pages Router) and the function is exported:
```typescript
export async function generateStaticParams() {
    // ...
}
```

### Issue: Frontmatter not parsing

**Possible causes:**
1. Missing `---` delimiters
2. Invalid YAML syntax

**Solution:** Validate YAML syntax and ensure proper formatting:
```mdx
---
title: "Valid Title"
date: "2025-01-01"
---
```

---

## Comparison with Alternatives

### `next-mdx-remote` vs `@next/mdx`

| Feature | next-mdx-remote | @next/mdx |
|---------|----------------|-----------|
| File location | Any directory | Pages/App directory only |
| Compilation | Runtime (RSC) | Build time |
| Flexibility | High | Medium |
| Configuration | Minimal | Webpack config needed |
| Best for | CMS-like content | Static documentation |

**This implementation uses `next-mdx-remote`** for maximum flexibility and ease of use.

---

## Conclusion

This implementation provides a robust, production-ready MDX integration for Next.js with:

✅ File-based content management  
✅ Static site generation for SEO  
✅ Intelligent image grid system  
✅ Custom component styling  
✅ Server-side security  
✅ Excellent developer experience  

You can now create rich, interactive content pages using MDX files with minimal configuration and maximum flexibility.

---

## Additional Resources

- [Next.js MDX Documentation](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
- [next-mdx-remote GitHub](https://github.com/hashicorp/next-mdx-remote)
- [gray-matter Documentation](https://github.com/jonschlinkert/gray-matter)
- [MDX Official Documentation](https://mdxjs.com/)

---

**Document Version:** 1.0  
**Last Updated:** November 30, 2025  
**Based on Commit:** b43d96f

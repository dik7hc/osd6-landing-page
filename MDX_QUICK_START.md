# MDX Implementation Quick Start

**Based on commit:** `b43d96f` - feat: Mdx

This is a quick reference guide for the MDX implementation. For detailed documentation, see [MDX_IMPLEMENTATION_GUIDE.md](./MDX_IMPLEMENTATION_GUIDE.md).

## What Was Implemented

A complete MDX (Markdown + JSX) content management system for Next.js with these features:

### 🎯 Core Features
1. **File-based content management** - Write content in `.mdx` files
2. **Automatic page generation** - Dynamic routes from MDX files
3. **Static Site Generation (SSG)** - Pre-rendered at build time for SEO
4. **Intelligent image grid system** - Auto-layout for 1-4 images
5. **Frontmatter metadata** - YAML headers for page data

### 📁 Key Files Created/Modified

```
lib/mdx.ts                    # MDX file operations & utilities
mdx-components.tsx            # Custom HTML component rendering
app/service/[slug]/page.tsx   # Dynamic route for MDX pages
content/service-highlights/   # Directory for .mdx content files
```

## Quick Implementation Summary

### 1. Install Dependencies

```bash
npm install next-mdx-remote gray-matter server-only
```

### 2. Create MDX Utility (`lib/mdx.ts`)

This file handles:
- Reading MDX files from `content/` directory
- Parsing frontmatter metadata with `gray-matter`
- Generating URL slugs
- Filtering published vs draft content

Key functions:
- `getAllServiceHighlightSlugs()` - Get all MDX file slugs for SSG (applies slug transformation to filenames)
- `getServiceHighlightBySlug(slug)` - Fetch specific MDX file by slug (looks up file directly by slug)
- `getAllServiceHighlights()` - Get all published content, sorted by date

**CRITICAL:** There's a mismatch in the implementation - `getAllServiceHighlightSlugs()` applies `generateSlug()` but `getServiceHighlightBySlug()` doesn't reverse it. This ONLY works if filenames are already in slug format (kebab-case). 

**Always name MDX files in kebab-case:** `my-blog-post.mdx` not `My Blog Post.mdx` or `my_blog_post.mdx`.

### 3. Define MDX Components (`mdx-components.tsx`)

Custom React components that render HTML elements from MDX:

**Special Features:**
- **Automatic image grids**: Groups adjacent images into responsive layouts
  - 1 image → centered, full width (80%)
  - 2 images → 2-column grid
  - 3 images → 3-column grid
  - 4+ images → 4-column grid (max 4 displayed)
- **Image captions**: Shows image `title` attribute below each image
- **Next.js Image optimization**: Uses `next/image` for automatic optimization

**Styled elements:**
- Headings (h1, h2, h3) with custom sizes and spacing
- Lists (ul, ol) with proper indentation
- Code blocks with syntax highlighting styles
- Blockquotes with left border accent
- Links with hover effects

### 4. Create Dynamic Route (`app/service/[slug]/page.tsx`)

This page:
1. **Generates static paths** via `generateStaticParams()` - tells Next.js which routes to pre-render
2. **Generates metadata** via `generateMetadata()` - SEO titles and descriptions
3. **Renders MDX content** with `MDXRemote` component from `next-mdx-remote/rsc`
4. **Displays metadata** - title, date, author, tags from frontmatter

### 5. Create MDX Content Files

Example structure:

```mdx
---
title: "My Blog Post"
date: "2025-11-30"
description: "A brief description for SEO"
author: "John Doe"
tags: ["Technology", "Next.js"]
published: true
---

## Hello World

This is my content with **bold** and *italic* text.

![Image 1](url1 "Caption 1")
![Image 2](url2 "Caption 2")
```

## Architecture Highlights

### Why `next-mdx-remote`?

- ✅ Content files can live anywhere (not just in app/ directory)
- ✅ No webpack configuration needed
- ✅ Works with React Server Components (RSC)
- ✅ Runtime compilation (flexible for CMS-like systems)
- ✅ Easy to understand and maintain

### Static Site Generation Flow

```
Build Time:
1. getAllServiceHighlightSlugs() → ["post-1", "post-2", "post-3"]
2. generateStaticParams() → Next.js pre-renders all routes
3. For each route:
   - getServiceHighlightBySlug(slug) → fetch MDX file
   - Parse frontmatter with gray-matter
   - Render MDX with MDXRemote
   - Generate static HTML

Result: Fast, SEO-friendly static pages
```

### Image Grid Intelligence

The system automatically detects when images are grouped in a paragraph and applies appropriate grid layout:

```mdx
# This creates a 3-column grid:
![Img 1](url1 "Caption 1")
![Img 2](url2 "Caption 2")
![Img 3](url3 "Caption 3")

# This is regular text with inline image
Some text here ![single image](url) more text.
```

The detection works by:
1. Checking if a `<p>` contains only images (and whitespace)
2. Counting the images
3. Applying CSS grid classes based on count
4. Extracting `title` attributes for captions

## Using the Guide for Other Projects

To implement this in a new project:

1. **Read the full guide**: [MDX_IMPLEMENTATION_GUIDE.md](./MDX_IMPLEMENTATION_GUIDE.md)
2. **Copy the key files**:
   - `lib/mdx.ts` (adjust paths for your project)
   - `mdx-components.tsx` (customize styles as needed)
   - `app/service/[slug]/page.tsx` (change route as needed)
3. **Install dependencies**: `npm install next-mdx-remote gray-matter server-only`
4. **Create content directory**: `mkdir -p content/your-content-type`
5. **Add MDX files** with frontmatter
6. **Build and test**: `npm run build`

## Common Customizations

### Change Content Directory

In `lib/mdx.ts`:
```typescript
const contentDirectory = path.join(process.cwd(), 'content', 'blog'); // Change this
```

### Change Route Path

Rename directory: `app/service/[slug]/` → `app/blog/[slug]/`

### Add New Frontmatter Fields

Update interface in `lib/mdx.ts`:
```typescript
export interface ServiceHighlight {
    frontmatter: {
        // ... existing fields
        category?: string;      // Add new field
        readingTime?: number;   // Add new field
    };
}
```

### Customize Component Styles

Edit `mdx-components.tsx` to change Tailwind classes:
```typescript
h1: (props) => <h1 className="text-6xl font-black text-blue-600" {...props} />,
```

## Verification

After implementation, verify:

```bash
# 1. Build succeeds
npm run build

# 2. Check for ● (SSG) marker in build output
#    Should show your dynamic routes with SSG indicator

# 3. Test routes
npm run start
# Visit: http://localhost:3000/service/your-mdx-file-name

# 4. Check page source (View > Page Source)
#    Should see pre-rendered HTML content (not just JavaScript)
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Module 'server-only' not found | `npm install server-only` |
| Images not displaying | Add remote patterns to `next.config.ts` |
| generateStaticParams not working | Ensure it's exported and returns `{ slug: string }[]` |
| Frontmatter not parsing | Check YAML syntax, ensure `---` delimiters |
| 404 on MDX pages | Verify filename matches slug, check `published: true` |

## Security Considerations

✅ **Implemented:**
- `'server-only'` import prevents client-side file access
- Input validation in `getServiceHighlightBySlug()`
- `notFound()` for invalid routes
- Next.js Image component for safe image rendering

## Performance Optimizations

✅ **Implemented:**
- Static Site Generation (SSG) for instant page loads
- Next.js Image component for automatic optimization
- Filtered content (only published items)
- Build-time compilation (not runtime)

## Next Steps for Enhancement

Some ideas to extend the implementation:

1. **Search functionality** - Add search across MDX content
2. **Pagination** - For large content collections
3. **Categories/filtering** - Filter by tags or categories
4. **Related posts** - Show related content
5. **Table of contents** - Auto-generate from headings
6. **Syntax highlighting** - Add code syntax highlighting
7. **Reading time** - Calculate estimated reading time
8. **RSS feed** - Generate RSS from MDX content

## Resources

- [Full Implementation Guide](./MDX_IMPLEMENTATION_GUIDE.md) - Detailed documentation
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) - Official docs
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parser
- [MDX Official](https://mdxjs.com/) - MDX specification
- [Next.js MDX](https://nextjs.org/docs/app/building-your-application/configuring/mdx) - Next.js docs

---

**Created:** November 30, 2025  
**Commit Reference:** b43d96f  
**Author:** Documentation of existing implementation

# MDX Implementation Prompt Template

Use this as a prompt when implementing similar MDX functionality in other Next.js projects.

---

## Prompt for AI/Developer

```
I need to implement MDX (Markdown + JSX) support in my Next.js 15+ project with the following specifications:

### Core Requirements

1. **File-Based Content Management**
   - Store MDX files in a `content/[content-type]/` directory
   - Each MDX file should have YAML frontmatter with metadata
   - Support for draft/published status via `published` field

2. **Dynamic Routing with Static Generation**
   - Create dynamic route at `app/[route]/[slug]/page.tsx`
   - Use `generateStaticParams()` for Static Site Generation (SSG)
   - Use `generateMetadata()` for dynamic SEO tags
   - Pre-render all pages at build time

3. **Frontmatter Schema**
   Required fields:
   - `title`: string (page title)
   - `date`: string (ISO 8601 format, e.g., "2025-11-30")
   - `description`: string (meta description for SEO)
   - `published`: boolean (control visibility)
   
   Optional fields:
   - `author`: string
   - `tags`: string[] (array of tags)
   - `featuredImage`: string (URL)

4. **MDX Parsing and Rendering**
   - Use `next-mdx-remote` (v5+) for MDX rendering with React Server Components
   - Use `gray-matter` for frontmatter parsing
   - Use `server-only` to ensure file system operations stay server-side
   - All file operations should be marked with `'server-only'` import

5. **Custom Component Rendering**
   Create custom React components for these HTML elements:
   - `h1`, `h2`, `h3` - Styled headings with proper spacing
   - `p` - Paragraphs with special image detection (see below)
   - `img` - Use Next.js Image component for optimization
   - `ul`, `ol`, `li` - Lists with proper styling
   - `code`, `pre` - Code blocks with syntax highlighting styles
   - `blockquote` - Quoted text with left border accent
   - `a` - Links with hover effects

6. **Intelligent Image Grid System** ⭐ KEY FEATURE
   
   Create a custom paragraph component that:
   - Detects when a paragraph contains ONLY images (and whitespace)
   - Counts the number of images
   - Applies responsive grid layouts:
     * **1 image**: Centered, 80% width, single column
     * **2 images**: 2-column grid with gap
     * **3 images**: 3-column grid with gap
     * **4+ images**: 4-column grid with gap (display max 4 images)
   - Extracts image `title` attribute and displays it as a caption below each image
   - Uses Next.js Image component for all images
   - Handles external URLs with `unoptimized` prop

   Example MDX that triggers grid:
   ```mdx
   ![Image 1](url1 "Caption 1")
   ![Image 2](url2 "Caption 2")
   ![Image 3](url3 "Caption 3")
   ```
   This should automatically render as a 3-column grid.

7. **Utility Functions Required**
   
   Create `lib/mdx.ts` with these functions:
   
   a. `generateSlug(title: string): string`
      - Converts titles to URL-safe slugs
      - Lowercase, remove special chars, replace spaces with hyphens
   
   b. `getAllContentSlugs(): string[]`
      - Returns array of all MDX file slugs
      - Used by `generateStaticParams()`
      - **IMPORTANT:** If applying slug transformation to filenames, ensure file lookup also uses same transformation
   
   c. `getContentBySlug(slug: string): ContentItem | null`
      - Reads specific MDX file by slug
      - Parses frontmatter with gray-matter
      - Returns object with `{ slug, frontmatter, content }`
      - Returns null if file doesn't exist
      - **IMPORTANT:** File lookup method must be consistent with slug generation in getAllContentSlugs()
   
   d. `getAllContent(): ContentItem[]`
      - Gets all content items
      - Filters by `published: true`
      - Sorts by date (newest first)
      - Returns array of content items
   
   e. `getContentTags(): string[]`
      - Extracts all unique tags from all content
      - Returns deduplicated array

8. **TypeScript Interface**
   ```typescript
   export interface ContentItem {
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
   ```

9. **Project Structure**
   ```
   your-project/
   ├── app/
   │   └── [your-route]/
   │       └── [slug]/
   │           ├── page.tsx          # Dynamic route page
   │           └── layout.tsx         # Optional custom layout
   ├── content/
   │   └── [content-type]/           # MDX files directory
   │       ├── post-1.mdx
   │       ├── post-2.mdx
   │       └── ...
   ├── lib/
   │   ├── mdx.ts                    # MDX utilities
   │   └── utils.ts                  # General utilities (cn function)
   ├── mdx-components.tsx             # Custom MDX components
   ├── next.config.ts
   ├── tsconfig.json
   └── package.json
   ```

10. **Dependencies**
    Add these to package.json:
    ```json
    {
      "dependencies": {
        "next": "^15.4.1",
        "react": "^19.1.0",
        "react-dom": "^19.1.0",
        "next-mdx-remote": "^5.0.0",
        "gray-matter": "^4.0.3",
        "server-only": "^0.0.1"
      }
    }
    ```

11. **Page Component Implementation**
    The dynamic route page should:
    - Export `generateStaticParams()` for SSG
    - Export `generateMetadata()` for SEO
    - Be an async Server Component
    - Fetch content using `getContentBySlug()`
    - Call `notFound()` if content doesn't exist
    - Render frontmatter (title, description, date, author, tags)
    - Use `<MDXRemote>` from `next-mdx-remote/rsc` to render content
    - Apply custom components from `getMDXComponents()`

12. **Security Best Practices**
    - Use `'server-only'` import in lib/mdx.ts
    - Never expose file system paths to client
    - Validate slugs before file operations
    - Use `notFound()` for invalid routes
    - All file operations happen at build time only

13. **Styling**
    - Use Tailwind CSS for styling (optional but recommended)
    - Provide a `cn()` utility function for conditional classes:
      ```typescript
      import { clsx, type ClassValue } from "clsx"
      import { twMerge } from "tailwind-merge"
      
      export function cn(...inputs: ClassValue[]) {
        return twMerge(clsx(inputs))
      }
      ```

14. **TypeScript Configuration**
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

### Expected Output

Please provide:

1. **Complete code for all required files:**
   - `lib/mdx.ts` with all utility functions
   - `mdx-components.tsx` with custom component definitions
   - `app/[route]/[slug]/page.tsx` with dynamic route implementation
   - `lib/utils.ts` with cn function (if using Tailwind)

2. **Example MDX file** showing proper frontmatter format

3. **Step-by-step setup instructions:**
   - Install dependencies command
   - Create directory structure
   - Configuration changes needed
   - How to add first content file
   - How to test the build

4. **Verification steps** to ensure it works:
   - Build command to check SSG
   - What to look for in build output
   - How to test routes

### Critical Implementation Notes

- **File naming:** MDX filenames MUST be in kebab-case (slug format) to match URL slugs. This is REQUIRED for the implementation to work correctly.
- **Slug consistency:** Ensure `getAllContentSlugs()` and `getContentBySlug()` use consistent slug transformation. If one applies slug generation, the other must reverse it, OR files must be pre-named in slug format.
- **Image grid detection:** The custom `<p>` component must check if children are ONLY images
- **Server-only:** File system operations must never run on client
- **Static generation:** All routes must be pre-rendered at build time
- **Metadata:** Each page needs proper SEO metadata from frontmatter

### Nice-to-Have Features (Optional)

- Reading time calculation
- Table of contents generation
- Search functionality
- Pagination for content lists
- Related posts suggestions
- RSS feed generation

---

### Example Usage in MDX

After implementation, this MDX file:

```mdx
---
title: "My First Post"
date: "2025-11-30"
description: "This is an example post"
author: "John Doe"
tags: ["Tutorial", "Next.js"]
published: true
---

## Introduction

This is my first post using MDX!

## Image Grid Demo

Here are three images that will automatically arrange in a 3-column grid:

![Team photo](https://example.com/img1.jpg "Our amazing team")
![Office space](https://example.com/img2.jpg "Our modern office")
![Product launch](https://example.com/img3.jpg "Latest product")

## Code Example

```javascript
console.log("Hello, MDX!");
```

Check out my [website](https://example.com) for more!
```

Should render as a beautiful, styled page with:
- Proper heading hierarchy
- 3-column responsive image grid with captions
- Styled code block
- Styled link with hover effect
- All from frontmatter: title, description, date, author, tags

---

Please implement this system with production-quality code, proper error handling, and clear comments explaining key functionality.
```

---

## Using This Prompt

### With AI Assistants (Claude, ChatGPT, etc.)
1. Copy the prompt above
2. Paste into your AI assistant
3. Provide additional context about your specific project if needed
4. Review and test the generated code

### With Development Teams
1. Use this as a requirements specification
2. Refer to the detailed documentation in this repository for implementation examples
3. Follow the architecture patterns shown in MDX_ARCHITECTURE.md

### For Similar Projects
Customize the prompt by:
- Changing route names (e.g., `/blog/[slug]/` instead of `/service/[slug]/`)
- Adjusting frontmatter schema for your needs
- Modifying styling to match your design system
- Adding/removing optional features

---

## Quick Customizations

### Change Route Path
Replace `[your-route]` with your desired path:
- `/blog/[slug]/` for a blog
- `/docs/[slug]/` for documentation
- `/posts/[slug]/` for posts

### Change Content Type
Replace `[content-type]` with your content directory name:
- `content/blog/` for blog posts
- `content/documentation/` for docs
- `content/articles/` for articles

### Add Frontmatter Fields
Extend the schema with your custom fields:
```typescript
frontmatter: {
    // ... existing fields
    category?: string;
    readingTime?: number;
    coverImage?: string;
}
```

### Customize Image Grid Columns
Modify the grid logic in mdx-components.tsx:
```typescript
{
    'grid-cols-2': imageCount === 2,
    'grid-cols-3': imageCount === 3,
    'grid-cols-4': imageCount === 4,
    'grid-cols-5': imageCount >= 5,  // Add 5-column support
}
```

---

## Success Criteria

After implementation, you should be able to:

✅ Create an MDX file in `content/` directory  
✅ Run `npm run build` and see SSG indicators (●)  
✅ Visit the dynamic route and see rendered content  
✅ View page source and see pre-rendered HTML  
✅ Add multiple images in MDX and see automatic grid layout  
✅ See captions below images from title attributes  
✅ See styled headings, lists, code blocks, etc.  
✅ Verify SEO metadata in `<head>`  

---

**Created:** November 30, 2025  
**Based on:** Commit b43d96f implementation  
**Reference:** See other MDX_*.md files for detailed examples

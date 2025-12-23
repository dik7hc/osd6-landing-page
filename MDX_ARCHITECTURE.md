# MDX Implementation Architecture

This document provides a visual overview of how the MDX implementation works in this Next.js project.

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Build Time (SSG)                            │
└─────────────────────────────────────────────────────────────────────┘

                              next build
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │  generateStaticParams() │
                    │  in app/service/[slug]/ │
                    └────────────┬────────────┘
                                 │
                                 │ calls
                                 ▼
                    ┌─────────────────────────────┐
                    │ getAllServiceHighlightSlugs()│
                    │      in lib/mdx.ts          │
                    └────────────┬────────────────┘
                                 │
                                 │ reads
                                 ▼
                    ┌────────────────────────────────┐
                    │   content/service-highlights/  │
                    │   ├── post-1.mdx              │
                    │   ├── post-2.mdx              │
                    │   └── post-3.mdx              │
                    └────────────┬───────────────────┘
                                 │
                                 │ returns slugs
                                 │ ["post-1", "post-2", "post-3"]
                                 ▼
        ┌────────────────────────────────────────────────┐
        │   Next.js pre-renders routes for each slug     │
        │   /service/post-1/                             │
        │   /service/post-2/                             │
        │   /service/post-3/                             │
        └────────────────────┬───────────────────────────┘
                             │
                             │ For each route:
                             ▼
        ┌─────────────────────────────────────────────────┐
        │  getServiceHighlightBySlug(slug)                │
        │  1. Read .mdx file                              │
        │  2. Parse with gray-matter                      │
        │  3. Extract frontmatter + content               │
        └────────────────────┬────────────────────────────┘
                             │
                             ▼
        ┌─────────────────────────────────────────────────┐
        │  Page component renders:                        │
        │  - Frontmatter metadata (title, date, etc.)     │
        │  - MDXRemote component with content             │
        └────────────────────┬────────────────────────────┘
                             │
                             ▼
        ┌─────────────────────────────────────────────────┐
        │  MDXRemote + mdx-components.tsx                 │
        │  - Converts markdown to HTML                    │
        │  - Applies custom components                    │
        │  - Detects image groups                         │
        │  - Applies grid layouts                         │
        └────────────────────┬────────────────────────────┘
                             │
                             ▼
        ┌─────────────────────────────────────────────────┐
        │  Static HTML files generated in .next/          │
        │  ✅ SEO-friendly                                │
        │  ✅ Fast page loads                             │
        │  ✅ No runtime MDX compilation                  │
        └─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                         Runtime (Production)                        │
└─────────────────────────────────────────────────────────────────────┘

        User visits /service/post-1/
                 │
                 ▼
        ┌────────────────────────────┐
        │  Next.js serves             │
        │  pre-rendered static HTML   │
        │  (instant page load)        │
        └────────────────────────────┘
```

## Data Flow Diagram

```
┌──────────────┐
│ MDX Content  │
│   Files      │
└──────┬───────┘
       │
       │ 1. Read file system
       ▼
┌──────────────────────┐
│  lib/mdx.ts          │
│  ┌────────────────┐  │
│  │ File Operations│  │
│  │ - Read MDX     │  │
│  │ - Parse YAML   │  │
│  │ - Generate slug│  │
│  └────────────────┘  │
└──────┬───────────────┘
       │
       │ 2. Return { frontmatter, content }
       ▼
┌────────────────────────────┐
│ app/service/[slug]/page.tsx│
│  ┌──────────────────────┐  │
│  │ Server Component     │  │
│  │ - Fetch data         │  │
│  │ - Render layout      │  │
│  └──────────────────────┘  │
└──────┬─────────────────────┘
       │
       │ 3. Pass content to MDXRemote
       ▼
┌────────────────────────────┐
│   next-mdx-remote/rsc      │
│   (MDXRemote component)    │
│  ┌──────────────────────┐  │
│  │ Parse & compile MDX  │  │
│  │ to React components  │  │
│  └──────────────────────┘  │
└──────┬─────────────────────┘
       │
       │ 4. Apply custom components
       ▼
┌──────────────────────────────┐
│   mdx-components.tsx         │
│  ┌────────────────────────┐  │
│  │ Custom Components:     │  │
│  │ - <h1> → styled h1     │  │
│  │ - <p> → detect images  │  │
│  │ - <img> → Next Image   │  │
│  │ - <code> → syntax      │  │
│  └────────────────────────┘  │
└──────┬───────────────────────┘
       │
       │ 5. Render final HTML
       ▼
┌──────────────────────────────┐
│   Browser renders page       │
│   with styled content        │
└──────────────────────────────┘
```

## Image Grid Detection Flow

```
MDX Content:
![Img 1](url1)
![Img 2](url2)
![Img 3](url3)
       │
       │ Parsed as:
       ▼
<p>
  <img src="url1" />
  <img src="url2" />
  <img src="url3" />
</p>
       │
       │ Custom <p> component in mdx-components.tsx
       ▼
┌─────────────────────────────────┐
│ Check children of paragraph     │
│ Are all children images?        │
└────────┬───────────────────┬────┘
         │ Yes               │ No
         ▼                   ▼
    ┌────────────┐      ┌────────────┐
    │ Count imgs │      │ Regular <p>│
    └─────┬──────┘      └────────────┘
          │
          ▼
    ┌──────────────────────┐
    │ imageCount = 3       │
    └──────┬───────────────┘
           │
           ▼
    Apply grid CSS:
    ┌─────────────────────────┐
    │ 1 img  → centered, 80%  │
    │ 2 imgs → grid-cols-2    │
    │ 3 imgs → grid-cols-3    │
    │ 4+ imgs→ grid-cols-4    │
    └──────┬──────────────────┘
           │
           ▼
    Render:
    <div class="grid grid-cols-3 gap-4">
      <div>
        <NextImage src="url1" />
        <span>Caption 1</span>
      </div>
      <div>
        <NextImage src="url2" />
        <span>Caption 2</span>
      </div>
      <div>
        <NextImage src="url3" />
        <span>Caption 3</span>
      </div>
    </div>
```

## File Dependency Graph

```
app/service/[slug]/page.tsx
    │
    ├─→ next-mdx-remote/rsc (MDXRemote)
    │
    ├─→ lib/mdx.ts
    │     ├─→ fs (Node.js file system)
    │     ├─→ gray-matter (frontmatter parser)
    │     └─→ server-only (security)
    │
    └─→ mdx-components.tsx
          ├─→ next/image (Image component)
          ├─→ react (Children, isValidElement)
          └─→ lib/utils.ts (cn function)
```

## Component Hierarchy

```
ServiceHighlightPage (Server Component)
│
├─ Header Section
│  ├─ Title (from frontmatter.title)
│  ├─ Description (from frontmatter.description)
│  └─ Date (from frontmatter.date)
│
├─ MDXRemote Component
│  │
│  └─ Rendered MDX Content
│     ├─ Custom <h1>, <h2>, <h3>
│     ├─ Custom <p> (with image detection)
│     ├─ Custom <img> (Next.js Image)
│     ├─ Custom <ul>, <ol>, <li>
│     ├─ Custom <code>, <pre>
│     ├─ Custom <blockquote>
│     └─ Custom <a>
│
└─ Footer Section
   ├─ Author (from frontmatter.author)
   └─ Tags (from frontmatter.tags)
```

## Key Concepts Illustrated

### 1. Server-Only Operations

```
┌────────────────────────────────────┐
│        Server (Build Time)         │
│                                    │
│  ┌──────────────────────────┐     │
│  │   'server-only' import   │     │
│  │                          │     │
│  │   lib/mdx.ts functions   │     │
│  │   - fs.readFileSync()    │     │
│  │   - fs.readdirSync()     │     │
│  │   - path operations      │     │
│  └──────────────────────────┘     │
│                                    │
│         ⚠️ NEVER sent to client   │
└────────────────────────────────────┘

                 │
                 │ Outputs
                 ▼

┌────────────────────────────────────┐
│     Client (Browser)               │
│                                    │
│   ✅ Static HTML                   │
│   ✅ Styled components             │
│   ✅ Images (optimized)            │
│   ❌ No file system code           │
│   ❌ No sensitive operations       │
└────────────────────────────────────┘
```

### 2. Frontmatter Processing

```
MDX File:
┌─────────────────────────────────────┐
│ ---                                 │
│ title: "My Post"                    │
│ date: "2025-11-30"                  │
│ description: "Description here"     │
│ published: true                     │
│ ---                                 │
│                                     │
│ ## Content Here                     │
│                                     │
│ This is the actual content.         │
└─────────────────────────────────────┘
         │
         │ gray-matter parses
         ▼
┌─────────────────────────────────────┐
│ Output Object:                      │
│                                     │
│ {                                   │
│   data: {                           │
│     title: "My Post",               │
│     date: "2025-11-30",             │
│     description: "Description",     │
│     published: true                 │
│   },                                │
│   content: "## Content Here\n\n..." │
│ }                                   │
└─────────────────────────────────────┘
         │
         │ Used by page
         ▼
┌─────────────────────────────────────┐
│ Rendered Page:                      │
│                                     │
│ <h1>{data.title}</h1>               │
│ <p>{data.description}</p>           │
│ <MDXRemote source={content} />      │
└─────────────────────────────────────┘
```

### 3. Static Site Generation Process

```
Developer runs: npm run build
         │
         ▼
┌─────────────────────────────────────────────┐
│ Next.js Build Process                       │
│                                             │
│ Step 1: Discover routes                     │
│   → Call generateStaticParams()             │
│   → Get ["post-1", "post-2", "post-3"]      │
│                                             │
│ Step 2: Pre-render each route               │
│   For /service/post-1/:                     │
│   ├─ Call page component                    │
│   ├─ Fetch MDX content                      │
│   ├─ Render with React                      │
│   ├─ Generate HTML                          │
│   └─ Save to .next/server/app/service/      │
│                                             │
│ Step 3: Generate metadata                   │
│   → Call generateMetadata()                 │
│   → Create meta tags                        │
│                                             │
│ Step 4: Optimize assets                     │
│   → Optimize images                         │
│   → Generate CSS bundles                    │
│   → Create JS chunks                        │
└─────────────────────────────────────────────┘
         │
         ▼
   Production Build Ready
   ✅ Static HTML files
   ✅ Optimized assets
   ✅ Fast page loads
```

## Performance Benefits

```
Traditional Dynamic Rendering:
┌──────────────────────────────────────┐
│ User Request                         │
└────────────┬─────────────────────────┘
             │
             ▼
┌──────────────────────────────────────┐
│ Server reads MDX file                │ ⏱️ 10-50ms
└────────────┬─────────────────────────┘
             │
             ▼
┌──────────────────────────────────────┐
│ Parse frontmatter                    │ ⏱️ 5-20ms
└────────────┬─────────────────────────┘
             │
             ▼
┌──────────────────────────────────────┐
│ Compile MDX to React                 │ ⏱️ 50-200ms
└────────────┬─────────────────────────┘
             │
             ▼
┌──────────────────────────────────────┐
│ Render to HTML                       │ ⏱️ 20-100ms
└────────────┬─────────────────────────┘
             │
             ▼
        Response sent               Total: 85-370ms

─────────────────────────────────────────────

Static Site Generation (This Implementation):
┌──────────────────────────────────────┐
│ User Request                         │
└────────────┬─────────────────────────┘
             │
             ▼
┌──────────────────────────────────────┐
│ Serve pre-rendered HTML              │ ⏱️ 1-10ms
└────────────┬─────────────────────────┘
             │
             ▼
        Response sent               Total: 1-10ms

✅ 8x to 370x faster!
✅ Better SEO (HTML ready immediately)
✅ Lower server load
```

## Security Model

```
┌─────────────────────────────────────────────┐
│              Build Environment              │
│              (Trusted)                      │
│                                             │
│  Content authors create .mdx files          │
│  ├─ Stored in version control (Git)        │
│  ├─ Code reviewed before merge             │
│  └─ Build-time processing only             │
└─────────────────────────────────────────────┘
                    │
                    │ During build
                    ▼
┌─────────────────────────────────────────────┐
│        Server (Build Time Only)             │
│                                             │
│  'server-only' import ensures:              │
│  ├─ File system access only on server      │
│  ├─ No exposure of file paths to client    │
│  └─ Sensitive operations stay server-side  │
└─────────────────────────────────────────────┘
                    │
                    │ Output
                    ▼
┌─────────────────────────────────────────────┐
│          Client (Browser)                   │
│          (Untrusted)                        │
│                                             │
│  Receives only:                             │
│  ├─ Static HTML (safe)                     │
│  ├─ Styled components (safe)               │
│  ├─ Optimized images (safe)                │
│  └─ NO file system code                    │
│  └─ NO server operations                   │
└─────────────────────────────────────────────┘

✅ Secure by design
✅ No runtime file system access
✅ Content is vetted before deployment
```

## Comparison with Alternatives

### next-mdx-remote vs @next/mdx

```
next-mdx-remote (This Implementation)
├─ MDX files can live anywhere
├─ No webpack configuration needed
├─ Runtime compilation with RSC
├─ Maximum flexibility
└─ Perfect for CMS-like systems

@next/mdx (Alternative)
├─ MDX files must be in app/ or pages/
├─ Requires next.config.js changes
├─ Build-time compilation only
├─ Less flexible
└─ Better for static documentation
```

## Summary

This architecture provides:

✅ **Performance** - Static generation for instant loads  
✅ **Flexibility** - Content files can live anywhere  
✅ **Security** - Server-only file operations  
✅ **SEO** - Pre-rendered HTML for search engines  
✅ **DX** - Simple, maintainable code  
✅ **UX** - Intelligent image grids and styling  

---

**Created:** November 30, 2025  
**Reference:** Commit b43d96f

# Maintainer Guide

This guide contains information for blog maintainers about managing content and site configuration.

## Table of Contents

- [Adding a New Blog Post](#adding-a-new-blog-post)
- [Organizing Blog Posts](#organizing-blog-posts)
- [Adding a Project](#adding-a-project)
- [Customizing Site Configuration](#customizing-site-configuration)
- [Using Custom Components in MDX](#using-custom-components-in-mdx)

## Adding a New Blog Post

1. Create a new MDX file in `data/blog/`:
   ```bash
   touch data/blog/my-new-post.mdx
   ```

2. Add frontmatter and content:
   ```mdx
   ---
   title: 'My New Post'
   date: '2026-02-13'
   tags: ['nextjs', 'tutorial']
   draft: false
   summary: 'A brief summary of the post'
   authors: ['default']
   ---

   # Your content here

   This is the post content written in MDX (Markdown + JSX).
   ```

3. The post will automatically appear in the blog listing.

### Frontmatter Fields

**Required:**
- `title` - Post title
- `date` - Publication date (YYYY-MM-DD)

**Optional:**
- `tags` - Array of tags for categorization
- `draft` - Set to `true` to hide from production
- `summary` - Brief description for SEO and listings
- `authors` - Array of author IDs (must match files in `data/authors/`)
- `layout` - Layout component to use (defaults to PostLayout)
- `canonicalUrl` - Canonical URL if cross-posted
- `images` - Array of image URLs for OpenGraph

## Organizing Blog Posts

You can organize posts in subdirectories:

```
data/blog/
├── my-post.mdx
├── kubernetes/
│   └── k8s-tutorial.mdx
└── ceph/
    └── storage-guide.mdx
```

## Adding a Project

Edit `src/lib/projects.ts` to add project information:

```typescript
const projectsData = [
  {
    title: 'Project Name',
    description: 'Project description',
    imgSrc: '/static/images/project.png',
    href: 'https://github.com/user/project',
  },
]
```

## Customizing Site Configuration

Edit `src/lib/siteMetadata.ts` to modify:

- Site title and description
- Author information
- Navigation links
- Social media links
- Analytics providers (Umami, Google Analytics, etc.)
- Comment system (Giscus configuration)
- Newsletter integration
- Search provider

## Using Custom Components in MDX

To use custom components in blog posts:

1. **Create the component** in `src/components/`:
   ```tsx
   // src/components/MyComponent.tsx
   'use client'
   
   export default function MyComponent({ children }) {
     return <div className="custom-style">{children}</div>
   }
   ```

2. **Register it** in `src/components/MDXComponents.tsx`:
   ```tsx
   import MyComponent from './MyComponent'
   
   export const components = {
     MyComponent,
     // ... other components
   }
   ```

3. **Use it** in your MDX files:
   ```mdx
   <MyComponent>
     Custom content here
   </MyComponent>
   ```

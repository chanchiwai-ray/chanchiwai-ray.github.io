# Contributing to Ray's Blog

Thank you for your interest in contributing to this blog! This document provides guidelines and instructions for building, developing, and contributing to this project.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Writing Content](#writing-content)
- [Code Style](#code-style)
- [Submitting Changes](#submitting-changes)

## Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Git**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chanchiwai-ray/chanchiwai-ray.github.io.git
   cd chanchiwai-ray.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (optional):
   ```bash
   cp .env.example .env.local
   ```
   Configure analytics, comments, and other integrations as needed.

### Development Commands

- **Start development server:**
  ```bash
  npm run dev
  ```
  Opens at `http://localhost:3000` with hot-reload enabled.

- **Build for production:**
  ```bash
  npm run build
  ```
  Generates optimized production build in `.next/` directory.

- **Start production server:**
  ```bash
  npm run serve
  ```
  Runs the production build locally (must run `npm run build` first).

- **Lint code:**
  ```bash
  npm run lint
  ```
  Checks for code quality issues.

- **Fix linting issues:**
  ```bash
  npm run lint:fix
  ```
  Automatically fixes linting problems.

### Static Export (GitHub Pages)

To generate a static export for GitHub Pages:

```bash
EXPORT=1 UNOPTIMIZED=1 npm run build
```

This creates an `out/` directory with static HTML files.

## Project Structure

```
website/
├── data/                      # Content and configuration
│   ├── blog/                  # Blog posts (MDX files)
│   ├── authors/               # Author profiles
│   ├── projects.ts            # Projects data
│   ├── references-data.bib    # Bibliography
│   └── siteMetadata.js        # Site configuration
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── blog/              # Blog routes
│   │   ├── tags/              # Tag pages
│   │   ├── projects/          # Projects page
│   │   ├── about/             # About page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   └── ui/                    # Reusable UI components
│       ├── components/        # React components
│       ├── layouts/           # Page layouts
│       └── css/               # Stylesheets
├── public/
│   └── static/                # Static assets (images, favicons)
├── contentlayer.config.ts     # Content processing config
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS config
└── tsconfig.json              # TypeScript config
```

## Development Workflow

### Adding a New Blog Post

1. Create a new MDX file in `data/blog/`:
   ```bash
   touch data/blog/my-new-post.mdx
   ```

2. Add frontmatter and content:
   ```mdx
   ---
   title: 'My New Post'
   date: '2025-11-30'
   tags: ['nextjs', 'tutorial']
   draft: false
   summary: 'A brief summary of the post'
   authors: ['default']
   ---

   # Your content here

   This is the post content written in MDX (Markdown + JSX).
   ```

3. The post will automatically appear in the blog listing.

### Nested Blog Posts

You can organize posts in subdirectories:
```
data/blog/
├── my-post.mdx
├── kubernetes/
│   └── k8s-tutorial.mdx
└── ceph/
    └── storage-guide.mdx
```

### Adding a Project

Edit `data/projects.ts` to add project information:
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

### Customizing Site Configuration

Edit `data/siteMetadata.js` to modify:
- Site title and description
- Navigation links
- Analytics providers (Umami, Google Analytics, etc.)
- Comment system (Giscus, Utterances, Disqus)
- Newsletter integration
- Search provider

### Modifying Styles

- **Global styles:** `src/ui/css/tailwind.css`
- **Code highlighting:** `src/ui/css/prism.css`
- **Tailwind config:** `tailwind.config.js`

### Creating Custom Components

Add React components to `src/ui/components/` and use them in MDX:

```tsx
// src/ui/components/MyComponent.tsx
export default function MyComponent({ children }) {
  return <div className="my-custom-class">{children}</div>
}
```

Register in `src/ui/components/MDXComponents.tsx`:
```tsx
import MyComponent from './MyComponent'

export const components = {
  MyComponent,
  // ... other components
}
```

Use in MDX files:
```mdx
<MyComponent>
  Custom content here
</MyComponent>
```

## Writing Content

### Frontmatter Fields

Required:
- `title` - Post title
- `date` - Publication date (YYYY-MM-DD)

Optional:
- `tags` - Array of tags
- `draft` - Set to `true` to hide from production
- `summary` - Brief description
- `authors` - Array of author IDs (must match files in `data/authors/`)
- `layout` - Layout component to use
- `canonicalUrl` - Canonical URL for SEO
- `images` - Array of image URLs

### MDX Features

- **Markdown:** Standard markdown syntax
- **JSX:** Use React components inline
- **Math:** KaTeX support with `$inline$` or `$$block$$`
- **Code blocks:** Syntax highlighting with language tags
- **Citations:** Bibliography support via `rehype-citation`
- **GitHub Alerts:** Use `> [!NOTE]`, `> [!WARNING]`, etc.

### Code Blocks

````mdx
```javascript title="example.js" {1,3-5}
// Line 1 is highlighted
const example = true
// Lines 3-5 are highlighted
function demo() {
  return 'Hello'
}
```
````

## Code Style

### Linting

This project uses:
- **ESLint** for code quality
- **Prettier** for formatting
- **TypeScript** for type safety

Run checks before committing:
```bash
npm run lint
```

Auto-fix issues:
```bash
npm run lint:fix
```

### Git Hooks

Husky is configured to run checks on commit. Ensure your code passes linting before committing.

## Submitting Changes

### Branch Naming

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `chore/` - Maintenance tasks

### Commit Messages

Follow conventional commits:
```
feat: add new blog post about Kubernetes
fix: resolve navigation menu issue
docs: update contributing guide
style: format code with prettier
```

### Pull Request Process

1. Create a new branch from `dev`:
   ```bash
   git checkout -b feature/my-new-feature dev
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. Push to your fork:
   ```bash
   git push origin feature/my-new-feature
   ```

4. Open a Pull Request against the `dev` branch

5. Ensure CI checks pass

6. Wait for review and address feedback

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Content:** Contentlayer (MDX processing)
- **UI Library:** Headless UI
- **Search:** Kbar
- **Comments:** Giscus
- **Analytics:** Umami
- **Deployment:** GitHub Pages

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDX](https://mdxjs.com/)
- [Contentlayer](https://contentlayer.dev/)
- [Pliny](https://github.com/timlrx/pliny) - Utility library for this blog

## Questions?

If you have questions or need help, please:
1. Check existing issues
2. Review the documentation
3. Open a new issue with details

Thank you for contributing! 🎉

# Contributing to Ray's Blog

Thank you for your interest in contributing to Ray's Blog! We welcome contributions of all kinds, from code improvements to documentation updates. This guide will help you get started.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Writing Content](#writing-content)
- [Coding Standards](#coding-standards)
- [Pull Request Guidelines](#pull-request-guidelines)

**What We Welcome:**

- 🐛 **Bug Reports** - Report issues or unexpected behavior
- ✨ **Features** - Suggest or implement new functionality
- 📚 **Documentation** - Improve guides and instructions
- 💻 **Code** - Fix bugs, add features, or improve performance
- 🎨 **UI/UX** - Enhance design and user experience

**Please Note:**

- Security vulnerabilities should be reported via email, not GitHub Issues

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
   npm install --legacy-peer-deps
   ```

   > **Note:** The `--legacy-peer-deps` flag is required due to React 19 compatibility with some dependencies (kbar, next-themes).

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

  Runs ESLint to check for code quality issues. TypeScript and React best practices are enforced.

- **Fix linting issues:**
  ```bash
  npm run lint:fix
  ```
  Automatically fixes linting problems where possible.

### Static Export (GitHub Pages)

To generate a static export for GitHub Pages:

```bash
EXPORT=1 UNOPTIMIZED=1 npm run build
```

This creates an `out/` directory with static HTML files ready for deployment.

> **Note:** Static export mode automatically disables certain Next.js features like Cache Components and PPR (Partial Prerendering) that are incompatible with static hosting.

### Troubleshooting

**Build cache issues:**
If you encounter build errors, try clearing the cache:

```bash
rm -rf .next .contentlayer
npm run build
```

**Dependency conflicts:**
If `npm install` fails, ensure you're using the `--legacy-peer-deps` flag:

```bash
npm install --legacy-peer-deps
```

## Project Structure

Here's an overview of the project's directory structure:

```
website/
├── src/
│   ├── app/                       # Next.js App Router pages and routes
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Homepage
│   │   ├── blog/                  # Blog routes with colocated layouts
│   │   ├── tags/                  # Tag pages
│   │   ├── projects/              # Projects page
│   │   └── about/                 # About page
│   ├── components/                # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MDXComponents.tsx
│   │   └── ... (other components)
│   ├── lib/                       # Utility functions & configuration
│   │   ├── siteMetadata.ts
│   │   └── seo.ts
│   └── styles/                    # Global stylesheets
│       ├── tailwind.css
│       └── prism.css
├── public/static/                 # Static assets (images, favicons)
├── contentlayer.config.ts         # Content processing configuration
├── next.config.ts                 # Next.js configuration
├── tailwind.config.js             # Tailwind CSS configuration
└── tsconfig.json                  # TypeScript configuration
```

## Development Workflow

### Making Code Changes

1. **Create a feature branch:**

   ```bash
   git checkout -b feature/my-new-feature main
   ```

2. **Make your changes** in the appropriate files

3. **Test your changes:**

   ```bash
   npm run dev      # Test in development (http://localhost:3000)
   npm run build    # Verify production build succeeds
   npm run lint     # Check code quality with ESLint
   ```

   > **Important:** Always run `npm run build` before submitting a PR to ensure your changes don't break the production build.

4. **Commit your changes:**

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

5. **Push and create a pull request**

### Component Development

When creating or modifying components:

1. **Add components** to `src/components/` for reusable UI elements
2. **Use TypeScript** with proper type definitions
3. **Add `'use client'` directive** only when using hooks or browser APIs
4. **Follow naming conventions** - use PascalCase for component files

Example component:

```tsx
// src/components/MyComponent.tsx
'use client' // Only if needed

interface MyComponentProps {
  children: React.ReactNode
}

export default function MyComponent({ children }: MyComponentProps) {
  return <div className="my-custom-class">{children}</div>
}
```

### Styling

- **Global styles:** Edit `src/styles/tailwind.css`
- **Component styles:** Use Tailwind CSS utility classes
- **Tailwind config:** Modify `tailwind.config.js` for theme customization

## Writing Content

This project uses MDX (Markdown + JSX) for content. MDX allows you to use React components within Markdown documents.

### MDX Basics

**Markdown Features:**

- Standard Markdown syntax for headings, lists, links, etc.
- Code blocks with syntax highlighting
- Tables, blockquotes, and images

**Enhanced Features:**

- **JSX Components:** Use React components inline
- **Math Equations:** KaTeX support with `$inline$` or `$$block$$` syntax
- **GitHub Alerts:** `> [!NOTE]`, `> [!WARNING]`, `> [!TIP]`
- **Code Highlighting:** Specify language for syntax highlighting

### Code Block Examples

Basic code block:

````mdx
```javascript
const greeting = "Hello, World!"
console.log(greeting)
```
````

With line highlighting:

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

## Coding Standards

### TypeScript & React

- Use **TypeScript** with strict mode enabled
- Define proper types (avoid `any` when possible)
- Use **Server Components** by default (better performance)
- Add `'use client'` directive only when needed (hooks, browser APIs, interactivity)
- Follow React 19 best practices
- Use path aliases: `@/components/*`, `@/lib/*`, `@/styles/*`

### Component Structure

- Keep shared components in `src/components/`
- Colocate route-specific layouts in their route directories
- Use functional components with TypeScript interfaces for props
- Follow the single responsibility principle

### Linting & Formatting

This project uses:

- **ESLint 9** with flat config for code quality
- **TypeScript ESLint** for TypeScript-specific rules
- **Prettier** for code formatting (2-space indentation)
- **Husky** for pre-commit hooks

**ESLint Configuration:**

- Enforces TypeScript best practices
- Warns on unused variables (except those prefixed with `_`)
- Checks for explicit `any` usage
- Automatically ignores build directories (`.next/`, `.contentlayer/`, `out/`)

Run checks before committing:

```bash
npm run lint
```

Auto-fix issues (where possible):

```bash
npm run lint:fix
```

> **Note:** Some issues require manual fixes. ESLint will report these as errors or warnings that can't be auto-fixed.

### Commit Message Format

Follow **conventional commits**:

```
<type>: <description>

[optional body]
[optional footer]
```

**Types:**

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code formatting (not CSS)
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

**Examples:**

```
feat: add dark mode toggle to header
fix: resolve mobile navigation overflow
docs: update contributing guidelines
refactor: simplify authentication logic
```

## Pull Request Guidelines

### Branch Naming

Follow this convention:

- `feature/descriptive-name` - New features
- `fix/descriptive-name` - Bug fixes
- `docs/descriptive-name` - Documentation updates
- `refactor/descriptive-name` - Code refactoring
- `chore/descriptive-name` - Maintenance tasks

### Creating a Pull Request

1. **Fork the repository** and create a branch from `main`

2. **Make your changes** following the coding standards

3. **Test your changes:**

   ```bash
   npm run dev      # Test in development
   npm run build    # Verify production build
   npm run lint     # Check code quality
   ```

4. **Commit** using conventional commit format

5. **Push** to your fork and create a pull request

6. **Fill out the PR template** with relevant information:

```markdown
## Description

Brief summary of what this PR does

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## Testing Checklist

- [ ] Fresh install works (`npm install --legacy-peer-deps`)
- [ ] Tested locally with `npm run dev`
- [ ] Development build completes (`npm run build`)
- [ ] Static export succeeds (`EXPORT=1 UNOPTIMIZED=1 npm run build`)
- [ ] Linting passes (`npm run lint`)
- [ ] No TypeScript errors (`npm run build` or `tsc --noEmit`)
- [ ] Cleared caches if needed (`.next/`, `.contentlayer/`)

## Screenshots (if applicable)

[Add screenshots for UI changes]

## Related Issues

Closes #123
```

7. **Wait for review** and address any feedback

### PR Review Criteria

Maintainers will check:

- ✅ Code follows TypeScript and React best practices
- ✅ Linting passes without errors
- ✅ Build completes successfully
- ✅ Changes are well-documented
- ✅ Commit messages follow conventional format
- ✅ No breaking changes without discussion

## Questions?

If you have questions or need help:

1. 📖 Check [README.md](README.md) for project overview
2. 🔍 Search existing [GitHub Issues](https://github.com/chanchiwai-ray/chanchiwai-ray.github.io/issues)
3. 💬 Open a new issue with your question
4. 📧 For security concerns, contact the maintainer directly

### Helpful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)

---

**Happy contributing!** 🎉

> **Note for Maintainers:** See [CONTRIBUTING.maintainer.md](CONTRIBUTING.maintainer.md) for content management and site configuration instructions.

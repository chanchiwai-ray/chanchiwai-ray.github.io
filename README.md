# Ray's Blog

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A personal blog and portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features technical blog posts about Linux, Kubernetes, Ceph, and other cloud-native technologies, along with a project showcase.

🌐 **Live Site:** [https://chanchiwai-ray.github.io](https://chanchiwai-ray.github.io)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/chanchiwai-ray/chanchiwai-ray.github.io.git
cd chanchiwai-ray.github.io

# Install dependencies
# **Note:** The `--legacy-peer-deps` flag is required due to React 19 compatibility with some dependencies (kbar, next-themes).
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the site in action. For detailed setup instructions, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Features

- [x] 📝 MDX-powered blog posts with rich formatting
- [x] 🎨 Light/dark theme support
- [x] 🔍 Full-text search with command palette (⌘K / Ctrl+K)
- [x] 🏷️ Tag-based content organization
- [ ] 💬 Comments via Giscus
- [ ] 📊 Analytics integration
- [x] 🧮 Math equations support (KaTeX)
- [x] 📚 Citation and bibliography support
- [x] 🎯 SEO optimized with sitemap and RSS feed

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | [Next.js 16.1.1](https://nextjs.org/) (App Router, Turbopack) |
| Language | [TypeScript 5.9](https://www.typescriptlang.org/) |
| Runtime | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS 3.4](https://tailwindcss.com/) |
| Content | [Contentlayer 2](https://contentlayer.dev/) (MDX processing) |
| UI Components | [Headless UI 2.2](https://headlessui.com/) |
| Search | [Kbar](https://kbar.vercel.app/) (⌘K / Ctrl+K) |
| Comments | [Giscus](https://giscus.app/) (optional) |
| Analytics | [Umami](https://umami.is/) (optional) |
| Deployment | GitHub Pages (static export) |

### Key Dependencies

- **Content Processing:** `contentlayer2`, `next-contentlayer2`, `pliny`
- **Markdown/MDX:** `remark-gfm`, `remark-math`, `rehype-katex`, `rehype-citation`, `rehype-prism-plus`
- **Styling:** `@tailwindcss/typography`, `@tailwindcss/forms`
- **Utilities:** `next-themes`, `github-slugger`, `reading-time`

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:
- Setting up the development environment
- Project structure and organization
- Writing blog posts and adding projects
- Code style and conventions
- Submitting pull requests

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Built upon the [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template with custom modifications and enhancements.

---

⭐ If you find this project helpful, please consider giving it a star!

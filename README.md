# Faisal Khan - Portfolio Website

A modern, performant personal portfolio built with Astro, React, and Tailwind CSS.

## Features

- 🎨 **Dual Theme System**: Light mode (sunny day) and dark mode (starry night) with smooth transitions
- 🌦️ **Seasonal Effects**: Automatic snowfall (winter) and rainfall (monsoon) animations
- ⚡ **Performance Optimized**: Static site generation with Astro for blazing-fast load times
- ♿ **Accessible**: ARIA labels, semantic HTML, and keyboard navigation support
- 📱 **Responsive**: Mobile-first design that works beautifully on all devices
- 🔍 **SEO Ready**: Meta tags, sitemap, and Open Graph support
- 📝 **Blog Support**: MDX-powered blog with content collections

## Tech Stack

- **Framework**: [Astro](https://astro.build) 4.x
- **UI Library**: [React](https://react.dev) 18.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 3.x
- **Content**: [MDX](https://mdxjs.com) for blog posts
- **Deployment**: GitHub Pages via GitHub Actions
- **Language**: TypeScript

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # React and Astro components
│   ├── content/         # Blog posts (MDX)
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── .github/
│   └── workflows/       # GitHub Actions
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to Pages section
3. Set Source to "GitHub Actions"
4. Push to main branch to trigger deployment

## Customization

### Theme Colors

Edit `tailwind.config.mjs` to customize the color palette for light and dark themes.

### Content

- **Personal Info**: Update `src/components/Hero.astro`
- **About Section**: Edit `src/components/About.astro`
- **Skills**: Modify `src/components/Skills.astro`
- **Explorations**: Update `src/components/CurrentlyExploring.astro`
- **Blog Posts**: Add MDX files to `src/content/blog/`

### Configuration

- **Site URL**: Update `astro.config.mjs` with your GitHub Pages URL
- **Base Path**: Change the `base` property if using a custom domain

## License

MIT License - feel free to use this as a template for your own portfolio!

## Contact

- GitHub: [@faisalk1666](https://github.com/faisalk1666)
- LinkedIn: [faisk](https://www.linkedin.com/in/faisk/)

---

Built with ❤️ and intention.

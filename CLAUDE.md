# Orit Eschel Replica Maker

## Project Overview
This is a Lovable project - a single-page React application built with Vite, TypeScript, React, and shadcn-ui. It appears to be a landing page for Orit Eschel, a money coach who uses Sacred Money Archetypes® to help people improve their relationship with money.

## Tech Stack
- **Build Tool**: Vite
- **Framework**: React 18 with TypeScript
- **UI Components**: shadcn-ui (complete set of components)
- **Styling**: Tailwind CSS with animations
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Key Features
1. **Landing Page**: Professional coaching landing page with hero section, personal story, and call-to-action sections
2. **Responsive Design**: Mobile-friendly layout using Tailwind CSS
3. **Component Library**: Full shadcn-ui component library pre-installed
4. **Theming**: Next-themes integration for potential dark mode support
5. **Toast Notifications**: Both Toaster and Sonner for notifications

## Project Structure
```
/
├── src/
│   ├── components/ui/    # shadcn-ui components
│   ├── pages/           # Page components (Index, NotFound)
│   ├── hooks/           # Custom hooks
│   ├── lib/            # Utilities
│   └── App.tsx         # Main app component
├── public/             # Static assets
└── package.json        # Dependencies and scripts
```

## Development Commands
```bash
npm install       # Install dependencies
npm run dev       # Start development server
npm run build     # Build for production (Lovable default)
npm run build:dev # Build in development mode
npm run build:static # Build static HTML version using vite.config.static.ts
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

## Important Notes
- This is a Lovable project (Project ID: 23ed9177-a442-4fd8-a70c-63bd4b44b837)
- Changes made via Lovable are automatically committed to the repository
- The project uses Lovable Tagger for component tagging
- Profile image is stored in `/public/lovable-uploads/`

## Static HTML Deployment
A custom `build:static` script has been added to generate static HTML files for deployment to any web server or CDN. This creates a separate build output in `dist-static/` directory without interfering with Lovable's default build process.

**Static Build Output:**
- `dist-static/index.html` - Main HTML file with embedded React app
- `dist-static/assets/` - Minified CSS and JS bundles
- `dist-static/lovable-uploads/` - User-uploaded images
- Static assets (favicon.ico, robots.txt, placeholder.svg)

**Deployment Ready:** The static files can be uploaded to any hosting service (Netlify, Vercel, GitHub Pages, S3, etc.) for fast, CDN-optimized delivery.

## GitHub Pages Deployment
A GitHub Actions workflow has been configured to automatically deploy the static site to GitHub Pages on every push to the main branch.

**Setup Requirements:**
1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically run on push to main branch

**Workflow Details:**
- Triggers on push to main branch or manual dispatch
- Builds static files using `npm run build:static`
- Deploys `dist-static/` directory to GitHub Pages
- Uses Node.js 18 with npm caching for fast builds

**Files:**
- `.github/workflows/deploy-pages.yml` - GitHub Actions workflow
- `vite.config.static.ts` - Static build configuration with relative paths
- `dist-static/` directory is gitignored (built in CI)

## Current Page Content
The landing page promotes:
- Sacred Money Archetypes® Quiz
- Personal coaching story from Orit Eschel
- Call-to-action for quiz and free consultation call
- Testimonial-style content about money mindset transformation

## Styling
- Custom Google Font: Playfair Display (via font-playfair class)
- Color scheme: Blue and green gradients
- Fully responsive design
- Animated buttons and cards with hover effects
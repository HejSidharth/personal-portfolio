# Sidharth Hejamadi Portfolio

Personal portfolio site built with React, TypeScript, and Vite to showcase projects, experience, and a custom interaction layer (theme, accessibility, and robot mode).

## Live Demo

- Production URL: https://hejamadi.com

## Highlights

- Home page with profile, experience timeline, and featured project links
- Projects index page plus individual project detail routes
- Persistent light/dark theme toggle
- Accessibility controls from dock menu:
  - text size increase/decrease
  - high contrast mode
  - reset controls
- Hidden "robot mode" overlay with markdown-style summary
- Responsive dock navigation and tooltip interactions

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS + shadcn/ui primitives (Radix UI)
- React Router DOM
- Framer Motion
- Lucide icons

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
src/
  assets/         Static images, icons, project screenshots, resume PDF
  components/     Shared UI and layout components (dock, cards, nav, footer)
  config/         Route + site constants
  context/        Theme/accessibility/robot-mode state providers
  pages/          Route-level pages and project detail screens
  lib/            Utilities
public/           Static files (robots, redirects, logos)
get-logos.sh      Helper script to refresh logo assets
```

## Route Map

Routes defined in `src/config/routes.ts` and wired in `src/App.tsx`:

- `/` -> `HomePage`
- `/projects` -> `Projects`
- `/projects/student-queue` -> `StudentQueue`
- `/projects/notemon` -> `Notemon`
- `/projects/trackalack` -> `Trackalack`
- `/projects/taskmon` -> `Taskmon`
- `/projects/team-pay` -> `TeamPay`
- `*` -> `NotFound`

Additional direct route in `src/App.tsx`:

- `/test` -> `Test`

Note: `ROUTES.experience` is currently defined in `src/config/constants.ts` but not registered in `routeConfigs`.

## Content and Asset Maintenance

Logos used in experience/project sections live in `src/assets/logos/`.

To refresh logo files:

```bash
bash get-logos.sh
```

The script downloads logo/favicons into `src/assets/logos/` using `curl`.

## Deployment Notes

- Build output is generated in `dist/` via `npm run build`
- Serve built assets with any static hosting provider
- For local production-like verification, run `npm run preview`

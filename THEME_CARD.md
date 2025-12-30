# Portfolio Theme Card

A comprehensive design system guide for replicating this portfolio's visual style.

## Color Palette

### Dark Mode (Default Theme)

```css
/* Background & Surface Colors */
--background: hsl(0, 0%, 10%)        /* Very dark gray - Main background */
--foreground: hsl(0, 0%, 89.8%)      /* Light gray - Main text */
--card: hsl(0, 0%, 10%)              /* Card background (same as background) */
--card-foreground: hsl(0, 0%, 98%)   /* White - Card text */

/* Border & Input Colors */
--border: hsl(240, 3.7%, 15.9%)      /* Dark gray - Borders */
--input: hsl(240, 3.7%, 15.9%)       /* Dark gray - Input borders */
--ring: hsl(240, 4.9%, 83.9%)        /* Light gray - Focus rings */

/* Semantic Colors */
--primary: hsl(0, 0%, 98%)           /* White - Primary actions */
--primary-foreground: hsl(240, 5.9%, 10%) /* Dark - Text on primary */
--secondary: hsl(240, 3.7%, 15.9%)   /* Dark gray - Secondary elements */
--secondary-foreground: hsl(0, 0%, 98%) /* White - Text on secondary */
--muted: hsl(240, 3.7%, 15.9%)       /* Dark gray - Muted backgrounds */
--muted-foreground: hsl(240, 5%, 64.9%) /* Medium gray - Muted text */
--accent: hsl(240, 3.7%, 15.9%)      /* Dark gray - Accent backgrounds */
--accent-foreground: hsl(0, 0%, 98%) /* White - Text on accent */
--destructive: hsl(0, 62.8%, 30.6%)  /* Dark red - Error states */

/* Border Radius */
--radius: 0.5rem                      /* 8px - Default border radius */
```

### Light Mode (Alternative)

```css
/* Background & Surface Colors */
--background: hsl(0, 0%, 100%)        /* White - Main background */
--foreground: hsl(240, 10%, 3.9%)     /* Very dark gray - Main text */
--card: hsl(0, 0%, 100%)              /* White - Card background */
--card-foreground: hsl(240, 10%, 3.9%) /* Very dark - Card text */

/* Border & Input Colors */
--border: hsl(240, 5.9%, 90%)         /* Light gray - Borders */
--input: hsl(240, 5.9%, 90%)          /* Light gray - Input borders */
--ring: hsl(240, 10%, 3.9%)           /* Dark - Focus rings */

/* Additional semantic colors follow same pattern but lighter */
```

### Utility Colors

```css
/* Scrollbar Colors */
Scrollbar thumb: #1A1A1A              /* Dark gray */
Scrollbar track: #ffffff (light) / #1a1a1a (dark)
Scrollbar hover: #555                 /* Medium gray */

/* Hover States - Primary Highlight Color */
Hover border/color: #eab308            /* yellow-500 - Primary highlight color for the entire app */
GitHub icon hover: #eab308             /* yellow-500 */
LinkedIn icon hover: #eab308           /* yellow-500 */
University link hover: #FF5F05         /* UIUC orange - Specific to university link */
```

## Typography

### Font Families

1. **Inter** (Primary)
   - Usage: Body text, UI elements, navigation
   - Weights: 100, 200, 300, 400, 500, 700, 900
   - Import: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;700;900&display=swap');`

2. **Newsreader** (Secondary/Accent)
   - Usage: Headings, emphasized text, section headers, italic quotes
   - Weights: 400, 700
   - Import: `@import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@400;700&display=swap');`

### Font Sizes & Weights

```css
/* Headings */
Page Title: font-bold text-lg         /* 18px, weight 700, Inter */
Section Headers: font-medium          /* weight 500, Newsreader italic */

/* Body Text */
Base text: text-base                  /* 16px, weight 400, Inter */
Emphasized text: italic font-newsreader /* weight 400, italic */

/* Icons */
Social icons: w-5 h-5                 /* 20px × 20px */
Small icons: w-4 h-4                  /* 16px × 16px */
Tiny icons: w-2 h-2                   /* 8px × 8px */
```

## Layout & Spacing

### Container

```css
/* Page Container */
Max width: 56rem (896px)               /* max-w-4xl */
Centered: mx-auto
Padding: px-6 (24px) on mobile, px-8 (32px) on sm, px-12 (48px) on lg
Bottom padding: pb-24 (96px) for dock spacing

/* Inner Content Container */
Max width: 42rem (672px)               /* max-w-2xl */
Centered: mx-auto

/* Breakpoints */
Mobile: < 640px (default)
sm: ≥ 640px
md: ≥ 768px
lg: ≥ 1024px
```

### Spacing System

```css
/* Gaps */
Small gap: gap-3                      /* 12px */
Default gap: gap-4                    /* 16px */
Large gap: gap-6                      /* 24px */

/* Margins */
Top margin (sections): mt-10          /* 40px */
Bottom margin: mb-10                   /* 40px */
Footer spacing: h-10                   /* 40px */

/* Padding */
Button padding: p-2                    /* 8px */
Card padding: (handled by shadcn components)
Container padding: px-10 on mobile    /* 40px horizontal */
```

### Grid Layouts

```css
/* Project Cards Grid */
Mobile: flex flex-col gap-6           /* Stacked, 24px gap */
Desktop: md:grid md:grid-cols-3       /* 3 columns on md+ */
```

## Component Styles

### Headers & Titles

```css
/* Page Title */
font-bold border-b-2 text-lg hover:border-yellow-500 inline-block font-inter mb-4

/* Section Headers */
font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-yellow-500
```

### Links & Buttons

```css
/* Text Links (with icon) */
font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-yellow-500 flex items-center gap-2

/* Icon Links - Dock Navigation */
w-6 h-6 hover:text-yellow-500        /* All dock icons (Home, GitHub, LinkedIn, Theme) */
text-muted-foreground                 /* Default state */
```

### Cards

```css
/* Card Structure */
- Uses shadcn/ui Card component
- CardTitle: text-base inline-flex with border-b-2 hover:border-yellow-500
- CardDescription: default shadcn styling
- CardContent: contains tech stack icons (flex-grow for equal heights)
- Card: h-full flex flex-col for grid layouts

/* Tech Stack Icons */
Size: h-4 w-4                         /* 16px × 16px */
Effect: grayscale hover:grayscale-0 hover:rotate-6
Spacing: gap-2                        /* 8px between icons */
```

### Borders & Dividers

```css
/* Underline Borders */
border-b-2                            /* 2px bottom border */
hover:border-yellow-500               /* Changes to yellow on hover (primary highlight) */

/* Card Borders */
border rounded-2xl                    /* Full rounded corners, 16px radius */
grayscale                             /* Grayscale effect */
p-1                                   /* 4px padding */
```

### Images

```css
/* Project Screenshots */
rounded-md                            /* 6px border radius */
border-2                              /* 2px border */
shadow-lg                             /* Large shadow */

/* Tech Stack Icons */
grayscale                             /* Default: grayscale */
hover:grayscale-0                     /* Full color on hover */
hover:rotate-6                        /* 6 degree rotation on hover */
```

## Scrollbar Styling

### WebKit (Chrome, Safari, Edge)

```css
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  background: #ffffff;                /* White (light mode) */
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #1A1A1A;                /* Dark gray */
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;                   /* Medium gray */
}
```

### Firefox

```css
html {
  scrollbar-width: thin;
  scrollbar-color: #525252 #1a1a1a;  /* thumb track */
}
```

## Animations

### Page Transitions

```css
/* Framer Motion - Page Fade In */
initial: { opacity: 0 }
animate: { opacity: 1 }
transition: { duration: 2 }           /* 2 second fade in */
```

### Hover Effects

```css
/* Border Hover */
hover:border-yellow-500               /* Border changes to yellow (primary highlight) */
hover:text-yellow-500                 /* Text color changes to yellow on hover */

/* Icon Hover */
hover:text-yellow-500                 /* All icons (dock, links) */
hover:grayscale-0 hover:rotate-6      /* Tech stack icons */

/* Image Hover */
hover:grayscale-0 hover:rotate-6      /* Remove grayscale, rotate */
group-hover:opacity-0/100             /* Profile picture crossfade */
```

## Typography Patterns

### Body Text Pattern

```css
/* Standard paragraph */
font-inter text-base

/* Emphasized/Italic text */
italic font-newsreader

/* Combined example */
<p className="font-inter text-base">
  <span className="italic font-newsreader">Emphasized text</span> Regular text continues...
</p>
```

### Title Pattern

```css
/* Page/Section Title */
font-bold border-b-2 text-lg hover:border-yellow-500 inline-block font-inter mb-4
```

### Link Pattern

```css
/* Text link with icon */
font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-yellow-500 flex items-center gap-2
```

## Layout Patterns

### Page Structure

```css
/* Main Container - PageContainer Component */
<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
  <div className="flex flex-col gap-3 py-8 max-w-2xl mx-auto">
    {/* Content */}
  </div>
</div>
```

### Section Structure

```css
/* Section Header + Grid */
<button className="font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-yellow-500">
  Section Title
</button>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
  {/* Cards */}
</div>
```

### Header with Icons

```css
<div className="flex items-start justify-between gap-8">
  <div className="flex-1">
    <button className="font-bold border-b-2 text-lg hover:border-yellow-500 inline-block font-inter mb-4">
      Title
    </button>
    {/* Content */}
  </div>
  {/* Profile Picture / Icons */}
</div>
```

## CSS Variables Setup

### Required CSS Variables

```css
:root {
  /* Core Colors */
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --radius: 0.5rem;
}

.dark {
  --background: 0 0% 10%;
  --foreground: 0 0% 89.8%;
  --card: 0 0% 10%;
  --card-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
}
```

## Tailwind Configuration

### Required Extensions

```js
theme: {
  extend: {
    fontFamily: {
      "inter": ["Inter", "sans-serif"],
      "newsreader": ["Newsreader", "serif"],
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      // ... (add all semantic colors)
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },
}
```

## Key Design Principles

1. **Minimalism**: Clean, uncluttered design with plenty of white space
2. **Typography Hierarchy**: Inter for body, Newsreader for emphasis
3. **Subtle Interactions**: Borders as hover states, grayscale to color transitions
4. **Centered Layout**: Max-width container (896px outer, 672px inner) centered on page
5. **Dark Mode First**: Dark theme is the default
6. **Border as Decoration**: Bottom borders used for titles and links instead of backgrounds
7. **Yellow Highlight**: Primary hover color is yellow (#eab308 / yellow-500) throughout the app
8. **Grayscale Images**: Tech stack icons default to grayscale, color on hover
9. **Consistent Spacing**: 4px base unit (gap-3, gap-4, gap-6, mt-10)
10. **Fixed Bottom Dock**: Navigation dock fixed at bottom (pb-24 padding for spacing)

## Quick Reference

### Common Class Combinations

```css
/* Page Title */
"font-bold border-b-2 text-lg hover:border-yellow-500 inline-block font-inter mb-4"

/* Section Header */
"font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-yellow-500"

/* Link with Icon */
"font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-yellow-500 flex items-center gap-2"

/* Body Text with Emphasis */
"font-inter text-base" with nested "italic font-newsreader hover:text-yellow-500" spans

/* Container - Outer */
"max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pb-24"

/* Container - Inner Content */
"flex flex-col gap-3 py-8 max-w-2xl mx-auto"

/* Grid (Cards) */
"grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"

/* Tech Icon */
"h-4 w-4 grayscale hover:grayscale-0 hover:rotate-6"

/* Dock Icon Hover */
"text-muted-foreground hover:text-yellow-500 transition-colors"
```


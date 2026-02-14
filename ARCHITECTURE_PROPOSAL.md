# Architecture Refactoring Proposal: Next.js App Router

This document outlines a restructuring plan to improve maintainability, enforcing a consistent design system and layout strategy across the `4d4dish` project.

## 1. Core Philosophy: Vertical Slicing (Co-location)

Currently, the project separates "pages" (in `src/app`) from "sections" (in `src/components/sections`). This increases cognitive load—you have to jump between folders to edit a single logical page.

**New Rule:** Code that belongs to a specific page stays *with* that page.
Shared code stays in `src/components`.

---

## 2. Proposed Folder Structure

We will transition to a **Feature-First** structure directly within the `src/app` directory (or optional `src/features` if preferred, but co-location is simpler).

### 2.1 File Tree

```text
src/
├── app/
│   ├── (marketing)/         # Marketing pages group (optional)
│   │   ├── druck/
│   │   │   ├── _components/ # Page-specific components (not routable)
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Benefits.tsx
│   │   │   │   ├── Portfolio.tsx
│   │   │   │   └── Features.tsx
│   │   │   └── page.tsx     # Main entry, composes sections
│   │   ├── web-app/
│   │   │   ├── _components/
│   │   │   └── page.tsx
│   │   └── marketing/
│   │       ├── _components/
│   │       └── page.tsx
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
│
├── components/              # SHARED components only
│   ├── ui/                  # Atomic Design (Buttons, Inputs, Cards)
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── ...
│   ├── layout/              # Structural (Header, Footer, Container)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx      # NEW: Enforces vertical spacing
│   │   └── Container.tsx    # NEW: Enforces max-width/padding
│   └── shared/              # Reusable complex blocks
│       ├── ContactForm.tsx  # If used on multiple pages
│       └── Testimonials.tsx # If generic
│
├── lib/
│   ├── utils.ts
│   └── constants.ts         # Central config for navigation, site info
└── styles/
    └── globals.css
```

### 2.2 Why `_components`?
Using an underscore (`_components`) excludes the folder from Next.js routing, keeping these files cleanly separated from actual routes. It clearly signals: "These interact only with this specific feature."

---

## 3. Layout & Spacing Strategy

Inconsistent spacing (`py-24`, `max-w-7xl`, `px-6 md:px-12`) is the primary source of visual bugs. We will abstract these values into reusable wrapper components.

### 3.1 The `Container` Component
**Purpose:** Enforce horizontal constraints and gutters.
**Location:** `src/components/layout/Container.tsx`

```tsx
import { cn } from "@/lib/utils";

export function Container({ className, children, size = "default" }) {
  // size options: 'default' (standard), 'narrow' (blog/text), 'full' (fluid)
  const maxWidths = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
    full: "max-w-[1920px]",
  };

  return (
    <div className={cn(
      "mx-auto w-full px-6 md:px-12", // Standard Gutters
      maxWidths[size],
      className
    )}>
      {children}
    </div>
  );
}
```

### 3.2 The `Section` Component
**Purpose:** Enforce vertical rhythm and background themes.
**Location:** `src/components/layout/Section.tsx`

```tsx
import { cn } from "@/lib/utils";

export function Section({ className, children, background = "white", spacing = "default" }) {
  const spacings = {
    none: "",
    small: "py-12 md:py-16",
    default: "py-24 md:py-32", // Standard Section Spacing
    large: "py-32 md:py-40",
  };
  
  const backgrounds = {
    white: "bg-white",
    slate: "bg-slate-50",
    dark: "bg-slate-950 text-white",
    primary: "bg-primary text-white",
  };

  return (
    <section className={cn(
      spacings[spacing],
      backgrounds[background],
      className
    )}>
      {children}
    </section>
  );
}
```

### 3.3 Example Usage (in `page.tsx`)

```tsx
// src/app/druck/page.tsx
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Hero } from "./_components/Hero";
import { Benefits } from "./_components/Benefits";

export default function DruckPage() {
  return (
    <main>
      {/* Hero handles its own specific layout if full-screen */}
      <Hero /> 

      <Section background="slate">
        <Container>
          <Benefits />
        </Container>
      </Section>
    </main>
  );
}
```

---

## 4. Migration Plan

### Step 1: Create Layout Primitives
1. Create `src/components/layout/Section.tsx`.
2. Create `src/components/layout/Container.tsx`.

### Step 2: Refactor Generic Pages (One by One)
Start with `src/app/druck/page.tsx`.
1. Move `src/components/sections/druck/*` to `src/app/druck/_components/*`.
2. Rename files to simple names (`DruckHero.tsx` -> `Hero.tsx`).
3. Update imports in `src/app/druck/page.tsx`.
4. Wrap content in `<Section>` and `<Container>` to replace manual class strings.

### Step 3: Centralize Shared UI
Identify components used in *multiple* places (e.g., `ServiceContactForm`) and ensure they live in `src/components/shared` or `src/components/forms`.

---

## 5. Implementation Rules

1. **New Page Rule:** Creating a new page? Create a folder. Put all its exclusive sections inside `_components`.
2. **Spacing Rule:** NEVER write `max-w-7xl mx-auto px-6` manually again. Use `<Container />`.
3. **Naming Rule:** Page-specific components don't need prefixes. Inside `app/druck`, use `Hero.tsx`, not `DruckHero.tsx`. The folder provides the context.

## 6. Benefits

- **Scalability:** Adding a new feature doesn't clutter the global `components` folder.
- **Consistency:** Changing the global container width (e.g., to `max-w-8xl`) requires editing only **one file**.
- **Maintainability:** Deleting a page is simple—delete its folder. No left-over components in `src/components/sections`.

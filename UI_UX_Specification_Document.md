# CENTRIFUGE GROUP — HERO ANIMATION & BRAND DESIGN IMPLEMENTATION SPECIFICATION

## 1. ROLE

Act as a senior frontend engineer, motion designer, and design systems architect.

Your task is to implement a premium animated hero section for the existing Centrifuge Group website using:

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion (`motion` package)
- Lucide React where icons are needed

The website is an enterprise technology company's corporate platform, showcasing enterprise software, healthcare technology, logistics systems, digital services, projects, and products.

The implementation must integrate into the existing codebase rather than create a disconnected demonstration.

**Primary objectives:**
1. Create a smooth, coordinated hero entrance animation.
2. Make the text slide in from the left.
3. Make the supporting paragraph follow with a gradual opacity transition.
4. Make the hero image slide in from the right.
5. Align the website's color system with the actual Centrifuge Group logo.
6. Maintain responsive design, accessibility, performance, and visual consistency.

Do not rebuild unrelated parts of the website.

---

## 2. FIRST: INSPECT THE EXISTING PROJECT

Before writing code:

1. Inspect the project structure.
2. Identify the existing homepage and hero component.
3. Inspect the current navigation, buttons, layout, and typography.
4. Identify the installed Tailwind CSS version.
5. Check whether Framer Motion or `motion` is already installed.
6. Locate the Centrifuge Group logo and available product screenshots.
7. Identify the existing design tokens, CSS variables, and reusable components.
8. Preserve the existing routing and functionality.

Do not create duplicate components or introduce conflicting styling systems.

If the project already contains reusable buttons, containers, or design tokens, extend them rather than recreating them.

If Framer Motion is not installed, install the compatible `motion` package and import its React components from `motion/react`.

Do not install multiple animation libraries for the same task.

---

## 3. BRAND IDENTITY AND COLOR SYSTEM

### Objective

Create a consistent visual identity derived from the actual Centrifuge Group logo.

The logo is the source of truth for the primary brand color and accent color.

Do not select the final colors solely from visual guesswork.

### Step 1: Inspect the logo

If the logo is available locally:

- Inspect its SVG fill and stroke values when applicable.
- Inspect its actual colors.
- Identify the primary brand color.
- Identify any secondary or accent colors.
- Determine whether the logo has separate light and dark variants.

If the logo is not available, ask the user to provide it or use the existing brand colors temporarily.

Do not invent a new logo.

### Step 2: Define design tokens

Create or update centralized color tokens.

Use this palette as the initial fallback, subject to verification against the logo:

Primary brand:
#0B1F33

Dark brand:
#071521

Accent:
#16C7D9

Light accent:
#67E8F9

Main background:
#F7F9FA

Surface:
#FFFFFF

Primary text:
#172333

Secondary text:
#64748B

Border:
#E2E8F0

Success:
#16A34A

Warning:
#D97706

Error:
#DC2626

Replace the provisional primary and accent values if the actual logo establishes a better match.

### Step 3: Centralize the tokens

Create CSS custom properties or extend the existing token system.

Example:

:root {
  --color-brand-primary: #0B1F33;
  --color-brand-dark: #071521;
  --color-brand-accent: #16C7D9;
  --color-brand-accent-light: #67E8F9;

  --color-background: #F7F9FA;
  --color-surface: #FFFFFF;

  --color-text-primary: #172333;
  --color-text-secondary: #64748B;

  --color-border: #E2E8F0;
}

These values are provisional until checked against the actual logo.

Use the centralized tokens throughout the hero.

Do not scatter arbitrary hex values throughout component files.

### Color application

The hero must use:

- A clean white or off-white background.
- Dark navy or the verified brand-primary color for the headline.
- Neutral secondary text.
- The logo-aligned accent color for the primary CTA.
- A restrained border or surface treatment around the hero image.

Avoid excessive gradients, neon colors, and unnecessary glow effects.

The logo and the hero must look like parts of the same brand.

---

## 4. HERO SECTION CONTENT

Use the following content.

### Headline

"Technology that moves your business forward."

Use natural text wrapping.

Do not split the headline into individual animated letters.

### Supporting paragraph

"We design and deliver enterprise software, healthcare platforms, logistics systems and digital solutions that solve complex operational problems."

### Primary CTA

"Talk to an Expert"

Link to the existing contact page.

### Secondary CTA

"Explore Solutions"

Link to the existing solutions section or solutions page.

Use the actual routes present in the project. Do not invent routes without checking the router.

### Hero visual

Use an authentic Centrifuge product screenshot whenever possible.

Preferred order:

1. Optimax ERP dashboard.
2. Logistics management dashboard.
3. Healthcare software interface.
4. Another verified Centrifuge product interface.

The image should communicate that Centrifuge builds real technology products.

Do not use a generic AI-generated robot, random stock photo, or fabricated customer dashboard.

If no suitable image exists, create a clearly identifiable placeholder that can be replaced later.

---

## 5. HERO LAYOUT

Create a premium, responsive, two-column hero.

### Desktop

Use a centered container with a maximum width of approximately 1440px.

Use generous horizontal padding.

Suggested layout:

- Left column: approximately 45%.
- Right column: approximately 55%.

Left column:
- Eyebrow label, if appropriate.
- Headline.
- Supporting paragraph.
- CTA buttons.

Right column:
- Main product screenshot.
- Optional restrained browser-frame treatment.
- Optional small product interface details, only if actual assets are available.

Vertically center both columns.

The headline must be the strongest element.

Avoid excessive decorative elements that compete with the headline or product screenshot.

### Tablet

Adapt the column proportions to preserve readability.

Reduce headline size and horizontal spacing as necessary.

Keep the image large enough to understand.

### Mobile

Stack the layout vertically.

Order:

1. Headline.
2. Supporting paragraph.
3. CTA buttons.
4. Product image.

Reduce the animation distance.

Prevent horizontal overflow.

Ensure buttons have comfortable touch targets.

Do not shrink the desktop design until it becomes unreadable.

---

## 6. ANIMATION DESIGN

Use Framer Motion to create a coordinated entrance sequence.

The motion should communicate confidence, precision, and forward movement.

The animations should be smooth rather than flashy.

Use the easing curve:

[0.22, 1, 0.36, 1]

Avoid spring bounce, elastic movement, spinning elements, and aggressive zoom effects.

### A. Headline

Initial state:
- opacity: 0
- x: -60

Final state:
- opacity: 1
- x: 0

Duration:
0.85 seconds.

Delay:
0.10 seconds.

The headline should slide from left to right into its final position.

Use a slight fade-in alongside the movement.

### B. Supporting paragraph

Initial state:
- opacity: 0
- x: -40

Final state:
- opacity: 1
- x: 0

Duration:
0.80 seconds.

Delay:
0.25 seconds.

The supporting paragraph must follow the headline.

Its opacity should gradually increase until the paragraph is fully visible.

Do not animate each word or letter independently.

### C. Primary and secondary CTA buttons

Initial state:
- opacity: 0
- y: 20

Final state:
- opacity: 1
- y: 0

Duration:
0.65 seconds.

Delay:
0.45 seconds.

Both buttons should enter together or with a very small stagger.

Preserve all button functionality and accessibility.

### D. Hero image

Initial state:
- opacity: 0
- x: 70

Final state:
- opacity: 1
- x: 0

Duration:
1.00 second.

Delay:
0.15 seconds.

The image should slide from right to left.

Use the same easing curve as the text.

Keep the image container dimensions stable to minimize layout shift.

The image must not stretch or lose important content.

### E. Optional dashboard details

If the screenshot or product composition contains suitable independent elements, they may fade into view with a small upward movement.

Duration:
Approximately 0.55 seconds.

Delay:
Approximately 0.70 seconds.

Do not fabricate interface elements just to animate them.

This step is optional.

---

## 7. ANIMATION IMPLEMENTATION ARCHITECTURE

Create reusable Framer Motion variants rather than repeating configuration across multiple elements.

Use variants similar to the following:

const textFromLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const paragraphFromLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageFromRight = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buttonsFromBelow = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

Use the project's existing conventions if they differ.

Ensure the variants are correctly typed with TypeScript if necessary.

Do not use `any` unnecessarily.

### Animation trigger

The hero should animate when the page first loads.

It should not repeatedly replay whenever the user scrolls slightly.

Use an appropriate initial/animate configuration or a viewport configuration that plays the entrance once.

Ensure essential content remains available if animation is disabled or fails.

---

## 8. MOTION RESPONSIVENESS

The animation must adapt to the device.

Desktop:
- Headline translation: 60px.
- Paragraph translation: 40px.
- Image translation: 70px.

Tablet:
- Reduce horizontal translation to approximately 35–45px.

Mobile:
- Reduce translation to approximately 20–25px.
- Shorten durations where appropriate.
- Avoid moving the content so far that it appears disconnected from the layout.

Use responsive variants or another maintainable approach.

Do not create multiple conflicting animation configurations.

---

## 9. ACCESSIBILITY AND REDUCED MOTION

Respect the user's operating-system motion preference.

Use Framer Motion's reduced-motion support or an equivalent accessible implementation.

When reduced motion is requested:

- Do not use large horizontal translations.
- Render the content immediately or use a minimal opacity transition.
- Do not hide essential content indefinitely.
- Keep buttons, links, and navigation fully usable.

Maintain:

- Semantic HTML.
- Logical heading order.
- Visible keyboard focus.
- Accessible link names.
- Sufficient color contrast.
- Keyboard-accessible CTA buttons.

Use appropriate alt text for product screenshots.

Do not put important information exclusively inside an image.

---

## 10. IMAGE PERFORMANCE

Use a stable image container with an appropriate aspect ratio.

Requirements:

- Preserve image proportions.
- Prevent layout shifts.
- Optimize image file sizes.
- Use WebP or AVIF where appropriate and supported by the project's asset pipeline.
- Provide a useful alt attribute.
- Use lazy loading only when appropriate.

The above-the-fold hero image is important to the initial page experience. Do not automatically lazy-load it if doing so delays the main visual.

If the hero image is an `<img>`, provide explicit dimensions or an aspect ratio.

If using `object-fit`, choose the behavior that preserves the product screenshot's important content.

Avoid applying aggressive cropping to dashboard interfaces.

---

## 11. HOVER INTERACTIONS

The primary CTA may use a subtle hover transition.

Suggested behavior:

- Slight color change.
- Small upward movement of approximately 1–2px.
- Smooth transition around 150–200ms.

The secondary CTA should have a subtle color or border transition.

The hero image may use a very slight hover effect on desktop, but it must not interfere with the entrance animation.

Do not add continuous floating animations.

Do not introduce unnecessary cursor effects.

---

## 12. FRAMER MOTION IMPLEMENTATION RULES

- Use `motion` components from the installed package.
- Keep animation definitions reusable.
- Do not animate every element on the page.
- Do not animate layout properties unnecessarily.
- Prefer opacity and transform animations.
- Avoid layout shifts.
- Avoid animation dependencies that duplicate existing functionality.
- Keep animations independent from routing and business logic.
- Ensure the hero works without JavaScript-dependent decorative behavior where practical.

The hero must remain responsive if the animation is removed.

---

## 13. IMPLEMENTATION WORKFLOW

Execute the task in this order:

PHASE 1 — INSPECTION
Inspect the project, hero component, logo, assets, dependencies, and existing design tokens.

PHASE 2 — BRAND TOKENS
Verify the logo's colors and update centralized design tokens.

PHASE 3 — HERO LAYOUT
Implement the responsive two-column layout while preserving existing routes and content.

PHASE 4 — ANIMATION
Implement the headline, paragraph, CTA, and image entrance animations.

PHASE 5 — ACCESSIBILITY
Add reduced-motion handling, semantic markup, alt text, and keyboard checks.

PHASE 6 — RESPONSIVENESS
Verify desktop, tablet, and mobile layouts.

PHASE 7 — QUALITY ASSURANCE
Run the existing build and lint/test commands where available.

Fix any errors introduced by the implementation.

Check for horizontal overflow, layout shifts, unreadable text, and broken navigation.

PHASE 8 — REPORT
Summarize:
- Files created or modified.
- Dependencies added, if any.
- Brand color tokens used.
- Animation behavior implemented.
- Responsive and accessibility considerations.
- Any missing logo or product assets that need to be supplied.

---

## 14. ACCEPTANCE CRITERIA

The implementation is complete when:

1. The headline slides smoothly from the left.
2. The paragraph follows with a gradual opacity increase.
3. The CTA buttons appear after the text begins entering.
4. The hero image slides from the right.
5. The animations use coordinated timing and easing.
6. The hero looks polished on desktop, tablet, and mobile.
7. The primary brand and accent colors are aligned with the actual logo when available.
8. The hero remains functional with reduced motion enabled.
9. The image does not distort or cause significant layout shifts.
10. The existing navigation and links continue to work.
11. The implementation introduces no unnecessary animation libraries.
12. The project builds successfully.
13. The final design remains consistent with the broader Centrifuge design system.

FINAL CREATIVE DIRECTION:

The headline should feel like it is entering with purpose.

The supporting text should follow naturally.

The product image should arrive from the opposite direction.

Everything should settle into a clean, balanced composition.

The animation should feel premium without drawing attention to the animation itself.

The final result must communicate:

"Technology that moves your business forward."
# MASTER PROMPT: PROJECT-WIDE COLOR CONTRAST & BRAND CONSISTENCY AUDIT

## Role
Act as a senior UI/UX designer, accessibility specialist, and frontend engineer. Your task is to audit my **existing project** and fix all text visibility issues caused by unsuitable background colors, background images, gradients, overlays, and inconsistent component styling.

## 1. Primary Objective
Some text across multiple pages of my existing website is difficult or impossible to read because its foreground color does not contrast sufficiently with its background.

Inspect the entire project, identify the root causes, and implement the most suitable color combinations while maintaining a consistent, professional brand identity.

**Do not redesign the entire website or change its established visual identity unnecessarily. Improve readability while preserving the existing design language.**

## 2. Audit the Entire Project
Before making changes:

- Inspect the existing project structure, framework, styling system, global CSS, design tokens, and reusable components.
- Identify all pages, layouts, sections, modals, cards, navigation menus, forms, tables, dashboards, and other UI elements.
- Find text that blends into its background or becomes difficult to read.
- Inspect text displayed over background images, gradients, transparent sections, dark/light surfaces, and colored overlays.
- Check hover, focus, active, disabled, selected, and loading states.
- Identify conflicting CSS rules, inherited colors, overly broad selectors, hardcoded colors, and theme inconsistencies.
- Check responsive layouts, including mobile and desktop, where backgrounds or text colors may change.

Do not assume every visibility problem requires changing the text color. Determine whether the best fix is to adjust the foreground, background, overlay, opacity, or component styling.

## 3. Establish a Consistent Brand Color System
Analyze the existing brand identity and extract its primary, secondary, accent, background, surface, text, border, and status colors.

Create or refine a centralized design-token system using the project's existing styling conventions, such as CSS variables, Tailwind theme tokens, or the current design system.

Define semantic tokens for:
- Primary brand color
- Secondary brand color
- Accent color
- Main page background
- Elevated surface and card background
- Primary text
- Secondary text
- Muted text
- Text on dark surfaces
- Text on light surfaces
- Links and interactive elements
- Borders and dividers
- Success, warning, error, and informational states
- Focus indicators and disabled states

Use the existing brand colors as the foundation. Introduce new supporting shades only when necessary to improve contrast, establish hierarchy, or distinguish surfaces.

Do not introduce arbitrary colors that make different pages look unrelated.

## 4. Apply Intelligent Contrast Corrections
For every text element with poor visibility:

1. Determine its actual rendered background.
2. Calculate or evaluate the foreground-to-background contrast ratio.
3. Select an appropriate text color from the established brand palette.
4. If necessary, adjust the background shade or add a suitable overlay.
5. Preserve the original visual hierarchy and intended design.
6. Verify that the correction works across all relevant states and screen sizes.

Follow WCAG 2.2 AA contrast requirements:
- Normal text: at least 4.5:1.
- Large text: at least 3:1.
- Meaningful UI component boundaries and visual indicators: generally at least 3:1 against adjacent colors.

Do not rely on color alone to communicate errors, status, selection, or other important information.

### Background-specific rules

**Light backgrounds**
- Use a sufficiently dark brand-compatible text color.
- Avoid pale gray text on white or light gray surfaces when contrast is insufficient.

**Dark backgrounds**
- Use a readable light foreground color.
- Avoid dark text on navy, black, or dark image backgrounds.

**Background images and gradients**
- Inspect the actual area behind the text, not just the overall background color.
- Use a brand-compatible overlay, gradient, or localized surface when the image contains areas of varying brightness.
- Preserve the image's visual impact while making text consistently readable.

**Transparent sections and overlapping layouts**
- Check the final composited background behind the text.
- Do not assume transparency automatically produces adequate contrast.
- Ensure transparent navigation bars, hero sections, and overlapping cards remain legible as content scrolls.

**Colored brand surfaces**
- Choose a foreground that contrasts with the actual shade used.
- Do not automatically use white text on every brand-colored background.
- Do not automatically use black text on every light-colored background; calculate or verify contrast.

## 5. Preserve Design Quality
Maintain the website's existing:
- Typography and font hierarchy
- Spacing and layout
- Component structure
- Branding and logo colors
- Animation and transition behavior
- Existing functionality
- Responsive behavior

Avoid unnecessary redesigns, excessive borders, random gradients, excessive shadows, and adding new colors without a clear purpose.

Make the smallest changes that solve the underlying visibility problems consistently.

## 6. Fix Reusable Components at Their Source
When a shared component causes the same issue across multiple pages, fix the component or its design tokens instead of applying isolated patches to every page.

Prioritize:
- Global styles and theme configuration
- Shared headers and navigation
- Hero sections
- Cards and content panels
- Buttons and links
- Forms and input fields
- Tables and dashboards
- Modals and dropdown menus
- Footers
- Reusable typography components

Avoid duplicating CSS rules or adding `!important` unless there is a demonstrated technical necessity.

If the project supports light and dark themes, preserve both and verify each theme independently.

## 7. Implementation and Validation
Implement the fixes directly in the existing codebase.

After implementation:
- Run the project's available linting, type checks, and build commands where possible.
- Check for CSS conflicts and unintended regressions.
- Verify contrast ratios for corrected color combinations.
- Test representative pages and reusable components.
- Check mobile and desktop layouts.
- Confirm that links, buttons, forms, dropdowns, and interactive states remain functional.
- Confirm that the branding remains visually consistent throughout the application.

If browser-based visual testing is available, inspect the rendered pages rather than relying only on the source code.

Do not claim that every page has been tested if only a subset was verified.

## 8. Constraints
- Work with the existing framework and architecture.
- Do not replace the project's styling system.
- Do not rewrite unrelated application logic.
- Do not remove content or hide text to bypass visibility problems.
- Do not hardcode one universal text color for every background.
- Do not make changes based on assumptions about unseen pages.
- Do not leave identified visibility issues unresolved without explaining the blocker.

## 9. Final Report
When finished, provide:

1. The root causes of the visibility problems.
2. The pages and components inspected.
3. The brand colors and semantic tokens retained or introduced.
4. The important foreground/background corrections made.
5. The contrast ratios of representative corrected combinations.
6. The files changed and why.
7. The build, lint, and visual checks completed.
8. Any remaining issues that require manual review.

## Success Criteria
The task is complete when text is readable across the audited pages, foreground and background colors follow a consistent brand system, accessibility contrast requirements are met for the corrected combinations, and the existing website's identity and functionality are preserved.

**Begin by inspecting the existing project and diagnosing the problems. Then implement and validate the fixes. Do not stop after providing recommendations or a report.**
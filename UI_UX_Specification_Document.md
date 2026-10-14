# CENTRIFUGE WEBSITE: VISUAL POLISH AND DESIGN SYSTEM IMPLEMENTATION

## 1. OBJECTIVE

Act as a Senior Frontend Engineer, UI/UX Designer, and Motion Design Specialist.

Your task is to improve the existing Centrifuge Group website using professional CSS techniques, CSS generators, a consistent design system, responsive layouts, and subtle animations.

The website must communicate enterprise credibility, technical expertise, innovation, and trust.

The visual direction is:

**Trusted Enterprise Slate — Light Mode**

The website should combine the clarity of Stripe, the precision of Linear, and the credibility of an established enterprise technology company while maintaining Centrifuge's own brand identity.

This is an improvement of an existing website, not a request to rebuild it from scratch.

## 2. PROJECT CONSTRAINTS

Before writing code:

1. Inspect the existing React + Vite project structure.
2. Identify the current routing system, component architecture, stylesheets, assets, and installed dependencies.
3. Review the existing homepage, navbar, footer, services, projects, and About pages.
4. Identify the actual Centrifuge logo and existing brand colors.
5. Reuse existing components and dependencies wherever practical.
6. Preserve working routes, navigation, content, integrations, and project links.
7. Do not replace existing sections with generic placeholder content.
8. Do not invent testimonials, client logos, project statistics, or business claims.
9. Do not introduce unnecessary dependencies.
10. Implement changes directly in the existing codebase.

Do not begin by rewriting the entire application.

First understand the existing implementation, then make focused improvements.

---

# 3. DESIGN SYSTEM

Create or refine a centralized design system.

Recommended file structure, adapted to the existing project:

src/
├── styles/
│   ├── tokens.css
│   ├── typography.css
│   ├── animations.css
│   └── global.css
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── SectionHeading.jsx
│   ├── Reveal.jsx
│   └── ServiceCard.jsx
└── pages/
    └── ...

These filenames are suggestions. Preserve the current architecture when it already provides equivalent functionality.

## 3.1 Brand colors

Use the actual Centrifuge brand identity as the source of truth.

If the current website does not have a complete design-token system, begin with this proposed palette and validate it against the logo:

Primary navy: #17365D
Primary hover: #102844
Accent teal: #2C8C91
Page background: #F7F9FC
Surface: #FFFFFF
Primary text: #172B3A
Secondary text: #637386
Border: #DFE6ED

Do not force these proposed colors onto an established brand palette if the logo or existing design system indicates otherwise.

Use accent colors sparingly.

Navy should establish authority and visual hierarchy. Teal should highlight selected actions, links, icons, or important interface elements.

Avoid excessive gradients, saturated backgrounds, and unrelated accent colors.

## 3.2 CSS variables

Create reusable CSS variables for:

- Brand colors.
- Typography.
- Font weights.
- Spacing.
- Content width.
- Page gutters.
- Border radii.
- Shadows.
- Animation durations.
- Easing curves.
- Focus indicators.

Example starting point:

:root {
  --color-primary: #17365D;
  --color-primary-hover: #102844;
  --color-accent: #2C8C91;

  --color-background: #F7F9FC;
  --color-surface: #FFFFFF;
  --color-border: #DFE6ED;

  --color-text-primary: #172B3A;
  --color-text-secondary: #637386;

  --container-width: 1200px;
  --page-gutter: clamp(20px, 5vw, 72px);

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;

  --duration-fast: 180ms;
  --duration-normal: 350ms;
  --duration-slow: 700ms;

  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
}

Use these variables consistently throughout the application.

Do not scatter duplicate color, spacing, or animation values across unrelated components.

---

# 4. CSS GENERATOR TOOLKIT

Use CSS generators as experimentation tools, not as runtime dependencies.

The generated CSS must be reviewed, adapted, and integrated into the existing architecture.

## 4.1 Animation generator

Tool: https://animista.net/

Purpose:
- Prototype entrance animations.
- Explore subtle slide and fade effects.
- Generate reusable animation keyframes.

Implementation requirements:
- Prefer opacity and transform animations.
- Avoid animating layout properties unnecessarily.
- Remove unused generated declarations.
- Respect reduced-motion preferences.

## 4.2 Easing generator

Tool: https://cubic-bezier.com/

Purpose:
- Refine motion timing.
- Create natural deceleration.
- Standardize easing across components.

Starting easing curve:

cubic-bezier(0.22, 1, 0.36, 1)

Use this curve for entrance animations where appropriate.

Do not apply identical motion to every component if the interaction requires different timing.

## 4.3 Color palette generator

Tool: https://coolors.co/

Purpose:
- Explore complementary brand colors.
- Check the consistency of the visual palette.
- Develop restrained color variations.

The actual Centrifuge logo and established brand identity take precedence over automatically generated palettes.

## 4.4 Typography generator

Tool: https://type-scale.com/

Purpose:
- Establish a consistent typographic hierarchy.
- Refine heading and body-text proportions.
- Test visual rhythm between sections.

Prefer the existing brand typeface when one has already been established.

## 4.5 Grid generator

Tool: https://grid.layoutit.com/

Purpose:
- Experiment with service layouts.
- Develop responsive project grids.
- Improve content hierarchy.

Translate useful layouts into maintainable CSS Grid or Flexbox implementations.

Do not embed generated layout code blindly.

## 4.6 Shadow generator

Tool: https://shadows.brumm.af/

Purpose:
- Create subtle shadows.
- Add depth to selected surfaces.
- Improve the separation between foreground content and backgrounds.

Use shadows sparingly.

Cards should not all appear to float above the page.

## 4.7 Gradient generator

Tool: https://cssgradient.io/

Purpose:
- Refine image overlays.
- Create subtle background transitions.
- Establish controlled color transitions.

Avoid using decorative gradients on every section.

Use gradients only when they support the content hierarchy or improve the composition.

---

# 5. HOMEPAGE HERO ANIMATION

The homepage hero is a priority.

Preserve the existing content, image assets, and working CTA links.

The main headline should communicate Centrifuge's digital solutions offering.

Use the existing approved headline. If no approved copy exists, the following is a suitable starting point:

"Engineering digital solutions that scale."

Supporting message:

"From complex challenges to connected digital solutions."

The hero should have a clear two-column layout on desktop:

LEFT:
- Headline.
- Supporting paragraph.
- Primary CTA.
- Secondary CTA.

RIGHT:
- Existing hero image, project screenshot, or approved visual.

## 5.1 Entrance animations

Implement the following sequence:

1. Headline slides in from the left.
2. Supporting paragraph follows with a short delay.
3. CTA buttons appear with a slight upward movement.
4. Hero image slides in from the right.

Suggested settings:

Headline:
- Translation: 36px from the left.
- Duration: 700ms.

Supporting paragraph:
- Translation: 24px from the left.
- Duration: 750ms.
- Delay: 100ms.

CTA buttons:
- Translation: 16px upward.
- Duration: 600ms.
- Delay: 200ms.

Hero image:
- Translation: 40px from the right.
- Duration: 850ms.
- Delay: 100ms.

Use the shared easing token.

Keep the movement subtle and professional.

Do not introduce unnecessary bouncing, spinning, or dramatic zoom effects.

## 5.2 Animation implementation

Use CSS for simple entrance effects.

Use the existing Framer Motion or Motion dependency for coordinated animations and scroll-triggered effects where necessary.

Do not install a second animation library if the project already has an appropriate solution.

All animations must respect:

@media (prefers-reduced-motion: reduce)

Ensure that essential content remains accessible if animations do not run.

Avoid causing layout shifts during animation.

---

# 6. HERO IMAGE STYLING

Improve the hero visual without obscuring the actual image.

Requirements:

- Use an appropriate aspect ratio.
- Maintain image quality.
- Avoid unintended cropping.
- Apply consistent border radii.
- Use subtle borders or shadows only where appropriate.
- Ensure mobile images fit the available width.
- Preserve meaningful image content.

If a gradient overlay improves the image, use a restrained navy or teal treatment.

Do not introduce decorative imagery that misrepresents Centrifuge's actual products or capabilities.

Prioritize real project screenshots and existing approved assets.

---

# 7. TYPOGRAPHY SYSTEM

Use a consistent typographic scale.

Suggested desktop sizes:

Hero heading: 56–68px.
Section heading: 36–44px.
Card heading: 20–24px.
Body text: 16–18px.
Small labels: 12–14px.

Suggested mobile sizes:

Hero heading: 36–44px.
Section heading: 28–34px.
Card heading: 20–22px.
Body text: 16px.

These are starting ranges and must be adjusted for actual content and available space.

Use clamp() for fluid sizing.

Example:

.hero h1 {
  font-size: clamp(2.5rem, 4.5vw, 4.25rem);
  line-height: 1.08;
  letter-spacing: -0.045em;
}

.section-heading {
  font-size: clamp(1.875rem, 3vw, 2.75rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.section-description {
  max-width: 680px;
  font-size: 1.0625rem;
  line-height: 1.8;
}

Requirements:

- Maintain readable line lengths.
- Avoid overly wide paragraphs.
- Prevent headings from overflowing.
- Preserve consistent font weights.
- Maintain strong text contrast.
- Avoid excessive letter spacing in body copy.

---

# 8. NAVBAR AND BUTTONS

Refine the existing navigation without removing working links.

Navbar requirements:

- Clear logo placement.
- Consistent spacing.
- Readable labels.
- Distinct active states.
- Accessible mobile navigation.
- Clear primary CTA.
- Appropriate contrast.
- Keyboard accessibility.
- Visible focus states.

If the current navbar has an established transparent or light appearance, preserve that design direction unless there is a clear reason to improve it.

Button requirements:

- Consistent height.
- Consistent padding.
- Shared border radius.
- Clear primary and secondary variants.
- Subtle hover and focus transitions.
- Visible keyboard focus.
- Adequate touch targets.

Avoid unnecessary animation on navigation items.

Do not change destinations or break existing route behavior.

---

# 9. SERVICES SECTION

Refine the existing service section using responsive CSS Grid.

Preserve the existing service information.

Relevant business areas may include:

- Enterprise Software.
- e-Health.
- Cloud SaaS.
- Project Development & Management.

Only display service categories that match the current website's actual offerings.

Desktop:
- Three columns where appropriate.

Tablet:
- Two columns.

Mobile:
- One column.

Card requirements:

- Consistent padding.
- Clear headings.
- Readable descriptions.
- Consistent spacing.
- Restrained borders and shadows.
- Clear links where relevant.
- Optional subtle hover effects.

Avoid excessive card decoration.

Use icons consistently and ensure that decorative icons do not interfere with accessibility.

---

# 10. PROJECT SHOWCASE

Improve the existing project portfolio.

The purpose of this section is to demonstrate actual work and encourage prospective clients to explore it.

Requirements:

- Responsive grid.
- Consistent image proportions.
- Appropriate cropping.
- Clear project names.
- Concise descriptions.
- Functional project links.
- Accessible image descriptions.
- Consistent spacing.
- Clear hover and focus states.

Where appropriate, highlight one featured project with a larger grid area.

Use real screenshots and approved project information.

Do not fabricate project details, client relationships, performance metrics, or testimonials.

If a project does not have a public URL, do not invent one.

---

# 11. SCROLL-TRIGGERED ANIMATIONS

Create reusable reveal effects for appropriate content sections.

Suitable elements include:

- Section headings.
- Service cards.
- Project cards.
- Supporting images.
- Selected statistics.
- Call-to-action sections.

Suggested effect:

Initial state:
- Opacity: 0.
- Vertical translation: 18px.

Final state:
- Opacity: 1.
- Vertical translation: 0.

Suggested duration:
- 500–650ms.

Requirements:

- Trigger animations when elements enter the viewport.
- Avoid repeating animations unnecessarily.
- Use staggered sequences sparingly.
- Respect reduced-motion settings.
- Prevent hidden content from remaining inaccessible.
- Avoid animating every element.
- Avoid expensive layout-triggering effects.

If using Framer Motion, create a reusable Reveal component rather than duplicating animation logic throughout the application.

---

# 12. RESPONSIVE LAYOUTS

Test the website at:

- 1440px desktop.
- 1024px tablet landscape.
- 768px tablet portrait.
- 390px mobile.
- 320px narrow mobile.

Check:

- Horizontal overflow.
- Heading wrapping.
- Navbar behavior.
- Hero stacking.
- Image scaling.
- Card layouts.
- Button wrapping.
- Content spacing.
- Footer layout.
- Touch-target dimensions.

Do not simply scale desktop layouts down.

Reorganize content where necessary to preserve usability on mobile devices.

---

# 13. ACCESSIBILITY

Ensure:

- Semantic HTML is used.
- Keyboard navigation works.
- Focus indicators are visible.
- Text contrast is sufficient.
- Images have appropriate alternative text.
- Decorative images use appropriate empty alt attributes.
- Interactive elements have accessible names.
- Mobile navigation supports keyboard interaction.
- Reduced-motion preferences are respected.
- Information is not communicated by color alone.
- Links and buttons are used according to their purpose.

Do not sacrifice accessibility for visual effects.

---

# 14. PERFORMANCE

Requirements:

- Avoid unnecessary dependencies.
- Prefer transform and opacity for animations.
- Avoid excessive blur and filter effects.
- Use optimized image assets.
- Prevent cumulative layout shifts.
- Avoid unnecessary re-renders.
- Preserve lazy loading for appropriate below-the-fold images.
- Avoid loading large animation libraries for simple CSS effects.
- Avoid excessive simultaneous animations.

Test on a lower-powered device as well as desktop.

---

# 15. IMPLEMENTATION WORKFLOW

Follow this sequence.

PHASE 1 — AUDIT
- Inspect the existing application.
- Identify shared components.
- Review the current brand assets.
- Check installed dependencies.
- Identify existing visual inconsistencies.

PHASE 2 — DESIGN TOKENS
- Create or refine shared CSS variables.
- Establish typography.
- Standardize spacing and radii.
- Define reusable animation timing.

PHASE 3 — HERO
- Refine the layout.
- Implement the entrance sequence.
- Improve the visual treatment.
- Check responsive behavior.

PHASE 4 — SHARED COMPONENTS
- Refine navbar.
- Standardize buttons.
- Improve cards.
- Refine focus and hover states.

PHASE 5 — PAGE SECTIONS
- Improve services.
- Improve project showcases.
- Refine section spacing.
- Apply consistent typography.

PHASE 6 — MOTION
- Add reusable scroll reveals.
- Refine interactive transitions.
- Implement reduced-motion support.

PHASE 7 — VALIDATION
- Run the existing build command.
- Run linting if configured.
- Check browser console errors.
- Test the main routes.
- Verify project and navigation links.
- Check mobile responsiveness.
- Fix regressions.

---

# 16. ACCEPTANCE CRITERIA

The implementation is complete only when:

1. The existing application builds successfully, or any pre-existing build failures are clearly documented.
2. Existing working routes and links are preserved.
3. The homepage has a consistent visual system.
4. The hero entrance animation matches the specified direction and timing.
5. The design works on desktop, tablet, and mobile.
6. Typography and colors are consistent.
7. Service and project layouts are responsive.
8. Buttons have visible hover and focus states.
9. Reduced-motion preferences are respected.
10. No essential content depends on animations running.
11. No fabricated business information has been introduced.
12. The browser console has no new errors.
13. No unnecessary animation or styling dependencies have been added.
14. The final implementation remains maintainable.

# 17. FINAL REPORT

After implementation, provide:

- Summary of changes.
- Files created or modified.
- Design tokens introduced.
- Animations implemented.
- Responsive improvements.
- Accessibility improvements.
- Dependencies added or reused.
- Build and lint results.
- Any unresolved issues.

Do not stop after producing a plan.

Inspect the codebase, implement the improvements, test the result, and report what was actually completed.
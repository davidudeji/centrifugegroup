# SYSTEM SPECIFICATION: TRANSPARENT OVERLAY NAVBAR & SEAMLESS HERO

## 1. ROLE AND OBJECTIVE

Act as a senior frontend engineer and UI/UX designer specializing in premium, modern, responsive websites.

Your task is to implement a professional landing-page layout using a transparent overlay navbar and a full-width hero section.

The design must replicate the structural behavior of the provided reference image: the background begins at the very top of the viewport, and the navigation bar sits directly on top of it.

The navbar, hero and trust section must feel like one continuous visual composition rather than two separate sections.

Prioritize:
- Visual hierarchy
- Premium aesthetics
- Responsive behavior
- Accessibility
- Readability
- Performance
- Maintainable code
- Consistency with the existing brand identity

IMPORTANT: Implement this design within the existing project. Do not rebuild unrelated components or change the established brand identity without authorization.

## 2. CORE DESIGN PRINCIPLE

Implement a transparent overlay navbar.

The background image or visual backdrop must extend behind the navigation bar and begin at the top edge of the browser viewport.

The navbar must overlay the hero section instead of occupying a separate vertical space above it.

Correct structural behavior:

- The page begins with the hero background.
- The navbar is positioned above the hero background.
- The hero content begins below the navigation area.
- The background remains visually continuous behind both elements.

Avoid:
- Placing the navbar in a separate opaque header above the hero.
- Adding an unintended gap between the navbar and hero.
- Duplicating the background across separate sections.
- Applying unnecessary borders or shadows that separate the two areas.

## 3. NAVBAR STRUCTURE

Create a responsive navigation bar with the following structure:

<header class="site-header">
  <nav class="navbar">
    <a class="brand" href="/" aria-label="Home">
      <!-- Existing brand logo or wordmark -->
    </a>

    <div class="nav-links">
      <!-- Existing primary navigation links -->
    </div>

    <div class="nav-actions">
      <!-- Existing CTA, login, or account controls -->
    </div>

    <button class="mobile-menu-toggle">
      <!-- Accessible mobile menu control -->
    </button>
  </nav>
</header>

Use the existing navigation labels, brand assets, and calls to action.

Do not invent additional business features or change the website's information architecture.

### Navbar positioning

Use:
- Position: absolute or fixed, depending on the existing scrolling requirements.
- Top: 0.
- Left: 0.
- Width: 100%.
- Appropriate z-index to keep navigation above the hero.
- Transparent background by default.

Recommended CSS:

.site-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: transparent;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  min-height: 80px;
  margin: 0 auto;
  padding: 0 5%;
}

Do not apply a maximum width to the outer header if doing so would prevent its background or positioning from spanning the viewport. Constrain the inner navigation content instead.

## 4. HERO BACKGROUND

The hero must occupy the full available viewport width.

Use the existing hero image, video, illustration, gradient, or background asset whenever possible.

The background must:
- Begin at the very top of the viewport.
- Extend behind the navbar.
- Fill the hero container without distortion.
- Maintain a visually balanced focal point.
- Adapt to desktop, tablet, and mobile screens.

For an image background, use:

.hero {
  position: relative;
  isolation: isolate;
  width: 100%;
  min-height: 100vh;
  background-image: url("/images/hero-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

Replace the sample image path with the project's actual asset.

For a mobile-first implementation, consider:

.hero {
  min-height: 100svh;
}

Use a sensible minimum height if the page contains substantial hero content.

Do not force every hero to exactly one viewport high if doing so would clip content on smaller screens.

### Background positioning

Desktop:
- Preserve the intended focal point.
- Avoid cropping important visual elements.
- Maintain sufficient space for the headline and CTA.

Mobile:
- Adjust background positioning to preserve the most important visual elements.
- Use a dedicated mobile image if one already exists.
- Avoid excessive cropping caused by applying desktop positioning unchanged.

## 5. OVERLAY AND TEXT READABILITY

Implement a subtle overlay between the background and foreground content.

The overlay must improve readability without destroying the original image.

Example:

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(4, 15, 35, 0.55) 0%,
    rgba(4, 15, 35, 0.30) 45%,
    rgba(4, 15, 35, 0.65) 100%
  );
}

Important implementation note:
Ensure the background and overlay layering is correct. Do not place the overlay above the navbar or hero content.

For complex designs, use a dedicated overlay element or CSS pseudo-element with an explicitly managed stacking context.

Adjust overlay opacity according to the existing brand palette and background brightness.

Never sacrifice text contrast for visual effects.

## 6. HERO CONTENT

Position the hero content below the navbar's visual area without pushing the entire hero background down.

Recommended structure:

<section class="hero" id="home">
  <div class="hero-content">
    <p class="hero-eyebrow">
      <!-- Existing supporting label -->
    </p>

    <h1>
      <!-- Existing primary headline -->
    </h1>

    <p class="hero-description">
      <!-- Existing supporting copy -->
    </p>

    <div class="hero-actions">
      <!-- Existing primary and secondary CTAs -->
    </div>
  </div>
</section>

Use flexbox or grid to position the content.

Example:

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: min(100% - 10%, 1200px);
  min-height: 100vh;
  margin-inline: auto;
  padding-top: 100px;
  padding-bottom: 64px;
}

The top padding creates visual breathing room beneath the overlaid navbar. It must not create a separate section or a gap above the hero background.

### Typography

Use the existing brand font when available.

Otherwise, select a modern, highly legible sans-serif typeface.

Recommended hierarchy:
- Eyebrow: small, medium-weight text.
- Headline: large, bold, and visually dominant.
- Description: readable, restrained line length.
- Primary CTA: high contrast and clearly identifiable.
- Secondary CTA: visually distinct but less prominent.

Suggested headline sizing:

.hero h1 {
  max-width: 900px;
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.hero-description {
  max-width: 640px;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1.7;
}

Preserve the existing website's content and meaning.

Do not add arbitrary marketing copy merely to fill empty space.

## 7. NAVIGATION COLORS

The navbar must remain visually integrated with the hero.

For dark backgrounds:
- Use a white or near-white logo where appropriate.
- Use white or light-neutral navigation text.
- Use the brand accent for the primary CTA.
- Ensure hover and focus states remain visible.

For light backgrounds:
- Use dark navigation text.
- Preserve sufficient contrast.
- Use the brand's existing primary accent for actions.

Do not hardcode white navigation text if the background requires a different treatment.

Use CSS variables for maintainability:

:root {
  --nav-height: 80px;
  --content-max-width: 1200px;
  --page-gutter: clamp(20px, 5vw, 72px);
  --header-text: #ffffff;
  --header-surface: transparent;
}

Replace these example values with the established brand tokens when available.

## 8. SCROLL BEHAVIOR

At the top of the page:
- Keep the navbar transparent.
- Allow the hero background to remain visible behind it.
- Avoid an unnecessary border or opaque background.

When the user scrolls:
- Optionally introduce a subtle translucent background.
- Preserve readability.
- Apply a restrained backdrop blur if appropriate.
- Keep the navbar accessible and visually consistent.

Example:

.site-header.is-scrolled {
  background: rgba(4, 15, 35, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.08);
}

Only activate the scrolled state when the navbar is intended to remain visible during scrolling.

If using an absolute-positioned header, do not add a scrolled state that assumes the header is fixed. Change its positioning deliberately if the design requires a persistent navbar.

Use a small, smooth transition:

.site-header {
  transition:
    background-color 200ms ease,
    box-shadow 200ms ease,
    backdrop-filter 200ms ease;
}

Avoid excessive motion or transitions that interfere with navigation.

## 9. RESPONSIVE NAVIGATION

Desktop:
- Display primary navigation links horizontally.
- Keep the logo aligned to the left.
- Keep primary actions aligned to the right.
- Maintain consistent spacing.
- Avoid wrapping navigation links unexpectedly.

Tablet:
- Reduce horizontal gaps when needed.
- Preserve the most important actions.
- Switch to the mobile menu before the layout becomes cramped.

Mobile:
- Keep the logo visible.
- Replace the desktop navigation with an accessible menu toggle.
- Use a sufficiently large touch target.
- Prevent the menu from being clipped by the hero container.
- Ensure the opened menu remains readable against the background.
- Support keyboard navigation and Escape to close the menu.
- Close the menu after navigation when appropriate.

Recommended breakpoint:

@media (max-width: 768px) {
  .navbar {
    min-height: 72px;
  }

  .hero-content {
    min-height: 100svh;
    padding-top: 110px;
    padding-bottom: 48px;
  }

  .hero h1 {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }
}

Treat these values as starting points. Adjust them to match the actual content and design.

## 10. ACCESSIBILITY

Follow WCAG accessibility principles.

Requirements:
- Use semantic header, nav, main, and section elements.
- Provide a descriptive accessible name for the logo link.
- Provide an accessible name for the mobile menu button.
- Expose the mobile menu state through aria-expanded.
- Associate the menu button with the menu using aria-controls.
- Support keyboard navigation.
- Provide visible focus indicators.
- Maintain readable foreground/background contrast.
- Avoid relying exclusively on color to communicate state.
- Respect prefers-reduced-motion.
- Ensure hidden mobile navigation links are not keyboard-focusable while the menu is closed.

Do not add unnecessary ARIA attributes when native HTML semantics are sufficient.

## 11. PERFORMANCE

Use existing optimized assets wherever possible.

Requirements:
- Avoid unnecessarily large background images.
- Prefer modern image formats when supported by existing assets and infrastructure.
- Avoid downloading multiple competing hero backgrounds.
- Prevent layout shifts.
- Use lightweight transitions.
- Avoid introducing new dependencies solely for this layout.
- Lazy-load below-the-fold imagery when appropriate.
- Do not lazy-load the main hero image if doing so would noticeably delay the initial visual rendering.

If using a CSS background image for the hero, consider preloading it only when appropriate for the page's loading strategy.

## 12. IMPLEMENTATION RULES

Before making changes:

1. Inspect the existing project structure.
2. Identify the current navbar, hero section, global styles, and responsive breakpoints.
3. Identify the current framework and styling conventions.
4. Locate the existing logo, background assets, and design tokens.
5. Determine whether the navbar currently uses normal flow, absolute positioning, or fixed positioning.

Then:

1. Modify the existing components rather than duplicating them.
2. Make the navbar overlay the hero background.
3. Correct the hero's background positioning and height.
4. Add the readability overlay.
5. Preserve existing content and brand identity.
6. Implement responsive navigation behavior.
7. Verify layering, scrolling, and keyboard accessibility.
8. Test the page at desktop, tablet, and mobile widths.

Do not:
- Replace the project's framework.
- Rewrite unrelated components.
- Remove existing functionality.
- Introduce unnecessary packages.
- Invent image paths without checking the actual project assets.
- leave placeholder implementations where working behavior is required.

If the project uses Next.js, follow the existing App Router or Pages Router architecture.

If the project uses React, keep the implementation component-based.

If the project uses plain HTML, CSS, and JavaScript, implement the same behavior without introducing a framework.

## 13. ACCEPTANCE CRITERIA

The implementation is complete only when all the following conditions are satisfied:

[ ] The hero background begins at the top edge of the viewport.

[ ] The background extends behind the navbar.

[ ] The navbar does not create an unwanted opaque band above the hero.

[ ] The logo, links, and actions remain readable.

[ ] Hero content does not overlap the navbar unintentionally.

[ ] The background image scales and crops appropriately.

[ ] The layout works on desktop, tablet, and mobile.

[ ] The mobile navigation opens, closes, and supports keyboard interaction.

[ ] Navigation remains usable while scrolling.

[ ] Any optional scrolled navbar state works correctly.

[ ] The implementation preserves the existing brand identity.

[ ] No unrelated functionality is broken.

[ ] No unnecessary dependencies are introduced.

[ ] The browser console contains no new errors.

[ ] The final implementation is tested at realistic viewport sizes.

## 14. FINAL DELIVERABLE

Implement the design directly in the existing project.

After implementation, provide:

1. A concise summary of the changes.
2. The files created or modified.
3. An explanation of how the navbar overlays the hero.
4. A description of responsive and scrolling behavior.
5. Any remaining issues discovered during testing.

Do not merely describe the implementation or provide disconnected code snippets.

Inspect the project, make the actual changes, and verify the result.

FINAL DESIGN PRINCIPLE:

The navbar must feel like a natural part of the hero rather than a separate box placed above it. The background should flow seamlessly from the top of the viewport into the hero section, creating a polished, modern, and visually integrated landing page.
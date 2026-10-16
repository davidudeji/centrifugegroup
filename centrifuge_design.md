# CENTRIFUGE GROUP
## Enterprise Website Design Excellence, UI/UX Refinement & Frontend Engineering Specification

**Project:** Centrifuge Group Corporate Website  
**Project type:** Existing website enhancement and design-system refinement  
**Primary objective:** Transform the existing website into a distinctive, polished, modern enterprise technology experience without unnecessarily rebuilding its architecture or sacrificing existing functionality.

**Implementation principle:** Audit first. Establish the design direction. Improve the system. Implement carefully. Test thoroughly. Refine until the result meets the acceptance criteria.

---

# 1. YOUR ROLE

Act as a senior digital product designer, creative director, UI/UX specialist, brand-focused web designer, and senior frontend engineer.

Approach this project as an experienced multidisciplinary team combining:

- Enterprise digital strategy.
- Visual art direction.
- Information architecture.
- Interaction and motion design.
- Accessibility engineering.
- Frontend architecture.
- Performance optimization.
- Conversion-focused content design.
- Quality assurance.

Your responsibility is not simply to make the website look more modern.

Your responsibility is to create a cohesive digital experience that communicates Centrifuge Group's capabilities, establishes trust, makes information easy to discover, and helps visitors understand how to engage with the company.

The result must feel deliberately designed for Centrifuge Group rather than generated from a generic corporate website template.

**Fundamental principle: Every significant design and engineering decision must have a clear purpose.**

Do not add visual effects, components, dependencies, or content simply because they are fashionable.

## 1.1 Definition of success

The finished website must demonstrate:

1. A recognizable and consistent brand identity.
2. Strong visual hierarchy and intentional composition.
3. Excellent typography, spacing, alignment, and image treatment.
4. Clear navigation and intuitive information architecture.
5. Purposeful, polished interactions.
6. Responsive layouts across mobile, tablet, laptop, and desktop.
7. Accessible controls and readable content.
8. Efficient loading and maintainable frontend code.
9. Functional links, buttons, menus, forms, and existing integrations.
10. Clear communication of the company's actual services and capabilities.

Visual excellence, usability, performance, and business effectiveness must reinforce one another.

---

# 2. PROJECT CONTEXT AND SOURCE OF TRUTH

The existing Centrifuge Group website and its approved content are the primary sources of truth.

Before making changes, inspect the existing codebase, project assets, website pages, and available brand references.

Use the following source hierarchy when resolving conflicting information:

1. Existing working functionality and verified application behavior.
2. Approved company information and existing business content.
3. Existing logo and official brand assets.
4. Existing project architecture and established coding conventions.
5. Approved design references and explicit project requirements.
6. Professional design judgment for decisions that remain unspecified.

Do not invent company facts, customer relationships, project results, certifications, statistics, testimonials, or capabilities.

If information cannot be verified, preserve the existing approved content or identify the uncertainty rather than fabricating a replacement.

## 2.1 Project constraints

- Improve the existing website rather than rebuilding it unnecessarily.
- Preserve working routes, navigation destinations, integrations, forms, and business functionality.
- Maintain the existing framework and package manager unless a compelling technical reason requires a change.
- Reuse existing components when they are suitable.
- Refactor inconsistent or fragile components when doing so improves maintainability.
- Avoid introducing dependencies that duplicate existing capabilities.
- Preserve SEO-relevant URLs and content wherever possible.
- Do not replace real application functionality with static demonstrations.
- Do not delete existing pages or features merely because they do not fit the new visual direction.

If a significant architectural change is genuinely necessary, explain the reason and minimize disruption.

---

# 3. PHASE ONE: COMPLETE WEBSITE AUDIT

Do not begin by immediately rewriting components or replacing CSS.

First, understand what exists.

## 3.1 Inspect the codebase

Identify:

- Framework and version.
- Package manager and available scripts.
- Application entry points.
- Routing and page structure.
- Global styles and design tokens.
- Component architecture.
- Styling conventions.
- Existing animation libraries.
- Available icon libraries.
- Logo and image assets.
- Font files and font-loading strategy.
- API clients and integrations.
- Form handling and validation.
- Environment-variable requirements.
- Build and deployment configuration.
- Existing automated tests.
- Current errors and technical limitations.

Inspect the package manifest and relevant configuration files before installing dependencies or changing project settings.

## 3.2 Audit the website experience

Review every accessible major page and reusable interface, including:

- Homepage.
- Navigation and dropdown menus.
- About and company information.
- Services and capability pages.
- Cloud and infrastructure pages, where present.
- Projects and case studies.
- Contact and inquiry forms.
- Resources and other existing content pages.
- Footer.
- Mobile navigation.
- Error and loading states, where applicable.

Inspect all available routes rather than assuming that the homepage represents the entire website.

## 3.3 Create a functionality inventory

Record the existing behavior of:

- Internal and external links.
- Navigation menus.
- Dropdowns and mega-menus.
- Mobile navigation.
- Forms and validation.
- Search, if available.
- Tabs and accordions.
- Calls to action.
- Authentication, if present.
- API-backed components.
- Third-party integrations.
- Downloadable resources.
- Project links.
- Analytics and tracking integrations.
- Any other meaningful interactive features.

Do not assume a feature works merely because its button is visible.

Verify its behavior when the environment allows.

## 3.4 Classify issues by impact

Classify identified issues into these categories:

- Brand inconsistency.
- Visual hierarchy.
- Layout and composition.
- Typography.
- Spacing and alignment.
- Imagery and asset quality.
- Navigation and information architecture.
- Interaction and usability.
- Accessibility.
- Responsiveness.
- Performance.
- SEO.
- Functional defects.
- Maintainability.

Prioritize issues using the following order:

**Priority 1 — Critical:** Broken functionality, inaccessible navigation, serious mobile failures, unusable forms, and major content or routing problems.

**Priority 2 — High:** Confusing hierarchy, inconsistent branding, poor layouts, weak navigation, and significant accessibility or performance issues.

**Priority 3 — Medium:** Typography inconsistencies, uneven spacing, weak imagery, awkward transitions, and inconsistent component behavior.

**Priority 4 — Polish:** Minor animation refinements, subtle alignment adjustments, decorative details, and other low-impact improvements.

Address high-impact problems before cosmetic refinements.

## 3.5 Establish a baseline

Before implementation, determine what can actually be verified.

Where tools are available:

- Run the existing application.
- Capture representative desktop and mobile screenshots.
- Record current build errors.
- Inspect browser-console errors.
- Test critical user journeys.
- Check existing responsive behavior.

Do not claim that a problem was introduced by the redesign if it already existed.

Do not claim that a problem was fixed without verifying the relevant behavior.

---

# 4. PHASE TWO: ART DIRECTION AND DESIGN STRATEGY

Establish a deliberate visual direction before implementing the redesign.

## 4.1 Brand positioning

The website should communicate a credible, capable, professional technology company that helps organizations address complex business and technical challenges.

The visual language should feel:

- Professional.
- Confident.
- Contemporary.
- Technically capable.
- Structured.
- Trustworthy.
- Distinctive without being unnecessarily experimental.

Avoid making the website feel like a generic startup landing page or a collection of unrelated service templates.

Do not automatically use dark backgrounds, glassmorphism, excessive gradients, oversized typography, or floating decorative objects.

Select design treatments based on the actual brand, content, and audience.

## 4.2 Establish one primary visual direction

Choose a coherent visual approach that works across the website.

For example, an appropriate direction might combine:

- Refined enterprise typography.
- Strong editorial composition.
- Restrained brand-color accents.
- Structured grids.
- Carefully selected technical imagery.
- Generous but controlled whitespace.
- Subtle, directional motion.
- Clear navigation and information hierarchy.

Treat this as a possible direction, not a rigid template.

The actual implementation must reflect the existing Centrifuge Group identity and the characteristics of its content.

## 4.3 Use references intelligently

If reference websites, screenshots, or design examples are available:

- Identify the specific qualities worth adopting.
- Study their spacing, typography, alignment, navigation, dropdown behavior, image treatment, and transitions.
- Adapt those principles to Centrifuge Group.
- Maintain Centrifuge Group's own branding and information architecture.

Do not copy an entire reference website indiscriminately.

Do not introduce visual patterns simply because a reference website uses them.

---

# 5. BRAND IDENTITY AND CENTRALIZED DESIGN SYSTEM

The website must use a consistent visual language across every page.

## 5.1 Inspect the existing brand

Inspect the existing Centrifuge Group logo and other approved assets before selecting colors or typography.

Determine the established brand colors from available source files, existing styles, or official brand references.

Do not invent precise brand values or replace the existing logo.

If a brand color is unclear, identify the best-supported value and make it easy to adjust centrally.

## 5.2 Establish design tokens

Create or refine a centralized token system using the project's existing styling approach.

The system should cover:

**Colors**
- Primary brand color.
- Secondary brand color.
- Accent color.
- Primary and secondary text.
- Muted text.
- Main background.
- Alternate background.
- Surface background.
- Borders and dividers.
- Hover and active states.
- Focus indicators.
- Success, warning, and error states where needed.

**Typography**
- Font families.
- Font weights.
- Display sizes.
- Heading sizes.
- Body sizes.
- Supporting text sizes.
- Line heights.
- Letter spacing.

**Layout**
- Content maximum width.
- Horizontal page padding.
- Grid gaps.
- Section spacing.
- Column proportions.

**Components**
- Border radii.
- Border widths.
- Shadow levels.
- Button heights.
- Input dimensions.
- Transition durations.
- Standard interaction easing.

Example token structure:

```css
:root {
  /* Replace with verified Centrifuge brand values. */
  --color-brand-primary: var(--brand-primary);
  --color-brand-secondary: var(--brand-secondary);
  --color-brand-accent: var(--brand-accent);

  --color-text-primary: #202938;
  --color-text-secondary: #536174;
  --color-text-muted: #687587;

  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-surface-subtle: #f6f8fa;
  --color-border: #e2e7ed;

  --container-max-width: 1280px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-28: 112px;

  --radius-sm: 4px;
  --radius-md: 8px;

  --motion-fast: 160ms;
  --motion-standard: 220ms;
  --motion-slow: 500ms;
}
```

The example's neutral colors and component values are starting points, not approved brand specifications.

Replace placeholders with values appropriate to the actual project. Do not reference undefined CSS variables.

## 5.3 Prevent design-token drift

Do not scatter arbitrary colors, spacing values, border radii, and transition timings throughout the codebase.

Use centralized tokens for recurring design decisions.

Local exceptions are permitted when justified by a particular composition or component.

The objective is consistent design, not forcing every element to look identical.

## 5.4 Color application

Use color to communicate hierarchy, identity, interaction, and content grouping.

- Maintain sufficient text contrast.
- Use accent colors selectively.
- Keep backgrounds consistent with the brand.
- Avoid alternating background colors without a clear reason.
- Avoid multiple competing gradients.
- Distinguish links from ordinary text.
- Ensure important information is not communicated by color alone.

Verify contrast for important text and interactive elements.

---

# 6. TYPOGRAPHY AND CONTENT PRESENTATION

Typography must make the website easier to understand while reinforcing the brand's identity.

## 6.1 Typography system

Inspect the current fonts before introducing replacements.

Prefer existing approved fonts when they are suitable.

If a new typeface is justified, choose one that supports the brand's character, readability, available weights, and performance requirements.

Define consistent styles for:

- Hero headlines.
- Page titles.
- Section headings.
- Subsection headings.
- Body paragraphs.
- Supporting text.
- Navigation.
- Buttons.
- Labels and captions.

Suggested desktop starting points:

| Element | Suggested size |
|---|---:|
| Hero heading | 52–72px |
| Page title | 44–60px |
| Section heading | 32–44px |
| Subsection heading | 22–28px |
| Body text | 16–18px |
| Supporting text | 14–16px |
| Small labels | 12–14px |

Adapt these values to the actual composition and existing brand.

Use fluid typography when appropriate:

```css
.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  font-weight: 600;
}
```

Do not apply these exact values indiscriminately to every page.

## 6.2 Typography quality requirements

- Control heading width and line wrapping.
- Use comfortable paragraph line heights.
- Avoid excessively long text lines.
- Maintain clear differences between headings and body text.
- Avoid unnecessary uppercase text.
- Avoid excessive letter spacing.
- Use font weights consistently.
- Prevent headings from colliding with adjacent imagery.
- Ensure mobile headings remain readable.
- Load fonts efficiently and avoid unnecessary font variants.

Do not center every heading or paragraph.

Choose alignment according to the content and composition.

## 6.3 Content integrity

Improve the presentation and clarity of existing copy without changing its factual meaning.

Preserve approved business information.

Do not invent services, partnerships, project outcomes, customer results, or company history.

When content is repetitive, reorganize it carefully rather than deleting important information.

When copy requires clarification, use the existing content as the starting point.

---

# 7. LAYOUT, GRID AND WHITESPACE

Create a layout system that feels cohesive while allowing each section to have its own composition.

## 7.1 Main container

Use a centered, responsive content container.

Suggested starting values:

- Maximum content width: approximately 1280px.
- Large desktop horizontal padding: 40–64px.
- Standard desktop padding: 32–48px.
- Tablet padding: 24–32px.
- Mobile padding: 20–24px.

Adapt the container to the existing layout and the content's requirements.

Full-width backgrounds may extend beyond the content container while their text and internal elements remain aligned to the grid.

## 7.2 Composition

Use CSS Grid and Flexbox according to the design requirements.

Appropriate patterns include:

- Two-column text and imagery layouts.
- Asymmetric editorial compositions.
- Three-column capability summaries.
- Full-width statements.
- Horizontal timelines.
- Image-led case studies.
- Vertical content sequences.
- Structured information sections.

Do not force every section into the same number of columns.

Avoid repeating identical rows of rounded cards throughout the website.

Vary the composition while maintaining consistent typography, spacing, colors, and interaction behavior.

## 7.3 Whitespace

Use spacing to clarify relationships and establish hierarchy.

Suggested spacing scale:

- 4px: Fine adjustments.
- 8px: Tight spacing.
- 12px: Compact content.
- 16px: Standard spacing.
- 24px: Related elements.
- 32px: Component separation.
- 48px: Smaller section spacing.
- 64px: Medium section spacing.
- 80–112px: Major desktop section spacing.

These values are flexible design tokens, not mandatory spacing for every component.

Reduce section spacing appropriately on smaller screens.

Do not make the website excessively long by adding whitespace without purpose.

Do not compress information-rich pages so tightly that they become difficult to read.

---

# 8. NAVIGATION AND DROPDOWN EXPERIENCE

Navigation is a critical shared component and must be treated as a first-class part of the design system.

## 8.1 Navbar

Inspect the existing navigation and preserve its routes and destinations.

Refine the navbar to establish a clear hierarchy between:

- Logo.
- Primary navigation items.
- Dropdown indicators.
- Important contact or conversion action.

Requirements:

- Preserve logo proportions and appropriate clear space.
- Maintain consistent alignment.
- Use deliberate spacing between links.
- Avoid crowding the navbar.
- Keep text readable.
- Make interactive states visually clear.
- Ensure the navbar works on narrow screens.
- Avoid introducing unnecessary decorative elements.

If the existing website uses a transparent, sticky, or changing navbar, preserve that behavior unless there is a clear usability reason to improve it.

Any changes must be implemented consistently across relevant pages.

## 8.2 Dropdown design

Use a clean dropdown panel that fits the existing brand.

Where appropriate, use a white or restrained neutral background that contrasts clearly with the surrounding navigation.

The dropdown should:

- Align naturally with its trigger or the intended navigation region.
- Have a clear relationship with the navbar.
- Use strong typographic hierarchy.
- Present bold, readable submenu titles.
- Avoid unnecessary logos inside submenu items.
- Include concise descriptions only when useful.
- Maintain consistent internal spacing.
- Use restrained borders or shadows when needed.
- Display visible hover, focus, and active states.

If the information architecture supports a wider menu, allow it to occupy a substantial portion of the navbar's width.

Do not introduce a large mega-menu simply because it looks impressive.

The menu structure must reflect the actual number, hierarchy, and relationships of the site's pages.

## 8.3 Dropdown motion

Use subtle directional movement to make menu transitions feel natural.

Suggested behavior:

- Fade in.
- Translate approximately 8–12px from the appropriate direction.
- Settle into position.
- Fade out cleanly.

Suggested duration: 160–240ms.

Requirements:

- Prevent flickering between the trigger and dropdown.
- Do not introduce pointer gaps that close the menu unexpectedly.
- Keep links immediately usable.
- Avoid animations that delay interaction.
- Support keyboard navigation.
- Support touch interaction.
- Handle Escape where appropriate.
- Close menus predictably when focus or interaction moves elsewhere.
- Ensure expanded states are communicated accessibly.

On mobile, use explicit tap-to-expand behavior instead of relying on hover.

Use semantic links for navigation and buttons for actions that control menu state.

---

# 9. HERO SECTION AND FIRST IMPRESSION

The hero must immediately communicate what Centrifuge Group does and help visitors understand where to go next.

Use existing approved messaging where available.

Potential messaging direction:

**Eyebrow:** CENTRIFUGE GROUP

**Headline:** Technology that moves your business forward.

**Supporting message:** From complex challenges to connected digital solutions. We design and develop tailored software that helps organizations simplify operations, connect systems, and create better experiences.

**Primary action:** Explore Our Solutions

**Secondary action:** Discuss Your Project

Treat this as a reference direction. Preserve the approved copy already present in the project unless a content change is required or explicitly authorized.

Do not add unsupported claims about the company's services or results.

## 9.1 Hero composition

Use a composition appropriate to the actual brand and available assets.

A two-column layout is suitable when it improves the message:

**Left side**
- Main headline.
- Supporting paragraph.
- Primary call to action.
- Secondary action, if useful.

**Right side**
- Relevant product interface.
- Approved project imagery.
- Technical illustration.
- Meaningful architectural visualization.
- Other relevant visual material.

The headline must remain the primary focal point.

The visual must support the message rather than merely fill space.

Ensure that the text, image, and calls to action form one coherent composition.

Avoid excessive decoration, arbitrary floating objects, and unrelated stock photography.

On mobile, reorder the content so the main message and primary action remain easy to discover.

## 9.2 Hero animation

Use Framer Motion if the existing React project already includes it or if its capabilities justify adding it.

Implement the intended movement:

1. The headline enters smoothly from the left.
2. Supporting text follows with a subtle stagger.
3. The main image enters from the right.
4. Calls to action appear in coordination with the message.
5. The final layout settles without ongoing movement.

Suggested starting values:

- Headline horizontal offset: approximately 24px.
- Supporting text offset: approximately 16px.
- Image horizontal offset: approximately 24px.
- Duration: approximately 500–750ms.
- Stagger interval: approximately 100–140ms.

Example animation concept:

```tsx
const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textItemVariants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
```

Implement the actual behavior using the animation library's supported APIs and the existing component architecture.

The image should use corresponding motion from the right.

Do not animate every child independently when a parent-level sequence would be cleaner.

Ensure that the content remains accessible if animation is disabled.

Avoid hiding meaningful content until a long animation finishes.

---

# 10. SECTION DESIGN AND INFORMATION ARCHITECTURE

Every major section must have a distinct role in the visitor's journey.

Consistency comes from the design system, not from forcing every section to use the same layout.

Before implementing a section, determine:

- What is its purpose?
- What should visitors notice first?
- What information do they need?
- What visual supports the message?
- What action should follow?
- How does it connect to the preceding and following sections?

## 10.1 Services and capabilities

Present existing services according to their actual importance and relationships.

Each service should explain, where applicable:

- What the service is.
- Which problem it addresses.
- Why it matters.
- Where the visitor can learn more.

Use concise descriptions and clear navigation links.

Use cards only where they improve grouping or scanning.

Alternative layouts may include open grids, typography-led lists, divided columns, or asymmetric compositions.

Preserve existing service pages and their routes.

Do not add a service merely to fill an empty layout.

## 10.2 Company introduction

Explain who Centrifuge Group is and what the company does.

Use verified company information.

Avoid repeating the hero's message word for word.

Use a clear heading, concise supporting narrative, and a relevant visual where appropriate.

Ensure that this section contributes new information rather than repeating the services section.

## 10.3 Projects and case studies

Provide an appropriate way to discover existing projects.

Each project may include:

- Project name.
- Approved preview image.
- Concise description.
- Relevant technologies or capabilities.
- Link to the project or case study.
- External destination where one exists and is accessible.

Use project data already present in the codebase or approved content.

Do not fabricate client names, project results, technologies, testimonials, or metrics.

For confidential projects, display only information approved for publication.

Ensure project links are meaningful and functional.

## 10.4 Process and methodology

Where the company has an established delivery process, communicate it clearly.

If the existing content supports it, a sequence might include:

1. Discovery.
2. Planning.
3. Design.
4. Development.
5. Testing.
6. Deployment and ongoing improvement.

Adapt the sequence to the company's actual methodology.

Do not present an illustrative process as a verified company procedure without supporting evidence.

Choose a timeline, numbered sequence, or other layout that best communicates the stages.

Avoid unnecessary cards when a simple connected sequence is clearer.

## 10.5 Call-to-action sections

Make each call to action relevant to the preceding content.

Examples include:

- Discuss Your Project.
- Explore Our Services.
- View Selected Projects.
- Contact Our Team.

Avoid placing several competing primary actions in the same section.

Use descriptive action labels.

Ensure each button leads to the correct page, form, or contact method.

Do not introduce a new conversion flow that lacks a valid destination or supporting functionality.

## 10.6 Footer

Maintain the existing footer functionality while improving its hierarchy and presentation.

Group relevant links into categories such as:

- Company.
- Services.
- Projects.
- Resources.
- Contact.
- Legal.

Use only categories supported by actual site content.

Ensure that the footer complements the navbar rather than mechanically repeating it.

Preserve existing legal links, contact details, social links, and other approved information.

Verify that destinations remain correct.

---

# 11. IMAGERY AND ART DIRECTION

Treat imagery as a fundamental design decision.

For every major visual asset, determine:

- What it communicates.
- Whether it supports the adjacent content.
- Whether its composition fits the layout.
- Whether its colors complement the brand.
- Whether the image quality is sufficient.
- Whether its aspect ratio is appropriate.
- Whether it is optimized for delivery.
- Whether it requires alternative text.

## 11.1 Asset rules

Prioritize assets in this order:

1. Existing approved company assets.
2. Existing project screenshots and demonstrations.
3. Approved project imagery.
4. Verified external assets where permitted.
5. Clearly identified placeholders when necessary.

Never reference nonexistent local image files.

Never invent image URLs.

Do not use unrelated stock photography when a more relevant technical visual is available.

## 11.2 Image implementation

- Use appropriate aspect ratios.
- Apply `object-fit` and `object-position` deliberately.
- Preserve image proportions.
- Avoid stretching or arbitrary cropping.
- Reserve image space to prevent layout shifts.
- Use responsive image techniques where supported.
- Lazy-load appropriate below-the-fold images.
- Prioritize the main hero asset when it is essential to the first impression.
- Avoid lazy-loading the primary image when doing so would unnecessarily delay its appearance.

Provide meaningful alternative text for informative images.

Use empty alternative text for purely decorative images.

---

# 12. MOTION DESIGN AND MICROINTERACTIONS

Motion must improve comprehension, feedback, or visual continuity.

It must not become the main attraction.

## 12.1 Appropriate motion patterns

Use animation where it serves a clear purpose:

- Hero entrance transitions.
- Navigation dropdowns.
- Button hover and active states.
- Small image transitions.
- Tabs and accordions.
- Meaningful loading indicators.
- Subtle section reveals.
- Page transitions where genuinely useful.

## 12.2 Timing and movement

Suggested starting points:

| Interaction | Duration |
|---|---:|
| Small hover feedback | 120–180ms |
| Standard control transition | 160–220ms |
| Dropdown transition | 160–240ms |
| Larger entrance animation | 400–800ms |

Use consistent easing.

Keep movement restrained, generally around 8–24px for small directional transitions.

Adjust the values according to the content, device, and actual interaction.

## 12.3 Motion restrictions

Avoid:

- Repeated bouncing.
- Excessive parallax.
- Large decorative movement.
- Scroll hijacking.
- Unnecessary infinite animations.
- Animations that delay access to content.
- Animations that cause layout shifts.
- Motion that makes reading difficult.
- Replaying entrance animations unnecessarily.
- Animating every element independently.

## 12.4 Reduced motion

Respect the user's operating-system reduced-motion preference.

For CSS transitions and animations, use an appropriate reduced-motion media query.

For JavaScript-driven animations, configure the animation library's reduced-motion behavior as well.

Do not rely exclusively on CSS to control JavaScript animations.

When reduced motion is enabled:

- Avoid unnecessary entrance movement.
- Remove nonessential parallax.
- Minimize animated transitions.
- Keep all content immediately available.
- Preserve meaningful functional feedback.

---

# 13. COMPONENT SYSTEM AND INTERACTION STATES

Build reusable components when they improve consistency and maintainability.

Potential shared components include:

- Navbar.
- Dropdown and mobile menu.
- Buttons.
- Text links.
- Form fields.
- Service summaries.
- Project previews.
- Accordions.
- Tabs.
- CTA sections.
- Footer.
- Loading and error states.

Do not create an abstraction for every individual element.

The component architecture should reflect meaningful reuse in the existing application.

## 13.1 Interactive states

Every interactive component must have appropriate states.

Depending on the component, these include:

- Default.
- Hover.
- Focus-visible.
- Active.
- Disabled.
- Loading.
- Expanded or collapsed.
- Selected.
- Error.
- Success.

Do not make every component animate, scale, glow, and change color simultaneously.

Use restrained feedback that communicates what happened.

## 13.2 Functional integrity

Every visible interactive element must have meaningful behavior.

Examples:

- Navigation links navigate correctly.
- Dropdown triggers open and close menus.
- Mobile menu controls respond to touch and keyboard input.
- Forms validate their inputs.
- Form submissions use the actual configured submission mechanism.
- Buttons perform their stated actions.
- Accordions expand and collapse.
- Tabs change the displayed content.
- Project links lead to valid destinations.
- Loading states correspond to actual asynchronous operations.
- Errors are communicated clearly.

Do not use placeholder event handlers for production interactions.

Do not simulate successful form submissions, transactions, or API operations when no real operation has occurred.

If a feature depends on an unavailable backend, API key, external service, or configuration, identify the dependency and implement as much of the actual behavior as the environment permits.

---

# 14. RESPONSIVE DESIGN

Design intentionally for different viewport sizes.

At minimum, test:

- 360px.
- 390px.
- 768px.
- 1024px.
- 1280px.
- 1440px.

These are representative test widths, not the only widths that matter.

## 14.1 Responsive requirements

Verify:

- Navbar layout and mobile-menu behavior.
- Dropdown positioning and expansion.
- Heading wrapping.
- Paragraph readability.
- Hero composition.
- Image scaling and cropping.
- Grid column transitions.
- Section spacing.
- Button sizing.
- Form usability.
- Footer layout.
- Long navigation labels.
- Overflow and clipping.
- Focus indicators.
- Touch-target usability.

## 14.2 Mobile-specific behavior

Do not merely shrink the desktop layout.

Where necessary:

- Stack columns in a logical order.
- Adjust heading sizes and line heights.
- Reposition images.
- Simplify complex decorative compositions.
- Reduce section spacing appropriately.
- Make navigation easier to operate.
- Ensure important actions remain discoverable.
- Prevent buttons from overflowing their containers.
- Avoid excessively tall sections caused by poor ordering.

Do not hide important content merely to simplify the mobile design.

Use breakpoints based on actual layout requirements rather than device names alone.

---

# 15. ACCESSIBILITY AND INCLUSIVE DESIGN

Accessibility is a core implementation requirement.

## 15.1 Semantic structure

Use:

- Semantic HTML elements.
- Logical heading hierarchy.
- Descriptive link text.
- Properly associated form labels.
- Accessible button names.
- Appropriate alternative text.
- Native controls where practical.

Use ARIA only when necessary and correctly.

Do not use generic clickable containers when a native button or link is more appropriate.

## 15.2 Keyboard navigation

Verify that:

- Interactive elements can be reached by keyboard.
- Focus order follows the visual and logical structure.
- Focus indicators remain visible.
- Dropdowns can be operated without a mouse.
- Escape closes appropriate overlays and menus.
- Focus is managed appropriately when dialogs open and close.
- Keyboard users are not trapped in unintended interactions.

## 15.3 Forms and feedback

Forms must provide:

- Clear labels.
- Understandable instructions.
- Useful validation messages.
- Accessible error identification.
- Submission feedback.
- Loading feedback when necessary.
- Correct focus behavior when errors occur.

Do not rely on color alone to communicate errors or success.

## 15.4 Contrast and motion

Check text and control contrast against their actual backgrounds.

Maintain readable text sizes and clear interaction states.

Respect reduced-motion preferences.

Do not remove native focus outlines without providing a visible and accessible replacement.

---

# 16. PERFORMANCE, SEO AND TECHNICAL QUALITY

The redesigned website must remain efficient and maintainable.

## 16.1 Performance

- Avoid unnecessary dependencies.
- Avoid duplicate component implementations.
- Minimize unnecessary client-side rendering.
- Optimize images and fonts.
- Use lazy loading where appropriate.
- Prevent layout shifts.
- Avoid expensive animation effects.
- Remove obsolete code only after confirming it is unused.
- Avoid unnecessarily large JavaScript bundles.
- Preserve appropriate caching and deployment behavior.
- Keep critical content available without unnecessary delays.

Do not add an animation library solely for a simple CSS transition.

Do not introduce a new styling system when the existing system can meet the requirements.

## 16.2 SEO

Preserve existing SEO-relevant content and routes.

Where appropriate, verify:

- Page titles.
- Meta descriptions.
- Canonical URLs.
- Heading structure.
- Descriptive link text.
- Image alternative text.
- Open Graph metadata.
- Internal linking.
- Indexability.
- Sitemap and robots configuration.
- Structured data, where accurate and relevant.

Do not invent organization details or structured-data claims.

Follow the existing framework's conventions.

If URLs must change, provide appropriate redirects and preserve important existing destinations.

## 16.3 Code quality

Write code that is:

- Readable.
- Maintainable.
- Consistent with existing conventions.
- Accessible.
- Responsive.
- Efficient.
- Appropriately typed when using TypeScript.
- Organized around clear component responsibilities.

Avoid:

- Giant components with unrelated responsibilities.
- Duplicate styles.
- Fragile CSS selectors.
- Excessive nested conditionals.
- Unexplained magic numbers.
- Unnecessary abstractions.
- Hardcoded secrets.
- Unused dependencies.
- Destructive changes without justification.
- Fake functionality.
- Suppressed errors that conceal real problems.

Prefer targeted improvements over unnecessary rewrites.

---

# 17. IMPLEMENTATION WORKFLOW

Follow the workflow below.

## Phase 1 — Understand

Inspect the codebase, pages, assets, routing, existing interactions, and project constraints.

Establish what must be preserved.

## Phase 2 — Audit

Identify visual, functional, responsive, accessibility, and performance issues.

Prioritize issues by impact.

## Phase 3 — Art-direct

Define the visual direction, typography, brand palette, layout principles, imagery approach, and motion strategy.

Use existing brand assets as the source of truth.

## Phase 4 — Plan

Define:

- Design tokens.
- Component responsibilities.
- Page-level changes.
- Navigation behavior.
- Responsive layouts.
- Interaction states.
- Implementation order.
- Acceptance criteria.

Keep the plan proportional to the project's complexity.

Do not spend excessive time planning when the requirements are already clear.

## Phase 5 — Implement

Improve the shared design system and high-impact components first.

Then apply the system across the website.

Prioritize:

1. Critical functional issues.
2. Shared navigation and layout.
3. Typography and visual hierarchy.
4. Hero and major page compositions.
5. Section-level refinements.
6. Interaction and animation.
7. Responsive refinements.
8. Accessibility and performance improvements.

Preserve working functionality throughout implementation.

## Phase 6 — Validate

Run the available build, test, and development commands.

Fix issues discovered during verification.

Test the actual application when a runtime environment is available.

Do not stop after editing files if verification is possible.

## Phase 7 — Refine

Inspect the resulting interface.

Correct:

- Misalignment.
- Awkward heading wraps.
- Inconsistent spacing.
- Poor image cropping.
- Inconsistent component states.
- Weak contrast.
- Unnecessary decoration.
- Mobile layout problems.
- Animation inconsistencies.
- Functional regressions.

Repeat the implementation and verification cycle until the important acceptance criteria are satisfied.

## Phase 8 — Deliver

Summarize what changed, what was verified, and what remains.

Never claim to have tested behavior that was not actually tested.

---

# 18. QUALITY ASSURANCE AND TESTING

Testing is part of implementation, not an optional final recommendation.

## 18.1 Build verification

Where the environment permits:

- Run the existing build command.
- Run available automated tests.
- Run linting and type checking when configured.
- Resolve errors introduced by the changes.
- Check for missing imports and invalid references.
- Verify that required environment variables are documented.
- Confirm that the application starts correctly.

Do not alter package versions unnecessarily to make the project fit a preferred implementation.

## 18.2 Functional testing

Test the following where applicable:

- Main navigation.
- Every dropdown.
- Mobile menu.
- Internal routes.
- External links.
- Calls to action.
- Contact forms.
- Form validation.
- Form submission and error handling.
- Accordions and tabs.
- Project links.
- Footer links.
- Keyboard navigation.
- Reduced-motion behavior.

Use the actual configured integrations.

Do not claim that a backend integration works merely because the frontend displays a success message.

## 18.3 Visual testing

When browser access or screenshots are available, inspect representative pages at desktop and mobile widths.

Look for:

- Incorrect alignment.
- Inconsistent spacing.
- Broken grids.
- Unexpected text wrapping.
- Missing assets.
- Image distortion.
- Overflow.
- Weak hierarchy.
- Excessive whitespace.
- Inconsistent brand colors.
- Navigation collisions.
- Poor contrast.
- Unintended animation behavior.

Compare the result against the intended design direction.

If visual inspection tools are unavailable, state that visual verification remains incomplete.

## 18.4 Performance and accessibility testing

Use available tools to assess:

- Loading performance.
- Layout stability.
- Excessive JavaScript.
- Accessibility violations.
- Keyboard usability.
- Color contrast.
- Responsive behavior.

Use Lighthouse or equivalent tools when available.

Treat automated scores as diagnostic evidence rather than proof that the website is perfect.

---

# 19. VISUAL QUALITY REVIEW

Evaluate the completed work against these categories.

| Category | Evaluation question |
|---|---|
| Brand identity | Does the website clearly reflect Centrifuge Group? |
| Visual distinction | Does it avoid generic template-like composition? |
| Typography | Is the hierarchy readable and intentional? |
| Composition | Are alignment, balance, and spacing well executed? |
| Imagery | Are visuals relevant and properly integrated? |
| Hierarchy | Can visitors quickly identify the important information? |
| Consistency | Do pages and components share a design language? |
| Navigation | Can visitors find the information they need? |
| Interaction | Do controls behave predictably and feel polished? |
| Responsiveness | Does the experience work across screen sizes? |
| Accessibility | Can users navigate and understand the interface accessibly? |
| Performance | Does the implementation avoid unnecessary loading costs? |
| Functionality | Do existing and updated features work as intended? |
| Content | Is the information clear, accurate, and useful? |
| Business effectiveness | Does the experience support meaningful visitor actions? |
| Maintainability | Is the implementation understandable and sustainable? |

Score each category from 1 to 10 when sufficient evidence is available.

Do not assign high scores merely because the page looks attractive.

Use the review to identify remaining problems and fix them.

Prioritize major functionality, hierarchy, usability, and responsive issues over minor decorative details.

---

# 20. DEFINITION OF DONE

The project is ready for delivery only when the following conditions have been addressed.

## Design

- [ ] The website has a coherent, recognizable visual direction.
- [ ] Existing brand identity is preserved.
- [ ] Colors and typography are consistent.
- [ ] Major sections have intentional compositions.
- [ ] Whitespace supports hierarchy.
- [ ] Imagery is relevant and appropriately displayed.
- [ ] Components do not rely on repetitive generic layouts.
- [ ] Animations are purposeful and restrained.

## Functionality

- [ ] Existing routes are preserved.
- [ ] Navigation links work.
- [ ] Dropdowns and mobile navigation work.
- [ ] Existing forms and integrations are preserved.
- [ ] Calls to action have meaningful destinations.
- [ ] Interactive components behave correctly.
- [ ] No decorative controls have been introduced as fake functionality.

## Responsive behavior

- [ ] Mobile layouts have been checked.
- [ ] Tablet layouts have been checked.
- [ ] Desktop layouts have been checked.
- [ ] No unintended horizontal overflow remains.
- [ ] Important content remains visible and readable.
- [ ] Touch and keyboard interaction are supported.

## Accessibility

- [ ] Semantic HTML is used appropriately.
- [ ] Interactive controls have accessible names.
- [ ] Keyboard navigation works.
- [ ] Focus indicators remain visible.
- [ ] Forms provide understandable feedback.
- [ ] Important text has sufficient contrast.
- [ ] Reduced-motion preferences are respected.

## Engineering

- [ ] The existing architecture has been respected.
- [ ] No unnecessary dependencies have been introduced.
- [ ] The build has been verified where possible.
- [ ] Available tests have been run.
- [ ] Errors introduced by the changes have been resolved.
- [ ] SEO-relevant content and routes have been preserved.
- [ ] Remaining technical limitations are documented.

Mark each item as verified, not verified, or not applicable.

Do not mark a condition as verified without supporting evidence.

---

# 21. FINAL DELIVERY REPORT

After implementation, provide a concise but informative report containing:

### 1. Summary
Explain the main improvements and their intended benefits.

### 2. Design decisions
Describe the visual direction, branding, typography, layout, and interaction choices.

### 3. Pages and components
Identify the pages, shared components, and important styles changed.

### 4. Functional changes
Explain what functionality was improved and which existing features were preserved.

### 5. Verification
List the actual build commands, tests, responsive checks, and accessibility checks performed, together with their results.

### 6. Remaining issues
Identify any unresolved defects, unverified behavior, unavailable integrations, or missing assets.

### 7. Running and deployment
Explain how to run the project and identify any required configuration.

Do not present incomplete work as production-ready.

Do not claim a test passed unless it was actually executed and its result was checked.

---

# 22. OPERATING RULES

Throughout the project:

1. Think like a creative director before acting like a coder.
2. Understand the existing website before modifying it.
3. Preserve working functionality.
4. Make design decisions based on brand, content, and audience.
5. Prefer distinctive composition over generic templates.
6. Use color, typography, spacing, and imagery intentionally.
7. Keep animation meaningful.
8. Make accessibility part of implementation.
9. Prioritize high-impact improvements.
10. Avoid unnecessary dependencies and architectural changes.
11. Never fabricate company information, assets, integrations, or test results.
12. Implement requested changes rather than merely describing how to implement them when the necessary tools are available.
13. Inspect the result when visual inspection is possible.
14. Fix discovered problems rather than simply documenting them.
15. Be transparent about environmental limitations.

If a requested effect is technically difficult, find a practical implementation that preserves its design intent.

If a feature cannot be completed because a dependency, credential, backend, or external service is unavailable, implement the remaining work and explain the specific limitation.

Do not sacrifice functionality, accessibility, or performance for visual novelty.

---

# FINAL COMMAND

Audit and enhance the existing Centrifuge Group website according to this specification.

Begin by understanding the current codebase, brand assets, routes, content, and working functionality.

Establish a distinctive visual direction grounded in the existing brand.

Create or refine the design system, improve the shared components, and implement the design consistently across the relevant pages.

Preserve existing functionality and business information.

Refine the composition, typography, spacing, imagery, navigation, interactions, responsive layouts, accessibility, and performance.

Run the available tests, inspect the actual interface when possible, and fix discovered issues.

Deliver a coherent, visually distinctive, commercially useful, and technically maintainable enterprise website.

**Do not stop at the audit. Do not stop at the design plan. Do not stop when the page merely looks attractive. Implement the improvements, verify what can be verified, and clearly report what remains.**

The final result should demonstrate professional design judgment, excellent frontend engineering, and a consistent Centrifuge Group brand experience across the entire website.
AI BUILD SPECIFICATION: CENTRIFUGE GROUP WEBSITE REDESIGN
Enterprise Blue & Orange Design System · Premium UI/UX · Animated Mega Navigation · Responsive Architecture
Project: Centrifuge Group Corporate Website
Objective: Build a polished, modern enterprise technology website inspired by the reference website's excellent navigation, spacing, typography, and visual hierarchy, while maintaining Centrifuge's own brand identity through a consistent blue-and-orange color system.
Design direction: Enterprise-grade, modern, confident, clean, spacious, and technologically sophisticated.
Primary design reference: The website screenshots supplied in this conversation. Use them to understand the design principles, particularly the full-width mega menu, organized navigation, spacious layouts, and smooth transitions. Do not copy the reference website's logo, text, proprietary assets, or exact visual identity.
Primary requirement: Every page and component must feel like part of the same Centrifuge Group website. Blue and orange must be integrated consistently throughout the navigation, hero sections, buttons, links, cards, animations, illustrations, and footer.

1. PROJECT OBJECTIVES
   Redesign and refine the Centrifuge Group website into a cohesive corporate digital experience that communicates trust, technical expertise, innovation, and business value.
   The website should help visitors understand:

- Who Centrifuge Group is.
- What the company does.
- Which industries it serves.
- What software solutions and services it offers.
- How it approaches project development and management.
- Which projects and digital products it has delivered.
- What cloud and infrastructure services it offers.
- How potential clients can engage with the company.
  The finished website must be visually impressive without sacrificing usability, accessibility, responsiveness, performance, or maintainability.
  Core design principles

1. Brand consistency: Blue establishes trust and professionalism; orange provides emphasis and directs attention.
2. Clarity: Visitors should understand each section without having to decipher complicated layouts.
3. Generous spacing: Use deliberate whitespace to separate content and establish hierarchy.
4. Strong typography: Large, confident headings paired with readable body text.
5. Purposeful animation: Motion should guide attention and communicate transitions, not distract.
6. Structured navigation: Visitors must be able to explore complex services through an intuitive mega menu.
7. Reusable architecture: Shared components should provide the same visual and behavioral standards across the website.
8. Enterprise credibility: Use real company information, relevant imagery, clear service descriptions, and meaningful calls to action.
9. BRAND IDENTITY AND COLOR SYSTEM
   2.1 Primary brand direction
   Build a unified blue-and-orange design system.
   Blue should dominate the brand experience, while orange should be used strategically to highlight important interactions and visual details.
   Do not distribute blue and orange randomly across the interface.
   Proposed color tokens
   Use the following as initial design tokens. Verify them against the existing Centrifuge logo and brand assets before implementation.
   Token Color Intended use
   Primary Blue #0756A5 Primary brand color, links, buttons, and interactive elements
   Deep Blue #073B70 Dark backgrounds, footer, and high-contrast sections
   Navy #102A43 Headings, dark text, and enterprise visual elements
   Bright Blue #1677D2 Hover states, highlights, and secondary accents
   Brand Orange #F28C28 Primary accent, selected states, and key highlights
   Orange Hover #D96F12 Hover state for orange buttons and links
   White #FFFFFF Main surfaces, navigation dropdowns, and cards
   Light Background #F5F8FC Alternating section backgrounds
   Light Blue #EAF3FC Subtle highlights and informational panels
   Body Text #344054 Paragraphs and supporting content
   Muted Text #667085 Secondary descriptions and metadata
   Border #E2E8F0 Dividers, card borders, and form fields

Important: These colors establish the proposed system, not an instruction to change the existing logo. Preserve the official logo and derive the final tokens from its actual blue and orange tones where necessary.
2.2 The 60–30–10 principle
Use an approximate distribution to prevent visual clutter.

- 60% neutral surfaces: White and very light backgrounds.
- 30% blue: Navigation, major visual areas, headings, links, and important brand elements.
- 10% orange: CTAs, active indicators, selected elements, and small visual accents.
  This is a directional guideline rather than a strict measurement.
  Appropriate use of blue
  Use blue for:
- The primary navigation background or brand treatments.
- Important section headings.
- Primary links and interactive elements.
- Selected service categories.
- Dark hero backgrounds where appropriate.
- Footer backgrounds.
- Subtle decorative lines and diagrams.
  Appropriate use of orange
  Use orange for:
- The main CTA or a carefully selected secondary CTA.
- Small navigation indicators.
- Active menu markers.
- Selected words within headlines.
- Eyebrow labels.
- Small icon accents.
- Important metrics or statistics.
- Focused highlights in diagrams and illustrations.
  Avoid
- Large orange backgrounds throughout the site.
- Blue and orange gradients on every component.
- Orange body text on white when contrast is insufficient.
- Multiple competing accent colors.
- Unnecessary glassmorphism, glowing edges, and decorative gradients.
- Giving every card a different color.
  The visual result should feel professional and restrained.

3. TYPOGRAPHY SYSTEM
   Create a consistent typographic hierarchy across all pages.
   Recommended typography
   Use Inter as the primary font, or retain an existing brand font if one is already established.
   Use a sans-serif typeface with clear letterforms, strong headings, and excellent readability at smaller sizes.
   Typography scale
   Element Desktop size Mobile size Weight
   Hero heading 56–72px 36–44px 700
   Page heading 44–56px 32–40px 700
   Section heading 32–40px 26–32px 650–700
   Card heading 20–24px 18–22px 600
   Body text 16–18px 16px 400
   Navigation 14–15px 16px 500
   Mega menu heading 12–13px 12px 700
   Mega menu links 14–15px 15–16px 400–500
   Eyebrow labels 12–14px 12px 700

Use fluid typography where appropriate.
For example:
.hero-title {
font-size: clamp(2.5rem, 5vw, 4.5rem);
line-height: 1.05;
letter-spacing: -0.04em;
font-weight: 700;
}

Avoid oversized text that wraps awkwardly on laptops or small mobile devices. 4. GLOBAL LAYOUT AND SPACING
The website should feel spacious and carefully aligned.
Layout rules

- Use a consistent centered content container.
- Set a maximum content width of approximately 1280–1440px.
- Use responsive horizontal padding.
- Align headings, paragraphs, images, cards, and buttons to a predictable grid.
- Use consistent vertical spacing between sections.
- Avoid placing text too close to the edges of the viewport.
- Use a consistent border-radius system.
- Ensure every section feels connected to the sections above and below it.
  Suggested design tokens
  :root {
  --brand-blue: #0756A5;
  --brand-blue-dark: #073B70;
  --brand-navy: #102A43;
  --brand-blue-bright: #1677D2;

  --brand-orange: #F28C28;
  --brand-orange-hover: #D96F12;

  --surface-white: #FFFFFF;
  --surface-light: #F5F8FC;
  --surface-blue: #EAF3FC;

  --text-primary: #102A43;
  --text-body: #344054;
  --text-muted: #667085;

  --border-default: #E2E8F0;

  --container-width: 1360px;
  --page-gutter: clamp(20px, 4vw, 64px);

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  --motion-fast: 140ms;
  --motion-normal: 220ms;
  --motion-slow: 450ms;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  }

Treat these tokens as the single source of truth. Components should reference them rather than introduce arbitrary colors and spacing values. 5. NAVIGATION BAR
The navigation bar is one of the most important elements of the redesign.
Implement a clean, enterprise-style navbar inspired by the supplied reference.
Desktop structure
┌────────────────────────────────────────────────────────────────────┐
│ │
│ CENTRIFUGE Solutions⌄ Services⌄ Industries⌄ Projects Company⌄ │
│ [Get in Touch]│
│ │
└────────────────────────────────────────────────────────────────────┘

Adapt the exact menu labels to the existing website's content and routes.
Visual specifications

- Preserve the official Centrifuge logo.
- Position the logo on the left.
- Keep the primary navigation aligned horizontally.
- Place the main CTA on the right.
- Use sufficient spacing between navigation items.
- Keep the header visually balanced at common laptop widths.
- Use the official blue brand color for the header or a restrained white header with blue navigation elements, depending on the existing site direction.
- Use orange for the active navigation indicator and carefully selected interaction highlights.
- Avoid oversized navigation labels.
- Do not place decorative icons beside every navigation item.
  Navbar interaction
  When a user hovers over or focuses on a menu item that contains submenus:

1. Highlight the active menu trigger.
2. Display the corresponding mega menu.
3. Animate the menu into view.
4. Keep the active state visually connected to the dropdown.
5. Allow users to move their pointer into the menu without it closing unexpectedly.
   Use a subtle orange underline, indicator, or chevron transition to identify the active trigger.
   The active indicator must remain consistent across every dropdown.
   Sticky behavior
   If the existing website uses a sticky header, preserve or refine it.
   When scrolling:

- Keep the navbar visible if that supports the established design.
- Avoid a large layout jump.
- Use a subtle background or shadow transition if necessary.
- Ensure the mega menu remains correctly positioned beneath the header.
- Do not allow the sticky header to obscure page headings or anchor targets.

6. FULL-WIDTH MEGA MENU
   This is a high-priority component. Reproduce the interaction principles shown in the reference screenshots.
   The mega menu must feel spacious, responsive, and integrated into the navbar.
   6.1 Visual design
   When activated, display a broad dropdown panel beneath the navigation.
   Required characteristics

- White or very light neutral background.
- Dark blue headings.
- Readable submenu links.
- No repeated logo inside the dropdown.
- Multiple organized columns.
- Generous internal padding.
- Clear spacing between categories.
- Optional subtle vertical dividers.
- Restrained shadow.
- Subtle border or radius where appropriate.
- Consistent orange accents for hover and active states.
  The panel should span approximately 94–96% of the viewport width, subject to the navbar's container and responsive layout.
  On wide screens, align the menu to the primary content container.
  Avoid allowing the dropdown to extend beyond the viewport.
  6.2 Example content structure
  Use the following as an illustrative structure, adapting it to verified Centrifuge offerings.
  SOLUTIONS
- Enterprise Applications
- Custom Software Development
- Business Automation
- System Integration
  SERVICES
- Software Development
- IT Consulting
- Cloud Services
- Project Development & Management
  INDUSTRIES
- Healthcare
- Financial Services
- Logistics
- Public Sector
  COMPANY
- About Centrifuge
- Our Approach
- Projects
- Careers
- Contact
  Do not invent products or claim services that the company does not actually provide. Reuse existing website content wherever possible.
  6.3 Column layout
  Use CSS Grid.
  Example:
  .mega-menu\_\_grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;
  }

Each column should have a clear heading and a vertically spaced list of links.
On smaller desktop screens, reduce the gap before reducing text readability.
If four columns no longer fit comfortably, switch to a three-column or two-column arrangement.
6.4 Link styling
Normal state:

- Dark blue or dark neutral text.
- No unnecessary decoration.
- Clear visual separation between links.
  Hover state:
- Text transitions to the primary blue.
- An optional small orange indicator appears.
- Background highlighting may be used sparingly.
- The entire link remains an accessible click target.
  Do not animate links with large movements.
  6.5 Directional animation
  The mega menu must transition smoothly from a slight horizontal offset.
  Implement directional entrance animations based on the active menu item.
  For example:
- Solutions: slight movement from the left.
- Services: slight movement from the right.
- Company: slight movement from the left.
  Use consistent timing and easing.
  Recommended values:
  Property Value
  Initial opacity 0
  Initial horizontal offset 10px
  Initial vertical offset 5px
  Final opacity 1
  Final horizontal offset 0
  Final vertical offset 0
  Entrance duration 200–260ms
  Exit duration 120–180ms
  Easing Ease-out

Do not make the menu slide across the entire screen.
Prevent flickering
Treat the navbar trigger and mega menu as a single interaction region.
The menu must not close when the pointer moves from the trigger into the panel.
Use a small, intentional closing delay if necessary, and cancel the delay when the user enters another trigger or the dropdown.
When switching between menu items, update the panel smoothly rather than unnecessarily closing and reopening the entire menu.
Accessibility

- Support keyboard navigation.
- Support Enter and Space to activate menu triggers.
- Use Escape to close an open menu.
- Use appropriate aria-expanded and aria-controls attributes.
- Ensure visible keyboard focus.
- Do not rely exclusively on hover.
- Support touch devices with explicit tap interactions.

7. HERO SECTION
   Create a visually strong hero that establishes the company's value immediately.
   Use the existing Centrifuge hero concept and content wherever appropriate.
   Hero copy
   Eyebrow: CENTRIFUGE GROUP
   Headline:
   Technology that moves your business forward.
   Supporting headline:
   From complex challenges to connected digital solutions.
   Description:
   We design and develop tailored software solutions that help organizations simplify operations, connect systems, and create better experiences. From enterprise applications to integrations and cloud platforms, we turn complex requirements into technology built for growth.
   Primary CTA: Explore Our Solutions
   Secondary CTA: Discuss Your Project
   Adjust CTA destinations to existing working routes or contact functionality.
   Hero layout
   Use a two-column layout on desktop.
   Left column:

- Eyebrow label.
- Large headline.
- Supporting headline or paragraph.
- Primary and secondary CTA buttons.
  Right column:
- A relevant, high-quality image or custom visual representing enterprise technology, software systems, cloud infrastructure, or connected digital operations.
  Do not use generic stock imagery that feels unrelated to the company's services.
  Hero animation
  Use Framer Motion if the project is React-based.
  The animation should follow this sequence:

1. The headline moves from the left into its final position.
2. The supporting copy appears underneath, following the headline.
3. The text becomes visible gradually as it enters.
4. The right-side image moves from right to left into position.
5. The CTA buttons appear after the main text begins to settle.
   Motion guidelines

- Use a small horizontal translation.
- Use opacity transitions.
- Use a consistent easing curve.
- Avoid excessive scale effects.
- Avoid bouncing or elastic motion.
- Avoid delaying the content so long that the page initially appears empty.
- Ensure the hero remains readable and usable if animations are disabled.
  Use orange to emphasize one carefully chosen phrase, eyebrow detail, or small graphic element. Keep the headline predominantly blue or white, depending on the background.
  Background treatment
  Choose either:
- A white or light background with blue typography and orange accents; or
- A deep blue background with white text and restrained orange highlights.
  Do not alternate between unrelated visual styles. The choice should fit the existing Centrifuge brand and the image used.

8. WEBSITE-WIDE PAGE STRUCTURE
   Apply the design system to the complete website, not only the homepage.
   Preserve existing pages, features, and functioning links unless a change is explicitly required.
   Homepage
   Recommended structure:
1. Global navbar.
1. Hero section.
1. Company introduction.
1. Core solutions.
1. Services overview.
1. Industries served.
1. Featured projects.
1. Technology and delivery capabilities.
1. Cloud and infrastructure services, where applicable.
1. Project engagement process.
1. Call-to-action section.
1. Global footer.
   Use alternating white and light-blue section backgrounds to establish visual rhythm.
   Use dark-blue sections selectively for high-impact content.
   Orange should guide attention toward important actions rather than decorate every section.
   Solutions pages
   Each solution page should contain:

- Page-specific hero.
- A clear explanation of the business problem.
- The proposed solution.
- Key capabilities.
- Business benefits.
- Relevant use cases.
- Related services or projects.
- A clear CTA.
  Services pages
  Organize services into a coherent structure.
  Each service page should explain:
- What the service involves.
- Which business problems it addresses.
- How Centrifuge approaches delivery.
- Relevant capabilities.
- Expected business value, without unsupported numerical claims.
- How clients can initiate a project.
  Industries pages
  Each industry page should use relevant examples, language, and imagery.
  Avoid creating near-identical pages that only change the industry name.
  Projects page
  Create a dedicated project portfolio.
  Each project card should support:
- Project name.
- Relevant image or screenshot.
- Short description.
- Industry or category.
- Technologies or capabilities, where appropriate.
- A working link to the project or a case study.
  If a project is not publicly accessible, provide a case-study page or an appropriate alternative.
  Do not invent client names, testimonials, performance metrics, or project outcomes.
  Company pages
  Provide clear access to:
- About Centrifuge.
- Project Development & Management.
- Careers.
- Contact.
- Other existing company pages.
  Preserve established company content and routes.
  Cloud and infrastructure pages
  Integrate the cloud and infrastructure content relevant to Centrifuge's actual offerings.
  Use a consistent page structure and link related services together.
  Do not claim certifications, availability guarantees, infrastructure ownership, or service-level agreements unless verified.

9. CONSISTENT CARD AND SECTION DESIGN
   Every card should belong to the same design system.
   Card appearance

- White background on neutral surfaces.
- Light border.
- Consistent corner radius.
- Comfortable internal padding.
- Dark-blue headings.
- Readable descriptions.
- Restrained use of orange.
- Consistent icon sizing.
  Hover behavior
  On hover:
- Slightly emphasize the border.
- Transition the title or link toward the primary blue.
- Optionally raise the card by 2–4px.
- Reveal an orange arrow or subtle accent if it helps communicate interactivity.
  Keep the movement short and restrained.
  Do not give every card a different gradient, shadow, or animation.
  Section headings
  Use a consistent pattern:
  EYEBROW LABEL

Clear, meaningful section heading.

A concise explanation that establishes why
the section matters to the visitor.

Use orange for the eyebrow or a small accent line.
Maintain consistent heading widths and paragraph lengths. 10. BUTTON DESIGN SYSTEM
Create reusable primary, secondary, and text-link buttons.
Primary button

- Blue background.
- White text.
- Clear hover state.
- Comfortable horizontal padding.
- Consistent height.
- Visible keyboard focus.
  Secondary button
  Use either:
- White background with a blue border and blue text; or
- Transparent background with a blue border.
  For dark-blue backgrounds, use a white or light-background treatment.
  Orange CTA
  Orange may be used for a strategically important CTA, especially where it provides stronger contrast than blue.
  Do not make every button orange.
  Button interactions
- Use a subtle color transition.
- Optionally move an arrow icon by a few pixels.
- Avoid dramatic scaling.
- Maintain adequate touch targets.
- Ensure contrast in all states.
  All buttons must be functional and connected to the correct destination or action.

11. GLOBAL FOOTER
    Build a comprehensive footer consistent with the supplied reference.
    Use a deep-blue background, white text, and restrained orange accents.
    Recommended structure
    Column 1: Company

- Centrifuge logo.
- Short company description.
- Relevant social or professional links, if verified.
  Column 2: Solutions
- Enterprise Applications.
- Custom Software.
- Business Automation.
- System Integration.
  Column 3: Services
- Software Development.
- IT Consulting.
- Project Development & Management.
- Cloud Services.
  Column 4: Company & Resources
- About.
- Projects.
- Careers.
- Resources.
- Contact.
  Only include relevant, verified destinations.
  Footer bottom bar
  Include existing and applicable links, such as:
- Copyright.
- Privacy Policy.
- Terms of Use.
- Other required legal information.
  Footer behavior
- Use consistent column spacing.
- Ensure links have visible hover states.
- Use orange sparingly to identify important actions.
- Make the footer responsive.
- Ensure the logo remains legible against the background.
- Avoid excessive text density.
- Do not repeat the entire navbar verbatim if a more useful grouping is possible.

12. RESPONSIVE DESIGN
    The website must work well across desktop, laptop, tablet, and mobile.
    Desktop: 1200px and above

- Full horizontal navbar.
- Full-width mega menu.
- Multi-column page layouts.
- Two-column hero.
- Large headings.
- Generous whitespace.
  Tablet: 768–1199px
- Reduce navigation gaps.
- Adjust hero proportions.
- Reduce heading sizes where necessary.
- Reduce mega menu column count when required.
- Keep menu content readable.
- Prevent CTA buttons from wrapping awkwardly.
  If the desktop navigation no longer fits, switch to a compact menu rather than compressing everything.
  Mobile: below 768px
- Use a mobile menu button.
- Present navigation in a clear vertical layout.
- Convert mega menus into expandable accordion sections or nested navigation panels.
- Keep links comfortably tappable.
- Stack hero text and imagery.
- Use full-width or appropriately sized CTA buttons.
- Reduce excessive vertical spacing.
- Prevent horizontal overflow.
- Maintain consistent brand colors.
  Mobile menu requirements
- Support opening and closing by touch.
- Support keyboard and screen-reader interaction.
- Display clear expansion indicators.
- Provide a visible close action.
- Close appropriately after navigation.
- Keep focus within the open modal-style menu if one is used.
- Restore focus to the trigger when the menu closes.
  Do not simply shrink the desktop mega menu to fit a phone screen.

13. ANIMATION SYSTEM
    All animations should follow a unified motion language.
    Permitted motion patterns

- Fade and slide entrance.
- Subtle image reveals.
- Short directional mega menu transitions.
- Small button-arrow movements.
- Gentle card hover elevation.
- Subtle scroll-triggered section entrances.
- Simple accordion expansion.
  Motion guidelines
  Element Recommended duration
  Button hover 140–180ms
  Link hover 140–180ms
  Mega menu 200–260ms
  Card hover 180–240ms
  Hero entrance 450–700ms
  Section reveal 350–550ms

These values are starting points. Refine them through testing.
Accessibility and performance
Respect prefers-reduced-motion.
When reduced motion is enabled:

- Remove large translations.
- Avoid unnecessary entrance delays.
- Disable nonessential scroll animations.
- Preserve immediate access to content.
  Do not use animation to hide important information.
  Avoid running multiple elaborate animations simultaneously.

14. ACCESSIBILITY REQUIREMENTS
    Implement accessibility as part of the component design, not as a final patch.
    Requirements include:

- Semantic HTML.
- Correct heading hierarchy.
- Descriptive links and buttons.
- Visible keyboard focus.
- Accessible navigation controls.
- Appropriate ARIA attributes.
- Sufficient color contrast.
- Text alternatives for meaningful images.
- Empty alternative text for decorative images.
- Proper form labels and validation messages.
- Keyboard-accessible dropdowns and accordions.
- Reduced-motion support.
  Do not use orange or blue alone to communicate an error, selection, or status.
  Test navigation with a keyboard and screen reader.

15. TECHNICAL IMPLEMENTATION
    First inspect the existing repository and identify the actual framework. Do not replace the existing stack merely to match this design specification.
    The animation implementation depends on the framework.
    If the project uses React
    Use:

- Existing React architecture.
- Existing routing solution.
- Framer Motion for motion and transitions, if already compatible with the project.
- CSS variables or the existing styling system for design tokens.
- Reusable components and data-driven navigation.
  If the project uses Angular
  Use:
- Existing Angular architecture.
- Standalone components where consistent with the codebase.
- Signals or the existing state-management approach for navigation state.
- CSS transitions or a compatible Angular animation solution.
- Reusable components and typed menu configuration.
  Do not introduce Framer Motion directly into an Angular application.
  General requirements
- Preserve existing routing.
- Reuse existing components when appropriate.
- Avoid duplicate implementations of the navbar and footer.
- Centralize design tokens.
- Keep menu data separate from presentation.
- Use type-safe configuration where supported.
- Avoid unnecessary dependencies.
- Preserve existing integrations and working features.
- Do not replace working content with placeholder text.
- Ensure all internal links resolve correctly.
- Verify that direct navigation to individual pages works.

16. COMPONENT ARCHITECTURE
    Build the design using reusable components.
    Suggested structure:
    components/
    ├── layout/
    │ ├── SiteHeader
    │ ├── DesktopNavigation
    │ ├── MegaMenu
    │ ├── MobileNavigation
    │ └── SiteFooter
    │
    ├── navigation/
    │ ├── NavigationTrigger
    │ ├── MegaMenuColumn
    │ └── NavigationLink
    │
    ├── ui/
    │ ├── Button
    │ ├── Container
    │ ├── SectionHeading
    │ ├── ServiceCard
    │ ├── ProjectCard
    │ ├── IconLink
    │ └── CallToAction
    │
    ├── sections/
    │ ├── HeroSection
    │ ├── CompanyIntroduction
    │ ├── SolutionsSection
    │ ├── ServicesSection
    │ ├── IndustriesSection
    │ ├── ProjectsSection
    │ └── ContactSection
    │
    └── styles/
    ├── tokens
    ├── typography
    ├── layout
    └── motion

Adapt this structure to the existing project instead of blindly creating every directory.
The goal is a maintainable component system, not unnecessary abstraction. 17. FUNCTIONAL REQUIREMENTS
The redesign is not complete if it only looks good in screenshots.
Verify that:

- Every navbar item works.
- Every mega menu link navigates correctly.
- The mega menu opens and closes reliably.
- Switching between menus does not cause flickering.
- The mobile menu works.
- All CTAs have meaningful destinations.
- Contact forms validate and submit through the existing integration.
- Project links work.
- Internal routes load directly.
- The logo links to the homepage.
- The footer links work.
- Search and language controls, if present, function correctly.
- No existing feature has been unintentionally removed.
- There are no horizontal scrolling issues.
- There are no obvious console errors.
- Animations do not block interaction.
  Do not present decorative controls as functional features unless they actually work.

18. SEO AND PERFORMANCE
    Maintain the website's search visibility while implementing the redesign.
    Requirements:

- Preserve useful existing URLs.
- Use redirects when URLs must change.
- Provide unique page titles and meta descriptions.
- Use semantic page structure.
- Use descriptive image alternative text.
- Optimize image formats and sizes.
- Lazy-load appropriate below-the-fold images.
- Avoid lazy-loading the primary hero image when doing so would harm perceived loading performance.
- Prevent layout shifts.
- Avoid unnecessary animation libraries or oversized dependencies.
- Ensure text remains readable while images load.
- Preserve existing analytics and tracking integrations.
- Verify canonical URLs and sitemap behavior where applicable.
  Do not sacrifice performance for decorative effects.

19. IMPLEMENTATION WORKFLOW
    Follow this sequence rather than redesigning every page simultaneously.
    Phase 1: Audit
    Inspect the current repository.
    Identify:

- Framework and version.
- Routing structure.
- Existing navbar and footer.
- Current brand assets.
- Existing colors and typography.
- Existing pages and routes.
- Existing animations.
- Current responsive behavior.
- Existing forms and integrations.
  Document what should be preserved, improved, or replaced.
  Phase 2: Establish the design system
  Implement:
- Brand color tokens.
- Typography scale.
- Container widths.
- Spacing tokens.
- Border and shadow styles.
- Button variants.
- Motion settings.
- Shared layout rules.
  Verify the colors against the official logo.
  Phase 3: Build the navigation
  Implement and test:
- Desktop navbar.
- Full-width mega menu.
- Directional transitions.
- Keyboard interactions.
- Mobile navigation.
- Active states.
- Sticky behavior, if applicable.
  Use the supplied screenshots as the primary interaction reference.
  Phase 4: Build the homepage
  Implement the hero first, followed by the introduction, solutions, services, industries, projects, CTA, and footer.
  Apply the same design tokens and spacing rules throughout.
  Phase 5: Update the remaining pages
  Refine existing pages to match the system.
  Preserve existing content and functionality.
  Avoid creating new pages unnecessarily if the required content already exists.
  Phase 6: Responsive and accessibility testing
  Test common desktop, tablet, and mobile viewport sizes.
  Verify keyboard access, contrast, reduced motion, menu behavior, and layout stability.
  Phase 7: Quality assurance
  Check:
- Console errors.
- Broken links.
- Incorrect routes.
- Missing images.
- Layout overflow.
- Navigation flickering.
- Animation performance.
- Mobile menu behavior.
- Form submissions.
- SEO metadata.
- Existing integrations.
  Phase 8: Final visual refinement
  Compare the implementation with the supplied screenshots.
  Refine:
- Menu width.
- Column alignment.
- Internal padding.
- Typography.
- Hover behavior.
- Animation timing.
- Section spacing.
- Blue and orange balance.
- Footer consistency.
  Do not finish simply because the page renders. Finish when the visual system and interaction behavior are coherent.

20. ACCEPTANCE CRITERIA
    The project is complete when all the following are satisfied.
    Branding

- [ ] Blue and orange are used consistently throughout the website.
- [ ] Official Centrifuge branding is preserved.
- [ ] Shared components use the same design tokens.
- [ ] Orange is used strategically rather than excessively.
- [ ] Typography and spacing are consistent.
      Navigation
- [ ] The desktop navbar is clean and balanced.
- [ ] The mega menu has a white or light neutral background.
- [ ] The mega menu contains no repeated logo.
- [ ] Menu content is organized into readable columns.
- [ ] Directional animations are smooth and restrained.
- [ ] Hover transitions do not flicker.
- [ ] Keyboard and touch interactions work.
      Page design
- [ ] The hero has a clear headline, description, and CTA.
- [ ] The hero animation is smooth and accessible.
- [ ] Cards and sections follow consistent design rules.
- [ ] The project portfolio includes working links.
- [ ] The footer is structured and responsive.
- [ ] Existing content and features are preserved.
      Engineering
- [ ] The existing framework is preserved.
- [ ] Components are reusable.
- [ ] Internal links work.
- [ ] No unnecessary dependencies have been introduced.
- [ ] No significant console errors remain.
- [ ] The website works across desktop, tablet, and mobile.
- [ ] Accessibility and reduced-motion requirements are implemented.
- [ ] SEO and performance have not been unnecessarily degraded.
      FINAL INSTRUCTION TO THE AI DEVELOPER
      Act as a senior UI/UX designer, design-system architect, and senior frontend engineer.
      Redesign the existing Centrifuge Group website using the supplied website screenshots as inspiration for its navigation, spacing, typography, and overall layout quality.
      Use Centrifuge's official blue-and-orange brand identity consistently throughout the website.
      Prioritize the full-width white mega menu with bold category headings, organized submenu links, no repeated logo, and subtle directional transitions. Ensure the navbar and dropdown behave as one cohesive interactive system.
      Carry the same design language into the hero, service sections, project portfolio, buttons, cards, inner pages, and footer.
      Do not rebuild the website as a static mockup. Implement the actual responsive interface, working links, navigation behavior, and animations.
      Inspect the existing project before modifying it. Preserve all functioning features, existing content, routes, integrations, and brand assets unless a change is necessary and explicitly justified.
      Do not invent company capabilities, client projects, certifications, testimonials, or performance claims.
      Finally, test the completed implementation at desktop, tablet, and mobile sizes. Correct visual inconsistencies, broken interactions, accessibility issues, and layout problems before declaring the work finished.
      The final result should feel like one cohesive, premium enterprise technology website—not a collection of individually styled pages.

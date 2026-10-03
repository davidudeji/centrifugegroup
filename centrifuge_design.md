# CENTRIFUGE GROUP — WEBSITE REDESIGN

## AI DESIGN & DEVELOPMENT SPECIFICATION

You are a senior product designer, UX architect, brand strategist, and frontend engineer.

Redesign the **Centrifuge Group corporate website** as a premium B2B technology company website.

The final product must communicate:

* Enterprise credibility
* Modern software engineering
* Operational scale
* Trust and reliability
* African technology expertise
* Enterprise Software
* e-Health
* Cloud/SaaS
* Product engineering capability

Do NOT create a generic SaaS landing page.

The website should feel like a technology company that builds serious infrastructure and software systems for organizations.

---

# 1. CORE DESIGN DIRECTION

## Design Theme

**Alternative B — Trusted Enterprise Slate**

Visual personality:

> Institutional enterprise technology + modern engineering + premium editorial design.

Use design inspiration from:

### Legency Media

Use for:

* Architectural grids
* 1px structural borders
* Editorial layouts
* Asymmetric compositions
* Numbered content blocks
* Strong typography

### Stripe

Use for:

* Information hierarchy
* Precise spacing
* Responsive behavior
* Enterprise credibility
* Product presentation
* Content density

### Linear

Use for:

* Micro-interactions
* Smooth animations
* Product UI presentation
* Subtle glow effects
* High-quality transitions

IMPORTANT:

Do NOT copy these websites.

Use their design principles while creating an unmistakably **Centrifuge Group** visual identity.

---

# 2. BRAND POSITIONING

The website must answer three questions immediately:

1. What does Centrifuge do?
2. Who does Centrifuge build for?
3. Why should an organization trust Centrifuge?

The homepage should communicate that Centrifuge builds technology infrastructure and software systems that help organizations operate, scale, and serve their customers more effectively.

Avoid vague phrases such as:

"Transform your business with innovation."

"Empowering the future through technology."

"Digital transformation reimagined."

Use concrete language instead.

Preferred messaging direction:

> **Technology infrastructure for organizations built to scale.**

Supporting message:

> Centrifuge Group designs and builds enterprise software, e-health systems, and cloud platforms that help organizations manage complex operations with greater control, visibility, and efficiency.

---

# 3. BRAND COLOR SYSTEM

Strictly enforce the following palette.

## Primary Canvas

White:

#FFFFFF

Ice White:

#F8FAFC

Use these for approximately 60% of the visual surface.

---

## Structural Color

Slate:

#334155

Use for:

* Secondary sections
* Dark cards
* System diagrams
* Product showcase backgrounds
* Footer
* Supporting visual frames

---

## Primary Text

Deep Charcoal:

#0F172A

Use for:

* H1
* H2
* H3
* Important text
* Navigation
* High-priority information

---

## Accent

Centrifuge Orange:

#F27A22

Use sparingly.

Use ONLY for:

* Primary CTA
* Active states
* Important indicators
* Focus states
* Selected navigation elements
* Small visual highlights
* Interactive arrows
* Key data points

Do not flood the interface with orange.

Target visual ratio:

60% White / Ice White
30% Slate / structural elements
10% Orange / kinetic accents

---

## Borders

Primary:

#E2E8F0

Secondary:

#CBD5E1

Borders should generally be 1px.

Avoid heavy card shadows.

Prefer:

border: 1px solid #E2E8F0;

Use subtle shadows only when necessary.

---

# 4. TYPOGRAPHY

Use a modern professional sans-serif.

Preferred:

Inter

or

Manrope

Typography should feel:

* Technical
* Corporate
* Clean
* Highly readable
* Premium

Use strong typographic hierarchy.

CSS variables:

--h1-size: clamp(2.25rem, 5vw, 4.25rem);
--h2-size: clamp(1.75rem, 3.5vw, 2.75rem);
--h3-size: clamp(1.25rem, 2vw, 1.75rem);
--body-size: clamp(1rem, 1.2vw, 1.125rem);

Use generous line-height.

---

# 5. GLOBAL LAYOUT

Use a structured 12-column desktop grid.

Maximum content width:

1440px

Preferred content container:

width: min(92%, 1440px);

Desktop:

12 columns

Tablet:

6 columns

Mobile:

1 column

Use asymmetric compositions where appropriate.

Do not center every section.

Create visual tension through:

* Offset panels
* Uneven columns
* Large whitespace
* Vertical borders
* Numbered blocks
* Overlapping product interfaces
* Full-width structural lines

---

# 6. NAVIGATION

Create a premium sticky navigation.

Desktop:

LEFT:

Centrifuge Group logo

CENTER:

Solutions
Products
Projects
About
Insights

RIGHT:

[Talk to Centrifuge]

The primary CTA should use:

background: #F27A22
text: #0F172A

Navigation should have:

* Thin bottom border
* Slight backdrop blur
* White background
* Smooth transition when scrolling

On scroll:

* Reduce navigation height slightly
* Add subtle backdrop blur
* Preserve readability

Mobile:

Replace navigation links with a hamburger button.

Open a full-screen navigation drawer.

Navigation drawer should contain:

Solutions
Products
Projects
About
Insights
Contact

CTA:

Talk to Centrifuge

All mobile touch targets must be at least:

48px × 48px

---

# 7. HOMEPAGE

Create the following homepage architecture.

---

# SECTION 01 — HERO

Create an asymmetric two-column hero.

LEFT:

Small eyebrow:

CENTRIFUGE GROUP / TECHNOLOGY SYSTEMS

Large headline:

> Technology infrastructure for organizations built to scale.

Supporting copy:

> We design and build enterprise software, e-health systems, and cloud platforms that help organizations manage complex operations, connect people, and scale with confidence.

CTA:

[Talk to Centrifuge]

Secondary CTA:

[Explore Solutions]

RIGHT:

Create a premium abstract product/system visualization.

Do NOT use a generic stock image.

Build a stylized software interface consisting of:

* Dashboard cards
* Data visualization
* System status indicators
* Small charts
* Connected nodes
* Operational metrics
* Orange highlights
* Slate panels

The visualization should look like an actual enterprise technology platform.

Add subtle animated movement.

---

# SECTION 02 — TRUST / CAPABILITY TICKER

Full-width structural ticker.

Text:

Enterprise Software
·
e-Health Architecture
·
Cloud Platforms
·
Business Systems
·
Digital Infrastructure
·
Scale Redefined

Animation:

20-second linear infinite loop.

Desktop:

Animate continuously.

Mobile:

Reduce animation intensity or disable it.

---

# SECTION 03 — WHAT WE BUILD

Eyebrow:

01 / CAPABILITIES

Headline:

> Technology built around real operational complexity.

Supporting copy:

> From enterprise operations to healthcare delivery and cloud infrastructure, we build systems designed around how organizations actually work.

Create three large structural cards.

---

### CARD 01

Number:

01

Title:

Enterprise Software

Description:

> Connected business systems that bring operations, finance, people, sales, and decision-making into one controlled environment.

Features:

Operations
Finance
HR
Sales
Analytics

CTA:

Explore Enterprise Software →

---

### CARD 02

Number:

02

Title:

e-Health Systems

Description:

> Digital healthcare infrastructure designed to improve access, coordination, records, and operational visibility.

Features:

Patient Systems
Healthcare Operations
Digital Records
Analytics
Integration

CTA:

Explore e-Health →

---

### CARD 03

Number:

03

Title:

Cloud & SaaS

Description:

> Secure, scalable cloud platforms designed to support modern applications, teams, and business infrastructure.

Features:

Cloud Architecture
SaaS Platforms
APIs
Infrastructure
Security

CTA:

Explore Cloud →

Cards should use asymmetric layouts.

---

# SECTION 04 — PRODUCT SHOWCASE

Eyebrow:

02 / PRODUCTS

Headline:

> Software that turns complexity into control.

Introduce actual Centrifuge products here.

IMPORTANT:

Do not invent fake products.

If product information exists in the existing Centrifuge website, preserve it.

Each product should contain:

* Product name
* Category
* Short description
* Product screenshot
* Key capabilities
* Product link

Visual structure:

LEFT:

Product description

RIGHT:

Large product UI mockup

Use alternating layouts:

Product 01:
Text left / UI right

Product 02:
UI left / text right

Product 03:
Text left / UI right

Product screenshots should look like real enterprise software.

Use subtle:

* Border
* Shadow
* Orange highlight
* Grid overlay

---

# SECTION 05 — SYSTEM ARCHITECTURE

Create a dark Slate section.

Background:

#334155

Eyebrow:

03 / ENGINEERING

Headline:

> Built to connect the systems behind the business.

Create an architectural diagram.

Show:

Users
↓
Applications
↓
APIs
↓
Cloud Infrastructure
↓
Data
↓
Analytics

Add connected nodes and subtle animated paths.

Use orange only for active connection points.

The section should visually communicate engineering depth.

---

# SECTION 06 — WHY CENTRIFUGE

Eyebrow:

04 / WHY CENTRIFUGE

Headline:

> Built for organizations where technology has to work.

Create a 2×2 structural grid.

01

ENGINEERED FOR SCALE

Systems designed to grow with operational demand.

02

BUILT AROUND OPERATIONS

Technology shaped around real workflows, not abstract features.

03

CONNECTED BY DESIGN

Applications, data, teams, and processes work together.

04

DESIGNED FOR LONG-TERM VALUE

Build infrastructure that remains useful as the organization evolves.

---

# SECTION 07 — PROJECTS / CASE STUDIES

Eyebrow:

05 / SELECTED WORK

Headline:

> Technology applied to real-world challenges.

Create a project showcase.

Each project card must contain:

Project image/UI
Project category
Short description
Technology
Outcome
View project →

Use large editorial cards.

Do not use fake metrics.

If measurable outcomes are unavailable, describe the implementation instead.

Example:

> Enterprise Operations Platform

Category:

Enterprise Software

Description:

> A connected operational platform designed to centralize business workflows, data, and decision-making.

CTA:

View Project →

---

# SECTION 08 — TECHNOLOGY STACK

Create a minimal technology section.

Headline:

> Built with modern technology. Designed for real-world reliability.

Display technology categories rather than a giant logo wall.

Categories:

Frontend
Backend
Cloud
Data
Infrastructure
Security
Integration

Use small outlined technology badges.

Avoid excessive logos.

---

# SECTION 09 — ABOUT CENTRIFUGE

Create an editorial split section.

LEFT:

Large statement:

> We build technology that makes complex organizations easier to operate.

RIGHT:

Company description.

Use factual company information from the existing Centrifuge website.

Do not fabricate:

* Company history
* Employee count
* Clients
* Certifications
* Partnerships
* Revenue
* Awards

Add:

[Learn About Centrifuge →]

---

# SECTION 10 — INSIGHTS

Eyebrow:

06 / INSIGHTS

Headline:

> Ideas, engineering, and perspectives.

Create three article cards.

Each card:

Category
Date
Title
Excerpt
Read article →

Use real existing articles if available.

If content is unavailable, create clearly marked placeholder content rather than inventing published articles.

---

# SECTION 11 — FINAL CTA

Create a large high-impact CTA.

Background:

#0F172A

or

#334155

Headline:

> Have a complex problem worth solving?

Supporting text:

> Let's explore the technology, architecture, and systems your organization needs next.

Primary CTA:

[Talk to Centrifuge]

Secondary:

[Explore Our Work]

Use Centrifuge Orange for the primary CTA.

---

# SECTION 12 — FOOTER

Create a structured enterprise footer.

Columns:

COMPANY

About
Projects
Careers
Contact

SOLUTIONS

Enterprise Software
e-Health
Cloud & SaaS

PRODUCTS

Product directory
Product support

RESOURCES

Insights
Documentation
News

CONTACT

Official Centrifuge contact information.

Bottom:

© Centrifuge Group

Privacy
Terms

Social links where available.

Do not invent contact details.

---

# 8. PRODUCT DETAIL PAGE

Create a reusable product page template.

Structure:

Hero

Product name

Category

One-sentence value proposition

[Request Demo]

Product interface screenshot

---

Overview

What the product does.

---

Capabilities

01
Capability

02
Capability

03
Capability

04
Capability

---

Product Architecture

Show system diagram.

---

Screenshots

Large product UI gallery.

---

Benefits

Operational benefit
Business benefit
Technical benefit

---

CTA

> See what the platform can do for your organization.

[Request a Demo]

---

# 9. SOLUTIONS PAGE

Create a central solutions directory.

Hero:

> Technology designed around how organizations operate.

Three solution blocks:

Enterprise Software

e-Health

Cloud & SaaS

Each should contain:

Problem
Solution
Capabilities
Technology
CTA

---

# 10. PROJECTS PAGE

Create a visual project directory.

Filters:

All
Enterprise
Healthcare
Cloud
Software

Each project card:

Project
Category
Description
Technology
View Case Study →

Use real Centrifuge projects wherever available.

---

# 11. ABOUT PAGE

Structure:

Hero

> Building technology for organizations that need to move forward.

Company story

Mission

Capabilities

Engineering approach

Leadership

Technology

CTA

Do not invent company information.

Use verified existing Centrifuge information.

---

# 12. CONTACT PAGE

Create a focused enterprise contact experience.

Headline:

> Let's discuss what you're building.

Form:

Full Name
Work Email
Company
Phone
Area of Interest
Project Description

Area of Interest options:

Enterprise Software
e-Health
Cloud & SaaS
Product Development
Other

Primary CTA:

Send Inquiry

Include company contact information if available.

Use clear validation.

Success state:

> Thanks. Your inquiry has been received. Our team will be in touch.

---

# 13. MOTION SYSTEM

Use Framer Motion or GSAP.

Keep animations premium and subtle.

Never create distracting animations.

## Page entrance

Opacity:

0 → 1

Y:

20px → 0

Scale:

0.98 → 1

Duration:

0.6s

Easing:

cubic-bezier(0.16, 1, 0.3, 1)

---

## Card hover

On hover:

translateY(-4px)

Arrow:

translateX(4px)

Border:

slightly increase visual contrast.

---

## Product UI

Use very subtle:

* Parallax
* Floating data elements
* Chart animation
* Status indicator pulses
* Connection-line animation

Do not overanimate.

---

# 14. ACCESSIBILITY

Follow WCAG 2.1 AA principles.

Requirements:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Minimum 48px touch targets
* Proper heading hierarchy
* Alt text for meaningful images
* Reduced motion support
* Accessible form labels
* Sufficient color contrast

Implement:

@media (prefers-reduced-motion: reduce)

Disable non-essential animations.

---

# 15. RESPONSIVE DESIGN

## DESKTOP

1024px+

Use:

12-column grid

Large asymmetric compositions.

Show full navigation.

Show animated system graphics.

---

## TABLET

768px–1023px

Use:

6-column grid.

Convert complex layouts into two columns.

Move large graphics below supporting text where necessary.

Reduce spacing.

---

## MOBILE

Below 768px

Use:

Single-column layout.

Navigation becomes fullscreen drawer.

Minimum touch target:

48 × 48px

Disable or reduce:

* Large parallax effects
* Infinite ticker animation
* Complex canvas effects
* Excessive hover effects

Cards become vertically stacked.

Do not simply shrink desktop layouts.

Recompose the layout for mobile.

---

# 16. MICRO-INTERACTIONS

Buttons:

Normal:

Orange background

Hover:

Slight upward movement

Arrow shifts 4px right.

Ghost buttons:

Transparent

1px border

Hover:

Background becomes lightly tinted.

Navigation links:

Underline or subtle orange indicator on active state.

Cards:

Border transition.

Product screenshots:

Very subtle scale effect.

---

# 17. UI COMPONENT SYSTEM

Create reusable components.

Required:

Navbar
MobileMenu
Button
SectionHeader
Eyebrow
Container
Grid
Card
CapabilityCard
ProductCard
ProjectCard
ArticleCard
ProductShowcase
ArchitectureDiagram
Ticker
CTASection
Footer
ContactForm
Modal
Badge
Breadcrumb
AnimatedArrow

Avoid duplicating markup.

---

# 18. DESIGN TOKENS

Create centralized CSS variables.

Example:

:root {
--color-white: #FFFFFF;
--color-ice: #F8FAFC;
--color-slate: #334155;
--color-charcoal: #0F172A;
--color-orange: #F27A22;

--color-border: #E2E8F0;

--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;

--container: 1440px;

--h1-size: clamp(2.25rem, 5vw, 4.25rem);
--h2-size: clamp(1.75rem, 3.5vw, 2.75rem);
--body-size: clamp(1rem, 1.2vw, 1.125rem);

--transition:
all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

---

# 19. IMAGE / VISUAL DIRECTION

Avoid generic corporate stock photography wherever possible, use informations and images from https://www.centrifugegroup.com/.

Prefer:

1. Real Centrifuge product screenshots
2. Real project screenshots
3. Abstract system diagrams
4. Technical UI visualizations
5. Architectural illustrations
6. Carefully selected photography only when it communicates people, healthcare, infrastructure, or business context

Product visuals should have:

* Clean borders
* Subtle shadows
* Slight radius
* Technical overlays
* Orange highlights
* Slate UI elements

Do not use random 3D blobs.

Do not use excessive gradients.

Do not use generic AI-generated futuristic imagery as the primary visual language.

---

# 20. CONTENT RULES

Use concise enterprise copy.

Avoid marketing fluff.

Bad:

"Revolutionizing the digital landscape through cutting-edge innovation."

Good:

"Enterprise software that connects operations, data, and decision-making."

Every section should answer:

What is it?

Why does it matter?

What can the user do next?

---

# 21. DATA INTEGRITY

CRITICAL:

Do not fabricate Centrifuge information.

Do not invent:

* Clients
* Projects
* Product names
* Customer numbers
* Revenue
* Awards
* Certifications
* Partnerships
* Offices
* Leadership
* Case-study results

If information exists on the current Centrifuge website, preserve and improve it.

If information is missing, use a clearly marked placeholder.

---

# 22. SEO

Every page must have:

Unique title
Meta description
Canonical URL
Open Graph metadata

Use semantic headings.

Suggested homepage title:

Centrifuge Group | Enterprise Software, e-Health & Cloud Solutions

Suggested homepage description:

Centrifuge Group builds enterprise software, e-health systems, and cloud platforms that help organizations manage complexity, improve visibility, and scale.

Create structured URLs:

/
/solutions
/solutions/enterprise-software
/solutions/e-health
/solutions/cloud
/products
/products/[slug]
/projects
/projects/[slug]
/about
/insights
/insights/[slug]
/contact

---

# 23. PERFORMANCE

The site must feel fast.

Requirements:

* Lazy-load images
* Optimize images
* Avoid oversized assets
* Use modern image formats
* Minimize JavaScript where possible
* Avoid unnecessary animation libraries
* Use CSS animations for simple effects
* Animate only when useful
* Avoid blocking rendering

Target:

Excellent Lighthouse performance.

---

# 24. FINAL DESIGN TEST

Before considering the redesign complete, verify:

### 3-SECOND TEST

A new visitor should understand:

"What does Centrifuge do?"

within approximately three seconds.

### TRUST TEST

The website should immediately feel like an established technology organization rather than a freelance portfolio.

### PRODUCT TEST

Visitors should be able to discover actual Centrifuge products quickly.

### CONVERSION TEST

Every major page should have a clear next action.

### MOBILE TEST

The mobile experience must feel intentionally designed rather than compressed from desktop.

### BRAND TEST

The design should work even without the Centrifuge logo.

Someone should recognize the visual language as Centrifuge.

---

# FINAL CREATIVE DIRECTION

The final website should feel like:

**Enterprise infrastructure presented through modern editorial design.**

Not:

Generic SaaS.

Not:

Corporate template.

Not:

Stripe clone.

Not:

Linear clone.

Not:

Marketing agency template.

The visual experience should communicate:

**"Centrifuge builds serious technology for organizations with serious operational needs."**

Prioritize clarity, evidence, products, engineering depth, trust, and conversion over decorative visual effects.

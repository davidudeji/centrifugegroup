==================================================
PROJECTS & PRODUCTS SHOWCASE
==================================================

Create a dedicated "Projects & Products" section on the homepage.

Purpose:
Show visitors what Centrifuge has actually built, with direct links to live products, product websites, demos, repositories, or detailed case studies where available.

Section heading:

"What we've built."

Supporting text:

"Explore the platforms, products and digital systems we've designed and delivered."

Display projects in a premium editorial grid rather than a generic portfolio card grid.

Each project card should support:

- Project/product name
- Category
- Industry
- Short description
- Project image or actual product screenshot
- Technology tags where appropriate
- Project status
- External URL
- Internal case-study URL
- Optional GitHub/repository URL
- Optional demo URL

Example project categories:

Optimax
Enterprise ERP

Logistics Management
Logistics & Mobility

HRHIS
Healthcare / Government

Electronic Hospital Management
Healthcare

DHIS2 Solutions
Healthcare / Data

OpenMRS Solutions
Healthcare

Geospatial & Mapping
GIS / Data

IoT Solutions
IoT / Infrastructure

Business Intelligence
Data & Analytics

--------------------------------------------------
PROJECT CARD BEHAVIOR
--------------------------------------------------

Each card should be clickable.

Primary action:

"View Project →"

Secondary actions where available:

"Live Site ↗"
"Case Study →"
"View Demo ↗"
"GitHub ↗"

External links must open in a new tab with:

target="_blank"
rel="noopener noreferrer"

Only display links that actually exist.

Do not create fake URLs.

--------------------------------------------------
PROJECT DETAIL
--------------------------------------------------

Create:

/projects

and:

/projects/:slug

Project detail page should contain:

Project name
Industry
Category
Hero image
Overview
Business challenge
Solution
Key capabilities
Technology
Screenshots
Results/outcomes if verified
Related projects

Actions:

"Visit Live Project ↗"
"View Case Study →"

Optional:

"View GitHub ↗"
"View Documentation ↗"
"View Demo ↗"

--------------------------------------------------
HOMEPAGE PROJECT SECTION
--------------------------------------------------

Place the Projects & Products section after the major Optimax/Logistics/Healthcare product storytelling.

Layout:

Featured project
------------------------------

[Large project image]

OPTIMAX
Enterprise ERP

"Your business. Connected."

[View Project →]


Secondary projects
------------------------------

[Project] [Project] [Project]

Each with:

Image
Category
Name
Short description
View Project →

Then:

"Explore all projects →"

--------------------------------------------------
PROJECT DATA MODEL
--------------------------------------------------

Use a typed project model:

Project {
  id: string
  slug: string
  name: string
  category: string
  industry: string
  description: string
  image: string
  technologies: string[]
  status: "live" | "development" | "archived"
  liveUrl?: string
  demoUrl?: string
  githubUrl?: string
  documentationUrl?: string
  caseStudySlug?: string
  featured: boolean
}

IMPORTANT:

Optional links must only render when the URL exists.

Do not show empty buttons.

Do not invent project URLs, clients, technologies, results, or statistics.

--------------------------------------------------
ADMIN PROJECT MANAGEMENT
--------------------------------------------------

Add:

/admin/projects

Admin should be able to:

Create project
Edit project
Delete/archive project
Feature/unfeature project
Upload project image
Add project URL
Add demo URL
Add GitHub URL
Add documentation URL
Link project to case study
Assign category
Assign industry
Add technologies
Set project status
Set display order

This allows the Centrifuge team to continuously update the portfolio without modifying frontend code.
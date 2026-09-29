You are a Senior Product Designer, Brand Strategist, UX Architect, and Staff-level React Engineer.

Build a complete production-quality website and store management dashboard for:

CENTRIFUGE GROUP

The project must be built using:

- React.js
- Vite
- TypeScript
- Tailwind CSS v4
- React Router
- Lucide React icons
- TanStack Query for server state
- React Hook Form for forms
- Zod for validation
- Recharts for analytics
- Zustand for appropriate client-side state
- Component-driven architecture
- Responsive design
- Accessible semantic HTML

Do NOT build this as a simple landing page.

This is a complete corporate website + ecommerce storefront + store administration application.

==================================================
1. BRAND POSITIONING
==================================================

Brand:

Centrifuge Group

Positioning:

Centrifuge is an enterprise technology company that designs and delivers software, healthcare technology, logistics systems, enterprise platforms, cloud/infrastructure services, consulting and training.

Primary brand promise:

"Technology that moves business forward."

Supporting message:

"We design and deliver enterprise software, healthcare platforms, logistics systems and digital solutions that solve complex operational problems."

Brand personality:

- Confident
- Precise
- Human
- Progressive
- Reliable
- Enterprise-grade
- Technically credible

The website must feel:

- Modern
- Premium
- Professional
- Trustworthy
- African technology company
- Enterprise-ready
- SaaS-quality
- Clean
- Minimal
- High-converting

Do NOT make it look like:

- A generic WordPress corporate template
- A generic AI startup
- A crypto website
- A cyber-security website
- An overly futuristic website
- A website filled with gradients and glowing objects
- A template with excessive rounded cards

==================================================
2. CORE BRAND VALUES
==================================================

Use these three values throughout the brand experience:

1. Reliability

"We build technology people can depend on."

2. Practical Innovation

"Technology should solve real problems, not simply look impressive."

3. Partnership

"We work alongside organizations to understand the problem, design the solution and support it beyond deployment."

==================================================
3. VISUAL IDENTITY
==================================================

Primary:

#0B1F33

Primary Dark:

#071521

Accent:

#16C7D9

Accent Light:

#67E8F9

Dark Text:

#172333

Secondary Text:

#64748B

Background:

#F7F9FA

Surface:

#FFFFFF

Border:

#E2E8F0

Success:

#16A34A

Warning:

#D97706

Error:

#DC2626

Use the cyan accent sparingly.

The dominant visual language should be deep navy, soft neutrals, white surfaces and restrained cyan interaction states.

Do NOT make the whole website cyan.

==================================================
4. TYPOGRAPHY
==================================================

Use Google Fonts:

Heading:
Manrope

Body:
Inter

Heading weights:

500
600
700
800

Body weights:

400
500
600

Recommended hierarchy:

Hero:
72-88px desktop
48-56px tablet
40-48px mobile

H1:
56-64px desktop

H2:
40-48px

H3:
24-32px

Body:
16px

Large body:
18-20px

Use generous line-height.

Use tight letter spacing on large headings.

==================================================
5. DESIGN SYSTEM
==================================================

Create reusable design tokens.

Spacing:

8
16
24
32
48
64
80
96
120
160

Radius:

8px
12px
16px
24px

Use:

- 16px for normal cards
- 10-12px for buttons
- 24px for large feature containers
- Pills only where semantically appropriate

Borders:

1px solid #E2E8F0

Shadows should be subtle.

Avoid heavy shadows.

Use large whitespace and strong visual hierarchy.

==================================================
6. VISUAL STYLE
==================================================

Use:

- Realistic photography
- Product screenshots
- UI mockups
- Data visualization
- Subtle geometric graphics
- Minimal abstract technology patterns
- Real client/product imagery where available

Avoid generic stock photography.

Avoid random 3D AI robots.

Avoid excessive glassmorphism.

Avoid excessive gradient backgrounds.

Product screenshots should be a major visual asset.

==================================================
7. LAYOUT PHILOSOPHY
==================================================

Use:

- Editorial layouts
- Asymmetrical grids
- Bento layouts
- Large typography
- Generous whitespace
- Full-width sections
- Strong visual hierarchy
- Product-focused storytelling

The site should feel closer to:

modern enterprise SaaS + premium technology consultancy

rather than:

traditional corporate website.

==================================================
8. APPLICATION ARCHITECTURE
==================================================

Use a scalable structure.

Suggested:

src/
  app/
    router/
    providers/
  components/
    ui/
    layout/
    navigation/
    cards/
    forms/
    charts/
  features/
    marketing/
    products/
    services/
    careers/
    insights/
    shop/
    cart/
    checkout/
    account/
    admin/
  pages/
    public/
    shop/
    admin/
  hooks/
  lib/
  services/
  stores/
  types/
  data/
  utils/
  assets/

Use feature-based organization rather than putting everything into one components folder.

Create reusable components.

Examples:

Button
Card
Badge
Input
Select
Modal
Drawer
Dropdown
Table
Pagination
Tabs
Toast
Breadcrumb
Accordion
Tooltip
EmptyState
LoadingState
ErrorState
StatCard
DataTable
ChartCard
ProductCard
ProductGrid
Hero
SectionHeader
CTA
Footer

==================================================
9. PUBLIC WEBSITE INFORMATION ARCHITECTURE
==================================================

Create these major routes.

/

 /solutions

 /solutions/optimax

 /solutions/logistics

 /solutions/healthcare

 /solutions/enterprise

 /solutions/data-analytics

 /services

 /services/software-development

 /services/mobile-development

 /services/cloud

 /services/infrastructure

 /services/managed-it

 /services/consulting

 /services/training

 /industries

 /industries/healthcare

 /industries/logistics

 /industries/government

 /industries/enterprise

 /industries/smes

 /about

 /clients

 /case-studies

 /case-studies/:slug

 /insights

 /insights/:slug

 /careers

 /careers/jobs

 /careers/jobs/:slug

 /contact

==================================================
10. HOMEPAGE
==================================================

Build the homepage as a conversion-focused corporate technology homepage.

Hero:

Eyebrow:

CENTRIFUGE GROUP

Headline:

"Technology that moves business forward."

Supporting text:

"We design and deliver enterprise software, healthcare platforms, logistics systems and digital solutions that solve complex operational problems."

Buttons:

"Talk to an Expert"

"Explore Solutions"

Hero visual:

Show a premium product/interface composition.

Use Optimax/product UI cards rather than generic imagery.

Below hero:

Trusted by / Clients section.

Then:

"What we build"

Cards:

Enterprise Software
Healthcare Technology
Logistics Technology
Cloud & Infrastructure
Data & AI
Digital Platforms

Then:

Featured Optimax section.

Headline:

"Your business. Connected."

Show modules:

Commerce
Finance
HR
Inventory
Sales
Procurement
Analytics
AI

CTA:

"Explore Optimax"

Then:

Industries section.

Then:

Services section.

Then:

Case studies.

Then:

Technology/expertise.

Then:

Insights.

Then:

Careers.

Then:

Final CTA:

"Let's build what your business needs."

Button:

"Talk to Centrifuge"

==================================================
11. HEADER
==================================================

Desktop navigation:

Logo

Solutions
Services
Industries
Company
Insights
Careers

CTA:

"Contact Us"

Solutions dropdown:

Optimax
Logistics
Healthcare
Enterprise
Data & Analytics

Services dropdown:

Software Development
Mobile Development
Cloud
Infrastructure
Managed IT
Consulting
Training

Company dropdown:

About
Clients
Case Studies
Careers
Contact

Header behavior:

- Transparent/overlay on hero when appropriate
- Solid background after scrolling
- Sticky
- Smooth transitions
- Mobile drawer
- Accessible keyboard navigation

==================================================
12. FOOTER
==================================================

Create a premium multi-column footer.

Sections:

Solutions
Services
Industries
Company
Resources

Include:

Contact information
Social links
Privacy
Terms
Copyright

Footer statement:

"Technology that moves business forward."

==================================================
13. SOLUTIONS
==================================================

Create individual solution pages.

Optimax:

Position as an integrated business platform.

Sections:

Hero
Problem
Solution
Modules
Features
Dashboard screenshots
Business outcomes
Industries
CTA

Modules:

Commerce
Finance
HR
Inventory
Sales
Procurement
Analytics
AI

Logistics:

Include:

Fleet management
Dispatch
Route planning
Driver management
Delivery tracking
Proof of delivery
Alerts
Analytics

Healthcare:

Include:

Healthcare workforce
Hospital systems
Reporting
Data management
Interoperability
Analytics

Enterprise:

Include:

ERP
Custom software
Integrations
Business automation
Data platforms

==================================================
14. SERVICES
==================================================

Create service pages for:

Software Development
Mobile Development
Cloud
Infrastructure
Managed IT
Consulting
Training

Every service page should have:

Hero
Problem
What we provide
Capabilities
Process
Technology
Use cases
CTA

==================================================
15. INDUSTRIES
==================================================

Create industry pages:

Healthcare
Logistics
Government
Enterprise
SMEs

Each page should answer:

- What problems exist?
- How Centrifuge helps
- Relevant solutions
- Relevant services
- Case studies
- CTA

==================================================
16. CASE STUDIES
==================================================

Create reusable case-study templates.

Structure:

Client
Industry
Challenge
Solution
Capabilities
Implementation
Technology
Results
Gallery
Related services
CTA

Do not invent statistics.

If actual metrics are unavailable, use qualitative outcomes.

==================================================
17. INSIGHTS
==================================================

Create:

/insights

and:

/insights/:slug

Categories:

Technology
Healthcare
Logistics
Enterprise
AI
Business
Company News
Events

Features:

Search
Category filtering
Featured article
Article cards
Related articles
Author
Date
Reading time
Share buttons

Use clean editorial layouts.

==================================================
18. CAREERS
==================================================

Create:

/careers

/careers/jobs

/careers/jobs/:slug

Career page:

"Build technology that matters."

Job listing:

Filters:

Department
Location
Employment type

Job card:

Title
Location
Type
Department
Short description

Job detail:

Role
Location
Employment type
About the role
Responsibilities
Requirements
Nice to have
What we offer
Application form

Application fields:

Full name
Email
Phone
Cover letter
CV upload
Consent

==================================================
19. SHOP / ECOMMERCE
==================================================

Build a complete storefront.

Route:

/shop

Features:

- Product listing
- Categories
- Search
- Sorting
- Filtering
- Product details
- Product gallery
- Product variants
- Stock status
- Add to cart
- Wishlist
- Cart
- Checkout
- Customer account
- Order history

Product categories can include existing hardware/software commerce categories such as:

- Inverters
- UPS
- Solar charge controllers
- Hardware
- Other technology products

Do not fabricate actual inventory.

Use realistic demo data clearly marked as demo data.

==================================================
20. PRODUCT PAGE
==================================================

Product page layout:

Breadcrumb

Image gallery

Product name

Short description

Price

Availability

SKU

Quantity selector

Add to cart

Buy now

Wishlist

Product details

Specifications

Shipping information

Related products

Reviews if supported by backend

==================================================
21. CART
==================================================

Cart should show:

Product
Image
Price
Quantity
Subtotal
Remove
Save for later

Order summary:

Subtotal
Shipping
Tax
Discount
Total

CTA:

Proceed to Checkout

==================================================
22. CHECKOUT
==================================================

Checkout should be multi-step or clearly structured.

Step 1:

Customer information

Step 2:

Shipping information

Step 3:

Payment

Step 4:

Order confirmation

Include:

Order number
Items
Total
Shipping address
Payment status

Payment must be abstracted behind a service.

Do not hardcode a payment provider.

Create:

PaymentService

so Paystack/Flutterwave/Stripe/etc. can later be connected.

==================================================
23. CUSTOMER ACCOUNT
==================================================

Create:

/account

Sections:

Dashboard
Orders
Order details
Profile
Addresses
Wishlist
Security

==================================================
24. ADMIN DASHBOARD
==================================================

This is a critical requirement.

Create a complete store administration dashboard.

Route:

/admin

Use a separate admin layout.

Sidebar:

Dashboard
Orders
Products
Categories
Inventory
Customers
Discounts
Reviews
Media
Analytics
Store Settings
Users & Roles

Top bar:

Search
Notifications
Admin profile
Theme toggle

==================================================
25. ADMIN DASHBOARD OVERVIEW
==================================================

Dashboard should contain:

Revenue
Orders
Customers
Products
Low stock
Pending orders

Example cards:

Total Revenue
₦24.5M

Orders
1,284

Customers
842

Products
126

Low Stock
12

Pending Orders
28

IMPORTANT:

These numbers are demo data only.

Build the cards so real API data can replace them.

Charts:

Revenue over time
Orders over time
Sales by category
Top products
Order status distribution

Use Recharts.

Charts should be clean and minimal.

==================================================
26. ORDER MANAGEMENT
==================================================

Route:

/admin/orders

Features:

- Order table
- Search
- Filter
- Date range
- Status filter
- Payment filter
- Pagination
- Bulk selection
- Export

Columns:

Order ID
Customer
Date
Items
Total
Payment
Status
Actions

Statuses:

Pending
Processing
Shipped
Delivered
Cancelled
Refunded

Order detail page:

Customer information
Billing
Shipping
Products
Pricing
Payment
Timeline
Notes

Actions:

Update status
Print order
Refund
Cancel
Add internal note

==================================================
27. PRODUCT MANAGEMENT
==================================================

Route:

/admin/products

Features:

- Product list
- Search
- Filtering
- Categories
- Stock status
- Price
- Bulk actions
- Pagination

Actions:

Create
Edit
Duplicate
Archive
Delete

Product form:

Name
Slug
Description
Short description
SKU
Price
Compare-at price
Cost price
Category
Brand
Images
Gallery
Stock quantity
Low-stock threshold
Weight
Dimensions
Variants
Status
Featured
SEO title
SEO description

Statuses:

Draft
Active
Archived

==================================================
28. CREATE PRODUCT
==================================================

Build a professional product creation interface.

Layout:

Left:

Product information
Description
Media

Right:

Status
Pricing
Inventory
Category
Publishing

Use React Hook Form + Zod.

Validation:

Name required
Price required
SKU required
Category required
Stock quantity numeric
Price cannot be negative

Image uploader:

Drag and drop
Preview
Remove
Reorder

==================================================
29. CATEGORY MANAGEMENT
==================================================

Route:

/admin/categories

Features:

Create category
Edit category
Delete category
Category image
Description
Parent category
Product count

Support nested categories.

Example:

Technology
  Hardware
    Inverters
    UPS
    Solar Controllers

==================================================
30. INVENTORY MANAGEMENT
==================================================

Route:

/admin/inventory

Show:

SKU
Product
Available
Reserved
Low-stock threshold
Status

Statuses:

In Stock
Low Stock
Out of Stock

Features:

Stock adjustment
Stock history
Inventory movement
Reason
User
Date

Stock adjustment should require:

Quantity
Adjustment type
Reason

Types:

Increase
Decrease
Correction

==================================================
31. CUSTOMER MANAGEMENT
==================================================

Route:

/admin/customers

Table:

Name
Email
Phone
Orders
Total spent
Last order
Status

Customer detail:

Profile
Orders
Addresses
Total spent
Activity

==================================================
32. DISCOUNTS
==================================================

Route:

/admin/discounts

Create discount:

Code
Type
Amount
Percentage
Minimum order
Maximum discount
Start date
End date
Usage limit
Active/inactive

==================================================
33. MEDIA MANAGEMENT
==================================================

Create:

/admin/media

Features:

Upload
Search
Filter
Delete
Preview
Copy URL
Assign to product

Use a grid layout.

==================================================
34. ANALYTICS
==================================================

Route:

/admin/analytics

Include:

Revenue
Orders
Average order value
Conversion rate
Top products
Top categories
Customer growth
Revenue by period

Filters:

Today
7 days
30 days
90 days
12 months
Custom

Charts:

Revenue
Orders
Customers
Products

Do not overpopulate the page.

==================================================
35. STORE SETTINGS
==================================================

Route:

/admin/settings

Sections:

General
Store information
Currency
Tax
Shipping
Payments
Notifications
Email
SEO
Social links

Store information:

Name
Logo
Email
Phone
Address
Currency
Timezone

==================================================
36. ADMIN USERS & ROLES
==================================================

Route:

/admin/users

Roles:

Super Admin
Store Manager
Inventory Manager
Order Manager
Content Manager

Permissions should be modeled even if the initial implementation uses mock authentication.

Example:

products.read
products.create
products.update
products.delete

orders.read
orders.update

inventory.read
inventory.update

customers.read

analytics.read

settings.update

==================================================
37. AUTHENTICATION
==================================================

Create a frontend authentication abstraction.

Routes:

/login
/admin/login

Do not build insecure fake authentication into production architecture.

Create an AuthService interface.

Support:

login
logout
currentUser
refreshSession
hasPermission

For development, provide mock authentication.

Clearly separate:

development mock auth

from:

production API authentication.

==================================================
38. API ARCHITECTURE
==================================================

Do not hardcode API calls throughout components.

Create services:

authService
productService
categoryService
orderService
customerService
inventoryService
discountService
mediaService
analyticsService
settingsService

Example:

productService.getProducts()
productService.getProduct(id)
productService.createProduct(data)
productService.updateProduct(id, data)
productService.deleteProduct(id)

Use TanStack Query for:

GET
POST
PUT/PATCH
DELETE

Invalidate queries after mutations.

==================================================
39. DATA TYPES
==================================================

Create TypeScript models.

Product:

id
name
slug
description
shortDescription
sku
price
compareAtPrice
costPrice
categoryId
images
stockQuantity
lowStockThreshold
status
featured
createdAt
updatedAt

Category:

id
name
slug
description
image
parentId
createdAt

Order:

id
customerId
items
subtotal
shipping
tax
discount
total
paymentStatus
orderStatus
shippingAddress
billingAddress
createdAt
updatedAt

Customer:

id
name
email
phone
ordersCount
totalSpent
status
createdAt

InventoryMovement:

id
productId
type
quantity
reason
userId
createdAt

==================================================
40. STATE MANAGEMENT
==================================================

Use Zustand only for client state that genuinely needs global access.

Examples:

Cart
UI preferences
Admin sidebar state
Selected filters if necessary

Use TanStack Query for server state.

Do NOT put all API data inside Zustand.

==================================================
41. RESPONSIVE ADMIN DASHBOARD
==================================================

Desktop:

Sidebar + content.

Tablet:

Collapsible sidebar.

Mobile:

Bottom/slide-out navigation.

Tables should become mobile-friendly cards where appropriate.

Do not create horizontally overflowing desktop tables as the default mobile experience.

==================================================
42. ADMIN UX
==================================================

Every data page needs:

Loading state
Empty state
Error state
Success feedback
Confirmation dialogs
Pagination
Search
Filters

For destructive actions:

Show confirmation.

Example:

"Delete product?"

"This action cannot be undone."

Buttons:

Cancel
Delete product

==================================================
43. TOAST NOTIFICATIONS
==================================================

Use toast feedback.

Examples:

"Product created successfully."

"Product updated successfully."

"Order status updated."

"Inventory adjusted."

"Category deleted."

==================================================
44. ACCESSIBILITY
==================================================

Target WCAG 2.2 AA.

Include:

Keyboard navigation
Focus states
ARIA labels where necessary
Accessible dialogs
Accessible forms
Semantic headings
Color contrast
Reduced motion

Do not communicate status using color alone.

For example:

Low Stock

should have:

badge + text

not only:

red color.

==================================================
45. SEO
==================================================

Each public page should have:

Title
Meta description
Canonical URL
OpenGraph metadata

Create reusable SEO component.

Examples:

Centrifuge Group | Technology That Moves Business Forward

Centrifuge Logistics | Logistics Management Technology

Optimax | Connected Business Management Platform

==================================================
46. LEGACY URL COMPATIBILITY
==================================================

This is extremely important.

The redesign must account for existing public URLs.

Do not blindly delete old routes.

Where an old URL has been replaced:

create a route redirect.

Maintain old URLs when possible.

Examples:

/career/
/job-openings/
/our-clients/
/logistic-management-software/
/web-application-development/
/human-resource-for-health-information-system/
/shop/

Existing blog URLs must not be unnecessarily broken.

Individual job URLs must also be preserved or redirected.

Create a central route migration configuration.

Example:

legacy route
→ new route
→ 301 redirect in production

==================================================
47. CONTENT STRATEGY
==================================================

Do not fabricate:

- Clients
- Statistics
- Revenue
- Project results
- Awards
- Testimonials
- Product capabilities
- Certifications

Where real data isn't available, use:

"[Content placeholder — replace with verified Centrifuge information]"

Demo store data must be explicitly treated as demo data.

==================================================
48. DEMO DATA
==================================================

Create realistic demo data for development.

Products:

Use categories such as:

Inverters
UPS
Solar Controllers
Hardware

Create around 12-20 products.

Orders:

Create around 20 demo orders.

Customers:

Create around 15 demo customers.

Categories:

Create realistic hierarchy.

Analytics:

Generate deterministic demo data.

Do not use random values that change on every refresh.

==================================================
49. PERFORMANCE
==================================================

Use:

Lazy-loaded routes
Code splitting
Optimized images
Responsive images
Minimal dependencies
Memoization only where justified
Pagination
Virtualization where appropriate

Do not load the entire admin application on the public homepage.

==================================================
50. SECURITY CONSIDERATIONS
==================================================

Frontend must never contain:

API secrets
Payment secret keys
Private credentials
Database credentials

Use environment variables only for public configuration.

Example:

VITE_API_BASE_URL

Never expose server-side secrets through VITE variables.

All actual authorization must ultimately be enforced by the backend.

Frontend permissions are for UX only.

==================================================
51. ERROR HANDLING
==================================================

Create global error handling.

Include:

404 page
403 page
500/error page
Network error
API error
Form validation error
Empty state

404 page:

"Page not found."

CTA:

"Return home"

==================================================
52. COMPONENT QUALITY
==================================================

Do not produce giant components.

Avoid:

HomePage.tsx containing 1,500 lines.

Break into:

Hero
TrustSection
SolutionsSection
OptimaxSection
IndustriesSection
ServicesSection
CaseStudiesSection
InsightsSection
CTASection

Similarly:

AdminDashboard
AdminStats
RevenueChart
OrdersOverview
TopProducts
LowStockProducts

==================================================
53. ADMIN VISUAL DESIGN
==================================================

Admin dashboard should visually relate to Centrifuge but should not look like the public marketing site.

Use:

Background:
#F7F9FA

Sidebar:
#071521

Primary:
#0B1F33

Accent:
#16C7D9

Cards:
#FFFFFF

Borders:
#E2E8F0

Typography:

Inter primarily.

Dashboard should feel like:

premium enterprise SaaS.

Avoid excessive gradients.

==================================================
54. ADMIN SIDEBAR
==================================================

Structure:

Centrifuge Admin

Overview

STORE
Orders
Products
Categories
Inventory
Customers
Discounts

CONTENT
Media
Reviews

ANALYTICS
Analytics

SYSTEM
Users & Roles
Settings

Bottom:

Help
View Store

Admin profile

==================================================
55. DASHBOARD OVERVIEW WIREFRAME
==================================================

Create:

------------------------------------------------

Good morning, Admin

Here's what's happening with your store today.

[Date filter]

------------------------------------------------

[Revenue]
₦24.5M

[Orders]
1,284

[Customers]
842

[Products]
126

------------------------------------------------

Revenue Overview

[LINE CHART]

------------------------------------------------

Recent Orders             Top Products

ORD-1001                  Product A
ORD-1002                  Product B
ORD-1003                  Product C

------------------------------------------------

Sales by Category         Inventory Alerts

[CHART]                   12 Low Stock

------------------------------------------------

==================================================
56. PUBLIC STORE DESIGN
==================================================

Store should visually connect with Centrifuge.

Store header:

Logo
Shop
Categories
Search
Wishlist
Cart
Account

Hero:

"Technology for the way you work."

Product discovery should be fast.

Product cards:

Image
Category
Name
Price
Stock
Add to cart

Do not overcrowd product cards.

==================================================
57. SEARCH
==================================================

Public store search:

Search products.

Admin search:

Search products
Orders
Customers

Use debounced search.

==================================================
58. FILTERS
==================================================

Store filters:

Category
Price
Availability
Brand

Admin product filters:

Category
Status
Stock
Featured

Admin order filters:

Status
Payment
Date

==================================================
59. EMPTY STATES
==================================================

Create meaningful empty states.

Example:

"No products found."

"Try adjusting your search or filters."

Button:

"Clear filters"

Cart empty:

"Your cart is empty."

Button:

"Continue shopping"

Orders empty:

"No orders yet."

==================================================
60. DESIGN QUALITY BAR
==================================================

The result must look like a real company website and SaaS application.

Do not produce:

- Generic dashboard
- Generic blue SaaS template
- Random gradients
- Excessive cards
- Poor typography
- Tiny text
- Excessive icons
- Inconsistent spacing
- Inconsistent buttons
- Placeholder lorem ipsum everywhere

Use deliberate hierarchy.

==================================================
61. MOBILE QUALITY BAR
==================================================

The application must be fully usable on:

320px
375px
390px
430px
768px
1024px
1280px
1440px+

Test:

Navigation
Forms
Tables
Cards
Charts
Cart
Checkout
Admin dashboard
Product creation

==================================================
62. DELIVERABLE
==================================================

Build the application.

Do not only create static mockups.

Implement:

1. Public corporate website
2. Solutions
3. Services
4. Industries
5. About
6. Clients
7. Case studies
8. Insights
9. Careers
10. Shop
11. Product details
12. Cart
13. Checkout
14. Customer account
15. Admin authentication abstraction
16. Admin dashboard
17. Product management
18. Category management
19. Inventory management
20. Order management
21. Customer management
22. Discounts
23. Media management
24. Analytics
25. Users & roles
26. Store settings

==================================================
63. IMPLEMENTATION ORDER
==================================================

Build in this order:

PHASE 1
Project setup
Routing
Design tokens
Global styles
Typography
Reusable UI components

PHASE 2
Header
Footer
Homepage
Responsive layout

PHASE 3
Solutions
Services
Industries
About
Clients
Case studies
Insights
Careers

PHASE 4
Storefront
Product listing
Product details
Cart
Checkout
Account

PHASE 5
Admin shell
Authentication abstraction
Sidebar
Dashboard

PHASE 6
Products
Categories
Inventory

PHASE 7
Orders
Customers
Discounts

PHASE 8
Analytics
Media
Reviews
Settings
Users & Roles

PHASE 9
Legacy route redirects
SEO
Accessibility
Performance
Error states

PHASE 10
Final visual polish
Responsive QA
Interaction QA
Form QA
Navigation QA

==================================================
64. DEVELOPMENT RULES
==================================================

Before implementing a feature:

1. Define its data model.
2. Define its component structure.
3. Define its state requirements.
4. Define its API service.
5. Implement UI.
6. Add loading/error/empty states.
7. Add responsive behavior.
8. Test the flow.

Do not duplicate business logic across components.

Use TypeScript strictly.

Avoid any.

Use interfaces/types for domain models.

Use reusable components.

Use semantic HTML.

==================================================
65. FINAL ACCEPTANCE CRITERIA
==================================================

The application is considered complete only when:

- Every major public route works.
- Navigation works.
- Mobile navigation works.
- Store browsing works.
- Product details work.
- Cart works.
- Checkout flow works with mock payment.
- Customer account works with mock data.
- Admin login flow works in development mode.
- Admin dashboard works.
- Products can be created/edited/deleted in demo mode.
- Categories work.
- Inventory adjustments work.
- Orders can be viewed and status changed.
- Customers can be viewed.
- Discounts can be managed.
- Analytics render.
- Settings render and can be edited in demo mode.
- Loading states exist.
- Empty states exist.
- Error states exist.
- Destructive actions have confirmation.
- Forms validate correctly.
- Responsive layouts work.
- Accessibility basics are implemented.
- SEO metadata exists.
- Legacy routes are accounted for.
- No secrets are exposed.
- No fabricated Centrifuge claims are presented as factual.
- Code is modular and maintainable.

==================================================
66. IMPORTANT FINAL INSTRUCTION
==================================================

Do not treat this as a one-page website.

Build it as a scalable React application that could eventually connect to a Node.js backend and real database.

Use mock services/data initially, but structure everything so replacing mock services with real API calls does not require rewriting the UI.

The architecture should support:

React/Vite frontend
+
Node.js API
+
PostgreSQL
+
Object storage
+
Payment provider
+
Authentication
+
Role-based authorization

The frontend must remain independent from backend implementation details.

Prioritize:

1. Information architecture
2. User experience
3. Visual hierarchy
4. Reusability
5. Type safety
6. Responsive design
7. Accessibility
8. Performance
9. API readiness
10. Maintainability

The final product should feel like a modern, credible enterprise technology company—not a generic template.
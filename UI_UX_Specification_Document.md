# UI/UX Specification Document: Enterprise Banking Portal

## 1. Design Philosophy & Guidelines
This specification establishes a clean, high-performance, and modular UI framework modeled after modern enterprise financial technology platforms (e.g., Axxiome). The core focus is to balance heavy data density with strong visual hierarchy and absolute consistency.

### 1.1 Color Palette
*   **Primary (Brand):** `#0F2C59` (Deep Navy — evokes stability, security, and institutional trust)
*   **Secondary/Accent:** `#008DDA` (Vibrant Blue — used for call-to-actions, primary links, and key focus states)
*   **Neutral Dark:** `#1A1A1A` (Charcoal — applied to body copy and primary headers for maximum readability)
*   **Neutral Light:** `#F5F7FA` (Off-White/Cool Gray — background color for page layouts and card structures)
*   **Success Indicator:** `#10B981` (Emerald Green)
*   **Alert Indicator:** `#EF4444` (Coral Red)

### 1.2 Typography
*   **Primary Font Family:** `Inter`, `Segoe UI`, sans-serif (Highly legible geometric neo-grotesque faces)
*   **Scale & Hierarchy:**
    *   **H1 (Page Headers):** 32px / Bold (700) / Line Height: 1.2
    *   **H2 (Section Titles):** 24px / Semi-Bold (600) / Line Height: 1.3
    *   **H3 (Card/Widget Headers):** 18px / Medium (500) / Line Height: 1.4
    *   **Body Text:** 14px / Regular (400) / Line Height: 1.5
    *   **Captions/Data Labels:** 12px / Medium (500) / Line Height: 1.4

---

## 2. Layout Structure & Grid System
The platform utilizes a hybrid responsive fluid grid to optimize horizontal viewing space for dense tables, while containing editorial components.

### 2.1 The Global Framework
*   **Layout Style:** Fixed Left Navigation sidebar paired with a top Global Status Bar. The main content zone resides in a fluid right-side workspace canvas.
*   **Grid Specs:** 12-Column Grid system using CSS Grid or Flexbox.
    *   **Gutter Width:** 24px fixed.
    *   **Outer Page Margins:** 32px fixed.
*   **Responsive Breakpoints:**
    *   **Desktop Standard (Base Design):** 1440px and above.
    *   **Laptop/Tablet Landscape:** 1024px to 1439px (Sidebar collapses to icon-only mode).
    *   **Mobile/Portrait:** Under 1023px (Sidebar transitions to a full-screen slide-out drawer).

---

## 3. Global UI Components

### 3.1 Global Status Bar (Top Header)
*   **Height:** 72px fixed.
*   **Background:** `#FFFFFF` with a 1px solid border at the bottom (`#E2E8F0`).
*   **Elements (Left to Right):**
    1.  *Breadcrumb Trail:* Text indicators mapping current system node (e.g., Solutions > Digital Banking).
    2.  *Global Search Input:* Centered omni-search block, width 400px. Placeholder text: *"Search accounts, components, or documentation..."*
    3.  *Notification Hub:* Icon indicator with active green/red state badges.
    4.  *User Profile Profile Trigger:* Rounded avatar (36px) alongside user name and role.

### 3.2 Fixed Navigation Sidebar (Left Menu)
*   **Width:** 260px fixed width (collapsible to 72px).
*   **Background:** `#0F2C59` (Primary Brand Color).
*   **Interaction State Styling:**
    *   *Default Item:* Text color `#A0AEC0`, transparent background.
    *   *Hover State:* Text shifts to `#FFFFFF`, background switches to `#1E3A8A`.
    *   *Active State:* Text color `#FFFFFF`, background `#008DDA` with a 4px thick accent bar fixed to the immediate left border.

### 3.3 The Data Card Module (Dashboard Content)
*   **Border Radius:** 8px.
*   **Background & Border:** `#FFFFFF` fill with an explicit `#E2E8F0` 1px border profile. No deep drop shadows.
*   **Padding Matrix:** 24px internal inset padding uniformly applied to content boundaries.

---

## 4. Key Page Wireframe Templates

### 4.1 Template A: The Corporate Homepage / Solution Overview
Designed to pitch enterprise products clearly using clean modular bands.

```
+-----------------------------------------------------------------------------------+
| [Logo]  Solutions   Products   Company   Resources            [Contact Us (Button)]|
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                                HERO SECTION                                       |
|                  Next-Generation Digital Banking Architecture                     |
|         [ primary action button ]             [ secondary action button ]          |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                             3-COLUMN CORE CAPABILITIES                             |
|    +--------------------+    +--------------------+    +--------------------+     |
|    |  Modular Coreless  |    | Omnichannel Engine |    |  Visual Modeler    |     |
|    |  [Icon] Text info. |    | [Icon] Text info.  |    | [Icon] Text info.  |     |
|    +--------------------+    +--------------------+    +--------------------+     |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### 4.2 Template B: Technical Capabilities & Visual Studio Dashboard
An interface optimized for internal developers or business clients checking technical features.

```
+-----------------------------------------------------------------------------------+
| Home > Solutions > Banking Framework                      [Search...]  (Prop Account)|
+-----------------------------------------------------------------------------------+
| (Menu)     |                                                                      |
| Dashboard  |  [ Summary Metric Card ]  [ Architecture Node ]  [ Active API Load ]  |
|            |  +---------------------+  +--------------------+  +------------------+  |
| Modules    |  | System Status: 100% |  | Hybrid Cloud Core  |  | 2.4k Requests/s  |  |
|            |  +---------------------+  +--------------------+  +------------------+  |
| API Docs   |                                                                      |
|            |  +-----------------------------------------------------------------+  |
| Settings   |  | INTERACTIVE PROCESS MODELER DISPLAY CANVAS                      |  |
|            |  | [Step 1: Ingestion] ----> [Step 2: Processing] ----> [Step 3]   |  |
| [Collapse] |  +-----------------------------------------------------------------+  |
+------------+----------------------------------------------------------------------+
```

---

## 5. Interaction States & Transitions

### 5.1 Buttons & CTA Actions
*   **Primary Button:** Background color `#008DDA`, text `#FFFFFF`, 4px border radius.
    *   *Hover State:* Background transitions smoothly over 200ms to `#0077B6`.
    *   *Focus/Active State:* Outlined by a 2px external glow matching `#0F2C59`.
*   **Secondary Button:** Border 1px solid `#008DDA`, text color `#008DDA`, background transparent.
    *   *Hover State:* Background swaps to `#008DDA` with text shifting directly to `#FFFFFF`.

### 5.2 Micro-interactions
*   **Transitions:** All UI element property changes (background color change, structural size scaling, toggle indicators) must employ a strict global curve: `transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);`
*   **Data Updates:** When numeric elements or data points refresh asynchronously via backend integrations, flash the text container's background with a subtle `#008DDA` tint for exactly 400ms to visually cue the user.

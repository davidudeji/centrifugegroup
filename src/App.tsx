import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Layouts
import { PublicLayout } from './components/layout/PublicLayout'
import { AdminLayout } from './components/layout/AdminLayout'

// Public Pages
import { HomePage } from './pages/public/HomePage'
import { AboutPage } from './pages/public/AboutPage'
import { SolutionsPage } from './pages/public/SolutionsPage'
import { OptimaxPage } from './pages/public/OptimaxPage'
import { LogisticsPage } from './pages/public/LogisticsPage'
import { HealthcarePage } from './pages/public/HealthcarePage'
import { EnterprisePage } from './pages/public/EnterprisePage'
import { DataAnalyticsPage } from './pages/public/DataAnalyticsPage'
import { ServicesPage } from './pages/public/ServicesPage'
import { ServiceDetailPage } from './pages/public/ServiceDetailPage'
import { IndustriesPage } from './pages/public/IndustriesPage'
import { IndustryDetailPage } from './pages/public/IndustryDetailPage'
import { ClientsPage } from './pages/public/ClientsPage'
import { CaseStudiesPage } from './pages/public/CaseStudiesPage'
import { CaseStudyDetailPage } from './pages/public/CaseStudyDetailPage'
import { InsightsPage } from './pages/public/InsightsPage'
import { InsightDetailPage } from './pages/public/InsightDetailPage'
import { CareersPage } from './pages/public/CareersPage'
import { JobsPage } from './pages/public/JobsPage'
import { JobDetailPage } from './pages/public/JobDetailPage'
import { ContactPage } from './pages/public/ContactPage'
import { ProjectsPage } from './pages/public/ProjectsPage'
import { ProjectDetailPage } from './pages/public/ProjectDetailPage'
import { VideoPreviewPage } from './pages/public/VideoPreviewPage'

// Shop Pages
import { ShopPage } from './pages/shop/ShopPage'
import { ProductDetailPage } from './pages/shop/ProductDetailPage'
import { CartPage } from './pages/shop/CartPage'
import { CheckoutPage } from './pages/shop/CheckoutPage'
import { CustomerAccountPage } from './pages/shop/CustomerAccountPage'

// Auth Pages
import { LoginPage } from './pages/LoginPage'
import { AdminLoginPage } from './pages/AdminLoginPage'
import { NotFoundPage } from './pages/NotFoundPage'

// Admin Pages
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage'
import { AdminProductsPage } from './pages/admin/AdminProductsPage'
import { AdminProductFormPage } from './pages/admin/AdminProductFormPage'
import { AdminCategoriesPage } from './pages/admin/AdminCategoriesPage'
import { AdminInventoryPage } from './pages/admin/AdminInventoryPage'
import { AdminOrdersPage } from './pages/admin/AdminOrdersPage'
import { AdminOrderDetailPage } from './pages/admin/AdminOrderDetailPage'
import { AdminCustomersPage } from './pages/admin/AdminCustomersPage'
import { AdminCustomerDetailPage } from './pages/admin/AdminCustomerDetailPage'
import { AdminDiscountsPage } from './pages/admin/AdminDiscountsPage'
import { AdminAnalyticsPage } from './pages/admin/AdminAnalyticsPage'
import { AdminMediaPage } from './pages/admin/AdminMediaPage'
import { AdminProjectsPage } from './pages/admin/AdminProjectsPage'
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage'
import { AdminUsersPage } from './pages/admin/AdminUsersPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* ─── Auth Routes (standalone, no layout) ─── */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* ─── Public / Marketing Routes ─── */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Solutions */}
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/optimax" element={<OptimaxPage />} />
            <Route path="/solutions/logistics" element={<LogisticsPage />} />
            <Route path="/solutions/healthcare" element={<HealthcarePage />} />
            <Route path="/solutions/enterprise" element={<EnterprisePage />} />
            <Route path="/solutions/data-analytics" element={<DataAnalyticsPage />} />

            {/* Services */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            {/* Industries */}
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/:slug" element={<IndustryDetailPage />} />

            {/* Company */}
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />

            {/* Insights */}
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<InsightDetailPage />} />

            {/* Careers */}
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/jobs" element={<JobsPage />} />
            <Route path="/careers/jobs/:slug" element={<JobDetailPage />} />

            {/* Contact */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Projects Showcase */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />

            {/* Video Preview Showcase (video_preview-spec.md) */}
            <Route path="/video-preview" element={<VideoPreviewPage />} />

            {/* Shop / Ecommerce */}
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:slug" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/account" element={<CustomerAccountPage />} />
            <Route path="/account/:section" element={<CustomerAccountPage />} />
          </Route>

          {/* ─── Admin Routes ─── */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="orders" element={<AdminOrdersPage />} />
            <Route path="orders/:id" element={<AdminOrderDetailPage />} />
            <Route path="products" element={<AdminProductsPage />} />
            <Route path="products/new" element={<AdminProductFormPage />} />
            <Route path="products/:id/edit" element={<AdminProductFormPage />} />
            <Route path="categories" element={<AdminCategoriesPage />} />
            <Route path="inventory" element={<AdminInventoryPage />} />
            <Route path="customers" element={<AdminCustomersPage />} />
            <Route path="customers/:id" element={<AdminCustomerDetailPage />} />
            <Route path="discounts" element={<AdminDiscountsPage />} />
            <Route path="analytics" element={<AdminAnalyticsPage />} />
            <Route path="media" element={<AdminMediaPage />} />
            <Route path="projects" element={<AdminProjectsPage />} />
            <Route path="settings" element={<AdminSettingsPage />} />
            <Route path="users" element={<AdminUsersPage />} />
          </Route>

          {/* ─── Legacy URL Redirects (spec §50) ─── */}
          <Route path="/career" element={<Navigate to="/careers" replace />} />
          <Route path="/career/" element={<Navigate to="/careers" replace />} />
          <Route path="/job-openings" element={<Navigate to="/careers/jobs" replace />} />
          <Route path="/job-openings/" element={<Navigate to="/careers/jobs" replace />} />
          <Route path="/our-clients" element={<Navigate to="/clients" replace />} />
          <Route path="/our-clients/" element={<Navigate to="/clients" replace />} />
          <Route path="/logistic-management-software" element={<Navigate to="/solutions/logistics" replace />} />
          <Route path="/logistic-management-software/" element={<Navigate to="/solutions/logistics" replace />} />
          <Route path="/web-application-development" element={<Navigate to="/services/software-development" replace />} />
          <Route path="/web-application-development/" element={<Navigate to="/services/software-development" replace />} />
          <Route path="/human-resource-for-health-information-system" element={<Navigate to="/solutions/healthcare" replace />} />
          <Route path="/human-resource-for-health-information-system/" element={<Navigate to="/solutions/healthcare" replace />} />

          {/* Catch-all → 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Layouts
import { PublicLayout } from './components/layout/PublicLayout';
import { AdminLayout } from './components/layout/AdminLayout';
// Public Pages
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { SolutionsPage } from './pages/public/SolutionsPage';
import { OptimaxPage } from './pages/public/OptimaxPage';
import { LogisticsPage } from './pages/public/LogisticsPage';
import { HealthcarePage } from './pages/public/HealthcarePage';
import { EnterprisePage } from './pages/public/EnterprisePage';
import { DataAnalyticsPage } from './pages/public/DataAnalyticsPage';
import { ServicesPage } from './pages/public/ServicesPage';
import { ServiceDetailPage } from './pages/public/ServiceDetailPage';
import { IndustriesPage } from './pages/public/IndustriesPage';
import { IndustryDetailPage } from './pages/public/IndustryDetailPage';
import { ClientsPage } from './pages/public/ClientsPage';
import { CaseStudiesPage } from './pages/public/CaseStudiesPage';
import { CaseStudyDetailPage } from './pages/public/CaseStudyDetailPage';
import { InsightsPage } from './pages/public/InsightsPage';
import { InsightDetailPage } from './pages/public/InsightDetailPage';
import { CareersPage } from './pages/public/CareersPage';
import { JobsPage } from './pages/public/JobsPage';
import { JobDetailPage } from './pages/public/JobDetailPage';
import { ContactPage } from './pages/public/ContactPage';
import { ProjectsPage } from './pages/public/ProjectsPage';
import { ProjectDetailPage } from './pages/public/ProjectDetailPage';
// Shop Pages
import { ShopPage } from './pages/shop/ShopPage';
import { ProductDetailPage } from './pages/shop/ProductDetailPage';
import { CartPage } from './pages/shop/CartPage';
import { CheckoutPage } from './pages/shop/CheckoutPage';
import { CustomerAccountPage } from './pages/shop/CustomerAccountPage';
// Auth Pages
import { LoginPage } from './pages/LoginPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
// Admin Pages
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminProductsPage } from './pages/admin/AdminProductsPage';
import { AdminProductFormPage } from './pages/admin/AdminProductFormPage';
import { AdminCategoriesPage } from './pages/admin/AdminCategoriesPage';
import { AdminInventoryPage } from './pages/admin/AdminInventoryPage';
import { AdminOrdersPage } from './pages/admin/AdminOrdersPage';
import { AdminOrderDetailPage } from './pages/admin/AdminOrderDetailPage';
import { AdminCustomersPage } from './pages/admin/AdminCustomersPage';
import { AdminCustomerDetailPage } from './pages/admin/AdminCustomerDetailPage';
import { AdminDiscountsPage } from './pages/admin/AdminDiscountsPage';
import { AdminAnalyticsPage } from './pages/admin/AdminAnalyticsPage';
import { AdminMediaPage } from './pages/admin/AdminMediaPage';
import { AdminProjectsPage } from './pages/admin/AdminProjectsPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
import { AdminUsersPage } from './pages/admin/AdminUsersPage';
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            retry: 1,
        },
    },
});
export default function App() {
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/admin/login", element: _jsx(AdminLoginPage, {}) }), _jsxs(Route, { element: _jsx(PublicLayout, {}), children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/solutions", element: _jsx(SolutionsPage, {}) }), _jsx(Route, { path: "/solutions/optimax", element: _jsx(OptimaxPage, {}) }), _jsx(Route, { path: "/solutions/logistics", element: _jsx(LogisticsPage, {}) }), _jsx(Route, { path: "/solutions/healthcare", element: _jsx(HealthcarePage, {}) }), _jsx(Route, { path: "/solutions/enterprise", element: _jsx(EnterprisePage, {}) }), _jsx(Route, { path: "/solutions/data-analytics", element: _jsx(DataAnalyticsPage, {}) }), _jsx(Route, { path: "/services", element: _jsx(ServicesPage, {}) }), _jsx(Route, { path: "/services/:slug", element: _jsx(ServiceDetailPage, {}) }), _jsx(Route, { path: "/industries", element: _jsx(IndustriesPage, {}) }), _jsx(Route, { path: "/industries/:slug", element: _jsx(IndustryDetailPage, {}) }), _jsx(Route, { path: "/clients", element: _jsx(ClientsPage, {}) }), _jsx(Route, { path: "/case-studies", element: _jsx(CaseStudiesPage, {}) }), _jsx(Route, { path: "/case-studies/:slug", element: _jsx(CaseStudyDetailPage, {}) }), _jsx(Route, { path: "/insights", element: _jsx(InsightsPage, {}) }), _jsx(Route, { path: "/insights/:slug", element: _jsx(InsightDetailPage, {}) }), _jsx(Route, { path: "/careers", element: _jsx(CareersPage, {}) }), _jsx(Route, { path: "/careers/jobs", element: _jsx(JobsPage, {}) }), _jsx(Route, { path: "/careers/jobs/:slug", element: _jsx(JobDetailPage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "/projects", element: _jsx(ProjectsPage, {}) }), _jsx(Route, { path: "/projects/:slug", element: _jsx(ProjectDetailPage, {}) }), _jsx(Route, { path: "/shop", element: _jsx(ShopPage, {}) }), _jsx(Route, { path: "/shop/:slug", element: _jsx(ProductDetailPage, {}) }), _jsx(Route, { path: "/cart", element: _jsx(CartPage, {}) }), _jsx(Route, { path: "/checkout", element: _jsx(CheckoutPage, {}) }), _jsx(Route, { path: "/account", element: _jsx(CustomerAccountPage, {}) }), _jsx(Route, { path: "/account/:section", element: _jsx(CustomerAccountPage, {}) })] }), _jsxs(Route, { path: "/admin", element: _jsx(AdminLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(AdminDashboardPage, {}) }), _jsx(Route, { path: "orders", element: _jsx(AdminOrdersPage, {}) }), _jsx(Route, { path: "orders/:id", element: _jsx(AdminOrderDetailPage, {}) }), _jsx(Route, { path: "products", element: _jsx(AdminProductsPage, {}) }), _jsx(Route, { path: "products/new", element: _jsx(AdminProductFormPage, {}) }), _jsx(Route, { path: "products/:id/edit", element: _jsx(AdminProductFormPage, {}) }), _jsx(Route, { path: "categories", element: _jsx(AdminCategoriesPage, {}) }), _jsx(Route, { path: "inventory", element: _jsx(AdminInventoryPage, {}) }), _jsx(Route, { path: "customers", element: _jsx(AdminCustomersPage, {}) }), _jsx(Route, { path: "customers/:id", element: _jsx(AdminCustomerDetailPage, {}) }), _jsx(Route, { path: "discounts", element: _jsx(AdminDiscountsPage, {}) }), _jsx(Route, { path: "analytics", element: _jsx(AdminAnalyticsPage, {}) }), _jsx(Route, { path: "media", element: _jsx(AdminMediaPage, {}) }), _jsx(Route, { path: "projects", element: _jsx(AdminProjectsPage, {}) }), _jsx(Route, { path: "settings", element: _jsx(AdminSettingsPage, {}) }), _jsx(Route, { path: "users", element: _jsx(AdminUsersPage, {}) })] }), _jsx(Route, { path: "/career", element: _jsx(Navigate, { to: "/careers", replace: true }) }), _jsx(Route, { path: "/career/", element: _jsx(Navigate, { to: "/careers", replace: true }) }), _jsx(Route, { path: "/job-openings", element: _jsx(Navigate, { to: "/careers/jobs", replace: true }) }), _jsx(Route, { path: "/job-openings/", element: _jsx(Navigate, { to: "/careers/jobs", replace: true }) }), _jsx(Route, { path: "/our-clients", element: _jsx(Navigate, { to: "/clients", replace: true }) }), _jsx(Route, { path: "/our-clients/", element: _jsx(Navigate, { to: "/clients", replace: true }) }), _jsx(Route, { path: "/logistic-management-software", element: _jsx(Navigate, { to: "/solutions/logistics", replace: true }) }), _jsx(Route, { path: "/logistic-management-software/", element: _jsx(Navigate, { to: "/solutions/logistics", replace: true }) }), _jsx(Route, { path: "/web-application-development", element: _jsx(Navigate, { to: "/services/software-development", replace: true }) }), _jsx(Route, { path: "/web-application-development/", element: _jsx(Navigate, { to: "/services/software-development", replace: true }) }), _jsx(Route, { path: "/human-resource-for-health-information-system", element: _jsx(Navigate, { to: "/solutions/healthcare", replace: true }) }), _jsx(Route, { path: "/human-resource-for-health-information-system/", element: _jsx(Navigate, { to: "/solutions/healthcare", replace: true }) }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] }) }) }));
}

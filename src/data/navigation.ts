export interface NavigationLink {
  label: string
  href: string
  description?: string
}

export interface NavigationColumn {
  heading: string
  links: NavigationLink[]
}

export interface NavigationGroup {
  id: string
  label: string
  columns: NavigationColumn[]
}

export const siteNavigationGroups: NavigationGroup[] = [
  {
    id: 'solutions',
    label: 'Solutions',
    columns: [
      {
        heading: 'Project delivery',
        links: [
          { label: 'Project Development & Management', href: '/solutions/project-development-management', description: 'Structured delivery and governance for complex initiatives.' },
          { label: 'All Solutions', href: '/solutions' },
        ],
      },
      {
        heading: 'Enterprise platforms',
        links: [
          { label: 'Optimax ERP Suite', href: '/solutions/optimax' },
          { label: 'Enterprise Systems', href: '/solutions/enterprise' },
        ],
      },
      {
        heading: 'Digital operations',
        links: [
          { label: 'Healthcare Systems', href: '/solutions/healthcare' },
          { label: 'Logistics & Telematics', href: '/solutions/logistics' },
        ],
      },
      {
        heading: 'Data & analytics',
        links: [
          { label: 'Data Analytics', href: '/solutions/data-analytics' },
          { label: 'Explore Projects', href: '/projects' },
        ],
      },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    columns: [
      {
        heading: 'Application development',
        links: [
          { label: 'Software Development', href: '/services/software-development' },
          { label: 'Mobile Development', href: '/services/mobile-development' },
          { label: 'All Services', href: '/services' },
        ],
      },
      {
        heading: 'Advisory & enablement',
        links: [
          { label: 'IT Consulting', href: '/services/consulting' },
          { label: 'IT Training', href: '/services/training' },
          { label: 'Project Development & Management', href: '/solutions/project-development-management' },
        ],
      },
      {
        heading: 'Infrastructure',
        links: [
          { label: 'Cloud Services', href: '/services/cloud' },
          { label: 'Infrastructure & Connectivity', href: '/services/infrastructure' },
        ],
      },
      {
        heading: 'Cloud platform',
        links: [
          { label: 'OptimaXCloud', href: '/optima-xcloud/' },
          { label: 'Cloud Migration', href: '/optima-xcloud/migration/' },
        ],
      },
    ],
  },
  {
    id: 'industries',
    label: 'Industries',
    columns: [
      {
        heading: 'Healthcare',
        links: [{ label: 'Healthcare & Public Health', href: '/industries/healthcare' }],
      },
      {
        heading: 'Mobility',
        links: [{ label: 'Logistics & Freight', href: '/industries/logistics' }],
      },
      {
        heading: 'Public sector',
        links: [{ label: 'Government & Institutions', href: '/industries/government' }],
      },
      {
        heading: 'Business',
        links: [
          { label: 'Enterprise & Energy', href: '/industries/enterprise' },
          { label: 'Commercial SMEs', href: '/industries/smes' },
          { label: 'All Industries', href: '/industries' },
        ],
      },
    ],
  },
  {
    id: 'company',
    label: 'Company',
    columns: [
      {
        heading: 'About Centrifuge',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Our Clients', href: '/clients' },
        ],
      },
      {
        heading: 'Our work',
        links: [
          { label: 'Projects', href: '/projects' },
          { label: 'Case Studies', href: '/case-studies' },
        ],
      },
      {
        heading: 'News & careers',
        links: [
          { label: 'Insights', href: '/insights' },
          { label: 'Careers', href: '/careers' },
        ],
      },
      {
        heading: 'Connect',
        links: [
          { label: 'Contact Us', href: '/contact' },
          { label: 'Shop', href: '/shop' },
        ],
      },
    ],
  },
]

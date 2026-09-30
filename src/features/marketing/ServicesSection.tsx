import React from 'react'
import { Link } from 'react-router-dom'
import {
  Cog,
  GraduationCap,
  PieChart,
  Layers,
  BarChart3,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  const pillars = [
    {
      id: "app-dev",
      icon: Cog,
      title: "APPLICATION DEVELOPMENT",
      description:
        "We believe in building softwares that are not just great, but memorable, inspiring, remarkable and entertaining. We work with companies to understand their users and to shape and guide their strategy.",
      links: [
        {
          label: "Web application development",
          href: "/services/software-development",
        },
        {
          label: "Mobile application development",
          href: "/services/mobile-development",
        },
        {
          label: "Cloud/infrastructure application development",
          href: "/services/cloud",
        },
        {
          label: "E-commerce and professional website",
          href: "/services/software-development",
        },
      ],
      detailLink: "/services/software-development",
    },
    {
      id: "it-training",
      icon: GraduationCap,
      title: "IT TRAINING",
      description:
        "Are you driving your organization to becoming more standardized, simplified and automated? Our consultants can help your team assess the current state of your organizational processes, establish a new strategic vision and priorities a road map of change programs designed to help you transform your business and reach for a greater productivity.",
      links: [
        { label: "Database administration", href: "/services/training" },
        {
          label: "Project development and management",
          href: "/services/training",
        },
        { label: "Big Data", href: "/services/training" },
      ],
      detailLink: "/services/training",
    },
    {
      id: "it-consultancy",
      icon: PieChart,
      title: "IT CONSULTANCY",
      description:
        "Our IT Consulting team provides clients with access to a specialized group of professional resources experienced in a range of programme and project-related activities.",
      links: [
        { label: "World Health Organization - WHO", href: "/clients" },
        {
          label: "United Nation Children Emergency Fund - UNICEF",
          href: "/clients",
        },
        { label: "Management Science for Health (MSH)", href: "/clients" },
      ],
      detailLink: "/services/consulting",
    },
    {
      id: "infrastructure",
      icon: Layers,
      title: "Infrastructure and Connectivity Services",
      description:
        "In the realm of software development, Infrastructure and Connectivity services play a pivotal role in establishing a robust foundation for seamless operations. These services encompass the essential components that ensure the reliability, scalability, and efficiency of a company’s IT environment.",
      links: [
        { label: "Managed IT Services", href: "/services/managed-it" },
        { label: "Cloud Services", href: "/services/cloud" },
        {
          label: "Hardware and Software Integration",
          href: "/services/infrastructure",
        },
        { label: "Hardware Solution", href: "/services/infrastructure" },
        { label: "Network Service", href: "/services/managed-it" },
      ],
      detailLink: "/services/infrastructure",
    },
    {
      id: "enterprise-solutions",
      icon: BarChart3,
      title: "Enterprise Solutions",
      description:
        "These solutions often include Enterprise Resource Planning (ERP) systems, IT consulting, and custom IT solutions tailored to the specific requirements of an organization. ERP systems integrate core business processes such as finance, human resources, supply chain management, and customer relationship management into a unified platform, providing a comprehensive view of organizational data.",
      links: [
        {
          label: "ERP (Enterprise Resource Planning)",
          href: "/solutions/optimax",
        },
        { label: "Custom IT Solutions", href: "/solutions/enterprise" },
        {
          label: "Software Development and Customization",
          href: "/services/software-development",
        },
      ],
      detailLink: "/solutions/optimax",
    },
    {
      id: "business-solutions",
      icon: Briefcase,
      title: "Business Solutions",
      description:
        "Business Solutions, within the realm of software development services, encompass a range of offerings aimed at addressing and optimizing various aspects of a company’s operations. These services are tailored to enhance efficiency, productivity, and overall performance, contributing to the growth and success of businesses across industries.",
      links: [
        {
          label: "Software as a Service (SaaS) Development",
          href: "/solutions/optimax",
        },
        {
          label: "Digital Marketing Services",
          href: "/services/software-development",
        },
        { label: "E-commerce Solutions", href: "/shop" },
        {
          label: "Data Management and Analytics",
          href: "/solutions/data-analytics",
        },
      ],
      detailLink: "/solutions",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#121212] border-b border-[#1e1e1d]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684] mb-3">
            <span>CORE SERVICES & SOLUTIONS</span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] font-normal text-[#faf9f6] tracking-[-1.13px] leading-[1.05]">
            Engineered capabilities built for operational scale.
          </h2>
          <p className="text-[15px] text-[#868684] tracking-[-0.14px] mt-3 max-w-2xl leading-[1.4]">
            From application development and institutional capacity to
            enterprise cloud connectivity and business solutions, we partner
            with companies and institutions across every phase of digital
            evolution.
          </p>
        </div>

        {/* ─── Warp 6 Pillars Grid (Onyx #1e1e1d cards, 20px radius) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="p-7 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333] transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Icon & Category Pill */}
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center group-hover:border-[#f0b66d] transition-colors">
                      <Icon className="h-5 w-5 text-[#f0b66d]" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-[1.5px] px-2.5 py-0.5 rounded-[50px] border border-[#333333] text-[#868684] bg-[#121212]">
                      Specialization
                    </span>
                  </div>

                  {/* Title & Body */}
                  <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mt-5 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] text-[#868684] mt-3 leading-relaxed tracking-[-0.14px]">
                    {pillar.description}
                  </p>

                  {/* Bullet Sub-links with Arrow */}
                  <div className="mt-6 pt-5 border-t border-[#333333]/60 space-y-2.5">
                    {pillar.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="group/link flex items-start gap-2 text-[13px] text-[#b4b4b2] hover:text-[#f0b66d] transition-colors"
                      >
                        <span className="text-[#f0b66d] font-semibold text-[14px] leading-tight shrink-0 transition-transform group-hover/link:translate-x-0.5">
                          →
                        </span>
                        <span className="underline-offset-2 hover:underline">
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-4 border-t border-[#333333]/40">
                  <Link
                    to={pillar.detailLink}
                    className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors"
                  >
                    <span>Explore full specifications</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-10 px-5 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[13px] font-semibold shrink-0 transition-colors"
          >
            <span>Request technical consultation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection

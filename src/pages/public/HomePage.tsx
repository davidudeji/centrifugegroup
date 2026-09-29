import React from 'react'
import { SEO } from '../../components/ui/SEO'
import { HeroSection } from '../../features/marketing/HeroSection'
import { TrustSection } from '../../features/marketing/TrustSection'
import { WhatWeBuildSection } from '../../features/marketing/WhatWeBuildSection'
import { OptimaxShowcaseSection } from '../../features/marketing/OptimaxShowcaseSection'
import { LogisticsShowcaseSection } from '../../features/marketing/LogisticsShowcaseSection'
import { HealthcareShowcaseSection } from '../../features/marketing/HealthcareShowcaseSection'
import { ProjectsShowcaseSection } from '../../features/marketing/ProjectsShowcaseSection'
import { IndustriesSection } from '../../features/marketing/IndustriesSection'
import { ServicesSection } from '../../features/marketing/ServicesSection'
import { CaseStudiesSection } from '../../features/marketing/CaseStudiesSection'
import { TechnologySection } from '../../features/marketing/TechnologySection'
import { InsightsSection } from '../../features/marketing/InsightsSection'
import { FinalCTASection } from '../../features/marketing/FinalCTASection'

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <SEO
        title="Centrifuge Group | Technology That Moves Business Forward"
        description="We design and deliver enterprise software, healthcare platforms, logistics systems, and digital solutions that solve complex operational problems."
      />
      <HeroSection />
      <TrustSection />
      <WhatWeBuildSection />
      <OptimaxShowcaseSection />
      <LogisticsShowcaseSection />
      <HealthcareShowcaseSection />
      <ProjectsShowcaseSection />
      <IndustriesSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TechnologySection />
      <InsightsSection />
      <FinalCTASection />
    </div>
  )
}
export default HomePage

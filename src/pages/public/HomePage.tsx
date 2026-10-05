import React from 'react'
import { SEO } from '../../components/ui/SEO'
import { HeroSection } from '../../features/marketing/HeroSection'
import { TrustSection } from '../../features/marketing/TrustSection'
import { WhatWeBuildSection } from '../../features/marketing/WhatWeBuildSection'
import { OptimaxShowcaseSection } from '../../features/marketing/OptimaxShowcaseSection'
import { SystemArchitectureSection } from '../../features/marketing/SystemArchitectureSection'
import { ProjectsShowcaseSection } from '../../features/marketing/ProjectsShowcaseSection'
import { WhyCentrifugeSection } from '../../features/marketing/WhyCentrifugeSection'
import { IndustriesSection } from '../../features/marketing/IndustriesSection'
import { ServicesSection } from '../../features/marketing/ServicesSection'
import { CaseStudiesSection } from "../../features/marketing/CaseStudiesSection";
import { InsightsSection } from "../../features/marketing/InsightsSection";
import { FinalCTASection } from "../../features/marketing/FinalCTASection";

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <SEO
        title="Centrifuge Group | Next-Generation Digital Banking Architecture & Enterprise Technology"
        description="High-performance modular coreless banking framework, omnichannel orchestration, and enterprise technology systems."
      />
      <HeroSection />
      <TrustSection />
      <WhatWeBuildSection />
      <OptimaxShowcaseSection />
      <SystemArchitectureSection />
      <ProjectsShowcaseSection />
      <WhyCentrifugeSection />
      <IndustriesSection />
      <ServicesSection />
      <CaseStudiesSection />
      <InsightsSection />
      <FinalCTASection />
    </div>
  );
};
export default HomePage

import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Activity, Truck, BarChart3, ShieldCheck, Cpu } from 'lucide-react'

export const WhatWeBuildSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F7FA] border-b border-[#E2E8F0] text-left">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading (UI/UX Spec §1.2 H2 & Body) */}
        <div className="max-w-3xl mb-12">
          <h1>WE ARE THE BEST IN SOFTWARE DEVELOPMENT</h1>
          <br />
          <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight">
            Benefit from our expertise{" "}
          </h2>
          <p className="text-[15px] text-[#64748B] mt-2.5 max-w-2xl leading-relaxed">
            Empowering you with transformative solutions and cutting-edge tech,
            we tackle today’s challenges and unlock tomorrow’s opportunities.
            Our commitment is innovation that propels your business forward,
            ensuring you lead in an ever-evolving landscape. Navigate
            complexities with our expertise, turning challenges into strategic
            advantages. Trust us as your partner in progress, shaping a future
            where your success knows no bounds.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeBuildSection

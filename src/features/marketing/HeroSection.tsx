import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Layers, Workflow, CheckCircle2 } from "lucide-react";

const HERO_IMAGES = ["/enterprise%20tech.avif", "/enterprise%20tech2.avif"];

export const HeroSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const imageInterval = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => window.clearInterval(imageInterval);
  }, []);

  return (
    <div className="flex flex-col w-full text-left">
      {/* ─── Template A: HERO SECTION (UI/UX Spec §4.1) ─── */}
      <section className="relative flex min-h-[480px] items-center overflow-hidden border-b border-[#E2E8F0] bg-[#0F2C59] py-20 text-[#1A1A1A] sm:min-h-[540px] lg:min-h-[600px] lg:py-28">
        <div className="absolute inset-0" aria-hidden="true">
          {HERO_IMAGES.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] motion-reduce:transition-none ${
                activeImage === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A35]/90 via-[#0F2C59]/75 to-[#0F2C59]/45" />
        </div>
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Page Header (UI/UX Spec §1.2 H1: 32px-52px, Bold 700, Line Height 1.2) */}
          <h1 className="text-[36px] sm:text-[46px] lg:text-[54px] font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto drop-shadow-md">
            THE LATEST TRENDS FOR YOUR LATEST NEEDS
          </h1>

          {/* Subheading Body Text (UI/UX Spec §1.2: Regular 400, Line Height 1.5) */}
          <p className="mt-5 text-[16px] sm:text-[18px] text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
            With our experience in state of the art software development since
            2007 we have created various skill sets in developing tailor-fit
            solutions in different technologies to help our customers improve
            the way they innovate. .
          </p>
        </div>
      </section>

      {/* ─── 3-COLUMN CORE CAPABILITIES (UI/UX Spec §4.1 Wireframe) ─── */}
      <section className="py-20 lg:py-24 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight mt-2">
              Digitize your business today
            </h2>
            <p className="mt-3 text-[15px] text-[#64748B]">
              Embark on a transformative journey with our cutting-edge expertise
              in software development. From bespoke applications to seamless
              integrations, we specialize in crafting solutions that elevate
              your digital landscape
            </p>
          </div>

          {/* 3-Column Grid per Wireframe 4.1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1:  */}
            <div className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] p-6 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-xs transition-fin group text-left">
              <div>
                <div className="h-12 w-12 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center mb-6 group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                  <Cpu className="h-6 w-6" />
                </div>

                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mt-1 mb-3">
                  ENTERPRISE APPLICATION
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  Centrifuge Group develops enterprise application software
                  platform used to operate in a corporate environment such as
                  business or government. These applications are complex,
                  scalable and critical. We can design an enterprise application
                  to manage the affairs of your organization as an on-premise or
                  hosted web-based application at a very competitive rate.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <Link
                  to="/solutions/banking-framework"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#008DDA] group-hover:translate-x-1 transition-transform"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2:  */}
            <div className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] p-6 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-xs transition-fin group text-left">
              <div>
                <div className="h-12 w-12 rounded-[4px] bg-[#008DDA]/10 text-[#008DDA] flex items-center justify-center mb-6 group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                  <Layers className="h-6 w-6" />
                </div>

                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mt-1 mb-3">
                  E-HEALTH
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  e-Health is an emerging field in the connection of medical
                  informatics, public health and business, referring to health
                  services and information delivered or enhanced through the
                  Internet and related technologies. Centrifuge Group uses
                  eHealth technology to improve access to information or data,
                  reach rural or under-served populations, reduce care delivery
                  costs, and integrate health care services and information
                  which is very significant to health care facilities.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <Link
                  to="/solutions/banking-framework"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#008DDA] group-hover:translate-x-1 transition-transform"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Visual Modeler */}
            <div className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] p-6 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-xs transition-fin group text-left">
              <div>
                <div className="h-12 w-12 rounded-[4px] bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-6 group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                  <Workflow className="h-6 w-6" />
                </div>

                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mt-1 mb-3">
                  GLOBAL TRAINING
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  Centrifuge Group is the leading provider of an extensive
                  variety of advanced and specialized professional, executive,
                  corporate and personalized in-house training courses in
                  Information Technology, Healthcare, Project management etc…
                  Our training covers all age groups and administrative levels.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <Link
                  to="/admin"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#008DDA] group-hover:translate-x-1 transition-transform"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;

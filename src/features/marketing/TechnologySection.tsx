import React from 'react'
import { Terminal } from 'lucide-react'

export const TechnologySection: React.FC = () => {
  const stack = [
    { category: 'Frontend & Mobile', tools: 'React, TypeScript, Tailwind CSS, React Native, Vite' },
    { category: 'Backend & APIs', tools: 'Node.js, Go, Python, GraphQL, REST, WebSockets' },
    { category: 'Databases & Spatial', tools: 'PostgreSQL, PostGIS, Redis, TimeSeries DB, SQLite' },
    { category: 'Health & Standards', tools: 'DHIS2, FHIR / HL7, OpenMRS, OpenHIE Registry Standards' },
    { category: 'Infrastructure & Edge', tools: 'Docker, Kubernetes, AWS, Cloudflare, Linux ARM' },
    { category: 'IoT & Telematics', tools: 'MQTT, Modbus RS485, CAN-Bus OBD-II, GPS GNSS' },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#121212] border-b border-[#1e1e1d]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Left Column: Command Cockpit */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <Terminal className="h-3 w-3 text-[#cbb0f7]" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>

            <h2 className="text-[32px] sm:text-[42px] font-normal text-[#faf9f6] tracking-[-1.13px] leading-[1.05]">
              Built for complexity.
            </h2>

            <p className="text-[15px] text-[#868684] tracking-[-0.14px] leading-relaxed">
              We choose battle-tested, open, and scalable foundations. Our architectures are engineered to run reliably under unpredictable network conditions, high concurrent user loads, and strict data protection regulations.
            </p>

            {/* Faux Code Terminal Window (warp_design.md §187-191) */}
            <div className="rounded-[12px] bg-[#000000] border border-[#1e1e1d] overflow-hidden font-mono text-[12px]">
              <div className="flex items-center justify-between px-3 py-2 bg-[#121212] border-b border-[#1e1e1d]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#333333]" />
                  <span className="h-2 w-2 rounded-full bg-[#333333]" />
                  <span className="h-2 w-2 rounded-full bg-[#333333]" />
                </div>
                <span className="text-[10px] text-[#868684]">reliability.ts</span>
                <span className="text-[10px] text-[#cbb0f7]">v4.0</span>
              </div>
              <div className="p-4 space-y-1.5 text-[#b4b4b2] bg-[#000000]">
                <div className="text-[#666469]">// Centrifuge Reliability SLA Specification</div>
                <div>
                  <span className="text-[#cbb0f7]">export type</span> <span className="text-[#faf9f6]">SystemSLA</span> = &#123;
                </div>
                <div className="pl-4">
                  offlineFirst: <span className="text-[#cbb0f7]">true</span>,
                </div>
                <div className="pl-4">
                  dataEncryption: <span className="text-[#faf9f6]">'AES-256-GCM'</span>,
                </div>
                <div className="pl-4">
                  auditTrailImmutable: <span className="text-[#cbb0f7]">true</span>,
                </div>
                <div className="pl-4">
                  telemetryLatencyMs: <span className="text-[#cbb0f7]">&lt; 10</span>,
                </div>
                <div>&#125;</div>
              </div>
            </div>
          </div>

          {/* Right Column: Stack Architecture Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stack.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333] transition-colors text-left"
                >
                  <span className="text-[10px] font-mono uppercase tracking-[1px] text-[#cbb0f7] block">
                    {item.category}
                  </span>
                  <p className="text-[13px] font-mono text-[#faf9f6] mt-2 leading-relaxed">
                    {item.tools}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default TechnologySection

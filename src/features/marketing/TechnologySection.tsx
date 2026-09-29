import React from 'react'
import { Terminal, Database, Server, Smartphone, Cpu, ShieldCheck } from 'lucide-react'

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
    <section className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0B1F33]/5 text-xs font-mono font-semibold text-[#0B1F33]">
              <Terminal className="h-3.5 w-3.5 text-[#16C7D9]" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-heading tracking-tight leading-[1.15]">
              Built for complexity.
            </h2>

            <p className="text-base text-[#64748B] leading-relaxed">
              We choose battle-tested, open, and scalable foundations. Our architectures are engineered to run reliably under unpredictable network conditions, high concurrent user loads, and strict data protection regulations.
            </p>

            <div className="p-4 rounded-[10px] bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 font-mono text-xs">
              <div className="text-[#64748B]">// Centrifuge Reliability Principle:</div>
              <div className="text-[#111827]">
                <span className="text-[#0E7490]">type</span> <span className="text-[#0B1F33] font-bold">SystemSLA</span> = &#123;
              </div>
              <div className="pl-4 text-[#475569]">
                offlineFirst: <span className="text-[#16A34A]">true</span>;
              </div>
              <div className="pl-4 text-[#475569]">
                dataEncryption: <span className="text-[#B45309]">'AES-256-GCM'</span>;
              </div>
              <div className="pl-4 text-[#475569]">
                auditTrailImmutable: <span className="text-[#16A34A]">true</span>;
              </div>
              <div className="text-[#111827]">&#125;</div>
            </div>
          </div>

          {/* Right Column: Stack Architecture Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stack.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-colors text-left"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
                    {item.category}
                  </span>
                  <p className="text-xs font-mono font-medium text-[#111827] mt-2 leading-relaxed">
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

import React, { useState } from 'react'
import { SEO } from '../../components/ui/SEO'
import { PageHero } from '../../components/ui/PageHero'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'

const contactDetails = [
  {
    icon: MapPin,
    label: 'Principal Office',
    lines: [
      'Suite 203, 2nd Floor, Jinifa Plaza,',
      'Plot 1014, Samuel Adesoji Ademulegun St,',
      'Central Business District, Abuja, Nigeria.',
    ],
  },
  {
    icon: Mail,
    label: 'Enquiries',
    lines: ['enquiries@centrifugegroup.com', 'solutions@centrifugegroup.com'],
    hrefs: ['mailto:enquiries@centrifugegroup.com', 'mailto:solutions@centrifugegroup.com'],
  },
  {
    icon: Phone,
    label: 'Direct Telephone',
    lines: ['+234 815 5026 555'],
    hrefs: ['tel:+2348155026555'],
  },
  {
    icon: Clock,
    label: 'Operational Hours',
    lines: ['Monday – Friday: 08:00 – 17:30 WAT'],
    note: '24/7 Priority SLA for active hospital & logistics clusters',
  },
]

export const ContactPage: React.FC = () => {
  const { addToast } = useUIStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'Enterprise Platform Inquiry',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 700))
    setIsSubmitting(false)
    addToast({
      title: 'Message Sent Successfully',
      description: `Thank you ${formData.name}. A senior technical specialist will respond within 24 business hours.`,
      type: 'success',
    })
    setFormData({ name: '', email: '', company: '', phone: '', subject: 'Enterprise Platform Inquiry', message: '' })
  }

  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title="Contact Us | Centrifuge Group"
        description="Have a problem worth solving? Speak directly with Centrifuge enterprise systems architects and specialists."
      />

      {/* ─── Header Strip (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] border border-[#008DDA]/30 bg-[#008DDA]/10 text-xs font-semibold uppercase tracking-wider text-[#0077B6]">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>DIRECT TECHNICAL ACCESS</span>
            </div>
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
              Have an Operational Challenge Worth Solving?
            </h1>
            <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">
              Whether you represent a federal ministry, commercial corporate group, or healthcare network, our senior technology architects are prepared to review your operational requirements and provide detailed implementation specifications.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Contact Body (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-[#FFFFFF] p-6 sm:p-10 rounded-[8px] border border-[#E2E8F0] shadow-2xs">
              <h2 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mb-6">
                Send an Inquiry to Our Senior Engineers
              </h2>
              <p className="text-[14px] text-[#64748B] mb-6">
                All fields marked * are required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name *"
                    required
                    placeholder="e.g. Dr. Aliyu Ibrahim"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input
                    label="Work Email *"
                    type="email"
                    required
                    placeholder="aliyu@organization.gov.ng"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Organisation / Company *"
                    required
                    placeholder="e.g. State Ministry of Health"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                  <Input
                    label="Phone Number *"
                    type="tel"
                    required
                    placeholder="+234 803 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-[#475569] mb-1.5">
                    Operational Domain / Subject
                  </label>
                  <select
                    className="w-full bg-[#FFFFFF] text-[#1A1A1A] text-[14px] p-2.5 border border-[#CBD5E1] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#008DDA]/20 focus:border-[#008DDA] transition-colors"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Banking Architecture & Visual Studio">Digital Banking Architecture & Visual Modeler</option>
                    <option value="Optimax ERP Platform">Optimax ERP Enterprise Platform</option>
                    <option value="Healthcare & Hospital Informatics">Healthcare & Hospital Informatics</option>
                    <option value="Logistics & Fleet Telematics">Logistics & Fleet Telematics</option>
                    <option value="Hardware / Solar Power Backup">Hardware & Solar Inverter Systems</option>
                    <option value="Custom Engineering & Consulting">Custom Engineering & Advisory</option>
                    <option value="Other Inquiries">General Operational Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-[#475569] mb-1.5">
                    Project Details & Operational Bottlenecks <span className="text-[#EF4444]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your current system challenge, facility count or user volume, and desired implementation timeline..."
                    className="w-full bg-[#FFFFFF] text-[#1A1A1A] text-[14px] p-3 border border-[#CBD5E1] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#008DDA]/20 focus:border-[#008DDA] transition-colors"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="h-4 w-4" />}
                  >
                    Send Technical Inquiry
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Details & Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-[8px] border border-[#E2E8F0] space-y-6 shadow-2xs">
                <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight">
                  Headquarters & Regional Reach
                </h3>

                <div className="space-y-4 text-[13px] text-[#475569]">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#008DDA] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#1A1A1A]">Principal Office</p>
                      <p className="mt-0.5 leading-relaxed text-[#64748B]">
                        Suite 203, 2nd Floor, Jinifa Plaza, Central Business District, Abuja, Federal Capital Territory, Nigeria.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#008DDA] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#1A1A1A]">Inquiries</p>
                      <p className="mt-0.5 text-[#008DDA] font-medium">enquiries@centrifugegroup.com</p>
                      <p className="text-[#64748B]">solutions@centrifugegroup.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#008DDA] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#1A1A1A]">Direct Telephone</p>
                      <p className="mt-0.5 font-mono text-[#1A1A1A] font-semibold">+234 815 5026 555</p>
                      <p className="text-[#64748B] font-mono">+234 (0) 901 000 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#008DDA] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#1A1A1A]">Operational Hours</p>
                      <p className="mt-0.5 text-[#64748B]">Monday – Friday: 08:00 – 17:30 WAT</p>
                      <p className="text-[#008DDA] text-[11px] font-mono font-semibold mt-0.5">24/7 Priority SLA for active hospital & core financial clusters</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Privacy Note */}
              <div className="p-6 rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] space-y-2 shadow-2xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#10B981]" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008DDA]">
                    CONFIDENTIALITY ASSURANCE
                  </span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  All enterprise technical requests are safeguarded by strict institutional non-disclosure standards in full compliance with the Nigeria Data Protection Act (NDPA).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

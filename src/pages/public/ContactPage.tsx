import React, { useState } from 'react'
import { SEO } from '../../components/ui/SEO'
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
    lines: ['Monday â€“ Friday: 08:00 â€“ 17:30 WAT'],
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
    <div className="dark-page">
      <SEO
        title="Contact Us | Centrifuge Group"
        description="Have a problem worth solving? Speak directly with Centrifuge enterprise systems architects and specialists."
      />

      {/* â”€â”€â”€ Header Strip â”€â”€â”€ */}
      <section className="dark-section-hero pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="dark-badge">
              <span className="h-2 w-2 rounded-full bg-[#F28C28] ring-4 ring-[#F28C28]/20" aria-hidden="true" />
              Contact & Enquiries
            </span>
            <h1 className="text-[32px] sm:text-[48px] font-bold text-[#F0F4FF] tracking-tight leading-[1.1]">
              Have an Operational Challenge Worth Solving?
            </h1>
            <p className="text-[17px] text-[#8BA4C8] leading-relaxed max-w-2xl">
              Whether you represent a federal ministry, commercial corporate group, or healthcare network, our senior technology architects are prepared to review your operational requirements and provide detailed implementation specifications.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Contact Body â”€â”€â”€ */}
      <section className="dark-section-b py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-7 dark-card p-6 sm:p-10">
              <h2 className="text-[20px] font-bold text-[#F0F4FF] tracking-tight mb-2">
                Send an Inquiry to Our Senior Engineers
              </h2>
              <p className="text-[14px] text-[#8BA4C8] mb-6">
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
                  <label className="dark-label">Operational Domain / Subject</label>
                  <select
                    className="dark-select"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Project Development & Management">Project Development & Management</option>
                    <option value="Optimax ERP Platform">Optimax ERP Enterprise Platform</option>
                    <option value="Healthcare & Hospital Informatics">Healthcare & Hospital Informatics</option>
                    <option value="Logistics & Fleet Telematics">Logistics & Fleet Telematics</option>
                    <option value="Hardware / Solar Power Backup">Hardware & Solar Inverter Systems</option>
                    <option value="Custom Engineering & Consulting">Custom Engineering & Advisory</option>
                    <option value="Other Inquiries">General Operational Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="dark-label">
                    Project Details & Operational Bottlenecks <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your current system challenge, facility count or user volume, and desired implementation timeline..."
                    className="dark-input resize-none"
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
            <div className="lg:col-span-5 space-y-5">
              <div className="dark-card p-6 sm:p-8 space-y-6">
                <h3 className="text-[18px] font-bold text-[#F0F4FF] tracking-tight">
                  Headquarters & Regional Reach
                </h3>

                <div className="space-y-5 text-[13px]">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon
                    return (
                      <div key={detail.label} className="flex items-start gap-3">
                        <div className="dark-icon-bubble mt-0.5 shrink-0">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-bold text-[#F0F4FF] text-[13px]">{detail.label}</p>
                          {detail.hrefs
                            ? detail.lines.map((line, i) => (
                                <a
                                  key={i}
                                  href={detail.hrefs![i]}
                                  className="block mt-0.5 text-[#60ABFF] hover:text-[#F28C28] transition-colors"
                                >
                                  {line}
                                </a>
                              ))
                            : detail.lines.map((line, i) => (
                                <p key={i} className="text-[#8BA4C8] mt-0.5 leading-relaxed">
                                  {line}
                                </p>
                              ))}
                          {detail.note && (
                            <p className="text-[#60ABFF] text-[11px] font-mono font-semibold mt-1">
                              {detail.note}
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Data Privacy Note */}
              <div className="dark-card p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#10B981]" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#60ABFF]">
                    CONFIDENTIALITY ASSURANCE
                  </span>
                </div>
                <p className="text-xs text-[#8BA4C8] leading-relaxed">
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


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
    <div className="w-full bg-[#F7F9FA]">
      <SEO
        title="Contact Us | Centrifuge Group"
        description="Speak directly with Centrifuge enterprise systems architects and specialists. We respond within 24 business hours."
      />

      <PageHero
        eyebrow="Direct Technical Access"
        title="Have a problem worth solving?"
        description="Whether you represent a federal ministry, commercial enterprise, or hospital network — our senior technology architects are ready to evaluate your operational requirements."
      />

      {/* Contact body */}
      <section className="section-py bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[16px] border border-[#E2E8F0] shadow-sm">
              <h2 className="text-[22px] font-heading font-700 text-[#0B1F33] mb-2">
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
                  <label className="block text-[13px] font-semibold text-[#0B1F33] mb-1.5">
                    Operational Domain / Subject
                  </label>
                  <select
                    className="w-full bg-white text-[#0B1F33] text-[14px] p-3 border border-[#E2E8F0] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#16C7D9] focus:border-[#16C7D9] transition-colors"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Enterprise Platform Inquiry">Optimax ERP Enterprise Platform</option>
                    <option value="Healthcare & Hospital Informatics">Healthcare &amp; Hospital Informatics</option>
                    <option value="Logistics & Fleet Telematics">Logistics &amp; Fleet Telematics</option>
                    <option value="Hardware / Solar Power Backup">Hardware &amp; Solar Inverter Systems</option>
                    <option value="Custom Engineering & Consulting">Custom Engineering &amp; Architecture</option>
                    <option value="Other Inquiries">General Operational Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#0B1F33] mb-1.5">
                    Project Details &amp; Operational Bottlenecks *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your current system challenge, number of facilities/users, and desired implementation timeline..."
                    className="w-full bg-white text-[#0B1F33] text-[14px] p-3 border border-[#E2E8F0] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#16C7D9] focus:border-[#16C7D9] transition-colors resize-none"
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
                    Send Inquiry to Centrifuge
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact details sidebar */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-6">
                <h3 className="text-[18px] font-heading font-700 text-[#0B1F33]">
                  Headquarters &amp; Regional Reach
                </h3>

                <div className="space-y-5 text-[13px]">
                  {contactDetails.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="h-9 w-9 rounded-[10px] bg-[#F7F9FA] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                          <Icon className="h-4 w-4 text-[#16C7D9]" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#0B1F33] mb-0.5">{item.label}</p>
                          {item.lines.map((line, i) =>
                            item.hrefs ? (
                              <a key={i} href={item.hrefs[i]} className="block text-[#64748B] hover:text-[#0B1F33] transition-colors">
                                {line}
                              </a>
                            ) : (
                              <p key={i} className="text-[#64748B]">{line}</p>
                            )
                          )}
                          {item.note && (
                            <p className="text-[11px] font-semibold text-[#16C7D9] mt-1">{item.note}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Confidentiality note */}
              <div className="p-6 rounded-[16px] bg-[#F7F9FA] border border-[#E2E8F0] flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-[#16C7D9] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#64748B] mb-1">
                    Confidentiality Assurance
                  </p>
                  <p className="text-[13px] text-[#64748B] leading-relaxed">
                    All enterprise technical requests are safeguarded by strict confidentiality and non-disclosure standards in accordance with the Nigeria Data Protection Act (NDPA).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

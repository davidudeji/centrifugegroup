import React, { useState } from 'react'
import { SEO } from '../../components/ui/SEO'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'

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
    await new Promise((resolve) => setTimeout(resolve, 600))
    setIsSubmitting(false)
    addToast({
      title: 'Message Sent Successfully',
      description: `Thank you ${formData.name}. A senior technical specialist will respond within 24 business hours.`,
      type: 'success',
    })
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: 'Enterprise Platform Inquiry',
      message: '',
    })
  }

  return (
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Contact Us | Centrifuge Group"
        description="Have a problem worth solving? Speak directly with Centrifuge enterprise systems architects and specialists."
      />

      {/* ─── Header Strip ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>DIRECT TECHNICAL ACCESS</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              Have a problem worth solving?
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              Whether you represent a federal ministry, commercial enterprise, or hospital network, our senior technology architects are ready to evaluate your operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Contact Body (Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Form (Onyx #1e1e1d, 20px radius) */}
            <div className="lg:col-span-7 bg-[#1e1e1d] p-8 sm:p-10 rounded-[20px] border border-[#1e1e1d]">
              <h2 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.22px] mb-6">
                Send an Inquiry to Our Senior Engineers
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    required
                    placeholder="e.g. Dr. Aliyu Ibrahim"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input
                    label="Work Email"
                    type="email"
                    required
                    placeholder="aliyu@organization.gov.ng"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Organization / Company"
                    required
                    placeholder="e.g. State Ministry of Health"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    required
                    placeholder="+234 803 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-normal text-[#b4b4b2] mb-1.5 tracking-[-0.14px]">
                    Operational Domain / Subject
                  </label>
                  <select
                    className="w-full bg-[#121212] text-[#faf9f6] text-[14px] p-2.5 border border-[#333333] rounded-[7px] focus:outline-none focus:ring-1 focus:ring-[#f0b66d] focus:border-[#f0b66d] tracking-[-0.14px]"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Optimax ERP Platform">Optimax ERP Enterprise Platform</option>
                    <option value="Healthcare & Hospital Informatics">Healthcare & Hospital Informatics</option>
                    <option value="Logistics & Fleet Telematics">Logistics & Fleet Telematics</option>
                    <option value="Hardware / Solar Power Backup">Hardware & Solar Inverter Systems</option>
                    <option value="Custom Engineering & Consulting">Custom Engineering & Architecture</option>
                    <option value="Other Inquiries">General Operational Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-normal text-[#b4b4b2] mb-1.5 tracking-[-0.14px]">
                    Project Details & Operational Bottlenecks *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current system challenge, number of facilities/users, and desired implementation timeline..."
                    className="w-full bg-[#121212] text-[#faf9f6] text-[14px] p-3 border border-[#333333] rounded-[7px] focus:outline-none focus:ring-1 focus:ring-[#f0b66d] focus:border-[#f0b66d] tracking-[-0.14px]"
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

            {/* Contact Details & Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#1e1e1d] p-8 rounded-[20px] border border-[#1e1e1d] space-y-6">
                <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px]">
                  Headquarters & Regional Reach
                </h3>

                <div className="space-y-4 text-[13px] text-[#868684]">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-[#f0b66d] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#faf9f6]">Principal Office</p>
                      <p className="mt-0.5 leading-relaxed">
                        Plot 1083, Cadastral Zone B06, Mabushi District, Abuja, Federal Capital Territory, Nigeria.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-[#f0b66d] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#faf9f6]">Inquiries</p>
                      <p className="mt-0.5">info@centrifugegroup.co</p>
                      <p className="text-[#666469]">solutions@centrifugegroup.co</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-[#f0b66d] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#faf9f6]">Direct Telephone</p>
                      <p className="mt-0.5">+234 (0) 803 000 1234</p>
                      <p className="text-[#666469]">+234 (0) 901 000 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-[#f0b66d] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#faf9f6]">Operational Hours</p>
                      <p className="mt-0.5">Monday – Friday: 08:00 – 17:30 WAT</p>
                      <p className="text-[#f0b66d] text-[11px] font-mono mt-0.5">24/7 Priority SLA for active hospital & logistics clusters</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Privacy Note */}
              <div className="p-6 rounded-[20px] bg-[#000000] text-[#faf9f6] border border-[#1e1e1d] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[1px] text-[#f0b66d]">
                  CONFIDENTIALITY ASSURANCE
                </span>
                <p className="text-[12px] text-[#868684] leading-relaxed">
                  All enterprise technical requests are safeguarded by strict confidentiality and non-disclosure standards in accordance with the Nigeria Data Protection Act (NDPA).
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

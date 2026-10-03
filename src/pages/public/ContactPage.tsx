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
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="Contact Us | Centrifuge Group"
        description="Have a problem worth solving? Speak directly with Centrifuge enterprise systems architects and specialists."
      />

      {/* Header Strip */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">DIRECT TECHNICAL ACCESS</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Have a problem worth solving?
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-2xl">
              Whether you represent a federal ministry, commercial enterprise, or hospital network, our senior technology architects are ready to evaluate your operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Body */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[12px] border border-[#E2E8F0] shadow-sm">
              <h2 className="text-[20px] font-bold text-[#0F172A] tracking-[-0.02em] mb-6">
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
                  <label className="block text-[12px] font-semibold text-[#475569] mb-1.5">
                    Operational Domain / Subject
                  </label>
                  <select
                    className="w-full bg-white text-[#0F172A] text-[14px] p-2.5 border border-[#E2E8F0] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#F27A22] focus:border-[#F27A22] transition-colors"
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
                  <label className="block text-[12px] font-semibold text-[#475569] mb-1.5">
                    Project Details & Operational Bottlenecks *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current system challenge, number of facilities/users, and desired implementation timeline..."
                    className="w-full bg-white text-[#0F172A] text-[14px] p-3 border border-[#E2E8F0] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#F27A22] focus:border-[#F27A22] transition-colors resize-none"
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

            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-white p-8 rounded-[12px] border border-[#E2E8F0] space-y-6">
                <h3 className="text-[17px] font-bold text-[#0F172A]">
                  Headquarters & Regional Reach
                </h3>

                <div className="space-y-5 text-[13px]">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-[6px] bg-[#FFF7ED] flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4 text-[#F27A22]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0F172A]">Principal Office</p>
                      <p className="mt-0.5 text-[#475569] leading-relaxed">
                        Plot 1083, Cadastral Zone B06, Mabushi District, Abuja, Federal Capital Territory, Nigeria.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-[6px] bg-[#FFF7ED] flex items-center justify-center shrink-0">
                      <Mail className="h-4 w-4 text-[#F27A22]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0F172A]">Inquiries</p>
                      <p className="mt-0.5 text-[#475569]">info@centrifugegroup.co</p>
                      <p className="text-[#94A3B8]">solutions@centrifugegroup.co</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-[6px] bg-[#FFF7ED] flex items-center justify-center shrink-0">
                      <Phone className="h-4 w-4 text-[#F27A22]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0F172A]">Direct Telephone</p>
                      <p className="mt-0.5 text-[#475569]">+234 (0) 803 000 1234</p>
                      <p className="text-[#94A3B8]">+234 (0) 901 000 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-[6px] bg-[#FFF7ED] flex items-center justify-center shrink-0">
                      <Clock className="h-4 w-4 text-[#F27A22]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0F172A]">Operational Hours</p>
                      <p className="mt-0.5 text-[#475569]">Monday – Friday: 08:00 – 17:30 WAT</p>
                      <p className="text-[#F27A22] text-[11px] font-semibold mt-1">24/7 Priority SLA for active hospital & logistics clusters</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Privacy Note */}
              <div className="p-6 rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#F27A22]">
                  CONFIDENTIALITY ASSURANCE
                </span>
                <p className="text-[12px] text-[#475569] leading-relaxed mt-1">
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

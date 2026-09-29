import React, { useState } from 'react'
import { SEO } from '../../components/ui/SEO'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
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
    <div className="w-full text-left">
      <SEO
        title="Contact Us | Centrifuge Group"
        description="Have a problem worth solving? Speak directly with Centrifuge enterprise systems architects and specialists."
      />

      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase">
              GET IN TOUCH
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Have a problem worth solving?
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Whether you represent a federal ministry, commercial enterprise, or hospital network, our senior technology architects are ready to evaluate your operational requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[16px] border border-[#E2E8F0] shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F33] font-heading mb-6">
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
                  <label className="block text-xs font-semibold text-[#1D242F] mb-1.5">
                    Operational Domain / Subject
                  </label>
                  <select
                    className="w-full bg-white text-sm p-2.5 border border-[#E2E8F0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/30"
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
                  <label className="block text-xs font-semibold text-[#1D242F] mb-1.5">
                    Project Details & Operational Bottlenecks *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current system challenge, number of facilities/users, and desired implementation timeline..."
                    className="w-full text-sm p-3 border border-[#E2E8F0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/30 focus:border-[#16C7D9]"
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
              <div className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-6">
                <h3 className="text-base font-bold text-[#0B1F33] font-heading">
                  Headquarters & Regional Reach
                </h3>

                <div className="space-y-4 text-xs text-[#475569]">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-[#16C7D9] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#111827]">Principal Office</p>
                      <p className="mt-0.5 leading-relaxed">
                        Plot 1083, Cadastral Zone B06, Mabushi District, Abuja, Federal Capital Territory, Nigeria.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-[#16C7D9] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#111827]">Inquiries</p>
                      <p className="mt-0.5">info@centrifugegroup.co</p>
                      <p className="text-[#64748B]">solutions@centrifugegroup.co</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-[#16C7D9] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#111827]">Direct Telephone</p>
                      <p className="mt-0.5">+234 (0) 803 000 1234</p>
                      <p className="text-[#64748B]">+234 (0) 901 000 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-[#16C7D9] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#111827]">Operational Hours</p>
                      <p className="mt-0.5">Monday – Friday: 08:00 – 17:30 WAT</p>
                      <p className="text-[#10B981]">24/7 Priority SLA for active hospital & logistics clusters</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Privacy Note */}
              <div className="p-6 rounded-[16px] bg-[#071521] text-white border border-[#172333] space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#16C7D9] uppercase">
                  CONFIDENTIALITY ASSURANCE
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
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

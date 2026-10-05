import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockJobs } from '../../data/mockData'
import { ArrowLeft, MapPin, Briefcase, CheckCircle2, UploadCloud, ArrowRight } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Modal } from '../../components/ui/Modal'
import { useUIStore } from '../../stores/uiStore'

export const JobDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const { addToast } = useUIStore()
  const job = mockJobs.find((j) => j.slug === slug) || mockJobs[0]

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    consent: false,
    cvFileName: '',
  })

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsSubmitting(false)
    setIsApplyModalOpen(false)
    addToast({
      title: 'Application Submitted',
      description: `Thank you, ${formData.fullName}. Your application for ${job.title} has been received.`,
      type: 'success',
    })
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      coverLetter: '',
      consent: false,
      cvFileName: '',
    })
  }

  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title={`${job.title} | Centrifuge Careers`}
        description={job.shortDescription}
      />

      {/* ─── Hero Header (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Link
            to="/careers/jobs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#008DDA] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Open Positions</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="px-2.5 py-0.5 rounded-[4px] bg-[#008DDA]/10 border border-[#008DDA]/30 text-[#008DDA] text-[11px] font-mono font-bold uppercase tracking-wider">
              {job.department}
            </span>
            <span className="text-xs text-[#64748B] font-mono">• {job.type}</span>
          </div>

          <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
            {job.title}
          </h1>

          <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-mono">
            <MapPin className="h-4 w-4 text-[#008DDA]" />
            <span>{job.location}</span>
          </div>

          <div className="pt-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => setIsApplyModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-[#16C7D9] text-[#0B1F33] hover:bg-[#10b8ca] text-[14px] font-semibold transition-colors"
            >
              Apply for this Position
            </button>
          </div>
        </div>
      </section>

      {/* ─── Main Content (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-[#FFFFFF] p-6 sm:p-10 rounded-[8px] border border-[#E2E8F0] space-y-8 shadow-2xs">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008DDA] block mb-2">
                OVERVIEW
              </span>
              <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mb-2">
                About the Role
              </h3>
              <p className="text-[14px] text-[#475569] leading-relaxed">
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  {job.aboutRole}
                </p>
            </div>

            <div className="pt-6 border-t border-[#F1F5F9]">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008DDA] block mb-2">
                DUTIES
              </span>
              <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mb-3">
                Key Responsibilities
              </h3>
              <div className="space-y-2.5">
                {job.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#1A1A1A]">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#F1F5F9]">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008DDA] block mb-2">
                QUALIFICATIONS
              </span>
              <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mb-3">
                Requirements & Experience
              </h3>
              <div className="space-y-2.5">
                {job.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#1A1A1A]">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {job.niceToHave.length > 0 && (
              <div className="pt-6 border-t border-[#F1F5F9]">
                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mb-3">
                  Nice to Have
                </h3>
                <div className="space-y-2.5">
                  {job.niceToHave.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#64748B]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#008DDA] shrink-0 mt-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-[#F1F5F9]">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008DDA] block mb-2">
                COMPENSATION & PERKS
              </span>
              <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mb-3">
                What We Offer
              </h3>
              <div className="space-y-2.5">
                {job.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#1A1A1A]">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#F1F5F9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#64748B]">
                Position ID: {job.id} · Centrifuge Talent Team
              </span>
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-[#16C7D9] text-[#0B1F33] hover:bg-[#10b8ca] text-[14px] font-semibold transition-colors"
              >
                Apply for this Role
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title={`Apply for ${job.title}`}
        description="Please provide your contact information and background to apply."
        maxWidth="lg"
      >
        <form onSubmit={handleSubmitApplication} className="space-y-4 text-left">
          <Input
            label="Full Name"
            required
            placeholder="e.g. Samuel Adeleke"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Email Address"
              type="email"
              required
              placeholder="samuel@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            <label className="block text-[12px] font-medium text-[#475569] mb-1.5">
              Cover Letter / Introduction <span className="text-[#EF4444]">*</span>
            </label>
            <textarea
              rows={3}
              required
              placeholder="Tell us briefly why you want to build technology at Centrifuge..."
              className="w-full text-[14px] p-3 bg-[#FFFFFF] text-[#1A1A1A] border border-[#CBD5E1] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#008DDA]/20 focus:border-[#008DDA]"
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-[12px] font-medium text-[#475569] mb-1.5">
              Resume / Curriculum Vitae (PDF or DOCX) <span className="text-[#EF4444]">*</span>
            </label>
            <div className="border border-dashed border-[#CBD5E1] rounded-[4px] p-4 text-center bg-[#F8FAFC]">
              <UploadCloud className="h-6 w-6 text-[#008DDA] mx-auto mb-1" />
              <p className="text-xs text-[#64748B]">
                {formData.cvFileName ? (
                  <span className="font-semibold text-[#008DDA]">{formData.cvFileName} attached</span>
                ) : (
                  <span>Click to select or drag and drop your resume file</span>
                )}
              </p>
              <input
                type="file"
                accept=".pdf,.docx,.doc"
                className="mt-2 text-xs text-[#64748B] file:mr-2 file:py-1 file:px-3 file:rounded-[4px] file:border-0 file:text-xs file:bg-[#0F2C59] file:text-white file:font-semibold"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setFormData({ ...formData, cvFileName: e.target.files[0].name })
                  }
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="consent"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="rounded-[3px] border-[#CBD5E1] text-[#008DDA] focus:ring-[#008DDA]"
            />
            <label htmlFor="consent" className="text-xs text-[#64748B]">
              I confirm that the details provided are accurate and consent to NDPR data storage.
            </label>
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-[#E2E8F0]">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsApplyModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              isLoading={isSubmitting}
            >
              Submit Application
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default JobDetailPage

import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockJobs } from '../../data/mockData'
import { ArrowLeft, MapPin, CheckCircle2, UploadCloud } from 'lucide-react'
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
    <div className="w-full text-left bg-white text-[#0B1F33]">
      <SEO
        title={`${job.title} | Centrifuge Careers`}
        description={job.shortDescription}
      />

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto max-w-[1000px] space-y-4">
          <Link
            to="/careers/jobs"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#94A3B8] hover:text-[#16C7D9] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Open Positions</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="px-2.5 py-0.5 rounded-[4px] bg-[#EFF9FA]/10 border border-[#16C7D9]/30 text-[#16C7D9] text-[11px] font-semibold">
              {job.department}
            </span>
            <span className="text-[12px] text-[#94A3B8]">• {job.type}</span>
          </div>

          <h1
            className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {job.title}
          </h1>

          <div className="flex items-center gap-1.5 text-[13px] text-[#94A3B8]">
            <MapPin className="h-4 w-4 text-[#16C7D9]" />
            <span>{job.location}</span>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-[#16C7D9] text-[#0B1F33] hover:bg-[#10b8ca] text-[14px] font-semibold transition-colors"
            >
              Apply for this Position
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto max-w-[1000px] space-y-6">
          <div className="bg-white p-8 sm:p-10 rounded-[12px] border border-[#E2E8F0] space-y-8">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] block mb-2">
                OVERVIEW
              </span>
              <h3 className="text-[20px] font-bold text-[#0B1F33] tracking-[-0.025em] mb-3">
                About the Role
              </h3>
              <p className="text-[14px] text-[#475569] leading-relaxed">
                {job.aboutRole}
              </p>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0]">
              <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] block mb-2">
                DUTIES
              </span>
              <h3 className="text-[20px] font-bold text-[#0B1F33] tracking-[-0.025em] mb-4">
                Key Responsibilities
              </h3>
              <div className="space-y-2.5">
                {job.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#475569]">
                    <CheckCircle2 className="h-4 w-4 text-[#16C7D9] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0]">
              <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] block mb-2">
                QUALIFICATIONS
              </span>
              <h3 className="text-[20px] font-bold text-[#0B1F33] tracking-[-0.025em] mb-4">
                Requirements & Experience
              </h3>
              <div className="space-y-2.5">
                {job.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#475569]">
                    <CheckCircle2 className="h-4 w-4 text-[#16C7D9] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {job.niceToHave.length > 0 && (
              <div className="pt-6 border-t border-[#E2E8F0]">
                <h3 className="text-[20px] font-bold text-[#0B1F33] tracking-[-0.025em] mb-4">
                  Nice to Have
                </h3>
                <div className="space-y-2.5">
                  {job.niceToHave.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#475569]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#16C7D9] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-[#E2E8F0]">
              <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] block mb-2">
                COMPENSATION & PERKS
              </span>
              <h3 className="text-[20px] font-bold text-[#0B1F33] tracking-[-0.025em] mb-4">
                What We Offer
              </h3>
              <div className="space-y-2.5">
                {job.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#334155]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#16C7D9] shrink-0 mt-1.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-[11px] text-[#94A3B8]">
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
            <label className="block text-[12px] font-semibold text-[#334155] mb-1.5">
              Cover Letter / Introduction
            </label>
            <textarea
              rows={3}
              required
              placeholder="Tell us briefly why you want to build technology at Centrifuge..."
              className="w-full text-[13px] p-3 bg-white text-[#0B1F33] border border-[#E2E8F0] rounded-[6px] focus:outline-none focus:border-[#16C7D9] focus:ring-1 focus:ring-[#16C7D9]/30 placeholder-[#94A3B8]"
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#334155] mb-1.5">
              Resume / Curriculum Vitae (PDF or DOCX) *
            </label>
            <div className="border border-dashed border-[#E2E8F0] rounded-[8px] p-4 text-center bg-[#F8FAFC] hover:border-[#CBD5E1] transition-colors">
              <UploadCloud className="h-6 w-6 text-[#94A3B8] mx-auto mb-1" />
              <p className="text-[12px] text-[#475569]">
                {formData.cvFileName ? (
                  <span className="font-semibold text-[#16C7D9]">{formData.cvFileName} attached</span>
                ) : (
                  <span>Click to select or drag and drop your resume file</span>
                )}
              </p>
              <input
                type="file"
                accept=".pdf,.docx,.doc"
                className="mt-2 text-[11px] text-[#475569] file:mr-2 file:py-1 file:px-2.5 file:rounded-[4px] file:border-0 file:text-[11px] file:bg-[#16C7D9] file:text-[#0B1F33] file:font-semibold"
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
              className="rounded border-[#E2E8F0] text-[#16C7D9] accent-[#16C7D9]"
            />
            <label htmlFor="consent" className="text-[12px] text-[#475569]">
              I confirm that the details provided are accurate and consent to NDPR data storage.
            </label>
          </div>

          <div className="pt-4 flex justify-end gap-3">
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

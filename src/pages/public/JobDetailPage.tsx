import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockJobs } from '../../data/mockData'
import { ArrowLeft, MapPin, Briefcase, CheckCircle2, UploadCloud, Check } from 'lucide-react'
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
    <div className="w-full text-left">
      <SEO
        title={`${job.title} | Centrifuge Careers`}
        description={job.shortDescription}
      />

      <section className="bg-[#0B1F33] text-white py-14 sm:py-20 border-b border-[#172333]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/careers/jobs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#94A3B8] hover:text-[#16C7D9] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Open Positions</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="px-2.5 py-0.5 rounded bg-[#16C7D9]/20 text-[#67E8F9] text-xs font-mono font-bold">
              {job.department}
            </span>
            <span className="text-xs text-[#94A3B8]">• {job.type}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            {job.title}
          </h1>

          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
            <MapPin className="h-4 w-4 text-[#16C7D9]" />
            <span>{job.location}</span>
          </div>

          <div className="pt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsApplyModalOpen(true)}
            >
              Apply for this Position
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-white p-8 sm:p-10 rounded-[16px] border border-[#E2E8F0] space-y-8">
            <div>
              <h3 className="text-lg font-bold text-[#0B1F33] font-heading mb-2">
                About the Role
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                {job.aboutRole}
              </p>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0]">
              <h3 className="text-lg font-bold text-[#0B1F33] font-heading mb-3">
                Key Responsibilities
              </h3>
              <div className="space-y-2.5">
                {job.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#334155]">
                    <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0]">
              <h3 className="text-lg font-bold text-[#0B1F33] font-heading mb-3">
                Requirements & Experience
              </h3>
              <div className="space-y-2.5">
                {job.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#334155]">
                    <CheckCircle2 className="h-4 w-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {job.niceToHave.length > 0 && (
              <div className="pt-6 border-t border-[#E2E8F0]">
                <h3 className="text-lg font-bold text-[#0B1F33] font-heading mb-3">
                  Nice to Have
                </h3>
                <div className="space-y-2.5">
                  {job.niceToHave.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#334155]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#94A3B8] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-[#E2E8F0]">
              <h3 className="text-lg font-bold text-[#0B1F33] font-heading mb-3">
                What We Offer
              </h3>
              <div className="space-y-2.5">
                {job.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#334155]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#16C7D9] shrink-0 mt-1.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs text-[#64748B]">
                Position ID: {job.id} · Centrifuge Talent Team
              </span>
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsApplyModalOpen(true)}
              >
                Apply for this Role
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal (per centrifuge_spec.md line 847) */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title={`Apply for ${job.title}`}
        description="Please provide your contact information and background to apply."
        maxWidth="lg"
      >
        <form onSubmit={handleSubmitApplication} className="space-y-4">
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
            <label className="block text-xs font-semibold text-[#1D242F] mb-1.5">
              Cover Letter / Introduction
            </label>
            <textarea
              rows={3}
              required
              placeholder="Tell us briefly why you want to build technology at Centrifuge..."
              className="w-full text-sm p-3 border border-[#E2E8F0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/30 focus:border-[#16C7D9]"
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
            />
          </div>

          {/* CV Upload */}
          <div>
            <label className="block text-xs font-semibold text-[#1D242F] mb-1.5">
              Resume / Curriculum Vitae (PDF or DOCX) *
            </label>
            <div className="border-2 border-dashed border-[#CBD5E1] rounded-[8px] p-4 text-center bg-[#F8FAFC]">
              <UploadCloud className="h-6 w-6 text-[#94A3B8] mx-auto mb-1" />
              <p className="text-xs text-[#64748B]">
                {formData.cvFileName ? (
                  <span className="font-semibold text-[#16A34A]">{formData.cvFileName} attached</span>
                ) : (
                  <span>Click to select or drag and drop your resume file</span>
                )}
              </p>
              <input
                type="file"
                accept=".pdf,.docx,.doc"
                className="mt-2 text-xs text-[#64748B] file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-xs file:bg-[#0B1F33] file:text-white"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setFormData({ ...formData, cvFileName: e.target.files[0].name })
                  }
                }}
              />
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2 pt-2">
            <input
              type="checkbox"
              id="consent"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 rounded text-[#16C7D9] focus:ring-[#16C7D9]"
            />
            <label htmlFor="consent" className="text-xs text-[#64748B]">
              I consent to Centrifuge Information Technology Limited processing my personal data in accordance with NDPR guidelines for employment evaluation.
            </label>
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-[#E2E8F0]">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={() => setIsApplyModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
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

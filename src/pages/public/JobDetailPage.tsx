import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockJobs } from '../../data/mockData'
import { ArrowLeft, MapPin, Briefcase, CheckCircle2, UploadCloud } from 'lucide-react'
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
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title={`${job.title} | Centrifuge Careers`}
        description={job.shortDescription}
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/careers/jobs"
            className="inline-flex items-center gap-1.5 text-[12px] font-mono text-[#868684] hover:text-[#f0b66d] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Open Positions</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="px-2.5 py-0.5 rounded-[50px] bg-[#121212] border border-[#333333] text-[#f0b66d] text-[11px] font-mono">
              {job.department}
            </span>
            <span className="text-[12px] text-[#868684] font-mono">• {job.type}</span>
          </div>

          <h1 className="text-[32px] sm:text-[48px] font-normal text-[#faf9f6] tracking-[-1.5px] leading-tight">
            {job.title}
          </h1>

          <div className="flex items-center gap-2 text-[13px] text-[#868684] font-mono">
            <MapPin className="h-4 w-4 text-[#f0b66d]" />
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

      {/* ─── Main Content (Warp Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-[#1e1e1d] p-8 sm:p-10 rounded-[20px] border border-[#1e1e1d] space-y-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684] block mb-2">
                OVERVIEW
              </span>
              <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mb-2">
                About the Role
              </h3>
              <p className="text-[14px] text-[#868684] leading-relaxed">
                {job.aboutRole}
              </p>
            </div>

            <div className="pt-6 border-t border-[#333333]/50">
              <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684] block mb-2">
                DUTIES
              </span>
              <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mb-3">
                Key Responsibilities
              </h3>
              <div className="space-y-2.5">
                {job.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#b4b4b2]">
                    <CheckCircle2 className="h-4 w-4 text-[#f0b66d] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#333333]/50">
              <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684] block mb-2">
                QUALIFICATIONS
              </span>
              <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mb-3">
                Requirements & Experience
              </h3>
              <div className="space-y-2.5">
                {job.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#b4b4b2]">
                    <CheckCircle2 className="h-4 w-4 text-[#f0b66d] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {job.niceToHave.length > 0 && (
              <div className="pt-6 border-t border-[#333333]/50">
                <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mb-3">
                  Nice to Have
                </h3>
                <div className="space-y-2.5">
                  {job.niceToHave.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#868684]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#f0b66d] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-[#333333]/50">
              <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684] block mb-2">
                COMPENSATION & PERKS
              </span>
              <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mb-3">
                What We Offer
              </h3>
              <div className="space-y-2.5">
                {job.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#faf9f6]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f0b66d] shrink-0 mt-1.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#333333]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-[#868684]">
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
            <label className="block text-[12px] font-semibold text-[#faf9f6] mb-1.5">
              Cover Letter / Introduction
            </label>
            <textarea
              rows={3}
              required
              placeholder="Tell us briefly why you want to build technology at Centrifuge..."
              className="w-full text-[13px] p-3 bg-[#121212] text-[#faf9f6] border border-[#333333] rounded-[7px] focus:outline-none focus:border-[#f0b66d]"
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#faf9f6] mb-1.5">
              Resume / Curriculum Vitae (PDF or DOCX) *
            </label>
            <div className="border border-dashed border-[#333333] rounded-[8px] p-4 text-center bg-[#121212]">
              <UploadCloud className="h-6 w-6 text-[#868684] mx-auto mb-1" />
              <p className="text-[12px] text-[#868684]">
                {formData.cvFileName ? (
                  <span className="font-semibold text-[#f0b66d]">{formData.cvFileName} attached</span>
                ) : (
                  <span>Click to select or drag and drop your resume file</span>
                )}
              </p>
              <input
                type="file"
                accept=".pdf,.docx,.doc"
                className="mt-2 text-[11px] text-[#868684] file:mr-2 file:py-1 file:px-2.5 file:rounded-[50px] file:border-0 file:text-[11px] file:bg-[#1e1e1d] file:text-[#faf9f6]"
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
              className="rounded border-[#333333] bg-[#121212] text-[#f0b66d]"
            />
            <label htmlFor="consent" className="text-[12px] text-[#868684]">
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

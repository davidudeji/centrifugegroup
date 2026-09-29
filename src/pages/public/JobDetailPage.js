import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { mockJobs } from '../../data/mockData';
import { ArrowLeft, MapPin, CheckCircle2, UploadCloud } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Modal } from '../../components/ui/Modal';
import { useUIStore } from '../../stores/uiStore';
export const JobDetailPage = () => {
    const { slug } = useParams();
    const { addToast } = useUIStore();
    const job = mockJobs.find((j) => j.slug === slug) || mockJobs[0];
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        coverLetter: '',
        consent: false,
        cvFileName: '',
    });
    const handleSubmitApplication = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsSubmitting(false);
        setIsApplyModalOpen(false);
        addToast({
            title: 'Application Submitted',
            description: `Thank you, ${formData.fullName}. Your application for ${job.title} has been received.`,
            type: 'success',
        });
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            coverLetter: '',
            consent: false,
            cvFileName: '',
        });
    };
    return (_jsxs("div", { className: "w-full text-left", children: [_jsx(SEO, { title: `${job.title} | Centrifuge Careers`, description: job.shortDescription }), _jsx("section", { className: "bg-[#0B1F33] text-white py-14 sm:py-20 border-b border-[#172333]", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4", children: [_jsxs(Link, { to: "/careers/jobs", className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[#94A3B8] hover:text-[#16C7D9] transition-colors", children: [_jsx(ArrowLeft, { className: "h-3.5 w-3.5" }), _jsx("span", { children: "All Open Positions" })] }), _jsxs("div", { className: "flex flex-wrap items-center gap-2 pt-2", children: [_jsx("span", { className: "px-2.5 py-0.5 rounded bg-[#16C7D9]/20 text-[#67E8F9] text-xs font-mono font-bold", children: job.department }), _jsxs("span", { className: "text-xs text-[#94A3B8]", children: ["\u2022 ", job.type] })] }), _jsx("h1", { className: "text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight", children: job.title }), _jsxs("div", { className: "flex items-center gap-2 text-xs text-[#94A3B8]", children: [_jsx(MapPin, { className: "h-4 w-4 text-[#16C7D9]" }), _jsx("span", { children: job.location })] }), _jsx("div", { className: "pt-4", children: _jsx(Button, { variant: "primary", size: "lg", onClick: () => setIsApplyModalOpen(true), children: "Apply for this Position" }) })] }) }), _jsx("section", { className: "py-14 bg-[#F8FAFC]", children: _jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10", children: _jsxs("div", { className: "bg-white p-8 sm:p-10 rounded-[16px] border border-[#E2E8F0] space-y-8", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-bold text-[#0B1F33] font-heading mb-2", children: "About the Role" }), _jsx("p", { className: "text-sm text-[#475569] leading-relaxed", children: job.aboutRole })] }), _jsxs("div", { className: "pt-6 border-t border-[#E2E8F0]", children: [_jsx("h3", { className: "text-lg font-bold text-[#0B1F33] font-heading mb-3", children: "Key Responsibilities" }), _jsx("div", { className: "space-y-2.5", children: job.responsibilities.map((resp, i) => (_jsxs("div", { className: "flex items-start gap-2.5 text-xs text-[#334155]", children: [_jsx(CheckCircle2, { className: "h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" }), _jsx("span", { children: resp })] }, i))) })] }), _jsxs("div", { className: "pt-6 border-t border-[#E2E8F0]", children: [_jsx("h3", { className: "text-lg font-bold text-[#0B1F33] font-heading mb-3", children: "Requirements & Experience" }), _jsx("div", { className: "space-y-2.5", children: job.requirements.map((req, i) => (_jsxs("div", { className: "flex items-start gap-2.5 text-xs text-[#334155]", children: [_jsx(CheckCircle2, { className: "h-4 w-4 text-[#0284C7] shrink-0 mt-0.5" }), _jsx("span", { children: req })] }, i))) })] }), job.niceToHave.length > 0 && (_jsxs("div", { className: "pt-6 border-t border-[#E2E8F0]", children: [_jsx("h3", { className: "text-lg font-bold text-[#0B1F33] font-heading mb-3", children: "Nice to Have" }), _jsx("div", { className: "space-y-2.5", children: job.niceToHave.map((item, i) => (_jsxs("div", { className: "flex items-start gap-2.5 text-xs text-[#334155]", children: [_jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#94A3B8] shrink-0 mt-1.5" }), _jsx("span", { children: item })] }, i))) })] })), _jsxs("div", { className: "pt-6 border-t border-[#E2E8F0]", children: [_jsx("h3", { className: "text-lg font-bold text-[#0B1F33] font-heading mb-3", children: "What We Offer" }), _jsx("div", { className: "space-y-2.5", children: job.benefits.map((b, i) => (_jsxs("div", { className: "flex items-start gap-2.5 text-xs text-[#334155]", children: [_jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#16C7D9] shrink-0 mt-1.5" }), _jsx("span", { children: b })] }, i))) })] }), _jsxs("div", { className: "pt-8 border-t border-[#E2E8F0] flex items-center justify-between", children: [_jsxs("span", { className: "text-xs text-[#64748B]", children: ["Position ID: ", job.id, " \u00B7 Centrifuge Talent Team"] }), _jsx(Button, { variant: "primary", size: "md", onClick: () => setIsApplyModalOpen(true), children: "Apply for this Role" })] })] }) }) }), _jsx(Modal, { isOpen: isApplyModalOpen, onClose: () => setIsApplyModalOpen(false), title: `Apply for ${job.title}`, description: "Please provide your contact information and background to apply.", maxWidth: "lg", children: _jsxs("form", { onSubmit: handleSubmitApplication, className: "space-y-4", children: [_jsx(Input, { label: "Full Name", required: true, placeholder: "e.g. Samuel Adeleke", value: formData.fullName, onChange: (e) => setFormData({ ...formData, fullName: e.target.value }) }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [_jsx(Input, { label: "Email Address", type: "email", required: true, placeholder: "samuel@example.com", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }) }), _jsx(Input, { label: "Phone Number", type: "tel", required: true, placeholder: "+234 803 000 0000", value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#1D242F] mb-1.5", children: "Cover Letter / Introduction" }), _jsx("textarea", { rows: 3, required: true, placeholder: "Tell us briefly why you want to build technology at Centrifuge...", className: "w-full text-sm p-3 border border-[#E2E8F0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/30 focus:border-[#16C7D9]", value: formData.coverLetter, onChange: (e) => setFormData({ ...formData, coverLetter: e.target.value }) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#1D242F] mb-1.5", children: "Resume / Curriculum Vitae (PDF or DOCX) *" }), _jsxs("div", { className: "border-2 border-dashed border-[#CBD5E1] rounded-[8px] p-4 text-center bg-[#F8FAFC]", children: [_jsx(UploadCloud, { className: "h-6 w-6 text-[#94A3B8] mx-auto mb-1" }), _jsx("p", { className: "text-xs text-[#64748B]", children: formData.cvFileName ? (_jsxs("span", { className: "font-semibold text-[#16A34A]", children: [formData.cvFileName, " attached"] })) : (_jsx("span", { children: "Click to select or drag and drop your resume file" })) }), _jsx("input", { type: "file", accept: ".pdf,.docx,.doc", className: "mt-2 text-xs text-[#64748B] file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-xs file:bg-[#0B1F33] file:text-white", onChange: (e) => {
                                                if (e.target.files?.[0]) {
                                                    setFormData({ ...formData, cvFileName: e.target.files[0].name });
                                                }
                                            } })] })] }), _jsxs("div", { className: "flex items-start gap-2 pt-2", children: [_jsx("input", { type: "checkbox", id: "consent", required: true, checked: formData.consent, onChange: (e) => setFormData({ ...formData, consent: e.target.checked }), className: "mt-1 rounded text-[#16C7D9] focus:ring-[#16C7D9]" }), _jsx("label", { htmlFor: "consent", className: "text-xs text-[#64748B]", children: "I consent to Centrifuge Information Technology Limited processing my personal data in accordance with NDPR guidelines for employment evaluation." })] }), _jsxs("div", { className: "pt-4 flex justify-end gap-3 border-t border-[#E2E8F0]", children: [_jsx(Button, { type: "button", variant: "outline", size: "md", onClick: () => setIsApplyModalOpen(false), children: "Cancel" }), _jsx(Button, { type: "submit", variant: "primary", size: "md", isLoading: isSubmitting, children: "Submit Application" })] })] }) })] }));
};
export default JobDetailPage;

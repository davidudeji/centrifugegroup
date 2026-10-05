import React, { useEffect } from 'react'
import { X } from 'lucide-react'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  children: React.ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = 'md',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const maxWidthStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-2xl',
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0F2C59]/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container: 8px border radius, #FFFFFF fill, #E2E8F0 border per Spec §3.3 */}
      <div
        className={`relative w-full ${maxWidthStyles[maxWidth]} bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] p-6 z-10 shadow-lg animate-in fade-in duration-150`}
      >
        <div className="flex items-start justify-between pb-3 border-b border-[#E2E8F0]">
          <div>
            <h3 className="text-[18px] font-semibold text-[#1A1A1A] tracking-tight">
              {title}
            </h3>
            {description && (
              <p className="mt-1 text-[13px] text-[#64748B]">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-[4px] p-1 text-[#64748B] hover:text-[#1A1A1A] hover:bg-[#F1F5F9] transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 text-[#1A1A1A]">{children}</div>
      </div>
    </div>
  )
}
export default Modal

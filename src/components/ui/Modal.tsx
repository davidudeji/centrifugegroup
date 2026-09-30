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
        className="fixed inset-0 bg-[#000000]/80 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container (Onyx #1e1e1d, 20px radius, 1px #333333 border) */}
      <div
        className={`relative w-full ${maxWidthStyles[maxWidth]} bg-[#1e1e1d] rounded-[20px] border border-[#333333] p-6 z-10 animate-in fade-in duration-150`}
      >
        <div className="flex items-start justify-between pb-3 border-b border-[#333333]/70">
          <div>
            <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px]">
              {title}
            </h3>
            {description && (
              <p className="mt-1 text-[13px] text-[#868684]">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-[4px] p-1 text-[#868684] hover:text-[#faf9f6] hover:bg-[#121212] transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}

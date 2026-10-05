import React from 'react'
import { useUIStore } from '../../stores/uiStore'
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react'

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useUIStore()

  if (toasts.length === 0) return null

  const icons = {
    success: <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />,
    warning: <AlertTriangle className="h-4 w-4 text-[#F59E0B] shrink-0 mt-0.5" />,
    error: <AlertCircle className="h-4 w-4 text-[#EF4444] shrink-0 mt-0.5" />,
    info: <Info className="h-4 w-4 text-[#008DDA] shrink-0 mt-0.5" />,
  }

  return (
    <div
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 bg-[#FFFFFF] text-[#1A1A1A] p-4 rounded-[8px] border border-[#E2E8F0] shadow-lg animate-in slide-in-from-bottom-2 duration-150"
        >
          {icons[toast.type]}
          <div className="flex-1 text-left min-w-0">
            <h4 className="text-[13px] font-semibold text-[#1A1A1A] tracking-tight">{toast.title}</h4>
            {toast.description && (
              <p className="mt-0.5 text-[12px] text-[#64748B] leading-relaxed">{toast.description}</p>
            )}
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-[#94A3B8] hover:text-[#1A1A1A] transition-colors p-0.5 rounded-[4px] hover:bg-[#F1F5F9]"
            aria-label="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ))}
    </div>
  )
}
export default ToastContainer

import React from 'react'
import { useUIStore } from '../../stores/uiStore'
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react'

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useUIStore()

  if (toasts.length === 0) return null

  const icons = {
    success: <CheckCircle2 className="h-4 w-4 text-[#cbb0f7] shrink-0" />,
    warning: <AlertTriangle className="h-4 w-4 text-[#fbbf24] shrink-0" />,
    error: <AlertCircle className="h-4 w-4 text-[#f87171] shrink-0" />,
    info: <Info className="h-4 w-4 text-[#cbb0f7] shrink-0" />,
  }

  return (
    <div
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 bg-[#1e1e1d] text-[#faf9f6] p-3.5 rounded-[12px] border border-[#333333] shadow-none animate-in slide-in-from-bottom-2 duration-150"
        >
          {icons[toast.type]}
          <div className="flex-1 text-left">
            <h4 className="text-[13px] font-semibold text-[#faf9f6] tracking-[-0.14px]">{toast.title}</h4>
            {toast.description && (
              <p className="mt-0.5 text-[12px] text-[#868684]">{toast.description}</p>
            )}
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-[#868684] hover:text-[#faf9f6] transition-colors p-0.5"
            aria-label="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ))}
    </div>
  )
}

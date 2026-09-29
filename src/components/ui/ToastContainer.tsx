import React from 'react'
import { useUIStore } from '../../stores/uiStore'
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react'

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useUIStore()

  if (toasts.length === 0) return null

  const icons = {
    success: <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />,
    warning: <AlertTriangle className="h-4 w-4 text-[#D97706] shrink-0" />,
    error: <AlertCircle className="h-4 w-4 text-[#DC2626] shrink-0" />,
    info: <Info className="h-4 w-4 text-[#16C7D9] shrink-0" />,
  }

  return (
    <div
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 bg-white text-[#111827] p-3.5 rounded-[10px] border border-[#E2E8F0] shadow-lg animate-in slide-in-from-bottom-2 duration-200"
        >
          {icons[toast.type]}
          <div className="flex-1 text-left">
            <h4 className="text-xs font-semibold text-[#111827]">{toast.title}</h4>
            {toast.description && (
              <p className="mt-0.5 text-xs text-[#64748B]">{toast.description}</p>
            )}
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-[#94A3B8] hover:text-[#111827] transition-colors p-0.5"
            aria-label="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ))}
    </div>
  )
}

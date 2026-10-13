interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  disabled: boolean
  isSubmitting: boolean
  isDark: boolean
}

export function ChatInput({ value, onChange, onSubmit, disabled, isSubmitting, isDark }: ChatInputProps) {
  const submitDisabled = disabled || isSubmitting || !value.trim()

  return (
    <form
      className={[
        'border-t p-3 backdrop-blur-sm',
        isDark ? 'border-slate-700 bg-slate-900/80' : 'border-slate-200 bg-white/95',
      ].join(' ')}
      onSubmit={(event) => {
        event.preventDefault()
        if (submitDisabled) return
        onSubmit()
      }}
    >
      <div className="flex items-end gap-3">
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={1}
          placeholder="Ask about our solutions, services, or digital strategy..."
          className={[
            'max-h-32 min-h-[48px] flex-1 resize-none rounded-2xl border px-4 py-3 text-sm outline-none transition',
            isDark
              ? 'border-slate-700 bg-slate-800 text-slate-100 placeholder:text-slate-400 focus:border-[#008DDA] focus:bg-slate-800 focus:ring-4 focus:ring-[#008DDA]/20'
              : 'border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 focus:border-[#008DDA] focus:bg-white focus:ring-4 focus:ring-[#008DDA]/10',
          ].join(' ')}
          disabled={disabled}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault()
              if (!submitDisabled) onSubmit()
            }
          }}
        />

        <button
          type="submit"
          disabled={submitDisabled}
          className="inline-flex h-[48px] items-center justify-center rounded-2xl bg-[#E87916] px-5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(232,121,22,0.28)] transition hover:bg-[#D0690E] hover:shadow-[0_6px_18px_rgba(232,121,22,0.36)] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none"
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  )
}

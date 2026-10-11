import { Moon, Plus, SunMedium, Sparkles } from 'lucide-react'

interface ChatbotHeaderProps {
  isDark: boolean
  onToggleTheme: () => void
  onNewConversation: () => void
}

export function ChatbotHeader({ isDark, onToggleTheme, onNewConversation }: ChatbotHeaderProps) {
  return (
    <header
      className={[
        'flex items-center justify-between border-b px-4 py-3 backdrop-blur-sm',
        isDark ? 'border-slate-700 bg-slate-900/80' : 'border-slate-200 bg-white/80',
      ].join(' ')}
    >
      <div className="flex items-center gap-3">
        <div
          className={[
            'flex h-9 w-9 items-center justify-center rounded-xl',
            isDark ? 'bg-slate-800 text-sky-300' : 'bg-[#EAF7FF] text-[#0F2C59]',
          ].join(' ')}
        >
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <p className={['text-sm font-semibold', isDark ? 'text-slate-100' : 'text-slate-800'].join(' ')}>
            Centrifuge AI
          </p>
          <p className={['text-[11px]', isDark ? 'text-slate-400' : 'text-slate-500'].join(' ')}>
            Knowledge assistant
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Toggle theme"
          onClick={onToggleTheme}
          className={[
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border transition',
            isDark
              ? 'border-slate-700 bg-slate-800 text-slate-200 hover:border-slate-600'
              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900',
          ].join(' ')}
        >
          {isDark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={onNewConversation}
          className="inline-flex items-center gap-2 rounded-xl bg-[#0F2C59] px-3 py-2 text-xs font-medium text-white transition hover:bg-[#183d73]"
        >
          <Plus className="h-3.5 w-3.5" />
          New chat
        </button>
      </div>
    </header>
  )
}

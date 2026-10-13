import { useEffect, useMemo, useState } from 'react'
import { MessageSquareText, Sparkles, X } from 'lucide-react'
import { ChatInput } from './ChatInput'
import { ChatMessage, type ChatMessageItem } from './ChatMessage'
import { ChatbotHeader } from './ChatbotHeader'

interface Conversation {
  id: string
  title: string
  history: ChatMessageItem[]
}

const STORAGE_KEY = 'centrifuge-chatbot-conversations'

const buildConversation = (id: string): Conversation => ({
  id,
  title: 'New conversation',
  history: [],
})

const getTitleFromPrompt = (prompt: string) => {
  const nextTitle = prompt.replace(/\s+/g, ' ').trim()
  return nextTitle.length > 28 ? `${nextTitle.slice(0, 28)}...` : nextTitle || 'New conversation'
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [conversations, setConversations] = useState<Record<string, Conversation>>(() => {
    if (typeof window === 'undefined') {
      const fallbackId = crypto.randomUUID()
      return { [fallbackId]: buildConversation(fallbackId) }
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        const fallbackId = crypto.randomUUID()
        return { [fallbackId]: buildConversation(fallbackId) }
      }

      const parsed = JSON.parse(stored) as Record<string, Conversation>
      const entries = Object.entries(parsed)
      if (entries.length > 0) {
        return parsed
      }
    } catch {
      // Ignore invalid persisted data and fall back to a fresh conversation.
    }

    const fallbackId = crypto.randomUUID()
    return { [fallbackId]: buildConversation(fallbackId) }
  })

  const [activeConversationId, setActiveConversationId] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!activeConversationId) {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY)
        if (stored) {
          const parsed = JSON.parse(stored) as Record<string, Conversation>
          const firstKey = Object.keys(parsed)[0]
          if (firstKey) {
            setActiveConversationId(firstKey)
            return
          }
        }
      } catch {
        // Ignore invalid persisted state and continue to default logic below.
      }

      if (Object.keys(conversations).length > 0) {
        setActiveConversationId(Object.keys(conversations)[0])
      }
    }
  }, [activeConversationId, conversations])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations))
  }, [conversations])

  const activeConversation = useMemo(
    () => conversations[activeConversationId] ?? Object.values(conversations)[0],
    [activeConversationId, conversations],
  )

  const handleNewConversation = () => {
    const id = crypto.randomUUID()
    const newConversation = buildConversation(id)
    setConversations((current) => ({ ...current, [id]: newConversation }))
    setActiveConversationId(id)
    setError('')
    setInputValue('')
  }

  const handleConversationSwitch = (id: string) => {
    setActiveConversationId(id)
    setError('')
  }

  const handleSubmit = async () => {
    const trimmedQuestion = inputValue.trim()
    if (!trimmedQuestion || isSubmitting || !activeConversation) return

    const userMessage: ChatMessageItem = {
      id: crypto.randomUUID(),
      sender: 'user',
      text: trimmedQuestion,
    }

    const currentHistory = [...activeConversation.history, userMessage]

    setConversations((current) => ({
      ...current,
      [activeConversation.id]: {
        ...current[activeConversation.id],
        title:
          current[activeConversation.id]?.title === 'New conversation'
            ? getTitleFromPrompt(trimmedQuestion)
            : current[activeConversation.id].title,
        history: currentHistory,
      },
    }))
    setInputValue('')
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: trimmedQuestion,
          history: currentHistory,
          conversationId: activeConversation.id,
        }),
      })

      if (!response.ok) {
        throw new Error(`The chat service returned ${response.status}. Please try again.`)
      }

      const data = (await response.json()) as { answer?: string }
      const answer = data.answer?.trim()

      if (!answer) {
        throw new Error('The chatbot returned an empty response. Please retry your question.')
      }

      const modelMessage: ChatMessageItem = {
        id: crypto.randomUUID(),
        sender: 'model',
        text: answer,
      }

      setConversations((current) => ({
        ...current,
        [activeConversation.id]: {
          ...current[activeConversation.id],
          history: [...currentHistory, modelMessage],
        },
      }))
    } catch (requestError) {
      const isConnectionError =
        requestError instanceof TypeError ||
        (requestError instanceof Error && requestError.message.toLowerCase().includes('fetch'))
      const message = isConnectionError
        ? 'Unable to connect to the Centrifuge assistant backend on http://localhost:5000. Please start the backend service (cd backend && npm run dev).'
        : requestError instanceof Error
        ? requestError.message
        : 'Something went wrong while contacting the chatbot service.'
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const conversationEntries = Object.values(conversations)

  return (
    <div className={`chatbot-shell ${isDark ? 'chatbot-shell--dark' : 'chatbot-shell--light'}`}>
      <button
        type="button"
        aria-label={isOpen ? 'Close chat panel' : 'Open chat panel'}
        onClick={() => setIsOpen((current) => !current)}
        className="chatbot-launcher"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageSquareText className="h-5 w-5" />}
      </button>

      <div className={`chatbot-panel ${isOpen ? 'chatbot-panel--open' : ''}`}>
        <ChatbotHeader
          isDark={isDark}
          onToggleTheme={() => setIsDark((current) => !current)}
          onNewConversation={handleNewConversation}
        />

        <div className="chatbot-layout">
          <aside className="chatbot-sidebar">
            <div className="mb-3 flex items-center gap-2 px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              <Sparkles className="h-3.5 w-3.5" />
              Threads
            </div>

            <div className="space-y-2">
              {conversationEntries.map((conversation) => (
                <button
                  key={conversation.id}
                  type="button"
                  onClick={() => handleConversationSwitch(conversation.id)}
                  className={[
                    'flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left transition',
                    activeConversation?.id === conversation.id
                      ? 'border-[#E87916]/30 bg-[#E87916]/10 text-[#0B1F33] font-semibold'
                      : 'border-transparent bg-slate-50 text-slate-600 hover:border-slate-200 hover:bg-slate-100',
                  ].join(' ')}
                >
                  <span className="truncate text-sm font-medium">{conversation.title}</span>
                  <span className="rounded-full bg-white/70 px-1.5 py-0.5 text-[10px] text-slate-500">
                    {conversation.history.length}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="chatbot-main">
            {error ? (
              <div className="border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-700">
                {error}
              </div>
            ) : null}

            <div className="chatbot-messages">
              {activeConversation?.history.length ? (
                activeConversation.history.map((message) => <ChatMessage key={message.id} message={message} />)
              ) : (
                <div className="flex h-full min-h-[160px] items-center justify-center text-center text-sm text-slate-500">
                  Start a new conversation and ask about our services, sectors, or delivery model.
                </div>
              )}

              {isSubmitting ? (
                <div className="chatbot-loader" aria-live="polite">
                  <span className="chatbot-loader__label">Thinking</span>
                  <div className="chatbot-loader__dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              ) : null}
            </div>

            <ChatInput
              value={inputValue}
              onChange={setInputValue}
              onSubmit={handleSubmit}
              disabled={!activeConversation}
              isSubmitting={isSubmitting}
              isDark={isDark}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

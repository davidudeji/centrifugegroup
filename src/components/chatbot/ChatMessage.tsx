export type ChatSender = 'user' | 'model'

export interface ChatMessageItem {
  id: string
  sender: ChatSender
  text: string
}

interface ChatMessageProps {
  message: ChatMessageItem
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={[
          'max-w-[80%] rounded-2xl px-4 py-3 shadow-sm',
          isUser
            ? 'rounded-br-md bg-[#0B1F33] text-white'
            : 'rounded-bl-md border border-[#E2E8F0] bg-[#F7F9FA] text-[#0B1F33]',
        ].join(' ')}
      >
        <p className="whitespace-pre-wrap text-sm leading-6">{message.text}</p>
      </div>
    </div>
  )
}

import { useEffect } from 'react'

const propertyId = import.meta.env.VITE_TAWK_PROPERTY_ID?.trim()
const widgetId = import.meta.env.VITE_TAWK_WIDGET_ID?.trim()
const scriptId = 'tawk-messenger-script'

export default function TawkChatWidget() {
  useEffect(() => {
    if (!propertyId || !widgetId || document.getElementById(scriptId)) return

    window.Tawk_API = window.Tawk_API ?? {}
    window.Tawk_LoadStart = window.Tawk_LoadStart ?? new Date()

    const script = document.createElement('script')
    script.id = scriptId
    script.async = true
    script.src = `https://embed.tawk.to/${encodeURIComponent(propertyId)}/${encodeURIComponent(widgetId)}`
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    script.addEventListener('error', () => {
      console.error('Failed to load the Tawk.to chat widget')
      script.remove()
    }, { once: true })

    document.head.appendChild(script)
  }, [])

  return null
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { CartDrawer } from './CartDrawer'
import { ToastContainer } from '../ui/ToastContainer'
import TawkChatWidget from '../chatbot/TawkChatWidget'

export const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-[#102A43] font-sans antialiased selection:bg-[#1677D2]/20 selection:text-[#073B70]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <ToastContainer />
      <TawkChatWidget />
    </div>
  )
}
export default PublicLayout

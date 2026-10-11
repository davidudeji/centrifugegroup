import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { CartDrawer } from './CartDrawer'
import { ToastContainer } from '../ui/ToastContainer'
import { Chatbot } from '../chatbot/Chatbot'

export const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#1A1A1A] font-sans antialiased selection:bg-[#008DDA]/20 selection:text-[#0F2C59]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <ToastContainer />
      <Chatbot />
    </div>
  )
}
export default PublicLayout

import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { CartDrawer } from './CartDrawer'
import { ToastContainer } from '../ui/ToastContainer'

export const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FA] text-[#172333] font-sans antialiased selection:bg-[#16C7D9]/20 selection:text-[#0B1F33]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <ToastContainer />
    </div>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { CartDrawer } from './CartDrawer'
import { ToastContainer } from '../ui/ToastContainer'

export const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-[#faf9f6] font-sans antialiased selection:bg-[#cbb0f7]/25 selection:text-[#ffffff]">
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
export default PublicLayout

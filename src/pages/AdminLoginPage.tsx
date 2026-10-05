import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'
import { brandAssets } from '../assets'
import { Eye, EyeOff, ArrowRight, Terminal } from 'lucide-react'

export const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate()
  const { login, isLoading } = useAuthStore()
  const [email, setEmail] = useState('admin@centrifugegroup.co')
  const [password, setPassword] = useState('admin')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const success = await login(email, password, 'super_admin')
    if (success) {
      navigate('/admin')
    } else {
      setError('Invalid credentials. Access denied.')
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center px-4">
      {/* Background grid pattern */}
      <div
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,141,218,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,141,218,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
            <span className="h-8 w-9 shrink-0 overflow-hidden">
              <img src={brandAssets.logo} alt="" aria-hidden="true" className="max-w-none h-8 w-auto object-contain object-left" />
            </span>
            <span className="font-heading font-bold text-[#0F2C59]">Centrifuge Group</span>
          </Link>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Terminal className="h-4 w-4 text-[#008DDA]" />
            <span className="text-xs font-mono font-bold text-[#008DDA] tracking-widest uppercase">Admin Access</span>
          </div>
          <h1 className="font-heading font-bold text-2xl text-[#0F2C59]">Sign in to Dashboard</h1>
          <p className="text-sm text-[#64748B] mt-1">Centrifuge Group Administration</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-[#64748B] mb-1.5" htmlFor="admin-email">
                Administrator Email
              </label>
              <input
                id="admin-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-4 bg-[#F5F7FA] border border-[#E2E8F0] rounded-[4px] text-sm text-[#1A1A1A] placeholder-[#64748B] focus:outline-none focus:border-[#008DDA] focus:ring-2 focus:ring-[#008DDA]/20 transition-fin"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#64748B] mb-1.5" htmlFor="admin-password">
                Password
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 px-4 pr-11 bg-[#F5F7FA] border border-[#E2E8F0] rounded-[4px] text-sm text-[#1A1A1A] placeholder-[#64748B] focus:outline-none focus:border-[#008DDA] focus:ring-2 focus:ring-[#008DDA]/20 transition-fin"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#64748B]"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-xs text-[#EF4444] bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg px-3 py-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-[#008DDA] text-white rounded-lg text-sm font-bold hover:bg-[#0077B6] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isLoading ? 'Authenticating…' : (
                <>
                  Access Dashboard
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Demo credentials note */}
          <div className="mt-5 p-3 bg-[#F5F7FA] rounded-[4px] border border-[#E2E8F0]">
            <p className="text-xs text-[#64748B] text-center font-mono">
              demo credentials pre-filled above
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-[#64748B] mt-6">
          <Link to="/" className="hover:text-[#64748B] transition-colors">← Back to Corporate Site</Link>
        </p>
      </div>
    </div>
  )
}

export default AdminLoginPage

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
    <div className="min-h-screen bg-[#071521] flex flex-col items-center justify-center px-4">
      {/* Background grid pattern */}
      <div
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(22,199,217,1) 1px, transparent 1px), linear-gradient(90deg, rgba(22,199,217,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
            <img src={brandAssets.logo} alt="Centrifuge" className="h-8 w-auto object-contain" />
          </Link>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Terminal className="h-4 w-4 text-[#16C7D9]" />
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-widest uppercase">Admin Access</span>
          </div>
          <h1 className="font-heading font-bold text-2xl text-white">Sign in to Dashboard</h1>
          <p className="text-sm text-[#64748B] mt-1">Centrifuge Group Administration</p>
        </div>

        {/* Card */}
        <div className="bg-[#0B1F33] rounded-2xl border border-[#172333] p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5" htmlFor="admin-email">
                Administrator Email
              </label>
              <input
                id="admin-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-4 bg-[#071521] border border-[#172333] rounded-lg text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#16C7D9] focus:ring-2 focus:ring-[#16C7D9]/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5" htmlFor="admin-password">
                Password
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 px-4 pr-11 bg-[#071521] border border-[#172333] rounded-lg text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#16C7D9] focus:ring-2 focus:ring-[#16C7D9]/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#475569] hover:text-[#94A3B8]"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-xs text-[#DC2626] bg-[#DC2626]/10 border border-[#DC2626]/20 rounded-lg px-3 py-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-[#16C7D9] text-[#071521] rounded-lg text-sm font-bold hover:bg-[#67E8F9] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
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
          <div className="mt-5 p-3 bg-[#071521] rounded-lg border border-[#172333]">
            <p className="text-xs text-[#475569] text-center font-mono">
              demo credentials pre-filled above
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-[#475569] mt-6">
          <Link to="/" className="hover:text-[#64748B] transition-colors">← Back to Corporate Site</Link>
        </p>
      </div>
    </div>
  )
}

export default AdminLoginPage

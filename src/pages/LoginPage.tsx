import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'
import { brandAssets } from '../assets'
import { Eye, EyeOff, ArrowRight, Shield } from 'lucide-react'

export const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const { login, isLoading } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const success = await login(email, password, 'customer')
    if (success) {
      navigate('/account')
    } else {
      setError('Invalid credentials. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col">
      {/* Top bar */}
      <header className="h-16 bg-[#121212] border-b border-[#333333] flex items-center px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={brandAssets.logo} alt="Centrifuge Group" className="h-7 w-auto object-contain" />
          <span className="font-heading font-bold text-[#faf9f6] text-base">Centrifuge Group</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-[#121212] rounded-2xl border border-[#333333] shadow-[0_2px_8px_rgba(11,31,51,0.05)] p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[#000000] mb-4">
                <Shield className="h-6 w-6 text-[#f0b66d]" />
              </div>
              <h1 className="font-heading font-bold text-2xl text-[#faf9f6] mb-1">Sign in to your account</h1>
              <p className="text-sm text-[#868684]">Access your orders, wishlist and profile</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full h-11 px-4 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] placeholder-[#868684] focus:outline-none focus:border-[#f0b66d] focus:ring-2 focus:ring-[#f0b66d]/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                    className="w-full h-11 px-4 pr-11 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] placeholder-[#868684] focus:outline-none focus:border-[#f0b66d] focus:ring-2 focus:ring-[#f0b66d]/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#868684] hover:text-[#868684]"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-xs text-[#DC2626] bg-[#DC2626]/5 border border-[#DC2626]/20 rounded-lg px-3 py-2">{error}</p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-[#000000] text-white rounded-lg text-sm font-semibold hover:bg-[#000000] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isLoading ? 'Signing in…' : (
                  <>
                    Sign In
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-[#333333] text-center">
              <p className="text-sm text-[#868684]">
                Don't have an account?{' '}
                <Link to="/contact" className="text-[#f0b66d] font-semibold hover:underline">
                  Contact us
                </Link>
              </p>
            </div>

            {/* Demo hint */}
            <div className="mt-4 p-3 bg-[#000000] rounded-lg border border-[#333333]">
              <p className="text-xs text-[#868684] text-center">
                <span className="font-semibold text-[#faf9f6]">Demo:</span> Any email/password combination works
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-[#868684] mt-6">
            <Link to="/" className="hover:text-[#868684] transition-colors">← Back to Centrifuge Group</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default LoginPage

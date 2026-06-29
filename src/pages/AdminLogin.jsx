import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    setTimeout(() => {
      if (username === 'admin' && password === '060405') {
        sessionStorage.setItem('admin_auth', 'true')
        setIsSubmitting(false)
        navigate('/admin')
      } else {
        setError('아이디 또는 비밀번호가 일치하지 않습니다.')
        setIsSubmitting(false)
      }
    }, 600)
  }

  return (
    <div className="bg-pitch-black text-on-surface font-body-md min-h-screen flex items-center justify-center px-container-margin relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-container/10 filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-tertiary/5 filter blur-[120px] pointer-events-none"></div>

      {/* Login Card */}
      <div className="w-full max-w-[420px] bg-surface border border-white/5 p-lg rounded-2xl shadow-2xl relative z-10 backdrop-blur-md flex flex-col items-center">
        {/* Brand Header */}
        <div className="text-center mb-lg w-full">
          <span className="font-display-lg text-[36px] text-pure-white tracking-tighter block mb-xs">NOIR LUXE</span>
          <span className="font-label-caps text-label-caps text-silver-mist tracking-widest block uppercase">ADMIN PORTAL</span>
        </div>

        {/* Error Message */}
        {error && (
          <div className="w-full bg-error-container/20 border border-error-container text-error text-body-sm p-sm rounded-lg mb-md text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="w-full space-y-md">
          {/* Username Input */}
          <div className="flex flex-col gap-xs">
            <label className="font-label-caps text-label-caps text-silver-mist" htmlFor="username">USERNAME</label>
            <input 
              type="text" 
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
              className="bg-pitch-black border border-deep-slate text-pure-white rounded-lg p-sm focus:ring-1 focus:ring-primary-container focus:outline-none placeholder-silver-mist/40 font-body-md"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-xs">
            <label className="font-label-caps text-label-caps text-silver-mist" htmlFor="password">PASSWORD</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••"
              className="bg-pitch-black border border-deep-slate text-pure-white rounded-lg p-sm focus:ring-1 focus:ring-primary-container focus:outline-none placeholder-silver-mist/40 font-body-md"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-container text-pure-white font-headline-md py-sm rounded-lg hover:bg-inverse-primary transition-all duration-300 uppercase tracking-wider font-semibold mt-lg flex justify-center items-center gap-xs"
          >
            {isSubmitting ? 'Verifying...' : 'SIGN IN'}
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-md text-center">
          <Link className="font-body-sm text-body-sm text-silver-mist hover:text-pure-white transition-colors duration-300" to="/">
            돌아가기 (Return to Store)
          </Link>
        </div>
      </div>
    </div>
  )
}

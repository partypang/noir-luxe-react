import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

function GoogleMark() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  )
}

const COPY = {
  EN: {
    login: {
      google: 'Continue with Google',
      divider: 'or',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      password: 'Password',
      passwordPlaceholder: 'Enter your password',
      forgot: 'Forgot your password?',
      submit: 'Log in',
      submitting: 'Logging in...',
      switchLead: "Don't have an account?",
      switchAction: 'Sign up',
      success: 'Logged in successfully.',
    },
    signup: {
      google: 'Continue with Google',
      divider: 'or',
      nickname: 'Nickname',
      nicknamePlaceholder: 'Display name',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      password: 'Password',
      passwordPlaceholder: 'Create a password',
      passwordHelp: 'Please enter at least 8 characters.',
      submit: 'Create account',
      submitting: 'Creating account...',
      switchLead: 'Already have an account?',
      switchAction: 'Log in',
      terms: 'By creating an account, you agree to the Terms of Use and Privacy Policy.',
      success: 'Account created successfully.',
    },
    googleReady: 'Google sign-in is ready for OAuth connection.',
    showPassword: 'Show password',
    hidePassword: 'Hide password',
  },
  KO: {
    login: {
      google: 'Google로 계속하기',
      divider: '또는',
      email: '이메일',
      emailPlaceholder: 'you@example.com',
      password: '비밀번호',
      passwordPlaceholder: '비밀번호를 입력하세요',
      forgot: '비밀번호를 잊으셨나요?',
      submit: '로그인',
      submitting: '로그인 중...',
      switchLead: '계정이 없으신가요?',
      switchAction: '회원가입',
      success: '로그인되었습니다.',
    },
    signup: {
      google: 'Google로 계속하기',
      divider: '또는',
      nickname: '닉네임',
      nicknamePlaceholder: '표시될 닉네임',
      email: '이메일',
      emailPlaceholder: 'you@example.com',
      password: '비밀번호',
      passwordPlaceholder: '비밀번호를 만들어 주세요',
      passwordHelp: '8자 이상으로 입력해 주세요.',
      submit: '계정 만들기',
      submitting: '계정 생성 중...',
      switchLead: '이미 계정이 있으신가요?',
      switchAction: '로그인',
      terms: '계정을 만들면 이용약관 및 개인정보처리방침에 동의하게 됩니다.',
      success: '계정이 생성되었습니다.',
    },
    googleReady: 'Google 로그인은 OAuth 연결 준비 상태입니다.',
    showPassword: '비밀번호 표시',
    hidePassword: '비밀번호 숨기기',
  },
}

export default function MembershipRegistration() {
  const navigate = useNavigate()
  const location = useLocation()
  const { language } = useLanguage()
  const isSignup = location.pathname === '/register'
  const copy = COPY[language] || COPY.EN
  const modeCopy = isSignup ? copy.signup : copy.login

  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const finishAuth = (notice) => {
    const displayName = formData.nickname || formData.email.split('@')[0] || 'NOIR Member'
    localStorage.setItem('customer_session', JSON.stringify({
      email: formData.email,
      name: displayName,
      mode: isSignup ? 'signup' : 'login',
      signedAt: new Date().toISOString(),
    }))
    setMessage(notice)
    window.setTimeout(() => navigate('/'), 650)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    window.setTimeout(() => {
      setIsSubmitting(false)
      finishAuth(modeCopy.success)
    }, 700)
  }

  const handleGoogle = () => {
    setMessage(copy.googleReady)
  }

  return (
    <div className="min-h-screen bg-[#070707] text-on-surface flex items-center justify-center px-container-margin py-xl">
      <Link
        to="/"
        aria-label="NOIR LUXE Home"
        className="absolute left-container-margin top-md font-display-lg text-[34px] text-pure-white tracking-tighter"
      >
        NOIR LUXE
      </Link>

      <main className="w-full max-w-[420px]">
        <form onSubmit={handleSubmit} className="w-full">
          <button
            type="button"
            onClick={handleGoogle}
            className="w-full h-[52px] rounded-[14px] border border-pure-white/18 bg-[#191919] text-pure-white font-body-md text-[16px] font-bold flex items-center justify-center gap-sm hover:border-[#f4b400]/70 hover:bg-[#202020] transition-colors"
          >
            <GoogleMark />
            {modeCopy.google}
          </button>

          <div className="flex items-center justify-center my-lg">
            <span className="font-body-sm text-body-sm text-silver-mist/70">{modeCopy.divider}</span>
          </div>

          <div className="space-y-md">
            {isSignup && (
              <div className="space-y-xs">
                <label htmlFor="nickname" className="font-body-md text-[15px] font-bold text-pure-white">
                  {modeCopy.nickname}
                </label>
                <input
                  id="nickname"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleChange}
                  placeholder={modeCopy.nicknamePlaceholder}
                  required={isSignup}
                  className="w-full h-[48px] rounded-[14px] border border-pure-white/10 bg-[#151515] px-sm text-pure-white placeholder:text-silver-mist/45 focus:border-[#f4b400]/80 focus:outline-none focus:ring-0"
                />
              </div>
            )}

            <div className="space-y-xs">
              <label htmlFor="email" className="font-body-md text-[15px] font-bold text-pure-white">
                {modeCopy.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={modeCopy.emailPlaceholder}
                required
                className="w-full h-[48px] rounded-[14px] border border-pure-white/10 bg-[#151515] px-sm text-pure-white placeholder:text-silver-mist/45 focus:border-[#f4b400]/80 focus:outline-none focus:ring-0"
              />
            </div>

            <div className="space-y-xs">
              <label htmlFor="password" className="font-body-md text-[15px] font-bold text-pure-white">
                {modeCopy.password}
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder={modeCopy.passwordPlaceholder}
                  minLength={isSignup ? 8 : 1}
                  required
                  className="w-full h-[48px] rounded-[14px] border border-pure-white/10 bg-[#151515] px-sm pr-[48px] text-pure-white placeholder:text-silver-mist/45 focus:border-[#f4b400]/80 focus:outline-none focus:ring-0"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? copy.hidePassword : copy.showPassword}
                  className="absolute right-sm top-1/2 -translate-y-1/2 text-silver-mist hover:text-pure-white transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
              {isSignup ? (
                <p className="font-body-sm text-body-sm text-silver-mist/75">{modeCopy.passwordHelp}</p>
              ) : (
                <div className="flex justify-end pt-xs">
                  <button type="button" className="font-body-sm text-body-sm text-silver-mist hover:text-[#f4b400] transition-colors">
                    {modeCopy.forgot}
                  </button>
                </div>
              )}
            </div>
          </div>

          {message && (
            <p className="mt-md rounded-lg border border-[#f4b400]/30 bg-[#f4b400]/10 px-sm py-xs text-center font-body-sm text-[#f4b400]">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-lg h-[50px] w-full rounded-[14px] bg-[#f4b400] text-pitch-black font-body-md text-[16px] font-extrabold shadow-[0_20px_34px_rgba(244,180,0,0.18)] hover:bg-[#d99b00] disabled:cursor-wait disabled:opacity-70 transition-colors"
          >
            {isSubmitting ? modeCopy.submitting : modeCopy.submit}
          </button>

          <div className="mt-lg text-center font-body-md text-body-md text-silver-mist">
            {modeCopy.switchLead}{' '}
            <Link to={isSignup ? '/login' : '/register'} className="font-bold text-[#f4b400] hover:text-pure-white transition-colors">
              {modeCopy.switchAction}
            </Link>
          </div>

          {isSignup && (
            <p className="mt-lg text-center font-body-sm text-body-sm text-silver-mist/55">
              {modeCopy.terms}
            </p>
          )}
        </form>
      </main>
    </div>
  )
}

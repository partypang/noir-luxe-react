import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function MembershipRegistration() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Welcome to the Circle! Account created successfully.')
      navigate('/')
    }, 1200)
  }

  return (
    <div className="bg-pitch-black text-on-surface font-body-md min-h-screen flex flex-col overflow-x-hidden">
      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center pt-32 pb-xl px-container-margin relative z-10">
        {/* Registration Form Container */}
        <div className="w-full max-w-[480px] bg-pitch-black p-lg flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-lg w-full">
            <h1 className="font-display-xl text-[32px] text-pure-white tracking-tight mb-sm uppercase">JOIN THE CIRCLE</h1>
            <p className="font-body-md text-body-md text-silver-mist max-w-[320px] mx-auto">
              Unlock early access to new collections and exclusive member benefits.
            </p>
          </div>

          {/* Social Sign-up */}
          <div className="w-full space-y-sm mb-md">
            <button className="w-full bg-graphite-base border border-pure-white rounded-lg py-sm px-md flex items-center justify-center space-x-sm hover:bg-surface-container-low transition-colors duration-300">
              <svg className="w-5 h-5 text-pure-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path>
              </svg>
              <span className="font-body-md text-body-md text-pure-white">Continue with Google</span>
            </button>
            <button className="w-full bg-graphite-base border border-pure-white rounded-lg py-sm px-md flex items-center justify-center space-x-sm hover:bg-surface-container-low transition-colors duration-300">
              <svg className="w-5 h-5 text-pure-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"></path>
              </svg>
              <span className="font-body-md text-body-md text-pure-white">Continue with Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="w-full flex items-center my-md">
            <div className="flex-grow border-t border-deep-slate"></div>
            <span className="mx-sm font-label-caps text-label-caps text-silver-mist uppercase">OR CONTINUE WITH EMAIL</span>
            <div className="flex-grow border-t border-deep-slate"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-md">
            <div className="relative group border-b border-pure-white pb-xs">
              <input 
                className="w-full bg-transparent border-0 text-pure-white font-body-md py-sm px-0 focus:ring-0 focus:outline-none" 
                id="email" 
                name="email" 
                placeholder="Email Address" 
                required 
                type="email" 
              />
            </div>
            <div className="relative group border-b border-pure-white pb-xs">
              <input 
                className="w-full bg-transparent border-0 text-pure-white font-body-md py-sm px-0 focus:ring-0 focus:outline-none" 
                id="password" 
                name="password" 
                placeholder="Password" 
                required 
                type="password" 
              />
            </div>
            <div className="relative group border-b border-pure-white pb-xs">
              <input 
                className="w-full bg-transparent border-0 text-pure-white font-body-md py-sm px-0 focus:ring-0 focus:outline-none" 
                id="pccc" 
                name="pccc" 
                placeholder="Personal Customs Clearance Code (PCCC)" 
                required 
                type="text" 
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-container text-pure-white font-body-md font-semibold py-sm px-md rounded-lg mt-md hover:bg-inverse-primary transition-colors duration-300"
            >
              {isSubmitting ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-md text-center">
            <span className="font-body-sm text-body-sm text-silver-mist">
              Already have an account? 
              <a className="text-primary-container hover:text-pure-white transition-colors duration-300 ml-1" href="#">Log in</a>
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}

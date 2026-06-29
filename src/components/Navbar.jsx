import React, { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    setLangDropdownOpen(false)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="bg-pitch-black/85 backdrop-blur-md fixed top-0 w-full z-50 h-20 transition-all duration-300 ease-in-out border-b border-white/5">
      <div className="flex justify-between items-center px-container-margin max-w-full mx-auto h-full">
        {/* Brand Logo */}
        <Link className="font-display-lg text-[38px] text-pure-white tracking-tighter" to="/">
          NOIR LUXE
        </Link>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-lg items-center">
          <NavLink 
            className={({ isActive }) => 
              `font-label-caps text-[16px] leading-none tracking-[0.1em] font-semibold transition-all duration-300 px-xs py-base ${
                isActive ? 'text-pure-white border-b-2 border-primary-container pb-2' : 'text-silver-mist hover:text-pure-white'
              }`
            } 
            to="/"
          >
            {t('home')}
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `font-label-caps text-[16px] leading-none tracking-[0.1em] font-semibold transition-all duration-300 px-xs py-base ${
                isActive ? 'text-pure-white border-b-2 border-primary-container pb-2' : 'text-silver-mist hover:text-pure-white'
              }`
            } 
            to="/collection"
          >
            {t('bags')}
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `font-label-caps text-[16px] leading-none tracking-[0.1em] font-semibold transition-all duration-300 px-xs py-base ${
                isActive ? 'text-pure-white border-b-2 border-primary-container pb-2' : 'text-silver-mist hover:text-pure-white'
              }`
            } 
            to="/shoes"
          >
            {t('shoes')}
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `font-label-caps text-[16px] leading-none tracking-[0.1em] font-semibold transition-all duration-300 px-xs py-base ${
                isActive ? 'text-pure-white border-b-2 border-primary-container pb-2' : 'text-silver-mist hover:text-pure-white'
              }`
            } 
            to="/accessories"
          >
            {t('accessories')}
          </NavLink>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-md">
          <Link to="/collection" className="hidden lg:block font-label-caps text-label-caps text-pure-white bg-primary-container px-[24px] py-[12px] rounded-lg hover:bg-inverse-primary transition-all duration-300">
            {t('shopNow')}
          </Link>
          
          {/* Language Switcher Button */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="w-10 h-10 rounded-full bg-deep-slate hover:bg-surface-bright flex items-center justify-center text-silver-mist hover:text-pure-white font-label-caps text-[11px] font-bold tracking-wider transition-all duration-300 border border-white/5 hover:border-white/25"
              aria-label="Change Language"
            >
              {language}
            </button>
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-surface-container-high border border-white/10 rounded-lg shadow-2xl py-1 z-50 animate-fadeIn">
                {[
                  { code: 'EN', label: 'English' },
                  { code: 'KO', label: '한국어' }
                ].map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-md py-xs font-body-sm text-[13px] hover:bg-surface-bright transition-colors ${
                      language === lang.code ? 'text-primary-container font-semibold' : 'text-silver-mist'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart Button */}
          <Link 
            to="/cart" 
            className="w-10 h-10 rounded-full bg-deep-slate hover:bg-surface-bright flex items-center justify-center text-silver-mist hover:text-pure-white transition-all duration-300 border border-white/5 hover:border-white/25"
            aria-label="Shopping Bag"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </Link>
          
          {/* Profile Button */}
          <Link 
            to="/register" 
            className="w-10 h-10 rounded-full bg-deep-slate hover:bg-surface-bright flex items-center justify-center text-silver-mist hover:text-pure-white transition-all duration-300 border border-white/5 hover:border-white/25 hidden sm:flex"
            aria-label="Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-deep-slate hover:bg-surface-bright flex items-center justify-center text-silver-mist hover:text-pure-white transition-all duration-300 border border-white/5 hover:border-white/25 md:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" x2="6" y1="6" y2="18"/>
                <line x1="6" x2="18" y1="6" y2="18"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-pitch-black/95 border-b border-surface-container-high absolute top-20 left-0 w-full flex flex-col space-y-md p-md z-40">
          <NavLink 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => 
              `font-label-caps text-[16px] leading-none tracking-[0.1em] font-semibold py-2 ${isActive ? 'text-primary-container font-bold' : 'text-silver-mist'}`
            } 
            to="/"
          >
            {t('home')}
          </NavLink>
          <NavLink 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => 
              `font-label-caps text-[16px] leading-none tracking-[0.1em] font-semibold py-2 ${isActive ? 'text-primary-container font-bold' : 'text-silver-mist'}`
            } 
            to="/collection"
          >
            {t('bags')}
          </NavLink>
          <NavLink 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => 
              `font-label-caps text-[16px] leading-none tracking-[0.1em] font-semibold py-2 ${isActive ? 'text-primary-container font-bold' : 'text-silver-mist'}`
            } 
            to="/shoes"
          >
            {t('shoes')}
          </NavLink>
          <NavLink 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => 
              `font-label-caps text-[16px] leading-none tracking-[0.1em] font-semibold py-2 ${isActive ? 'text-primary-container font-bold' : 'text-silver-mist'}`
            } 
            to="/accessories"
          >
            {t('accessories')}
          </NavLink>
          <Link 
            onClick={() => setMobileMenuOpen(false)}
            className="font-label-caps text-[16px] leading-none tracking-[0.1em] font-semibold text-silver-mist py-2"
            to="/register"
          >
            {t('account')}
          </Link>
        </div>
      )}
    </nav>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-pitch-black border-t border-deep-slate full-width py-xl mt-xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg px-container-margin max-w-[1440px] mx-auto">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <Link className="font-display-xl text-display-xl text-pure-white block mb-md tracking-tighter" to="/">
            NOIR LUXE
          </Link>
          <p className="font-body-sm text-body-sm text-silver-mist mb-md max-w-xs">
            Elevating the everyday through minimalist design and cinematic luxury.
          </p>
        </div>
        {/* Links Columns */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-md">
          <div>
            <h4 className="font-label-caps text-label-caps text-pure-white mb-md">Company</h4>
            <ul className="space-y-sm">
              <li>
                <a className="font-body-sm text-body-sm text-silver-mist hover:text-primary transition-colors cursor-pointer block" href="#">
                  Brand Story
                </a>
              </li>
              <li>
                <a className="font-body-sm text-body-sm text-silver-mist hover:text-primary transition-colors cursor-pointer block" href="#">
                  Sustainability
                </a>
              </li>
              <li>
                <a className="font-body-sm text-body-sm text-silver-mist hover:text-primary transition-colors cursor-pointer block" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-pure-white mb-md">Support</h4>
            <ul className="space-y-sm">
              <li>
                <a className="font-body-sm text-body-sm text-silver-mist hover:text-primary transition-colors cursor-pointer block" href="#">
                  Legal
                </a>
              </li>
              <li>
                <a className="font-body-sm text-body-sm text-silver-mist hover:text-primary transition-colors cursor-pointer block" href="#">
                  Store Locator
                </a>
              </li>
              <li>
                <a className="font-body-sm text-body-sm text-silver-mist hover:text-primary transition-colors cursor-pointer block" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Newsletter Column */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-label-caps text-label-caps text-pure-white mb-md">Join the Stage</h4>
          <p className="font-body-sm text-body-sm text-silver-mist mb-sm">
            Exclusive access to new collections and events.
          </p>
          <form className="flex mt-sm border-b border-pure-white pb-2 relative" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-transparent border-none p-0 flex-1 font-body-sm text-pure-white placeholder-silver-mist focus:ring-0 focus:outline-none w-full"
              placeholder="Email Address"
              type="email"
            />
            <button className="text-pure-white hover:text-primary-container transition-colors absolute right-0" type="submit">
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
      <div className="px-container-margin max-w-[1440px] mx-auto mt-xl pt-lg border-t border-surface-container-high flex flex-col md:flex-row justify-between items-center gap-sm">
        <p className="font-body-sm text-body-sm text-silver-mist">© 2003 NOIR LUXE. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-md">
          <a className="text-silver-mist hover:text-pure-white transition-colors" href="#">Instagram</a>
          <a className="text-silver-mist hover:text-pure-white transition-colors" href="#">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

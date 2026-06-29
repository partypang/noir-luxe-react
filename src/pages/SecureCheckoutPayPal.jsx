import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

export default function SecureCheckoutPayPal() {
  const location = useLocation()
  const navigate = useNavigate()
  
  // Get amount from cart or use default
  const baseAmount = location.state?.amount || 2450
  const tax = baseAmount * 0.0875
  const total = baseAmount + tax

  return (
    <div className="bg-[#222326] min-h-screen flex flex-col text-on-surface">
      {/* Transactional Header */}
      <header className="w-full py-md px-container-margin flex justify-center items-center bg-pitch-black border-b border-deep-slate z-50">
        <Link className="font-display-lg text-[38px] text-pure-white tracking-tighter" to="/">
          NOIR LUXE
        </Link>
      </header>

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-container-margin py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg lg:gap-xl">
          {/* Left Side: Checkout Form & PayPal Button */}
          <div className="lg:col-span-7 space-y-xl">
            {/* Section 1: Contact */}
            <section className="space-y-md">
              <div className="flex justify-between items-end border-b border-deep-slate pb-xs">
                <h2 className="font-headline-md text-headline-md text-pure-white">Contact Information</h2>
                <span className="font-body-sm text-body-sm text-silver-mist">
                  Already have an account? <Link className="text-pure-white underline hover:text-primary-container transition-colors" to="/register">Log in</Link>
                </span>
              </div>
              <div className="space-y-sm">
                <input 
                  name="email"
                  className="w-full bg-transparent border-0 border-b border-pure-white rounded-none py-3 px-0 text-pure-white font-body-md text-body-md focus:ring-0 focus:border-b-2 focus:border-pure-white transition-all duration-300" 
                  placeholder="Email Address" 
                  defaultValue="customer@example.com"
                  required 
                  type="email"
                />
              </div>
            </section>

            {/* Section 2: Shipping */}
            <section className="space-y-md">
              <h2 className="font-headline-md text-headline-md text-pure-white border-b border-deep-slate pb-xs">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <input 
                  className="w-full bg-transparent border-0 border-b border-pure-white rounded-none py-3 px-0 text-pure-white font-body-md text-body-md focus:ring-0 focus:border-b-2 focus:border-pure-white transition-all duration-300" 
                  placeholder="First Name" 
                  defaultValue="Elena"
                  required 
                  type="text"
                />
                <input 
                  className="w-full bg-transparent border-0 border-b border-pure-white rounded-none py-3 px-0 text-pure-white font-body-md text-body-md focus:ring-0 focus:border-b-2 focus:border-pure-white transition-all duration-300" 
                  placeholder="Last Name" 
                  defaultValue="Althaus"
                  required 
                  type="text"
                />
              </div>
              <input 
                className="w-full bg-transparent border-0 border-b border-pure-white rounded-none py-3 px-0 text-pure-white font-body-md text-body-md focus:ring-0 focus:border-b-2 focus:border-pure-white transition-all duration-300" 
                placeholder="Street Address" 
                defaultValue="1420 Luxury Lane, Apt 4B"
                required 
                type="text"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                <input 
                  className="w-full bg-transparent border-0 border-b border-pure-white rounded-none py-3 px-0 text-pure-white font-body-md text-body-md focus:ring-0 focus:border-b-2 focus:border-pure-white transition-all duration-300" 
                  placeholder="City" 
                  defaultValue="Beverly Hills"
                  required 
                  type="text"
                />
                <select 
                  className="w-full bg-transparent border-0 border-b border-pure-white rounded-none py-3 px-0 text-pure-white font-body-md text-body-md focus:ring-0 focus:border-b-2 focus:border-pure-white transition-all duration-300" 
                  defaultValue="CA"
                  required
                >
                  <option className="text-pitch-black" value="CA">California</option>
                  <option className="text-pitch-black" value="NY">New York</option>
                  <option className="text-pitch-black" value="TX">Texas</option>
                </select>
                <input 
                  className="w-full bg-transparent border-0 border-b border-pure-white rounded-none py-3 px-0 text-pure-white font-body-md text-body-md focus:ring-0 focus:border-b-2 focus:border-pure-white transition-all duration-300" 
                  placeholder="ZIP Code" 
                  defaultValue="90210"
                  required 
                  type="text"
                />
              </div>
            </section>

            {/* Section 3: Payment via Real PayPal Buttons */}
            <section className="space-y-md">
              <h2 className="font-headline-md text-headline-md text-pure-white border-b border-deep-slate pb-xs">Payment</h2>
              <div className="bg-surface-container-low border border-deep-slate rounded-lg p-md space-y-md">
                <p className="font-body-sm text-body-sm text-silver-mist text-center mb-md">
                  아래의 안전한 PayPal 버튼을 사용하여 결제를 완료하십시오.
                </p>
                
                {/* Real PayPal Integration */}
                <PayPalScriptProvider options={{ clientId: 'test', currency: 'USD' }}>
                  <div className="relative z-10 w-full max-w-md mx-auto">
                    <PayPalButtons 
                      style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'checkout' }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: total.toFixed(2)
                              }
                            }
                          ]
                        })
                      }}
                      onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                          // Save order to localStorage
                          const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]')
                          const newOrder = {
                            id: 'NL-' + Math.floor(100000 + Math.random() * 900000),
                            date: new Date().toLocaleDateString('ko-KR'),
                            customer: details.payer.name.given_name + ' ' + details.payer.name.surname,
                            email: details.payer.email_address,
                            total: total,
                            status: '배송 완료',
                            items: [
                              { name: 'The Obsidian Tote (옵시디언 토트백)', price: 2450, quantity: Math.round(baseAmount / 2450) }
                            ]
                          }
                          localStorage.setItem('orders', JSON.stringify([newOrder, ...existingOrders]))
                          
                          alert(`결제가 완료되었습니다! 감사합니다, ${details.payer.name.given_name}님.`);
                          navigate('/admin')
                        })
                      }}
                      onError={(err) => {
                        console.error('PayPal Checkout Error:', err)
                        alert('결제 중 오류가 발생했습니다. 다시 시도해 주세요.')
                      }}
                    />
                  </div>
                </PayPalScriptProvider>
              </div>
            </section>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-deep-slate rounded-xl p-md lg:p-lg sticky top-xs shadow-2xl">
              <h2 className="font-headline-lg text-headline-lg text-pure-white mb-md">Order Summary</h2>
              {/* Item */}
              <div className="flex items-center space-x-md pb-md border-b border-surface-variant">
                <div className="w-24 h-32 bg-pitch-black rounded-lg overflow-hidden flex-shrink-0 relative">
                  <div 
                    className="bg-cover bg-center w-full h-full absolute inset-0 mix-blend-luminosity opacity-80" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIFnHXUPp_vid2voCmu3jxoka8IVzgyX12rc9RX4Bbt6S8xZ1h4gMue7YdfSl1_m2nFKg4ABtBNJIpYNFAiCxHxr-Tmbth4gOSWuYMnPyDWHUqP5TzwdbEkpTbMe6ufR6b5Y5NGDBBtIpZy3qKQyktPntRvmRIi-5lhfYEjaRrsU1jxErQiW7NFu0C0WkMrZ47R7SJZFCTsRNu7N_2BiHgJusIvXzUYnUIbqlhRy23ziL6efgm2WqX0sG0b0HBygprScbhzsmo3LRV')" }}
                  ></div>
                </div>
                <div className="flex-grow flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-body-lg text-body-lg text-pure-white mb-base">The Obsidian Tote</h3>
                    <p className="font-body-sm text-body-sm text-silver-mist">Color: Pitch Black</p>
                    <p className="font-body-sm text-body-sm text-silver-mist">Qty: {Math.round(baseAmount / 2450)}</p>
                  </div>
                  <p className="font-body-md text-body-md text-pure-white font-semibold mt-auto">${baseAmount.toLocaleString()}.00</p>
                </div>
              </div>
              {/* Calculations */}
              <div className="space-y-sm py-md border-b border-surface-variant font-body-sm text-body-sm text-silver-mist">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-pure-white">${baseAmount.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-pure-white">Complimentary Express</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="text-pure-white">${tax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
              </div>
              {/* Total */}
              <div className="flex justify-between items-end pt-md">
                <span className="font-body-lg text-body-lg text-pure-white">Total</span>
                <div className="text-right">
                  <span className="font-body-sm text-body-sm text-silver-mist block mb-1">USD</span>
                  <span className="font-headline-lg text-headline-lg text-pure-white">${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-pitch-black py-xl mt-xl border-t border-deep-slate">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-lg px-container-margin max-w-[1440px] mx-auto">
          <div className="md:col-span-4 mb-md">
            <span className="font-display-xl text-display-xl text-pure-white">NOIR LUXE</span>
          </div>
          <div className="flex flex-col space-y-sm">
            <a className="font-body-sm text-body-sm text-silver-mist hover:text-primary transition-colors cursor-pointer" href="#">Brand Story</a>
            <a className="font-body-sm text-body-sm text-silver-mist hover:text-primary transition-colors cursor-pointer" href="#">Sustainability</a>
          </div>
          <div className="flex flex-col space-y-sm">
            <a className="font-body-sm text-body-sm text-silver-mist hover:text-primary transition-colors cursor-pointer" href="#">Legal</a>
            <a className="font-body-sm text-body-sm text-silver-mist hover:text-primary transition-colors cursor-pointer" href="#">Store Locator</a>
          </div>
          <div className="flex flex-col space-y-sm">
            <a className="font-body-sm text-body-sm text-silver-mist hover:text-primary transition-colors cursor-pointer" href="#">Contact</a>
          </div>
          <div className="md:col-span-4 mt-lg pt-md border-t border-surface-variant">
            <p className="font-body-sm text-body-sm text-silver-mist">© 2003 NOIR LUXE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

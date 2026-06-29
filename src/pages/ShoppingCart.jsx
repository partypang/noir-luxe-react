import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ShoppingCart() {
  const [quantity, setQuantity] = useState(1)
  const price = 2450

  const handleIncrease = () => setQuantity(quantity + 1)
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const subtotal = price * quantity

  return (
    <div className="bg-pitch-black min-h-screen flex flex-col text-on-surface">
      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-container-margin py-xl pt-[120px]">
        <h1 className="font-display-xl text-display-xl mb-xl tracking-tighter">YOUR CART</h1>
        {quantity > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl relative">
            {/* Left Column: Items */}
            <div className="lg:col-span-8 flex flex-col gap-xl">
              {/* Cart Item */}
              <div className="flex flex-col sm:flex-row gap-lg border-b border-pure-white/10 pb-lg">
                <div className="w-full sm:w-[240px] h-[320px] shrink-0 bg-surface-container rounded">
                  <img 
                    alt="The Obsidian Tote" 
                    className="w-full h-full object-cover rounded shadow-none filter grayscale contrast-125" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2AKP01BnYefBLeC9yx1SXxB2Pg97kp9xXEN7iTvwc0ukZcQmHOlx6pMb9AwLn1PxoGV_RxX9ri2monzZuok7RIAjM58A9NXIjk24iJcx_fNJ7boMHqW1b6q5zz8XwmR2gEv8rcWMZlzVNq-cjSvBGAirR2RLSCX9irMvidPXrWNxBXOliXpMIIT9E-lURHMQy6IroEI1Ta8OYEdRzUuqF-DQVvD1nmP4nAUBWY3ukoqZIB2j2JmwQyrUvgCYkfoeXPzTht7cYOcST" 
                  />
                </div>
                <div className="flex flex-col flex-grow justify-between py-sm">
                  <div className="flex justify-between items-start gap-md">
                    <div>
                      <h2 className="font-display-xl text-[40px] leading-none mb-xs tracking-tighter uppercase">The Obsidian Tote</h2>
                      <p className="font-label-caps text-label-caps text-silver-mist">PITCH BLACK</p>
                    </div>
                    <p className="font-headline-md text-headline-md">${price.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between items-end mt-lg">
                    <div className="flex items-center gap-md border border-pure-white/20 rounded px-sm py-xs">
                      <button onClick={handleDecrease} className="text-silver-mist hover:text-pure-white transition-colors">
                        <span className="material-symbols-outlined text-[18px]">remove</span>
                      </button>
                      <span className="font-body-md w-xs text-center">{quantity}</span>
                      <button onClick={handleIncrease} className="text-silver-mist hover:text-pure-white transition-colors">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                      </button>
                    </div>
                    <button 
                      onClick={() => setQuantity(0)} 
                      className="font-label-caps text-label-caps text-silver-mist hover:text-error transition-colors border-b border-transparent hover:border-error pb-[2px]"
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Summary Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-deep-slate rounded-lg p-xl sticky top-[120px] border border-pure-white/5">
                <h3 className="font-headline-lg text-headline-lg mb-lg border-b border-pure-white/10 pb-sm">ORDER SUMMARY</h3>
                <div className="flex flex-col gap-sm mb-lg border-b border-pure-white/10 pb-md">
                  <div className="flex justify-between font-body-md text-silver-mist">
                    <span>Subtotal</span>
                    <span className="text-pure-white">${subtotal.toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between font-body-md text-silver-mist">
                    <span>Shipping</span>
                    <span className="text-pure-white">Complimentary</span>
                  </div>
                  <div className="flex justify-between font-body-md text-silver-mist">
                    <span>Estimated Tax</span>
                    <span className="text-pure-white">Calculated at checkout</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-xl">
                  <span className="font-headline-md text-headline-md uppercase tracking-wide">Total</span>
                  <span className="font-display-xl text-[48px] leading-none tracking-tighter">${subtotal.toLocaleString()}</span>
                </div>
                <Link 
                  to="/checkout"
                  state={{ amount: subtotal }}
                  className="w-full bg-primary-container text-on-primary-container font-label-caps text-label-caps py-md px-md rounded-lg hover:bg-inverse-primary transition-colors duration-300 active:scale-[0.98] flex items-center justify-center gap-xs"
                >
                  PROCEED TO CHECKOUT
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
                <p className="font-body-sm text-body-sm text-silver-mist mt-md text-center opacity-70">
                  Secure encrypted payment.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-2xl">
            <h2 className="font-headline-lg text-pure-white mb-md">Your Cart is Empty</h2>
            <p className="font-body-md text-silver-mist mb-xl">Add some premium items to your collection.</p>
            <Link to="/collection" className="font-label-caps text-label-caps text-pure-white bg-primary-container px-[32px] py-[16px] rounded-lg hover:bg-inverse-primary transition-all duration-300">
              Go to Bags Collection
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}

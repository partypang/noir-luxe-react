import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

function loadCartItems() {
  try {
    return JSON.parse(localStorage.getItem('cart_items') || '[]')
  } catch {
    return []
  }
}

export default function ShoppingCart() {
  const { t } = useLanguage()
  const [cartItems, setCartItems] = useState(loadCartItems)

  const persistCart = (nextItems) => {
    setCartItems(nextItems)
    localStorage.setItem('cart_items', JSON.stringify(nextItems))
  }

  const handleIncrease = (id) => {
    persistCart(cartItems.map(item => (
      item.id === id ? { ...item, quantity: Number(item.quantity || 1) + 1 } : item
    )))
  }

  const handleDecrease = (id) => {
    persistCart(cartItems.flatMap(item => {
      if (item.id !== id) return [item]

      const nextQuantity = Number(item.quantity || 1) - 1
      return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : []
    }))
  }

  const handleRemove = (id) => {
    persistCart(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => (
    sum + Number(item.price || 0) * Number(item.quantity || 1)
  ), 0)

  return (
    <div className="bg-pitch-black min-h-screen flex flex-col text-on-surface">
      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-container-margin py-xl pt-[120px]">
        <h1 className="font-display-xl text-display-xl mb-xl tracking-tighter">{t('yourCart')}</h1>
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl relative">
            {/* Left Column: Items */}
            <div className="lg:col-span-8 flex flex-col gap-xl">
              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-lg border-b border-pure-white/10 pb-lg">
                  <div className="w-full sm:w-[240px] h-[320px] shrink-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.12),transparent_34%),linear-gradient(145deg,#141519,#030303)] rounded flex items-center justify-center overflow-hidden">
                    {item.image ? (
                      <img
                        alt={item.name}
                        className="w-full h-full object-contain p-sm rounded shadow-none"
                        src={item.image}
                      />
                    ) : (
                      <div className="px-md text-center font-label-caps text-label-caps text-silver-mist">
                        {item.name}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col flex-grow justify-between py-sm">
                    <div className="flex justify-between items-start gap-md">
                      <div>
                        <h2 className="font-display-xl text-[32px] sm:text-[40px] leading-none mb-xs tracking-tighter uppercase">{item.name}</h2>
                        <p className="font-label-caps text-label-caps text-silver-mist">{item.color || item.category}</p>
                      </div>
                      <p className="font-headline-md text-headline-md">${Number(item.price || 0).toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between items-end mt-lg">
                      <div className="flex items-center gap-md border border-pure-white/20 rounded px-sm py-xs">
                        <button onClick={() => handleDecrease(item.id)} className="text-silver-mist hover:text-pure-white transition-colors">
                          <span className="material-symbols-outlined text-[18px]">remove</span>
                        </button>
                        <span className="font-body-md w-xs text-center">{Number(item.quantity || 1)}</span>
                        <button onClick={() => handleIncrease(item.id)} className="text-silver-mist hover:text-pure-white transition-colors">
                          <span className="material-symbols-outlined text-[18px]">add</span>
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="font-label-caps text-label-caps text-silver-mist hover:text-error transition-colors border-b border-transparent hover:border-error pb-[2px]"
                      >
                        {t('remove')}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Summary Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-deep-slate rounded-lg p-xl sticky top-[120px] border border-pure-white/5">
                <h3 className="font-headline-lg text-headline-lg mb-lg border-b border-pure-white/10 pb-sm">{t('orderSummary')}</h3>
                <div className="flex flex-col gap-sm mb-lg border-b border-pure-white/10 pb-md">
                  <div className="flex justify-between font-body-md text-silver-mist">
                    <span>{t('subtotal')}</span>
                    <span className="text-pure-white">${subtotal.toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between font-body-md text-silver-mist">
                    <span>{t('shipping')}</span>
                    <span className="text-pure-white">{t('complimentary')}</span>
                  </div>
                  <div className="flex justify-between font-body-md text-silver-mist">
                    <span>{t('tax')}</span>
                    <span className="text-pure-white">{t('calculatedCheckout')}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-xl">
                  <span className="font-headline-md text-headline-md uppercase tracking-wide">{t('total')}</span>
                  <span className="font-display-xl text-[48px] leading-none tracking-tighter">${subtotal.toLocaleString()}</span>
                </div>
                <Link 
                  to="/checkout"
                  state={{ amount: subtotal }}
                  className="w-full bg-primary-container text-on-primary-container font-label-caps text-label-caps py-md px-md rounded-lg hover:bg-inverse-primary transition-colors duration-300 active:scale-[0.98] flex items-center justify-center gap-xs"
                >
                  {t('checkoutBtn')}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
                <p className="font-body-sm text-body-sm text-silver-mist mt-md text-center opacity-70">
                  {t('securePay')}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-2xl">
            <h2 className="font-headline-lg text-pure-white mb-md">{t('cartEmpty')}</h2>
            <p className="font-body-md text-silver-mist mb-xl">{t('cartEmptyDesc')}</p>
            <Link to="/shoes" className="font-label-caps text-label-caps text-pure-white bg-primary-container px-[32px] py-[16px] rounded-lg hover:bg-inverse-primary transition-all duration-300">
              {t('goToShoes')}
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}

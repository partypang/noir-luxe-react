import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const PRODUCT = {
  id: 'hermes-birkin-25-black-swift',
  name: 'Hermes Birkin 25 Black Swift',
  fullName: 'Hermes Black Swift Birkin 25 Palladium Hardware',
  price: 16000,
  color: 'Black',
  material: 'Swift Leather',
  hardware: 'Palladium Hardware',
  year: '2022',
  image: '/products/hermes-birkin-25-black/hero.jpeg',
  gallery: [
    '/products/hermes-birkin-25-black/hero.jpeg',
    '/products/hermes-birkin-25-black/detail.jpeg',
    '/products/hermes-birkin-25-black/red-light.jpeg',
    '/products/hermes-birkin-25-black/stage.jpeg',
  ],
}

export default function HermesBirkin25Detail() {
  const navigate = useNavigate()
  const { language, t } = useLanguage()
  const [activeImage, setActiveImage] = useState(PRODUCT.gallery[0])
  const materialLabel = language === 'KO' ? '스위프트 가죽' : PRODUCT.material
  const hardwareLabel = language === 'KO' ? '팔라듐 하드웨어' : PRODUCT.hardware
  const colorLabel = language === 'KO' ? '블랙' : PRODUCT.color

  const addToCart = () => {
    const existingItems = JSON.parse(localStorage.getItem('cart_items') || '[]')
    const existingItem = existingItems.find(item => item.id === PRODUCT.id)

    const nextItems = existingItem
      ? existingItems.map(item => (
          item.id === PRODUCT.id ? { ...item, quantity: Number(item.quantity || 1) + 1 } : item
        ))
      : [
          ...existingItems,
          {
            id: PRODUCT.id,
            name: PRODUCT.name,
            price: PRODUCT.price,
            image: PRODUCT.image,
            color: PRODUCT.color,
            category: 'Bags',
            quantity: 1,
          },
        ]

    localStorage.setItem('cart_items', JSON.stringify(nextItems))
    navigate('/cart')
  }

  return (
    <div className="bg-pitch-black min-h-screen text-on-surface">
      <main className="max-w-[1440px] mx-auto px-container-margin pt-[120px] pb-2xl">
        <Link to="/collection" className="inline-flex items-center gap-xs font-label-caps text-label-caps text-silver-mist hover:text-pure-white transition-colors mb-lg">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          {t('backToBags')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <section className="lg:col-span-7">
            <div className="aspect-square bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.12),transparent_34%),linear-gradient(145deg,#15161a,#030303)] rounded-lg overflow-hidden border border-pure-white/10">
              <img
                src={activeImage}
                alt={PRODUCT.fullName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-sm mt-sm">
              {PRODUCT.gallery.map(image => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`aspect-square rounded-md overflow-hidden border transition-colors ${
                    activeImage === image ? 'border-primary-container' : 'border-pure-white/10 hover:border-pure-white/40'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </section>

          <section className="lg:col-span-5 flex flex-col justify-center">
            <p className="font-label-caps text-label-caps text-primary-container tracking-[0.2em] mb-sm">{t('curatedIcon')}</p>
            <h1 className="font-display-xl text-[56px] md:text-[72px] leading-none text-pure-white tracking-tight mb-md">
              {t('birkinTitle')}
            </h1>
            <p className="font-body-lg text-body-lg text-silver-mist mb-lg">
              {t('birkinDesc')}
            </p>

            <div className="grid grid-cols-2 gap-sm mb-lg">
              <div className="border border-pure-white/10 rounded-md p-md">
                <p className="font-label-caps text-label-caps text-silver-mist mb-xs">{t('material')}</p>
                <p className="font-body-md text-pure-white">{materialLabel}</p>
              </div>
              <div className="border border-pure-white/10 rounded-md p-md">
                <p className="font-label-caps text-label-caps text-silver-mist mb-xs">{t('hardware')}</p>
                <p className="font-body-md text-pure-white">{hardwareLabel}</p>
              </div>
              <div className="border border-pure-white/10 rounded-md p-md">
                <p className="font-label-caps text-label-caps text-silver-mist mb-xs">{t('color')}</p>
                <p className="font-body-md text-pure-white">{colorLabel}</p>
              </div>
              <div className="border border-pure-white/10 rounded-md p-md">
                <p className="font-label-caps text-label-caps text-silver-mist mb-xs">{t('year')}</p>
                <p className="font-body-md text-pure-white">{PRODUCT.year}</p>
              </div>
            </div>

            <div className="flex items-end justify-between gap-md border-t border-pure-white/10 pt-lg mb-lg">
              <div>
                <p className="font-label-caps text-label-caps text-silver-mist mb-xs">{t('price')}</p>
                <p className="font-display-xl text-[48px] leading-none text-pure-white">${PRODUCT.price.toLocaleString()}</p>
              </div>
              <button
                type="button"
                onClick={addToCart}
                className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-lg py-md rounded-lg hover:bg-inverse-primary transition-colors flex items-center gap-xs"
              >
                {t('addBag')}
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              </button>
            </div>

            <div className="space-y-sm text-silver-mist font-body-md text-body-md">
              <p>{t('swiftNote')}</p>
              <p>{t('palladiumNote')}</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

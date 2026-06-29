import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const ACCESSORY_PRODUCTS = []

const COLOR_SWATCHES = {
  Black: 'bg-pitch-black',
  Gold: 'bg-[#d6b35a]',
  Silver: 'bg-[#c0c0c0]',
  Burgundy: 'bg-[#800000]',
  Ivory: 'bg-[#f8f1e7]',
}

export default function AccessoriesCollection() {
  const { t } = useLanguage()
  const [productsList, setProductsList] = useState(ACCESSORY_PRODUCTS)
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedColor, setSelectedColor] = useState(null)
  const [sortBy, setSortBy] = useState('newest')

  useEffect(() => {
    const custom = JSON.parse(localStorage.getItem('custom_products') || '[]')
    const filteredCustom = custom.filter((product) => product.category === 'Accessories')
    setProductsList([...filteredCustom, ...ACCESSORY_PRODUCTS])
  }, [])

  const materialOptions = useMemo(() => {
    return [...new Set(productsList.map((product) => product.material).filter(Boolean))]
  }, [productsList])

  const colorOptions = useMemo(() => {
    return [...new Set(productsList.map((product) => product.color).filter(Boolean))]
  }, [productsList])

  const handleMaterialChange = (material) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(selectedMaterials.filter((item) => item !== material))
    } else {
      setSelectedMaterials([...selectedMaterials, material])
    }
  }

  const clearFilters = () => {
    setSelectedMaterials([])
    setSelectedColor(null)
  }

  const filteredProducts = productsList
    .filter((product) => {
      const matchesMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(product.material)
      const matchesColor = !selectedColor || product.color === selectedColor
      return matchesMaterial && matchesColor
    })
    .sort((a, b) => {
      if (sortBy === 'price_high') return b.price - a.price
      if (sortBy === 'price_low') return a.price - b.price
      return 0
    })

  return (
    <div className="bg-[#222326] min-h-screen flex flex-col text-on-surface">
      <main className="flex-grow pt-[120px] pb-xl px-container-margin max-w-[1440px] mx-auto w-full">
        <header className="mb-xl text-center md:text-left">
          <p className="font-label-caps text-label-caps text-primary-container mb-sm tracking-[0.2em]">{t('accessoriesEyebrow')}</p>
          <h1 className="font-display-xl text-display-xl text-pure-white mb-sm">{t('accessoriesTitle')}</h1>
          <p className="font-body-lg text-body-lg text-silver-mist max-w-2xl">
            {t('accessoriesDesc')}
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-lg">
          <aside className="w-full md:w-64 flex-shrink-0 bg-graphite-base p-md rounded-lg h-fit border border-surface-container-high">
            <div className="flex justify-between items-center mb-md pb-sm border-b border-surface-container-high">
              <h3 className="font-label-caps text-label-caps text-pure-white">{t('filters')}</h3>
              <button onClick={clearFilters} className="text-silver-mist hover:text-pure-white font-body-sm text-body-sm transition-colors">
                {t('clearAll')}
              </button>
            </div>

            <div className="mb-lg">
              <h4 className="font-body-md text-body-md text-pure-white mb-sm flex justify-between items-center cursor-pointer group">
                {t('material')}
                <span className="material-symbols-outlined text-silver-mist group-hover:text-pure-white transition-colors">expand_more</span>
              </h4>
              {materialOptions.length > 0 ? (
                <div className="space-y-sm">
                  {materialOptions.map((material) => (
                    <label key={material} className="flex items-center gap-sm cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(material)}
                        onChange={() => handleMaterialChange(material)}
                        className="form-checkbox bg-transparent border-silver-mist text-secondary-fixed-dim focus:ring-secondary-fixed-dim focus:ring-offset-0 focus:ring-offset-transparent rounded-sm w-4 h-4 transition-colors"
                      />
                      <span className="font-body-sm text-body-sm text-silver-mist group-hover:text-pure-white transition-colors">{material}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <p className="font-body-sm text-body-sm text-silver-mist">{t('noMaterialsYet')}</p>
              )}
            </div>

            <div className="mb-lg">
              <h4 className="font-body-md text-body-md text-pure-white mb-sm flex justify-between items-center cursor-pointer group">
                {t('color')}
                <span className="material-symbols-outlined text-silver-mist group-hover:text-pure-white transition-colors">expand_more</span>
              </h4>
              {colorOptions.length > 0 ? (
                <div className="flex flex-wrap gap-sm">
                  {colorOptions.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(selectedColor === color ? null : color)}
                      aria-label={color}
                      className={`w-8 h-8 rounded-full border ${COLOR_SWATCHES[color] || 'bg-silver-mist'} ${
                        selectedColor === color ? 'border-pure-white ring-2 ring-pure-white' : 'border-surface-container-high'
                      } focus:outline-none`}
                    />
                  ))}
                </div>
              ) : (
                <p className="font-body-sm text-body-sm text-silver-mist">{t('noColorsYet')}</p>
              )}
            </div>
          </aside>

          <div className="flex-grow">
            <div className="flex justify-between items-center mb-md">
              <span className="font-body-sm text-body-sm text-silver-mist">{t('showingResults', { count: filteredProducts.length })}</span>
              <div className="flex items-center gap-sm">
                <span className="font-body-sm text-body-sm text-silver-mist">{t('sortBy')}</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="bg-transparent border-none text-pure-white font-body-sm focus:ring-0 py-0 cursor-pointer"
                >
                  <option className="bg-graphite-base text-pure-white" value="newest">{t('newest')}</option>
                  <option className="bg-graphite-base text-pure-white" value="price_high">{t('priceHigh')}</option>
                  <option className="bg-graphite-base text-pure-white" value="price_low">{t('priceLow')}</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
                {filteredProducts.map((product) => {
                  const detailPath = product.detailPath || `/product/${product.id}`

                  return (
                  <div key={product.id} className="bg-deep-slate rounded-lg p-sm group relative flex flex-col h-full border border-transparent hover:border-surface-container-high transition-all">
                    <Link to={detailPath} className="relative aspect-[4/5] mb-md overflow-hidden rounded-md bg-pitch-black flex items-center justify-center">
                      <img
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
                        alt={product.name}
                        src={product.image}
                      />
                      {product.tag && (
                        <div className="absolute top-sm left-sm bg-pure-white text-pitch-black font-label-caps text-label-caps px-2 py-1 rounded-sm">
                          {product.tag}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-pitch-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-sm">
                        <span className="w-[90%] bg-primary-container text-pure-white font-label-caps text-label-caps py-sm rounded-lg hover:bg-inverse-primary transition-colors flex justify-center items-center gap-xs">
                          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                          {t('viewDetails')}
                        </span>
                      </div>
                    </Link>
                    <div className="mt-auto">
                      <Link to={detailPath} className="block font-headline-md text-headline-md text-pure-white mb-xs truncate hover:text-primary-container transition-colors">
                        {product.name}
                      </Link>
                      <p className="font-body-sm text-body-sm text-silver-mist mb-sm truncate">{product.description}</p>
                      <div className="font-body-lg text-body-lg text-pure-white">${Number(product.price).toLocaleString()}</div>
                    </div>
                  </div>
                )})}
              </div>
            ) : (
              <div className="min-h-[360px] rounded-lg border border-surface-container-high bg-deep-slate flex flex-col items-center justify-center text-center px-lg">
                <span className="material-symbols-outlined text-primary-container text-[42px] mb-sm">diamond</span>
                <h2 className="font-headline-lg text-headline-lg text-pure-white mb-xs">{t('accessoriesEmptyTitle')}</h2>
                <p className="font-body-md text-body-md text-silver-mist max-w-xl">
                  {t('accessoriesEmptyDesc')}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

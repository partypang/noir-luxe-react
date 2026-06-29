import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const PRODUCTS = [
  {
    id: 'hermes-birkin-25-black-swift',
    name: 'Hermes Birkin 25 Black Swift',
    material: 'Swift Leather',
    color: 'Black',
    price: 16000,
    tag: 'CURATED',
    image: '/products/hermes-birkin-25-black/hero.jpeg',
    detailPath: '/product/hermes-birkin-25-black-swift',
    description: 'Black Swift Leather, Palladium Hardware',
    descriptionKo: '블랙 스위프트 가죽, 팔라듐 하드웨어'
  },
  {
    id: 'obsidian-tote',
    name: 'The Obsidian Tote',
    material: 'Calfskin Leather',
    color: 'Black',
    price: 2450,
    tag: 'NEW',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeSr5byowDPtiESLaor8QeqmLNF9X-PAYhbXO2Xd2OSN5cBeM1QHE-9z0EhyxABMFPPay60bEbvJU6-1mWxNS1h6iWN5T7OSrxi2rHeSh-tIoz1b-bBJq0ltAcgQ5u04ieGA-hM2SdjgAw2ovWDLR-H1dHWNy9bbpKjvadSKIOzLxmaXtf-B9Hze6B-pF-6S5f5zw0vbDLyj1aYR-Hacj1ReqVXIaLm2Suung2jAqDEjZe1wpvdppIU5NG4o5XhxHvwGwLd3mGCwSR',
    detailPath: '/product/obsidian-tote',
    description: 'Smooth Calfskin, Silver Hardware'
  },
  {
    id: 'architect-crossbody',
    name: 'Architect Crossbody',
    material: 'Suede',
    color: 'Burgundy',
    price: 1890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX0cWb44hw9cENIMVzjcb9CoV6pENt7AMRXDCf3aoIjMeSTToNA7mURawI-Iqy3e1gum-3THoSedIeq375V_4akxlauahEOd-3-nXRHOCRZTgki7KFBeWWdFgGPabQL0DvYafzgVwC8jjj1Xc6qbdm8lWRJIv6SrFqojs3yTIGv8Wguhpv9gvTV-zl0lPM3f0xWXeSX7KwZkxGk0z-HHEsEKUuT38OUNiPGVwlkEH4NKNtovSAQiHVxPO2bTupkPuQatVkymGkZA5R',
    description: 'Burgundy Suede, Gold Tone'
  },
  {
    id: 'starlight-clutch',
    name: 'Starlight Clutch',
    material: 'Exotic',
    color: 'Silver',
    price: 1200,
    tag: 'LIMITED',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqPz3TmuFKvIMfABUKIbpVWrAoMDnvAr1vcSu6NxQ3jdIcZKF5erxhGL4m5twgo3ZBMP2jStJTryRmW-YMNDzXflbnGsG3vw1TvwxGzsRH3ypytOA6oEvkh-dNFKGjA8JIBD_l4IRZuCo1UyZ3U9MW1AvtjTIkfsulcX0BSlJfWBqeko6IHkg0KJcUFV9EGGDDuHN377YaeiWuXjuZ4P81g9XAC4PKdbjwCRJbgdVwOX1B7hWqRLDJ4h4mB89RSCVAWtfP4Tjg5-y2',
    description: 'Metallic Mesh, Palladium'
  },
  {
    id: 'midnight-hobo',
    name: 'Midnight Hobo',
    material: 'Calfskin Leather',
    color: 'Black',
    price: 2800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDugZTz1ZUl_53t3-hzVHDcW8GeaYeZXqT7I_llu5cKfYgLoCDxvTc37sG3HsQuSxSiZKlpC78yOaK8VK1gj_M_L-KAGvoVwKXAgdPeEINopCOYy77Dzpix6ar7lvfeP0GJ61q2BnJjO5OCBQurTSBGwzWOnXUfGjE2LM574c8S-OoboasYr2lMmcag8HLOsiejFvsWyuo4sYwT_VQVJ_C28n-sH3MrG5y-LdBpxm2aaI_79wHtK28paY8Ic1ceXkYhdMSIMQZmw2yt',
    description: 'Soft Nappa Leather, Matte Black'
  },
  {
    id: 'mini-exotic',
    name: 'Mini Exotic Top-Handle',
    material: 'Exotic',
    color: 'Beige',
    price: 3200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6AcaP8Lk2-En6J4IXp34_xFFycce3TFUE58bmoMzU2LIRqXJf2ILkr6h-vsvBPIkQaEhlaDA4ZY-ycg7x7VQUwWwf42mprNkijZAAmTOx1V1C6BgFUFl482_s7D4_b9g63oVr-8fUPG7TzS7tnF1tkNjms1RpNVkpedc3J43ZsOKUb_8BI8JytRrJP9PyAArlLvBe44GBCfMLYNctPLpRBREdxb3EMjl8QayxtBjins54e6XoyGdVGgcxbRXdfv260X3GJlCbCMoC',
    description: 'Exotic Embossed, Gold Hardware'
  }
]

export default function BagsCollection() {
  const { language, t } = useLanguage()
  const [productsList, setProductsList] = useState(PRODUCTS)
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedColor, setSelectedColor] = useState(null)
  const [sortBy, setSortBy] = useState('newest')

  React.useEffect(() => {
    const custom = JSON.parse(localStorage.getItem('custom_products') || '[]')
    const filteredCustom = custom.filter(p => p.category === 'Bags')
    setProductsList([...filteredCustom, ...PRODUCTS])
  }, [])

  const handleMaterialChange = (material) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(selectedMaterials.filter(m => m !== material))
    } else {
      setSelectedMaterials([...selectedMaterials, material])
    }
  }

  const clearFilters = () => {
    setSelectedMaterials([])
    setSelectedColor(null)
  }

  const materialOptions = [...new Set(productsList.map(product => product.material).filter(Boolean))]

  // Filter and Sort logic
  let filteredProducts = productsList.filter(product => {
    const matchesMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(product.material)
    const matchesColor = !selectedColor || product.color === selectedColor
    return matchesMaterial && matchesColor
  })

  if (sortBy === 'price_high') {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'price_low') {
    filteredProducts.sort((a, b) => a.price - b.price)
  }

  return (
    <div className="bg-[#222326] min-h-screen flex flex-col text-on-surface">
      <main className="flex-grow pt-[120px] pb-xl px-container-margin max-w-[1440px] mx-auto w-full">
        {/* Header */}
        <header className="mb-xl text-center md:text-left">
          <h1 className="font-display-xl text-display-xl text-pure-white mb-sm">{t('bagsTitle')}</h1>
          <p className="font-body-lg text-body-lg text-silver-mist max-w-2xl">
            {t('bagsDesc')}
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-lg">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0 bg-graphite-base p-md rounded-lg h-fit border border-surface-container-high">
            <div className="flex justify-between items-center mb-md pb-sm border-b border-surface-container-high">
              <h3 className="font-label-caps text-label-caps text-pure-white">{t('filters')}</h3>
              <button onClick={clearFilters} className="text-silver-mist hover:text-pure-white font-body-sm text-body-sm transition-colors">
                {t('clearAll')}
              </button>
            </div>

            {/* Material Filter */}
            <div className="mb-lg">
              <h4 className="font-body-md text-body-md text-pure-white mb-sm flex justify-between items-center cursor-pointer group">
                {t('material')}
                <span className="material-symbols-outlined text-silver-mist group-hover:text-pure-white transition-colors">expand_more</span>
              </h4>
              <div className="space-y-sm">
                {materialOptions.map(material => (
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
            </div>

            {/* Color Filter */}
            <div className="mb-lg">
              <h4 className="font-body-md text-body-md text-pure-white mb-sm flex justify-between items-center cursor-pointer group">
                {t('color')}
                <span className="material-symbols-outlined text-silver-mist group-hover:text-pure-white transition-colors">expand_more</span>
              </h4>
              <div className="flex flex-wrap gap-sm">
                <button 
                  onClick={() => setSelectedColor(selectedColor === 'Black' ? null : 'Black')}
                  aria-label="Black" 
                  className={`w-8 h-8 rounded-full bg-pitch-black border ${selectedColor === 'Black' ? 'border-pure-white ring-2 ring-pure-white' : 'border-surface-container-high'} focus:outline-none`}
                ></button>
                <button 
                  onClick={() => setSelectedColor(selectedColor === 'Beige' ? null : 'Beige')}
                  aria-label="Beige" 
                  className={`w-8 h-8 rounded-full bg-[#f5f5dc] border ${selectedColor === 'Beige' ? 'border-pure-white ring-2 ring-pure-white' : 'border-surface-container-high'} focus:outline-none`}
                ></button>
                <button 
                  onClick={() => setSelectedColor(selectedColor === 'Burgundy' ? null : 'Burgundy')}
                  aria-label="Burgundy" 
                  className={`w-8 h-8 rounded-full bg-[#800000] border ${selectedColor === 'Burgundy' ? 'border-pure-white ring-2 ring-pure-white' : 'border-surface-container-high'} focus:outline-none`}
                ></button>
                <button 
                  onClick={() => setSelectedColor(selectedColor === 'Silver' ? null : 'Silver')}
                  aria-label="Silver" 
                  className={`w-8 h-8 rounded-full bg-[#c0c0c0] border ${selectedColor === 'Silver' ? 'border-pure-white ring-2 ring-pure-white' : 'border-surface-container-high'} focus:outline-none`}
                ></button>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-md">
              <span className="font-body-sm text-body-sm text-silver-mist">{t('showingResults', { count: filteredProducts.length })}</span>
              <div className="flex items-center gap-sm">
                <span className="font-body-sm text-body-sm text-silver-mist">{t('sortBy')}</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none text-pure-white font-body-sm focus:ring-0 py-0 cursor-pointer"
                >
                  <option className="bg-graphite-base text-pure-white" value="newest">{t('newest')}</option>
                  <option className="bg-graphite-base text-pure-white" value="price_high">{t('priceHigh')}</option>
                  <option className="bg-graphite-base text-pure-white" value="price_low">{t('priceLow')}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
              {filteredProducts.map(product => {
                const detailPath = product.detailPath || `/product/${product.id}`

                return (
                <div key={product.id} className="bg-deep-slate rounded-lg p-sm group relative flex flex-col h-full border border-transparent hover:border-surface-container-high transition-all">
                  <Link to={detailPath} className="relative aspect-[4/5] mb-md overflow-hidden rounded-md bg-pitch-black flex items-center justify-center">
                    <img 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 transform"
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
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                          arrow_forward
                        </span>
                        {t('viewDetails')}
                      </span>
                    </div>
                  </Link>
                  <div className="mt-auto">
                    <Link to={detailPath} className="block font-headline-md text-headline-md text-pure-white mb-xs truncate hover:text-primary-container transition-colors">
                      {product.name}
                    </Link>
                    <p className="font-body-sm text-body-sm text-silver-mist mb-sm truncate">
                      {language === 'KO' && product.descriptionKo ? product.descriptionKo : product.description}
                    </p>
                    <div className="font-body-lg text-body-lg text-pure-white">${product.price.toLocaleString()}</div>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

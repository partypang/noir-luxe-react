import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SHOE_PRODUCTS = [
  {
    id: 'void-ankle-boot',
    name: 'Void Ankle Boot',
    material: 'Calfskin Leather',
    color: 'Black',
    price: 1150,
    tag: 'POPULAR',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMMh1RQw6EAXIfkiaKFHA9KRaJNpLaW6Z7IzutAIhv4f2M0OihfrxrPs6ka_-rypW7rJOvhmi1PW9XZCdYEQ0A6MZM-zPQKydQ3ut-l0Q_jufg7qD_UNq4wmIJvP1l8fk3s4pv5UsqiJmO7rBWITRXBq761E9bMRqCeVO8U9FMJjnNqkgDa8LvfnO6Uq4zSApsr9H2ly02eG1Gf44MZnx_n55PJ28oJTVM190H6I_Obx2mZfvHX-tywpK87RvCEBCx_GpsXLOBXdKL',
    description: 'Architectural heel and seamless calfskin leather.'
  },
  {
    id: 'monolith-loafer',
    name: 'Monolith Leather Loafer',
    material: 'Patent Leather',
    color: 'Black',
    price: 950,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApTzmODYNNdeGyZYGZWWaUeryTafYeTWCebWqwUtvjP1smhwhCFmcSu9DL4vhbnsiy1sSLLa5OAyScrq-k3THrEkh-SvTOMx6-brZ42EubZnj9x26QTDGiQ7gs5N-n3Egl6PXviyLlBhAwyMGJ3KSqVlKzTvpKwgpZPndZvxpPPMnkOod-3jwA4On1-JiyaGlv3WY9aOlQtPXz_lFazEEj9JFEtmzznxYSD-xgDCrm7S1NdyW3X_l8jouH2a4BaD7JQumKIasWfVse',
    description: 'Brushed patent leather with chunky rubber sole.'
  },
  {
    id: 'eclipse-pump',
    name: 'Eclipse Satin Pump',
    material: 'Satin',
    color: 'Burgundy',
    price: 880,
    tag: 'NEW',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApTzmODYNNdeGyZYGZWWaUeryTafYeTWCebWqwUtvjP1smhwhCFmcSu9DL4vhbnsiy1sSLLa5OAyScrq-k3THrEkh-SvTOMx6-brZ42EubZnj9x26QTDGiQ7gs5N-n3Egl6PXviyLlBhAwyMGJ3KSqVlKzTvpKwgpZPndZvxpPPMnkOod-3jwA4On1-JiyaGlv3WY9aOlQtPXz_lFazEEj9JFEtmzznxYSD-xgDCrm7S1NdyW3X_l8jouH2a4BaD7JQumKIasWfVse',
    description: 'Satin pumps with structural stiletto heel.'
  }
]

export default function ShoesCollection() {
  const [productsList, setProductsList] = useState(SHOE_PRODUCTS)
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedColor, setSelectedColor] = useState(null)
  const [sortBy, setSortBy] = useState('newest')

  React.useEffect(() => {
    const custom = JSON.parse(localStorage.getItem('custom_products') || '[]')
    const filteredCustom = custom.filter(p => p.category === 'Shoes')
    setProductsList([...filteredCustom, ...SHOE_PRODUCTS])
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
          <h1 className="font-display-xl text-display-xl text-pure-white mb-sm">THE SHOES</h1>
          <p className="font-body-lg text-body-lg text-silver-mist max-w-2xl">
            Uncompromising footwear designed with architectural precision. command the room from the ground up.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-lg">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0 bg-graphite-base p-md rounded-lg h-fit border border-surface-container-high">
            <div className="flex justify-between items-center mb-md pb-sm border-b border-surface-container-high">
              <h3 className="font-label-caps text-label-caps text-pure-white">FILTERS</h3>
              <button onClick={clearFilters} className="text-silver-mist hover:text-pure-white font-body-sm text-body-sm transition-colors">
                Clear All
              </button>
            </div>

            {/* Material Filter */}
            <div className="mb-lg">
              <h4 className="font-body-md text-body-md text-pure-white mb-sm flex justify-between items-center cursor-pointer group">
                Material
                <span className="material-symbols-outlined text-silver-mist group-hover:text-pure-white transition-colors">expand_more</span>
              </h4>
              <div className="space-y-sm">
                {['Calfskin Leather', 'Patent Leather', 'Satin'].map(material => (
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
                Color
                <span className="material-symbols-outlined text-silver-mist group-hover:text-pure-white transition-colors">expand_more</span>
              </h4>
              <div className="flex flex-wrap gap-sm">
                <button 
                  onClick={() => setSelectedColor(selectedColor === 'Black' ? null : 'Black')}
                  aria-label="Black" 
                  className={`w-8 h-8 rounded-full bg-pitch-black border ${selectedColor === 'Black' ? 'border-pure-white ring-2 ring-pure-white' : 'border-surface-container-high'} focus:outline-none`}
                ></button>
                <button 
                  onClick={() => setSelectedColor(selectedColor === 'Burgundy' ? null : 'Burgundy')}
                  aria-label="Burgundy" 
                  className={`w-8 h-8 rounded-full bg-[#800000] border ${selectedColor === 'Burgundy' ? 'border-pure-white ring-2 ring-pure-white' : 'border-surface-container-high'} focus:outline-none`}
                ></button>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-md">
              <span className="font-body-sm text-body-sm text-silver-mist">Showing {filteredProducts.length} Results</span>
              <div className="flex items-center gap-sm">
                <span className="font-body-sm text-body-sm text-silver-mist">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none text-pure-white font-body-sm focus:ring-0 py-0 cursor-pointer"
                >
                  <option className="bg-graphite-base text-pure-white" value="newest">Newest Arrivals</option>
                  <option className="bg-graphite-base text-pure-white" value="price_high">Price: High to Low</option>
                  <option className="bg-graphite-base text-pure-white" value="price_low">Price: Low to High</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-deep-slate rounded-lg p-sm group relative flex flex-col h-full border border-transparent hover:border-surface-container-high transition-all">
                  <div className="relative aspect-[4/5] mb-md overflow-hidden rounded-md bg-pitch-black flex items-center justify-center">
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
                      <Link 
                        to={product.id === 'void-ankle-boot' ? '/product/void-ankle-boot' : '#'}
                        className="w-[90%] bg-primary-container text-pure-white font-label-caps text-label-caps py-sm rounded-lg hover:bg-inverse-primary transition-colors flex justify-center items-center gap-xs"
                      >
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                          {product.id === 'void-ankle-boot' ? 'arrow_forward' : 'shopping_bag'}
                        </span>
                        {product.id === 'void-ankle-boot' ? 'View Details' : 'Add to Bag'}
                      </Link>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-headline-md text-headline-md text-pure-white mb-xs truncate">{product.name}</h3>
                    <p className="font-body-sm text-body-sm text-silver-mist mb-sm truncate">{product.description}</p>
                    <div className="font-body-lg text-body-lg text-pure-white">${product.price.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SHOE_PRODUCTS = [
  {
    id: 'nike-dunk-low',
    name: "Nike Dunk Low Retro SE 'Triple Black'",
    material: 'Suede / Leather',
    color: 'Black',
    colors: ['Black'],
    price: 85,
    tag: '#1',
    image: 'https://img.sportinn.com.tr/nike-dunk-low-retro-se-triple-black-erkek-sneaker-ayakkabi-ib6651-001-209535-69-B.jpg',
    accent: 'from-white via-neutral-200 to-black',
    description: 'Full triple-black Dunk Low profile with tonal Swoosh, suede texture, and black rubber sole.'
  },
  {
    id: 'adidas-samba-og',
    name: 'Adidas Samba OG',
    material: 'Leather / Suede',
    color: 'Black',
    colors: ['Black', 'White', 'Gum'],
    price: 80,
    tag: '#2',
    accent: 'from-black via-white to-[#b28a4a]',
    description: 'Low-profile terrace classic with a polished black, white, and gum palette.'
  },
  {
    id: 'new-balance-530-550',
    name: 'New Balance 530 / 550',
    material: 'Mesh / Suede',
    color: 'White',
    colors: ['White', 'Grey', 'Beige'],
    price: 90,
    tag: '#3',
    accent: 'from-white via-stone-300 to-neutral-500',
    description: 'Soft neutral runners with the easy balance of white, grey, and beige.'
  },
  {
    id: 'nike-air-force-1',
    name: 'Nike Air Force 1',
    material: 'Leather',
    color: 'White',
    colors: ['White', 'Black'],
    price: 90,
    tag: '#4',
    accent: 'from-white via-white to-black',
    description: 'A crisp leather staple, refined for everyday styling in white and black.'
  },
  {
    id: 'adidas-gazelle',
    name: 'Adidas Gazelle',
    material: 'Suede',
    color: 'Black',
    colors: ['Black', 'Pink', 'Green'],
    price: 75,
    tag: '#5',
    accent: 'from-black via-pink-300 to-emerald-500',
    description: 'Slim suede profile with playful black, pink, and green color energy.'
  },
  {
    id: 'miu-miu-new-runner-speedcat',
    name: 'Miu Miu New Runner / Speedcat',
    material: 'Luxury Leather',
    color: 'White',
    colors: ['White', 'Black'],
    price: 650,
    tag: '#6',
    accent: 'from-white via-neutral-200 to-black',
    description: 'Fashion-forward runner attitude with a quiet luxury white and black edit.'
  },
  {
    id: 'golden-goose-superstar',
    name: 'Golden Goose Superstar',
    material: 'Distressed Leather',
    color: 'White',
    colors: ['White Distressed'],
    price: 550,
    tag: '#7',
    accent: 'from-white via-stone-200 to-yellow-600',
    description: 'Signature distressed white finish with lived-in luxury character.'
  },
  {
    id: 'on-cloud-5-cloudmonster',
    name: 'On Cloud 5 / Cloudmonster',
    material: 'Technical Mesh',
    color: 'White',
    colors: ['White', 'Black', 'Beige'],
    price: 140,
    tag: '#8',
    accent: 'from-white via-neutral-300 to-black',
    description: 'Light technical cushioning in neutral tones for polished movement.'
  },
  {
    id: 'salomon-xt-6',
    name: 'Salomon XT-6',
    material: 'Technical Mesh',
    color: 'Black',
    colors: ['Black', 'Grey', 'Beige'],
    price: 160,
    tag: '#9',
    accent: 'from-black via-neutral-500 to-stone-300',
    description: 'Trail-coded silhouette with a muted black, grey, and beige city palette.'
  },
  {
    id: 'hoka-clifton-9-bondi',
    name: 'Hoka Clifton 9 / Bondi',
    material: 'Performance Mesh',
    color: 'Black',
    colors: ['Black', 'White'],
    price: 130,
    tag: '#10',
    accent: 'from-black via-neutral-700 to-white',
    description: 'Max-cushion comfort shaped for long days and minimal styling.'
  }
]

const COLOR_SWATCHES = {
  Beige: 'bg-[#d7c5aa]',
  Black: 'bg-pitch-black',
  Green: 'bg-[#0f6b45]',
  Grey: 'bg-[#8d9298]',
  Gum: 'bg-[#b28a4a]',
  Pink: 'bg-[#f3a5bf]',
  White: 'bg-pure-white',
  'White/Panda': 'bg-pure-white',
  'White Distressed': 'bg-[#ece8de]',
}

function SneakerVisual({ product }) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-md bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.18),transparent_36%),linear-gradient(145deg,#101114,#030303)] flex items-center justify-center">
      <div className="absolute inset-x-8 bottom-10 h-px bg-pure-white/20" />
      <div className={`absolute left-[18%] right-[14%] top-[34%] h-[34%] rounded-[44%_56%_36%_28%] bg-gradient-to-br ${product.accent} shadow-[0_26px_60px_rgba(0,0,0,0.45)]`}>
        <div className="absolute left-[15%] top-[22%] h-[12%] w-[42%] rounded-full bg-pitch-black/35" />
        <div className="absolute right-[10%] top-[31%] h-[18%] w-[28%] rounded-full bg-pure-white/35 blur-[1px]" />
        <div className="absolute left-[8%] right-[4%] bottom-[-15%] h-[25%] rounded-full bg-pure-white/90 shadow-[0_8px_18px_rgba(0,0,0,0.35)]" />
        <div className="absolute left-[18%] bottom-[-8%] h-[10%] w-[22%] rounded-full bg-pitch-black/70" />
        <div className="absolute right-[13%] bottom-[-8%] h-[10%] w-[18%] rounded-full bg-pitch-black/70" />
      </div>
      <div className="absolute left-sm top-sm bg-pure-white text-pitch-black font-label-caps text-label-caps px-2 py-1 rounded-sm">
        {product.tag}
      </div>
      <div className="absolute bottom-sm left-sm right-sm">
        <p className="font-label-caps text-[10px] tracking-[0.18em] text-silver-mist uppercase">Gangnam Edit</p>
      </div>
    </div>
  )
}

export default function ShoesCollection() {
  const navigate = useNavigate()
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

  const addToCart = (product) => {
    const existingItems = JSON.parse(localStorage.getItem('cart_items') || '[]')
    const colorLabel = (product.colors || [product.color]).join(' / ')
    const existingItem = existingItems.find(item => item.id === product.id)

    const nextItems = existingItem
      ? existingItems.map(item => (
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ))
      : [
          ...existingItems,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: colorLabel,
            category: 'Shoes',
            quantity: 1,
          },
        ]

    localStorage.setItem('cart_items', JSON.stringify(nextItems))
    navigate('/cart')
  }

  const materialOptions = useMemo(() => {
    return [...new Set(productsList.map(product => product.material).filter(Boolean))]
  }, [productsList])

  const colorOptions = useMemo(() => {
    return [...new Set(productsList.flatMap(product => product.colors || [product.color]).filter(Boolean))]
  }, [productsList])

  let filteredProducts = productsList.filter(product => {
    const matchesMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(product.material)
    const matchesColor = !selectedColor || (product.colors || [product.color]).includes(selectedColor)
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
          <p className="font-label-caps text-label-caps text-primary-container mb-sm tracking-[0.2em]">2026 SEOUL SNEAKER EDIT</p>
          <h1 className="font-display-xl text-display-xl text-pure-white mb-sm">THE SHOES</h1>
          <p className="font-body-lg text-body-lg text-silver-mist max-w-2xl">
            Popular sneaker silhouettes for women in their 30s, curated from clean minimal classics to quiet luxury statements.
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
                Color
                <span className="material-symbols-outlined text-silver-mist group-hover:text-pure-white transition-colors">expand_more</span>
              </h4>
              <div className="flex flex-wrap gap-sm">
                {colorOptions.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(selectedColor === color ? null : color)}
                    aria-label={color}
                    title={color}
                    className={`w-8 h-8 rounded-full border ${COLOR_SWATCHES[color] || 'bg-silver-mist'} ${
                      selectedColor === color ? 'border-pure-white ring-2 ring-pure-white' : 'border-surface-container-high'
                    } focus:outline-none`}
                  ></button>
                ))}
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
                    {product.image ? (
                      <img
                        className="w-full h-full object-contain p-sm opacity-95 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 transform"
                        alt={product.name}
                        src={product.image}
                      />
                    ) : (
                      <SneakerVisual product={product} />
                    )}
                    {product.image && product.tag && (
                      <div className="absolute top-sm left-sm bg-pure-white text-pitch-black font-label-caps text-label-caps px-2 py-1 rounded-sm">
                        {product.tag}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-pitch-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-sm">
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="w-[90%] bg-primary-container text-pure-white font-label-caps text-label-caps py-sm rounded-lg hover:bg-inverse-primary transition-colors flex justify-center items-center gap-xs"
                      >
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                          shopping_bag
                        </span>
                        Add to Bag
                      </button>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-headline-md text-headline-md text-pure-white mb-xs truncate">{product.name}</h3>
                    <p className="font-body-sm text-body-sm text-silver-mist mb-sm truncate">{product.description}</p>
                    <p className="font-label-caps text-[10px] tracking-[0.12em] text-silver-mist mb-xs uppercase">
                      {(product.colors || [product.color]).join(' / ')}
                    </p>
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

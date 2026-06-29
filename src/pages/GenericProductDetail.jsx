import React, { useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const STATIC_PRODUCTS = [
  {
    id: 'architect-crossbody',
    name: 'Architect Crossbody',
    category: 'Bags',
    material: 'Suede',
    color: 'Burgundy',
    price: 1890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX0cWb44hw9cENIMVzjcb9CoV6pENt7AMRXDCf3aoIjMeSTToNA7mURawI-Iqy3e1gum-3THoSedIeq375V_4akxlauahEOd-3-nXRHOCRZTgki7KFBeWWdFgGPabQL0DvYafzgVwC8jjj1Xc6qbdm8lWRJIv6SrFqojs3yTIGv8Wguhpv9gvTV-zl0lPM3f0xWXeSX7KwZkxGk0z-HHEsEKUuT38OUNiPGVwlkEH4NKNtovSAQiHVxPO2bTupkPuQatVkymGkZA5R',
    description: 'Burgundy suede with gold-tone architectural geometry.'
  },
  {
    id: 'starlight-clutch',
    name: 'Starlight Clutch',
    category: 'Bags',
    material: 'Exotic',
    color: 'Silver',
    price: 1200,
    tag: 'LIMITED',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqPz3TmuFKvIMfABUKIbpVWrAoMDnvAr1vcSu6NxQ3jdIcZKF5erxhGL4m5twgo3ZBMP2jStJTryRmW-YMNDzXflbnGsG3vw1TvwxGzsRH3ypytOA6oEvkh-dNFKGjA8JIBD_l4IRZuCo1UyZ3U9MW1AvtjTIkfsulcX0BSlJfWBqeko6IHkg0KJcUFV9EGGDDuHN377YaeiWuXjuZ4P81g9XAC4PKdbjwCRJbgdVwOX1B7hWqRLDJ4h4mB89RSCVAWtfP4Tjg5-y2',
    description: 'Metallic mesh clutch with a sharp palladium finish.'
  },
  {
    id: 'midnight-hobo',
    name: 'Midnight Hobo',
    category: 'Bags',
    material: 'Calfskin Leather',
    color: 'Black',
    price: 2800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDugZTz1ZUl_53t3-hzVHDcW8GeaYeZXqT7I_llu5cKfYgLoCDxvTc37sG3HsQuSxSiZKlpC78yOaK8VK1gj_M_L-KAGvoVwKXAgdPeEINopCOYy77Dzpix6ar7lvfeP0GJ61q2BnJjO5OCBQurTSBGwzWOnXUfGjE2LM574c8S-OoboasYr2lMmcag8HLOsiejFvsWyuo4sYwT_VQVJ_C28n-sH3MrG5y-LdBpxm2aaI_79wHtK28paY8Ic1ceXkYhdMSIMQZmw2yt',
    description: 'Soft nappa leather with a matte black everyday shape.'
  },
  {
    id: 'mini-exotic',
    name: 'Mini Exotic Top-Handle',
    category: 'Bags',
    material: 'Exotic',
    color: 'Beige',
    price: 3200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6AcaP8Lk2-En6J4IXp34_xFFycce3TFUE58bmoMzU2LIRqXJf2ILkr6h-vsvBPIkQaEhlaDA4ZY-ycg7x7VQUwWwf42mprNkijZAAmTOx1V1C6BgFUFl482_s7D4_b9g63oVr-8fUPG7TzS7tnF1tkNjms1RpNVkpedc3J43ZsOKUb_8BI8JytRrJP9PyAArlLvBe44GBCfMLYNctPLpRBREdxb3EMjl8QayxtBjins54e6XoyGdVGgcxbRXdfv260X3GJlCbCMoC',
    description: 'Exotic embossed top-handle with quiet gold hardware.'
  },
  {
    id: 'nike-dunk-low',
    name: "Nike Dunk Low Retro SE 'Triple Black'",
    category: 'Shoes',
    material: 'Suede / Leather',
    color: 'Black',
    colors: ['Black'],
    price: 85,
    image: 'https://img.sportinn.com.tr/nike-dunk-low-retro-se-triple-black-erkek-sneaker-ayakkabi-ib6651-001-209535-69-B.jpg',
    description: 'Full triple-black Dunk Low profile with tonal Swoosh, suede texture, and black rubber sole.'
  },
  {
    id: 'adidas-samba-og',
    name: 'Adidas Samba OG',
    category: 'Shoes',
    material: 'Leather / Suede',
    color: 'Black',
    colors: ['Black', 'White', 'Gum'],
    price: 80,
    description: 'Low-profile terrace classic with a polished black, white, and gum palette.'
  },
  {
    id: 'new-balance-530-550',
    name: 'New Balance 530 / 550',
    category: 'Shoes',
    material: 'Mesh / Suede',
    color: 'White',
    colors: ['White', 'Grey', 'Beige'],
    price: 90,
    description: 'Soft neutral runners with the easy balance of white, grey, and beige.'
  },
  {
    id: 'nike-air-force-1',
    name: 'Nike Air Force 1',
    category: 'Shoes',
    material: 'Leather',
    color: 'White',
    colors: ['White', 'Black'],
    price: 90,
    description: 'A crisp leather staple, refined for everyday styling in white and black.'
  },
  {
    id: 'adidas-gazelle',
    name: 'Adidas Gazelle',
    category: 'Shoes',
    material: 'Suede',
    color: 'Black',
    colors: ['Black', 'Pink', 'Green'],
    price: 75,
    description: 'Slim suede profile with playful black, pink, and green color energy.'
  },
  {
    id: 'miu-miu-new-runner-speedcat',
    name: 'Miu Miu New Runner / Speedcat',
    category: 'Shoes',
    material: 'Luxury Leather',
    color: 'White',
    colors: ['White', 'Black'],
    price: 650,
    description: 'Fashion-forward runner attitude with a quiet luxury white and black edit.'
  },
  {
    id: 'golden-goose-superstar',
    name: 'Golden Goose Superstar',
    category: 'Shoes',
    material: 'Distressed Leather',
    color: 'White',
    colors: ['White Distressed'],
    price: 550,
    description: 'Signature distressed white finish with lived-in luxury character.'
  },
  {
    id: 'on-cloud-5-cloudmonster',
    name: 'On Cloud 5 / Cloudmonster',
    category: 'Shoes',
    material: 'Technical Mesh',
    color: 'White',
    colors: ['White', 'Black', 'Beige'],
    price: 140,
    description: 'Light technical cushioning in neutral tones for polished movement.'
  },
  {
    id: 'salomon-xt-6',
    name: 'Salomon XT-6',
    category: 'Shoes',
    material: 'Technical Mesh',
    color: 'Black',
    colors: ['Black', 'Grey', 'Beige'],
    price: 160,
    description: 'Trail-coded silhouette with a muted black, grey, and beige city palette.'
  },
  {
    id: 'hoka-clifton-9-bondi',
    name: 'Hoka Clifton 9 / Bondi',
    category: 'Shoes',
    material: 'Performance Mesh',
    color: 'Black',
    colors: ['Black', 'White'],
    price: 130,
    description: 'Max-cushion comfort shaped for long days and minimal styling.'
  }
]

const CATEGORY_PATHS = {
  Accessories: '/accessories',
  Bags: '/collection',
  Shoes: '/shoes',
}

const CATEGORY_LABELS = {
  EN: {
    Accessories: 'Accessories',
    Bags: 'Bags',
    Shoes: 'Shoes',
  },
  KO: {
    Accessories: '악세사리',
    Bags: '가방',
    Shoes: '신발',
  },
}

function ProductImage({ product }) {
  if (product.image) {
    return (
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-contain p-md"
      />
    )
  }

  return (
    <div className="flex h-full w-full items-center justify-center px-lg text-center">
      <div>
        <p className="font-label-caps text-label-caps text-primary-container mb-sm">{product.category}</p>
        <p className="font-headline-lg text-headline-lg text-pure-white">{product.name}</p>
      </div>
    </div>
  )
}

function loadCustomProducts() {
  try {
    return JSON.parse(localStorage.getItem('custom_products') || '[]')
  } catch {
    return []
  }
}

export default function GenericProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { language, t } = useLanguage()

  const product = useMemo(() => {
    const customProducts = loadCustomProducts().map(productItem => ({
      ...productItem,
      category: productItem.category || 'Bags',
    }))

    return [...customProducts, ...STATIC_PRODUCTS].find(productItem => productItem.id === productId)
  }, [productId])

  const addToCart = () => {
    const existingItems = JSON.parse(localStorage.getItem('cart_items') || '[]')
    const colorLabel = product.colors ? product.colors.join(' / ') : product.color
    const existingItem = existingItems.find(item => item.id === product.id)

    const nextItems = existingItem
      ? existingItems.map(item => (
          item.id === product.id ? { ...item, quantity: Number(item.quantity || 1) + 1 } : item
        ))
      : [
          ...existingItems,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: colorLabel,
            category: product.category,
            quantity: 1,
          },
        ]

    localStorage.setItem('cart_items', JSON.stringify(nextItems))
    navigate('/cart')
  }

  if (!product) {
    return (
      <div className="bg-pitch-black min-h-screen text-on-surface">
        <main className="max-w-[960px] mx-auto px-container-margin pt-[140px] pb-2xl text-center">
          <h1 className="font-display-xl text-[56px] leading-none text-pure-white mb-md">
            {language === 'KO' ? '상품을 찾을 수 없습니다' : 'Product Not Found'}
          </h1>
          <p className="font-body-md text-body-md text-silver-mist mb-lg">
            {language === 'KO' ? '목록으로 돌아가 다른 상품을 확인해 주세요.' : 'Return to the collection and choose another piece.'}
          </p>
          <Link to="/collection" className="inline-flex items-center gap-xs rounded-lg bg-primary-container px-lg py-md font-label-caps text-label-caps text-pure-white hover:bg-inverse-primary transition-colors">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            {language === 'KO' ? '컬렉션으로 이동' : 'Back to Collection'}
          </Link>
        </main>
      </div>
    )
  }

  const categoryLabel = CATEGORY_LABELS[language]?.[product.category] || product.category
  const backPath = CATEGORY_PATHS[product.category] || '/collection'
  const colorLabel = product.colors ? product.colors.join(' / ') : product.color

  return (
    <div className="bg-pitch-black min-h-screen text-on-surface">
      <main className="max-w-[1440px] mx-auto px-container-margin pt-[120px] pb-2xl">
        <Link to={backPath} className="inline-flex items-center gap-xs font-label-caps text-label-caps text-silver-mist hover:text-pure-white transition-colors mb-lg">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          {language === 'KO' ? `${categoryLabel}으로 돌아가기` : `Back to ${categoryLabel}`}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <section className="lg:col-span-7">
            <div className="aspect-square rounded-lg border border-pure-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.12),transparent_34%),linear-gradient(145deg,#15161a,#030303)] overflow-hidden">
              <ProductImage product={product} />
            </div>
          </section>

          <section className="lg:col-span-5 flex flex-col justify-center">
            <p className="font-label-caps text-label-caps text-primary-container tracking-[0.2em] mb-sm">
              {categoryLabel}
            </p>
            <h1 className="font-display-xl text-[52px] md:text-[68px] leading-none text-pure-white tracking-tight mb-md uppercase">
              {product.name}
            </h1>
            <p className="font-body-lg text-body-lg text-silver-mist mb-lg">
              {product.description || (language === 'KO' ? 'NOIR LUXE에서 선별한 프리미엄 상품입니다.' : 'A premium piece curated by NOIR LUXE.')}
            </p>

            <div className="grid grid-cols-2 gap-sm mb-lg">
              <div className="border border-pure-white/10 rounded-md p-md">
                <p className="font-label-caps text-label-caps text-silver-mist mb-xs">{t('material')}</p>
                <p className="font-body-md text-pure-white">{product.material || '-'}</p>
              </div>
              <div className="border border-pure-white/10 rounded-md p-md">
                <p className="font-label-caps text-label-caps text-silver-mist mb-xs">{t('color')}</p>
                <p className="font-body-md text-pure-white">{colorLabel || '-'}</p>
              </div>
            </div>

            <div className="flex items-end justify-between gap-md border-t border-pure-white/10 pt-lg">
              <div>
                <p className="font-label-caps text-label-caps text-silver-mist mb-xs">{t('price')}</p>
                <p className="font-display-xl text-[48px] leading-none text-pure-white">
                  ${Number(product.price || 0).toLocaleString()}
                </p>
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
          </section>
        </div>
      </main>
    </div>
  )
}

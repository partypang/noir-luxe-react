import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const DEFAULT_IMAGES = {
  Bags: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGPH7w0hvWLyOV2V0-epDhQRusLksgwcvI2xp1Atf2zPzemxUH1HTPp_yoQ0kme-WJcmCC_DkQkGdmR2un-Sgp9baMTrYZeAaupNb_drih_zGWtTXf3U_n6vrN2gxQcSLDKON5ja5dssX_tN_M0vlBSVZ5Zx0YJ6VIgWRz08hMnb7bJV35DHIjo7VEZH8p8H7JVfwACisx3dlXXWwcSaQ-yDoVisbBRp1VhvpWbnUA58ywm-sOYPBq-Pyg91YmbtYDYSnIDm8Qj5Tk',
  Shoes: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApTzmODYNNdeGyZYGZWWaUeryTafYeTWCebWqwUtvjP1smhwhCFmcSu9DL4vhbnsiy1sSLLa5OAyScrq-k3THrEkh-SvTOMx6-brZ42EubZnj9x26QTDGiQ7gs5N-n3Egl6PXviyLlBhAwyMGJ3KSqVlKzTvpKwgpZPndZvxpPPMnkOod-3jwA4On1-JiyaGlv3WY9aOlQtPXz_lFazEEj9JFEtmzznxYSD-xgDCrm7S1NdyW3X_l8jouH2a4BaD7JQumKIasWfVse'
}

export default function AdminProductRegistration() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    category: 'Bags',
    price: '',
    material: 'Leather',
    color: 'Black',
    description: '',
    image: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission delay
    setTimeout(() => {
      const customProducts = JSON.parse(localStorage.getItem('custom_products') || '[]')
      
      const newProduct = {
        id: `custom-${Date.now()}`,
        name: formData.name,
        category: formData.category,
        material: formData.material,
        color: formData.color,
        price: Number(formData.price),
        tag: 'NEW',
        image: formData.image || DEFAULT_IMAGES[formData.category],
        description: formData.description
      }

      customProducts.push(newProduct)
      localStorage.setItem('custom_products', JSON.stringify(customProducts))
      
      setIsSubmitting(false)
      alert('신제품이 성공적으로 등록되었습니다!')
      
      // Redirect to the collection page
      if (formData.category === 'Bags') {
        navigate('/collection')
      } else {
        navigate('/shoes')
      }
    }, 800)
  }

  return (
    <div className="bg-pitch-black text-on-surface font-body-md min-h-screen flex antialiased">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-deep-slate flex flex-col shrink-0">
        <div className="h-20 flex items-center px-sm border-b border-deep-slate">
          <Link className="font-display-lg text-[32px] text-pure-white tracking-tighter" to="/">
            NOIR LUXE
          </Link>
        </div>
        <nav className="flex-1 py-md flex flex-col gap-xs">
          <Link className="relative flex items-center gap-sm px-sm py-xs text-silver-mist hover:text-pure-white hover:bg-surface-container-high/50 transition-colors duration-300" to="/admin">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body-md">대시보드</span>
          </Link>
          <Link className="relative flex items-center gap-sm px-sm py-xs text-silver-mist hover:text-pure-white hover:bg-surface-container-high/50 transition-colors duration-300" to="/admin">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="font-body-md">주문 관리</span>
          </Link>
          <Link className="relative flex items-center gap-sm px-sm py-xs text-pure-white bg-surface-container-high/30 transition-colors duration-300" to="/admin/products/new">
            <span className="material-symbols-outlined" style={{ color: '#e32652' }}>add_box</span>
            <span className="font-body-md font-bold">신제품 등록</span>
          </Link>
        </nav>
        <div className="p-sm border-t border-deep-slate flex items-center gap-sm">
          <div className="w-10 h-10 rounded-full bg-deep-slate flex items-center justify-center overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              alt="Admin Avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqDnoZAZq3Ws1ginxVjeJkRoihbCXIUJTFbrTL-EC21Ri0IwNHo_UspkYfbmZhfVJ3CzqsJ0W2yBZz_-15X9jk47yrB6V8DdF4fa6LlVKIJ0j8Nr0AoA6e-xCPdhNSAib018a_bNSYK36qulYf57Xz109k6DECItaSBLk3vihfI0KVF6zYb6jclzL-Wiu60R8DPL5QPo64zTdu44q7M0JePc_niClPK7HGmmVS6EIYSNCbBULd5v1_eibEXBAw3J4YY_ROljSUQsfU" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-body-sm text-pure-white">관리자 계정</span>
            <span className="font-label-caps text-label-caps text-silver-mist">총괄 매니저</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-deep-slate bg-surface/90 backdrop-blur-sm flex items-center justify-between px-lg shrink-0">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-pure-white">신제품 등록</h1>
            <p className="font-body-sm text-silver-mist">새로운 럭셔리 제품군을 온라인 스토어에 추가합니다.</p>
          </div>
        </header>

        {/* Scrollable Form Content */}
        <div className="flex-grow overflow-y-auto p-lg">
          <div className="max-w-2xl bg-surface-container p-lg rounded-xl border border-deep-slate">
            <form onSubmit={handleSubmit} className="space-y-md">
              {/* Product Name */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-silver-mist" htmlFor="name">상품명</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="예: Velvet Midnight Clutch"
                  className="bg-pitch-black border border-deep-slate text-pure-white rounded-lg p-sm focus:ring-1 focus:ring-primary-container focus:outline-none"
                />
              </div>

              {/* Category & Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-silver-mist" htmlFor="category">카테고리</label>
                  <select 
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="bg-pitch-black border border-deep-slate text-pure-white rounded-lg p-sm focus:ring-1 focus:ring-primary-container focus:outline-none"
                  >
                    <option value="Bags">가방 (Bags)</option>
                    <option value="Shoes">신발 (Shoes)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-silver-mist" htmlFor="price">가격 (USD)</label>
                  <input 
                    type="number" 
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    placeholder="예: 1250"
                    className="bg-pitch-black border border-deep-slate text-pure-white rounded-lg p-sm focus:ring-1 focus:ring-primary-container focus:outline-none"
                  />
                </div>
              </div>

              {/* Material & Color */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-silver-mist" htmlFor="material">주요 소재</label>
                  <input 
                    type="text" 
                    id="material"
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    required
                    placeholder="예: Leather, Suede, Satin"
                    className="bg-pitch-black border border-deep-slate text-pure-white rounded-lg p-sm focus:ring-1 focus:ring-primary-container focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-silver-mist" htmlFor="color">색상</label>
                  <input 
                    type="text" 
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    required
                    placeholder="예: Black, Burgundy, Slate"
                    className="bg-pitch-black border border-deep-slate text-pure-white rounded-lg p-sm focus:ring-1 focus:ring-primary-container focus:outline-none"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-silver-mist" htmlFor="description">제품 설명</label>
                <textarea 
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="제품의 실루엣, 감성 및 세부 사양을 입력하세요."
                  className="bg-pitch-black border border-deep-slate text-pure-white rounded-lg p-sm focus:ring-1 focus:ring-primary-container focus:outline-none"
                />
              </div>

              {/* Image URL (Optional) */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-silver-mist" htmlFor="image">이미지 URL (선택사항)</label>
                <input 
                  type="text" 
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="비워두시면 카테고리별 프리미엄 플레이스홀더 이미지로 대체됩니다."
                  className="bg-pitch-black border border-deep-slate text-pure-white rounded-lg p-sm focus:ring-1 focus:ring-primary-container focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-container text-pure-white font-headline-md py-sm rounded-lg hover:bg-inverse-primary transition-colors duration-300 uppercase tracking-wider font-semibold"
              >
                {isSubmitting ? '제품 등록 중...' : '신제품 등록하기'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ObsidianToteDetail() {
  const navigate = useNavigate()
  const [added, setAdded] = useState(false)

  const handleAddToBag = () => {
    setAdded(true)
    setTimeout(() => {
      navigate('/cart')
    }, 1000)
  }

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md min-h-screen flex flex-col selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section (Split Layout) */}
        <section className="max-w-[1440px] mx-auto px-container-margin py-xl flex flex-col lg:flex-row gap-xl min-h-[calc(100vh-80px)]">
          {/* Left: High-impact Imagery */}
          <div className="lg:w-7/12 w-full h-[614px] lg:h-auto relative bg-surface-container rounded-xl overflow-hidden shadow-2xl">
            <img 
              alt="The Obsidian Tote" 
              className="w-full h-full object-cover rounded-xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7lLS2j1ABeGwsw1kifEty7TpEfOb54X4f91TBf9rCv7FNG_N_1FFeeHCvqwep3IEhYl3TgrS8Qlxu7csHZIB2u_B54BY1h5rCzLRadfEcYxC9fykwWzahJwold-6E2EzI09q_XA2hwPuaEN_wZxRLIS5sL5J1BB4HOAgRCeB2YHruFzWSpSZBM87bhaLsXK95_a8O2WqEGdp9mUiQ6XKXjhuCcMYJzEzGJchwuXT40h1DpYFBeHEiYnRjxSjachdZHKrDKzvrUYOB" 
            />
          </div>
          {/* Right: Sticky Product Info */}
          <div className="lg:w-5/12 w-full relative">
            <div className="sticky top-32 flex flex-col gap-lg">
              <div>
                <h1 className="font-display-lg text-display-lg text-pure-white uppercase tracking-tight mb-sm">THE OBSIDIAN TOTE</h1>
                <p className="font-headline-lg text-headline-lg text-silver-mist">$2,450</p>
              </div>
              <div className="space-y-sm">
                <p className="font-body-lg text-body-lg text-inverse-surface leading-relaxed">
                  A study in structural dominance and midnight aesthetics. The Obsidian Tote is masterfully crafted from single-piece, flawless calfskin leather, designed to hold its architectural shape while aging with graceful subtlety. 
                </p>
                <p className="font-body-md text-body-md text-silver-mist">
                  Featuring uncompromising silver hardware and a minimalist silhouette that commands attention in any environment.
                </p>
              </div>

              {/* Link to Premium Experience */}
              <div className="bg-deep-slate p-md rounded-xl border border-surface-container-high">
                <h4 className="font-headline-md text-[16px] text-pure-white mb-xs flex items-center gap-xs">
                  <span className="material-symbols-outlined text-secondary-container">visibility</span>
                  Midnight Stage Presence
                </h4>
                <p className="font-body-sm text-body-sm text-silver-mist mb-sm">
                  Experience the obsidian craftsmanship in immersive cinematic depth.
                </p>
                <Link to="/product/obsidian-tote/premium" className="text-secondary-container hover:text-pure-white font-label-caps text-label-caps flex items-center gap-xs transition-colors">
                  Enter Premium Experience
                  <span className="material-symbols-outlined text-[16px]">east</span>
                </Link>
              </div>

              <div className="pt-sm border-t border-surface-variant flex flex-col gap-sm">
                <button 
                  onClick={handleAddToBag}
                  className="w-full bg-primary-container text-on-primary-container font-headline-md text-headline-md py-md rounded-xl hover:bg-inverse-primary transition-colors uppercase tracking-wide flex justify-center items-center gap-xs"
                >
                  <span className="material-symbols-outlined">shopping_bag</span>
                  {added ? 'ADDING TO BAG...' : 'ADD TO BAG'}
                </button>
                <button className="w-full bg-transparent border border-surface-variant text-pure-white font-label-caps text-label-caps py-sm rounded-xl hover:border-pure-white hover:bg-surface-container-low transition-colors">
                  ADD TO WISHLIST
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Detail Showcase */}
        <section className="max-w-[1440px] mx-auto px-container-margin py-xl space-y-xl">
          <div className="text-center max-w-2xl mx-auto mb-xl">
            <h2 className="font-headline-lg text-headline-lg text-pure-white mb-sm">UNCOMPROMISING MATERIALS</h2>
            <p className="font-body-md text-body-md text-silver-mist">Every texture tells a story of obsessive refinement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="bg-deep-slate rounded-xl p-sm group overflow-hidden">
              <div className="aspect-square bg-pitch-black rounded-lg overflow-hidden relative">
                <img 
                  alt="Leather Detail" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUX2NMw5ppi3gsguAE3freezxSBr5JVFiCXy2ssN4KVY71LLS15aJOTlZcx2wntvIQrjbRQsD54eiOGzpxewQ2motGkRm8Jc3PXAKT2IrCurzVfg8ocJ-FtFCsUqFPoe0MchNiOeDaxSviZxVNWnZ0L3YtPo9P6f41oB62FabnRqPA7ZT_rLi4Gl4LeiA2Vd2CWv8T0-T4Zr_E1w43pJ8VGscbn5qa5LBFe5W6DXiAcztWcysFSRh4l_pUWXv3SoRUbPYtGt_KJp1I" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pitch-black/80 to-transparent flex items-end p-md">
                  <h3 className="font-headline-md text-headline-md text-pure-white">Calfskin Grain</h3>
                </div>
              </div>
            </div>
            <div className="bg-deep-slate rounded-xl p-sm group overflow-hidden">
              <div className="aspect-square bg-pitch-black rounded-lg overflow-hidden relative">
                <img 
                  alt="Hardware Detail" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpKmfxctk87mv_0r6zBI0hLxeCasBoiEmzMf5L9s_0ksr8gc_5VszlSluP5m_x7oBtgDpftqkT9t9dt3q_bQUDJAtpcO-2IRGN0RCJ80zvp3TzuTcIKtSl4SsNNsAfkTUizWhdSnmKZaCYd_YokJIMKFQ5SRBApK6wsjLZ47uE8hj7-iFpcr6nzKXOdFG6cDjz1EM_SMkvLxHdEFsZJNUQ6U7aNivG01FPXpToREgICvBGmWYV1Bo1r5WinUyqHanJ2-LpjgH18tnH" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pitch-black/80 to-transparent flex items-end p-md">
                  <h3 className="font-headline-md text-headline-md text-pure-white">Surgical Steel Hardware</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Specs */}
        <section className="bg-surface-container-low py-xl">
          <div className="max-w-[1440px] mx-auto px-container-margin">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-headline-lg text-headline-lg text-pure-white mb-lg text-center uppercase tracking-widest">STRUCTURAL INTEGRITY</h2>
              <div className="divide-y divide-surface-variant border-y border-surface-variant">
                <div className="py-md flex flex-col sm:flex-row justify-between">
                  <span className="font-label-caps text-label-caps text-silver-mist w-1/3">Dimensions</span>
                  <span className="font-body-md text-body-md text-pure-white w-2/3">H: 32cm × W: 40cm × D: 18cm. Handle drop: 15cm.</span>
                </div>
                <div className="py-md flex flex-col sm:flex-row justify-between">
                  <span className="font-label-caps text-label-caps text-silver-mist w-1/3">Material Composition</span>
                  <span className="font-body-md text-body-md text-pure-white w-2/3">100% Full-Grain Calfskin Leather exterior. Suede lining. Palladium-finish hardware.</span>
                </div>
                <div className="py-md flex flex-col sm:flex-row justify-between">
                  <span className="font-label-caps text-label-caps text-silver-mist w-1/3">Care Instructions</span>
                  <span className="font-body-md text-body-md text-pure-white w-2/3">Store in provided dust bag. Avoid direct exposure to prolonged sunlight and moisture. Clean with a soft, dry cloth.</span>
                </div>
                <div className="py-md flex flex-col sm:flex-row justify-between">
                  <span className="font-label-caps text-label-caps text-silver-mist w-1/3">Origin</span>
                  <span className="font-body-md text-body-md text-pure-white w-2/3">Handcrafted in Florence, Italy.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete the Look Carousel */}
        <section className="max-w-[1440px] mx-auto px-container-margin py-xl overflow-hidden">
          <div className="flex justify-between items-end mb-lg">
            <h2 className="font-headline-lg text-headline-lg text-pure-white uppercase">Complete The Look</h2>
            <div className="flex gap-sm">
              <button className="p-xs bg-surface-container rounded-full hover:bg-surface-bright transition-colors text-pure-white">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-xs bg-surface-container rounded-full hover:bg-surface-bright transition-colors text-pure-white">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="flex overflow-x-auto gap-md pb-md snap-x hide-scrollbar">
            {/* Product Card 1 */}
            <Link to="/product/void-ankle-boot" className="snap-start min-w-[300px] bg-deep-slate rounded-xl p-sm shrink-0 group cursor-pointer block hover:no-underline">
              <div className="aspect-[3/4] bg-pitch-black rounded-lg mb-sm overflow-hidden relative">
                <img 
                  alt="Void Ankle Boot" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMMh1RQw6EAXIfkiaKFHA9KRaJNpLaW6Z7IzutAIhv4f2M0OihfrxrPs6ka_-rypW7rJOvhmi1PW9XZCdYEQ0A6MZM-zPQKydQ3ut-l0Q_jufg7qD_UNq4wmIJvP1l8fk3s4pv5UsqiJmO7rBWITRXBq761E9bMRqCeVO8U9FMJjnNqkgDa8LvfnO6Uq4zSApsr9H2ly02eG1Gf44MZnx_n55PJ28oJTVM190H6I_Obx2mZfvHX-tywpK87RvCEBCx_GpsXLOBXdKL" 
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-body-lg text-body-lg text-pure-white">Void Ankle Boot</h4>
                  <p className="font-label-caps text-label-caps text-silver-mist mt-xs">Footwear</p>
                </div>
                <span className="font-body-md text-body-md text-pure-white">$1,150</span>
              </div>
            </Link>
            {/* Product Card 2 */}
            <div className="snap-start min-w-[300px] bg-deep-slate rounded-xl p-sm shrink-0 group cursor-pointer">
              <div className="aspect-[3/4] bg-pitch-black rounded-lg mb-sm overflow-hidden relative">
                <img 
                  alt="Monolith Coat" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT1jRGdWdkM9Oq6VwwxTKTvYoRHmW-CpdaFJPfRcuD1fxV5586TvI_q22Uy1-uyxhw80p7WhdRn-CLdmHK2Iy6HYVTDz_I9SQ2nvBi-G-_TVnkfBmu0o8amZ2b6-JzTfoCefLFB2R3LCyTvMRVqvZHI1LlByngymVd78gwdFd6MF3mvpoigjjrdcRvgkf3M9DZyYV-WaEIwhWbgotz0572hvq-oV4Q2dCnCQayzCMxykFeR9Jbz8uR55iSKIbYYvabjwwUtuQoQE2k" 
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-body-lg text-body-lg text-pure-white">Monolith Coat</h4>
                  <p className="font-label-caps text-label-caps text-silver-mist mt-xs">Outerwear</p>
                </div>
                <span className="font-body-md text-body-md text-pure-white">$3,200</span>
              </div>
            </div>
            {/* Product Card 3 */}
            <div className="snap-start min-w-[300px] bg-deep-slate rounded-xl p-sm shrink-0 group cursor-pointer">
              <div className="aspect-[3/4] bg-pitch-black rounded-lg mb-sm overflow-hidden relative">
                <img 
                  alt="Eclipse Shades" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAooXTxQhJ_Qtm2yGHAXFArKC6TaHqwMw_QMpZZD4Xz1jVTMGp9ouUYxJJtZfjJia0QJtLGdcZ8zfPETmG6SsawYOQa593fM60Xi1AEt0Sn5gbJ_WdH_8HpXrOr0HAPO0I5gK04L1IgBdvZc_ecDYjG2VEvl5UBGUv9eo4u3uS2iS3Q8c84ROg0hrwibVditkd5Wbi61qFCC8WPczPv-YhR-dDV_fWklU-wEJHL9YQNOokGapaC-Q6Y2Ck0PKZS-mKpDlTjSlj72DIN" 
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-body-lg text-body-lg text-pure-white">Eclipse Shades</h4>
                  <p className="font-label-caps text-label-caps text-silver-mist mt-xs">Accessories</p>
                </div>
                <span className="font-body-md text-body-md text-pure-white">$450</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

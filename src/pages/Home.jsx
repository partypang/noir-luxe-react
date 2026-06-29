import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const HERO_IMAGES = [
  {
    alt: 'High-end luxury fashion editorial photography of a sophisticated female model in premium minimalist black attire, NOIR LUXE Midnight Couture.',
    position: 'center 24%',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzZnb1wBg18fRPdJvkcwy38-9o1dFiGLpOm24OaNG8uJhvVAaV68m3Aeq_rpok17NA--sYkO7MmhaF-_ZqKra9h90cjNthUg8GRm9-5KN6EZhW360Vsi4rkizahjC54Juo-6cBw_d_IoC5taJKNKhwodvwUiGvTb_OO9Xe6iHzo4ebL2LfuU6P6rhO-4Q80vumUatogzQdY2K6dAQABNXfNFjUdyHq8ryIbqetEuQ1uoVBaWVJUc_Z2tuF_ynvA6efYNocMXpQWPZU',
  },
  {
    alt: 'A high-fashion editorial shot of a model wearing an avant-garde, structural black blazer.',
    position: 'center 28%',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3KKXqytVUoB_BfQL1ipMwiaZ90fWzETGmXowmGJLpN1XfppSYjtLwpbqjfYIz4y_GRw3ZdQEqVsCcaoH9FgUzOoqCVxsAxbavETQVpPWHLgNvaq3HWVG70CVZfzPnMjt5IVcSe_vmgNWkXDycHIE-nicDn3NZZ7wPh-Z7nQeqXaMcjUKIr0RDO26mvg8dGciquQ2wCD1Rm4v4ryfvkjlU_pcJt2EV1ZFRpquE5OBJmQBelNuBG9iLh0ONzRJnxFX3R9B9DJfiURr8',
  },
  {
    alt: 'A cinematic corridor with a dark luxury fashion figure walking through shadow.',
    position: 'center 38%',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzpSwHU_sdffd1-9k2n_su6tx26monWRL7gE-7E0S8QYGJGJeQFML8nBtX45eKgoHEqap3Fh7610ufKCcWj1rQBuAvE9aag4VsxJdKZu0TRQEqfyXmF_nAKSONlJsb_PakxCY66Sm3_wqp0EDkim4Rggq-oKmAMDfszKcyNRpEnwPavVWU1TAJv3rLdlwSG6mpJYiV3ebxo1640tTFZqLDfvpFInDbiqvpqXcHV_1hwfdHJPQbWkvOjtMFk8cQOEv0yG9M4jvyoPCw',
  },
]

export default function Home() {
  const { t } = useLanguage()
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % HERO_IMAGES.length)
    }, 5200)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="bg-pitch-black text-on-surface antialiased">
      <main>
        {/* Cinematic Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {HERO_IMAGES.map((image, index) => (
              <img
                key={image.src}
                alt={image.alt}
                aria-hidden={index !== heroIndex}
                className={`absolute inset-0 w-full h-full object-cover object-center mix-blend-overlay transition-all duration-[1600ms] ease-out ${
                  index === heroIndex ? 'opacity-80 scale-100' : 'opacity-0 scale-105'
                }`}
                src={image.src}
                style={{ objectPosition: image.position }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-pitch-black via-pitch-black/40 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center px-container-margin max-w-5xl mx-auto flex flex-col items-center mt-20">
            <p className="font-label-caps text-label-caps text-silver-mist mb-md tracking-[0.2em]">{t('introducing')}</p>
            <h1 className="font-display-xl text-display-xl text-pure-white tracking-tighter mb-lg uppercase">{t('summerNoir')}</h1>
            <p className="font-body-lg text-body-lg text-silver-mist max-w-2xl mx-auto mb-xl">{t('heroDesc')}</p>
            <Link className="inline-flex items-center justify-center font-label-caps text-label-caps text-pure-white bg-primary-container px-[32px] py-[16px] rounded-lg hover:bg-inverse-primary transition-all duration-300 border border-transparent hover:shadow-[0_0_20px_rgba(227,38,82,0.4)]" to="/collection">
              {t('shopCollection')}
              <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            {HERO_IMAGES.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Show hero image ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === heroIndex ? 'w-8 bg-pure-white' : 'w-2.5 bg-pure-white/40 hover:bg-pure-white/70'
                }`}
                onClick={() => setHeroIndex(index)}
              />
            ))}
          </div>
        </section>

        {/* New Arrivals / Bento Grid */}
        <section className="bg-surface py-xl px-container-margin" id="collection">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end mb-xl border-b border-surface-container-high pb-md">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-pure-white">{t('newArrivals')}</h2>
                <p className="font-body-md text-body-md text-silver-mist mt-base">{t('arrivalsDesc')}</p>
              </div>
              <Link className="hidden sm:inline-flex items-center text-silver-mist hover:text-pure-white font-label-caps text-label-caps transition-colors" to="/collection">
                {t('viewAll')} <span className="material-symbols-outlined ml-1 text-[16px]">east</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {/* Apparel Card */}
              <div className="group relative bg-deep-slate rounded-xl overflow-hidden aspect-[4/5] flex flex-col transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-[#949aa4]/20">
                <div className="relative flex-1 p-sm">
                  <img 
                    className="w-full h-full object-cover rounded-lg" 
                    alt="A high-fashion editorial shot of a model wearing an avant-garde, structural black blazer." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3KKXqytVUoB_BfQL1ipMwiaZ90fWzETGmXowmGJLpN1XfppSYjtLwpbqjfYIz4y_GRw3ZdQEqVsCcaoH9FgUzOoqCVxsAxbavETQVpPWHLgNvaq3HWVG70CVZfzPnMjt5IVcSe_vmgNWkXDycHIE-nicDn3NZZ7wPh-Z7nQeqXaMcjUKIr0RDO26mvg8dGciquQ2wCD1Rm4v4ryfvkjlU_pcJt2EV1ZFRpquE5OBJmQBelNuBG9iLh0ONzRJnxFX3R9B9DJfiURr8" 
                  />
                  <div className="absolute top-md right-md bg-pure-white text-pitch-black font-label-caps text-[10px] px-2 py-1 rounded-sm">NEW</div>
                </div>
                <div className="p-md pt-0 bg-deep-slate z-10">
                  <h3 className="font-headline-md text-headline-md text-pure-white mb-xs group-hover:text-primary-container transition-colors">Obsidian Blazer</h3>
                  <p className="font-body-sm text-body-sm text-silver-mist mb-sm line-clamp-2">{t('blazerDesc')}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-label-caps text-label-caps text-pure-white">$850</span>
                    <Link to="/collection" className="text-silver-mist hover:text-pure-white w-8 h-8 flex items-center justify-center rounded-full border border-surface-container-high hover:border-pure-white transition-all">
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bags Card */}
              <div className="group relative bg-deep-slate rounded-xl overflow-hidden aspect-[4/5] flex flex-col transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-[#949aa4]/20">
                <div className="relative flex-1 p-sm">
                  <img 
                    className="w-full h-full object-cover rounded-lg" 
                    alt="A close-up product shot of a sleek, matte black leather tote bag." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGPH7w0hvWLyOV2V0-epDhQRusLksgwcvI2xp1Atf2zPzemxUH1HTPp_yoQ0kme-WJcmCC_DkQkGdmR2un-Sgp9baMTrYZeAaupNb_drih_zGWtTXf3U_n6vrN2gxQcSLDKON5ja5dssX_tN_M0vlBSVZ5Zx0YJ6VIgWRz08hMnb7bJV35DHIjo7VEZH8p8H7JVfwACisx3dlXXWwcSaQ-yDoVisbBRp1VhvpWbnUA58ywm-sOYPBq-Pyg91YmbtYDYSnIDm8Qj5Tk" 
                  />
                </div>
                <div className="p-md pt-0 bg-deep-slate z-10">
                  <h3 className="font-headline-md text-headline-md text-pure-white mb-xs group-hover:text-primary-container transition-colors">Eclipse Tote</h3>
                  <p className="font-body-sm text-body-sm text-silver-mist mb-sm line-clamp-2">{t('toteDesc')}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-label-caps text-label-caps text-pure-white">$1,200</span>
                    <Link to="/product/obsidian-tote" className="text-silver-mist hover:text-pure-white w-8 h-8 flex items-center justify-center rounded-full border border-surface-container-high hover:border-pure-white transition-all">
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Shoes Card */}
              <div className="group relative bg-deep-slate rounded-xl overflow-hidden aspect-[4/5] flex flex-col transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-[#949aa4]/20">
                <div className="relative flex-1 p-sm">
                  <img 
                    className="w-full h-full object-cover rounded-lg" 
                    alt="A dramatic low-angle shot of a pair of architectural black leather boots." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuApTzmODYNNdeGyZYGZWWaUeryTafYeTWCebWqwUtvjP1smhwhCFmcSu9DL4vhbnsiy1sSLLa5OAyScrq-k3THrEkh-SvTOMx6-brZ42EubZnj9x26QTDGiQ7gs5N-n3Egl6PXviyLlBhAwyMGJ3KSqVlKzTvpKwgpZPndZvxpPPMnkOod-3jwA4On1-JiyaGlv3WY9aOlQtPXz_lFazEEj9JFEtmzznxYSD-xgDCrm7S1NdyW3X_l8jouH2a4BaD7JQumKIasWfVse" 
                  />
                </div>
                <div className="p-md pt-0 bg-deep-slate z-10">
                  <h3 className="font-headline-md text-headline-md text-pure-white mb-xs group-hover:text-primary-container transition-colors">Void Ankle Boot</h3>
                  <p className="font-body-sm text-body-sm text-silver-mist mb-sm line-clamp-2">{t('bootDesc')}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-label-caps text-label-caps text-pure-white">$780</span>
                    <Link to="/product/void-ankle-boot" className="text-silver-mist hover:text-pure-white w-8 h-8 flex items-center justify-center rounded-full border border-surface-container-high hover:border-pure-white transition-all">
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-lg text-center sm:hidden">
              <Link className="inline-flex items-center text-pure-white font-label-caps text-label-caps border-b border-pure-white pb-1" to="/collection">
                {t('viewAll')}
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Editorial Section */}
        <section className="bg-pitch-black py-xl lg:py-[120px] px-container-margin relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface-container-lowest to-transparent opacity-50 pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-xl relative z-10">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="max-w-lg">
                <h2 className="font-headline-serif text-headline-serif text-pure-white mb-md leading-tight">{t('artOfStyle')}</h2>
                <p className="font-body-lg text-body-lg text-silver-mist mb-lg">{t('manifestoDesc')}</p>
                <div className="space-y-md">
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-primary-container mr-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <div>
                      <h4 className="font-headline-md text-[18px] text-pure-white mb-xs">{t('uncomprMaterials')}</h4>
                      <p className="font-body-sm text-body-sm text-silver-mist">{t('materialsDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-primary-container mr-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                    <div>
                      <h4 className="font-headline-md text-[18px] text-pure-white mb-xs">{t('structIntegrity')}</h4>
                      <p className="font-body-sm text-body-sm text-silver-mist">{t('structDesc')}</p>
                    </div>
                  </div>
                </div>
                <Link className="inline-block mt-lg font-label-caps text-label-caps text-pure-white border border-pure-white px-[24px] py-[12px] rounded-lg hover:bg-pure-white hover:text-pitch-black transition-colors duration-300" to="/collection">
                  {t('readManifesto')}
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full">
                <img 
                  className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700" 
                  alt="A cinematic corridor with figure walking." 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzpSwHU_sdffd1-9k2n_su6tx26monWRL7gE-7E0S8QYGJGJeQFML8nBtX45eKgoHEqap3Fh7610ufKCcWj1rQBuAvE9aag4VsxJdKZu0TRQEqfyXmF_nAKSONlJsb_PakxCY66Sm3_wqp0EDkim4Rggq-oKmAMDfszKcyNRpEnwPavVWU1TAJv3rLdlwSG6mpJYiV3ebxo1640tTFZqLDfvpFInDbiqvpqXcHV_1hwfdHJPQbWkvOjtMFk8cQOEv0yG9M4jvyoPCw" 
                />
                <div className="absolute inset-0 rounded-xl border border-[#949aa4]/10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

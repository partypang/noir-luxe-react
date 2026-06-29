import React, { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

const SUPPORTED_LANGUAGES = ['EN', 'KO']

const TRANSLATIONS = {
  EN: {
    home: 'Home',
    bags: 'Bags',
    shoes: 'Shoes',
    accessories: 'Accessories',
    admin: 'Admin',
    shopNow: 'Shop Now',
    account: 'Account',

    introducing: 'INTRODUCING',
    summerNoir: 'SUMMER NOIR 2026',
    heroDesc: 'The new standard of quiet luxury. In darkness, true elegance awakens. A refined presence where minimalism meets absolute sophistication.',
    shopCollection: 'Shop the Collection',
    newArrivals: 'New Arrivals',
    arrivalsDesc: 'Curated essentials for the midnight stage.',
    viewAll: 'View All',
    blazerDesc: 'Structured silhouette with metallic accents.',
    toteDesc: 'Matte leather with geometric hardware.',
    bootDesc: 'Architectural heel and seamless leather.',
    artOfStyle: 'The Art of Quiet Luxury',
    manifestoDesc: "We curate the world's most refined pieces. Timeless icons and contemporary masterpieces, selected for those who appreciate silent power and uncompromising elegance.",
    uncomprMaterials: 'Uncompromising Materials',
    materialsDesc: 'Sourced globally, crafted locally with absolute precision.',
    structIntegrity: 'Structural Integrity',
    structDesc: 'Designs that maintain their form and command attention.',
    readManifesto: 'Read the Manifesto',

    bagsTitle: 'THE BAGS',
    bagsDesc: 'Discover our curated collection of luxury handbags. Crafted for the modern silhouette, illuminated by the midnight stage.',
    shoesEyebrow: '2026 SEOUL SNEAKER EDIT',
    shoesTitle: 'THE SHOES',
    shoesDesc: 'Popular sneaker silhouettes for women in their 30s, curated from clean minimal classics to quiet luxury statements.',
    accessoriesEyebrow: 'NOIR DETAILS',
    accessoriesTitle: 'THE ACCESSORIES',
    accessoriesDesc: 'Finishing pieces for quiet luxury. Jewelry, eyewear, scarves, and objects selected to sharpen the silhouette.',
    filters: 'FILTERS',
    clearAll: 'Clear All',
    material: 'Material',
    color: 'Color',
    price: 'Price',
    showingResults: 'Showing {count} Results',
    sortBy: 'Sort by:',
    newest: 'Newest Arrivals',
    priceHigh: 'Price: High to Low',
    priceLow: 'Price: Low to High',
    addBag: 'Add to Bag',
    viewDetails: 'View Details',
    gangnamEdit: 'Gangnam Edit',
    noMaterialsYet: 'No materials yet.',
    noColorsYet: 'No colors yet.',
    accessoriesEmptyTitle: 'Accessories are being curated.',
    accessoriesEmptyDesc: 'The category is ready. Add product names and prices, and this section will become the accessories collection.',

    backToBags: 'Back to Bags',
    curatedIcon: 'CURATED ICON',
    birkinTitle: 'BIRKIN 25 BLACK SWIFT',
    birkinDesc: 'Black Swift leather with palladium hardware. A compact Birkin 25 silhouette selected for quiet authority, clean proportion, and everyday collectability.',
    hardware: 'Hardware',
    year: 'Year',
    swiftNote: 'Swift leather gives the black tone a smooth, deep finish with a softer hand than grained leathers.',
    palladiumNote: 'Palladium hardware keeps the piece modern, restrained, and easy to style from formal looks to denim.',

    yourCart: 'YOUR CART',
    orderSummary: 'ORDER SUMMARY',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    complimentary: 'Complimentary',
    tax: 'Estimated Tax',
    calculatedCheckout: 'Calculated at checkout',
    total: 'Total',
    checkoutBtn: 'PROCEED TO CHECKOUT',
    securePay: 'Secure encrypted payment.',
    cartEmpty: 'Your Cart is Empty',
    cartEmptyDesc: 'Add some premium items to your collection.',
    goToShoes: 'Go to Shoes Collection',
    remove: 'REMOVE',

    footerDesc: 'Elevating the everyday through minimalist design and cinematic luxury.',
    company: 'Company',
    brandStory: 'Brand Story',
    sustainability: 'Sustainability',
    careers: 'Careers',
    support: 'Support',
    legal: 'Legal',
    storeLocator: 'Store Locator',
    contact: 'Contact',
    joinStage: 'Join the Stage',
    newsletterDesc: 'Exclusive access to new collections and events.',
    emailAddress: 'Email Address',
    rights: 'ALL RIGHTS RESERVED.',

    contactInfo: 'Contact Information',
    shippingAddr: 'Shipping Address',
    paymentMethod: 'Payment Method',
    completePurchase: 'COMPLETE PURCHASE',
    processing: 'PROCESSING...',
    firstName: 'First Name',
    lastName: 'Last Name',
    streetAddr: 'Street Address',
    aptOpt: 'Apartment, suite, etc. (optional)',
    city: 'City',
    state: 'State',
    zipCode: 'ZIP Code',
    redirectMsg: 'After clicking "Complete Purchase", you will be redirected to PayPal to complete your purchase securely.',
  },
  KO: {
    home: '홈',
    bags: '가방',
    shoes: '신발',
    accessories: '악세사리',
    admin: '관리자',
    shopNow: '쇼핑하기',
    account: '계정',

    introducing: '소개',
    summerNoir: '서머 누아르 2026',
    heroDesc: '조용한 럭셔리의 새로운 기준. 어둠 속에서 진정한 우아함이 깨어납니다. 미니멀리즘과 절대적인 세련미가 만나는 정제된 존재감.',
    shopCollection: '컬렉션 살펴보기',
    newArrivals: '신상품',
    arrivalsDesc: '미드나이트 무드를 위해 선별한 핵심 아이템.',
    viewAll: '전체 보기',
    blazerDesc: '메탈 포인트가 돋보이는 구조적인 실루엣.',
    toteDesc: '기하학적 하드웨어를 더한 매트 레더 토트.',
    bootDesc: '건축적인 힐과 매끄러운 가죽 라인.',
    artOfStyle: '조용한 럭셔리의 미학',
    manifestoDesc: '우리는 세계에서 가장 정제된 피스를 선별합니다. 조용한 힘과 타협 없는 우아함을 이해하는 이들을 위한 타임리스 아이콘과 동시대적 걸작들.',
    uncomprMaterials: '타협 없는 소재',
    materialsDesc: '전 세계에서 엄선하고 절대적인 정밀함으로 완성합니다.',
    structIntegrity: '구조적 완성도',
    structDesc: '형태를 유지하고 시선을 사로잡는 디자인.',
    readManifesto: '메시지 읽기',

    bagsTitle: '가방',
    bagsDesc: '현대적인 실루엣을 위해 선별한 럭셔리 핸드백 컬렉션. 미드나이트 스테이지 위에서 더욱 선명하게 빛납니다.',
    shoesEyebrow: '2026 서울 스니커즈 에디트',
    shoesTitle: '신발',
    shoesDesc: '30대 여성에게 인기 있는 스니커즈 실루엣을 미니멀 클래식부터 조용한 럭셔리 무드까지 선별했습니다.',
    accessoriesEyebrow: '누아르 디테일',
    accessoriesTitle: '악세사리',
    accessoriesDesc: '조용한 럭셔리를 완성하는 마감의 피스. 주얼리, 아이웨어, 스카프, 오브제를 선별해 실루엣을 또렷하게 만듭니다.',
    filters: '필터',
    clearAll: '전체 해제',
    material: '소재',
    color: '색상',
    price: '가격',
    showingResults: '{count}개 상품',
    sortBy: '정렬:',
    newest: '신상품순',
    priceHigh: '가격 높은순',
    priceLow: '가격 낮은순',
    addBag: '장바구니 담기',
    viewDetails: '상세 보기',
    gangnamEdit: '강남 에디트',
    noMaterialsYet: '등록된 소재가 없습니다.',
    noColorsYet: '등록된 색상이 없습니다.',
    accessoriesEmptyTitle: '악세사리를 선별 중입니다.',
    accessoriesEmptyDesc: '카테고리는 준비되어 있습니다. 상품명과 가격을 추가하면 악세사리 컬렉션으로 표시됩니다.',

    backToBags: '가방으로 돌아가기',
    curatedIcon: '큐레이티드 아이콘',
    birkinTitle: '버킨 25 블랙 스위프트',
    birkinDesc: '팔라듐 하드웨어를 더한 블랙 스위프트 레더. 조용한 권위, 정제된 비율, 데일리 소장 가치를 기준으로 선별한 컴팩트한 버킨 25 실루엣입니다.',
    hardware: '하드웨어',
    year: '연도',
    swiftNote: '스위프트 가죽은 블랙 톤을 매끄럽고 깊게 표현하며, 그레인 가죽보다 부드러운 촉감을 줍니다.',
    palladiumNote: '팔라듐 하드웨어는 포멀한 룩부터 데님까지 모던하고 절제된 분위기로 매치됩니다.',

    yourCart: '장바구니',
    orderSummary: '주문 요약',
    subtotal: '소계',
    shipping: '배송',
    complimentary: '무료',
    tax: '예상 세금',
    calculatedCheckout: '결제 단계에서 계산',
    total: '합계',
    checkoutBtn: '결제 진행',
    securePay: '안전한 암호화 결제.',
    cartEmpty: '장바구니가 비어 있습니다',
    cartEmptyDesc: '컬렉션에서 프리미엄 아이템을 추가해보세요.',
    goToShoes: '신발 컬렉션 보기',
    remove: '삭제',

    footerDesc: '미니멀한 디자인과 시네마틱 럭셔리로 일상을 끌어올립니다.',
    company: '회사',
    brandStory: '브랜드 스토리',
    sustainability: '지속가능성',
    careers: '채용',
    support: '고객 지원',
    legal: '법적 고지',
    storeLocator: '매장 찾기',
    contact: '문의',
    joinStage: '소식 받기',
    newsletterDesc: '새 컬렉션과 이벤트 소식을 가장 먼저 받아보세요.',
    emailAddress: '이메일 주소',
    rights: 'ALL RIGHTS RESERVED.',

    contactInfo: '연락처 정보',
    shippingAddr: '배송지 주소',
    paymentMethod: '결제 수단',
    completePurchase: '결제 완료',
    processing: '처리 중...',
    firstName: '이름',
    lastName: '성',
    streetAddr: '도로명 주소',
    aptOpt: '상세 주소 (선택)',
    city: '도시',
    state: '주/지역',
    zipCode: '우편번호',
    redirectMsg: '"결제 완료"를 누르면 안전한 결제를 위해 PayPal로 이동합니다.',
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const storedLanguage = localStorage.getItem('lang')
    return SUPPORTED_LANGUAGES.includes(storedLanguage) ? storedLanguage : 'EN'
  })

  useEffect(() => {
    localStorage.setItem('lang', language)
  }, [language])

  const setLanguage = (nextLanguage) => {
    setLanguageState(SUPPORTED_LANGUAGES.includes(nextLanguage) ? nextLanguage : 'EN')
  }

  const t = (key, replaceParams = {}) => {
    let text = TRANSLATIONS[language]?.[key] || TRANSLATIONS.EN[key] || key

    Object.keys(replaceParams).forEach((param) => {
      text = text.replace(`{${param}}`, replaceParams[param])
    })

    return text
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

import React, { createContext, useState, useContext, useEffect } from 'react'

const LanguageContext = createContext()

const TRANSLATIONS = {
  EN: {
    // Nav
    home: 'Home',
    bags: 'Bags',
    shoes: 'Shoes',
    admin: 'Admin',
    shopNow: 'Shop Now',
    account: 'Account',
    
    // Home
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
    
    // Bags & Shoes
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
    
    // Cart
    yourCart: 'YOUR CART',
    orderSummary: 'ORDER SUMMARY',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    tax: 'Estimated Tax',
    total: 'Total',
    checkoutBtn: 'PROCEED TO CHECKOUT',
    securePay: 'Secure encrypted payment.',
    cartEmpty: 'Your Cart is Empty',
    cartEmptyDesc: 'Add some premium items to your collection.',
    
    // Checkout
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
    redirectMsg: 'After clicking "Complete Purchase", you will be redirected to PayPal to complete your purchase securely.'
  },
  KO: {
    // Nav
    home: '홈',
    bags: '가방',
    shoes: '신발',
    admin: '관리자',
    shopNow: '지금 쇼핑하기',
    account: '계정',
    
    // Home
    introducing: '소개',
    summerNoir: '써머 느와르 2026',
    heroDesc: '당신의 존재감을 높이세요. 미니멀한 디자인과 타협 없는 시네마틱 퀄리티의 교차점을 경험해 보세요.',
    shopCollection: '컬렉션 쇼핑하기',
    newArrivals: '신상품',
    arrivalsDesc: '자정의 무대를 위해 엄선된 에센셜.',
    viewAll: '모두 보기',
    blazerDesc: '금속성 액센트가 있는 구조적인 실루엣.',
    toteDesc: '기하학적 하드웨어가 돋보이는 매트 가죽.',
    bootDesc: '건축학적인 힐과 이음새 없는 가죽.',
    artOfStyle: '현대적 스타일의 예술',
    manifestoDesc: '우리는 절제를 통해 럭셔리를 정의합니다. 우리의 실루엣은 단지 입기 위한 것이 아니라 침묵의 권위로 주변 공간을 채우기 위해 제작되었습니다.',
    uncomprMaterials: '타협 없는 소재',
    materialsDesc: '전 세계에서 엄선하여 절대적인 정밀함으로 현지에서 제작됩니다.',
    structIntegrity: '구조적 완성도',
    structDesc: '형태를 유지하고 시선을 사로잡는 디자인.',
    readManifesto: '선언문 읽기',
    
    // Bags & Shoes
    filters: '필터',
    clearAll: '모두 지우기',
    material: '소재',
    color: '색상',
    price: '가격',
    showingResults: '{count}개의 결과 표시 중',
    sortBy: '정렬 기준:',
    newest: '신상품순',
    priceHigh: '가격 높은순',
    priceLow: '가격 낮은순',
    addBag: '쇼핑백에 담기',
    viewDetails: '상세 보기',
    
    // Cart
    yourCart: '장바구니',
    orderSummary: '주문 요약',
    subtotal: '소계',
    shipping: '배송비',
    tax: '예상 세금',
    total: '합계',
    checkoutBtn: '결제하기',
    securePay: '안전한 암호화 결제.',
    cartEmpty: '장바구니가 비어 있습니다',
    cartEmptyDesc: '컬렉션에 프리미엄 아이템을 추가해 보세요.',
    
    // Checkout
    contactInfo: '연락처 정보',
    shippingAddr: '배송지 주소',
    paymentMethod: '결제 수단',
    completePurchase: '결제 완료',
    processing: '처리 중...',
    firstName: '이름',
    lastName: '성',
    streetAddr: '도로명 주소',
    aptOpt: '상세 주소 (선택 사항)',
    city: '시/군/구',
    state: '시/도',
    zipCode: '우편번호',
    redirectMsg: '"결제 완료"를 클릭하면 결제를 안전하게 완료할 수 있도록 PayPal로 이동합니다.'
  },
  JA: {
    // Nav
    home: 'ホーム',
    bags: 'バッグ',
    shoes: 'シューズ',
    admin: '管理者',
    shopNow: '今すぐ購入',
    account: 'アカウント',
    
    // Home
    introducing: 'イントロダクション',
    summerNoir: 'サマー ヌワール 2026',
    heroDesc: '存在感を高める。ミニマルなデザインと妥協のないシネマティックなクオリティの融合を体験してください。',
    shopCollection: 'コレクションを見る',
    newArrivals: '新作アイテム',
    arrivalsDesc: '真夜中のステージのために厳選されたエッセンシャル。',
    viewAll: 'すべて見る',
    blazerDesc: 'メタリックなアクセントが効いた構造的なシルエット。',
    toteDesc: '幾何学的なハードウェアを備えたマットレザー。',
    bootDesc: '建築的なヒールとシームレスなレザー。',
    artOfStyle: '現代のスタイルの美学',
    manifestoDesc: '私たちは「控えめさ」を通じてラグジュアリーを定義します。私たちのシルエットは単に着るためだけでなく、静かなる権威で空間を満たすために仕立てられています。',
    uncomprMaterials: '妥協なき素材',
    materialsDesc: '世界中から調達され、絶対的な精度で現地で仕立てられます。',
    structIntegrity: '構造の美',
    structDesc: '美しいフォルムを維持し、視線を集めるデザイン。',
    readManifesto: 'マニフェストを読む',
    
    // Bags & Shoes
    filters: 'フィルター',
    clearAll: 'すべてクリア',
    material: '素材',
    color: 'カラー',
    price: '価格',
    showingResults: '{count} 件の結果を表示中',
    sortBy: '並び替え:',
    newest: '新着順',
    priceHigh: '価格の高い順',
    priceLow: '価格の低い順',
    addBag: 'バッグに追加',
    viewDetails: '詳細を見る',
    
    // Cart
    yourCart: 'ショッピングバッグ',
    orderSummary: '注文内容',
    subtotal: '小計',
    shipping: '配送料',
    tax: '消費税等',
    total: '合計',
    checkoutBtn: 'レジに進む',
    securePay: '安全な暗号化決済。',
    cartEmpty: 'ショッピングバッグは空です',
    cartEmptyDesc: 'コレクションにプレミアムなアイテムを追加してください。',
    
    // Checkout
    contactInfo: '連絡先情報',
    shippingAddr: 'お届け先住所',
    paymentMethod: 'お支払い方法',
    completePurchase: '注文を確定する',
    processing: '処理中...',
    firstName: '名',
    lastName: '姓',
    streetAddr: '住所',
    aptOpt: '建物名・部屋番号 (任意)',
    city: '市区町村',
    state: '都道府県',
    zipCode: '郵便番号',
    redirectMsg: '「注文を確定する」をクリックすると、安全に決済を行うため PayPal に移動します。'
  },
  ZH: {
    // Nav
    home: '首页',
    bags: '包袋',
    shoes: '鞋履',
    admin: '管理后台',
    shopNow: '立即选购',
    account: '个人账户',
    
    // Home
    introducing: '全新推出',
    summerNoir: '黑色夏季 2026',
    heroDesc: '提升您的气场。感受极简设计与极致电影质感的完美融合。',
    shopCollection: '选购系列单品',
    newArrivals: '新品推荐',
    arrivalsDesc: '为深夜舞台悉心呈现的经典单品。',
    viewAll: '查看全部',
    blazerDesc: '带有金属点缀的立体剪裁轮廓。',
    toteDesc: '搭配几何五金配件的哑光皮革。',
    bootDesc: '建筑感鞋跟与无缝皮革设计。',
    artOfStyle: '现代风格之艺',
    manifestoDesc: '我们以克制定义奢华。我们的廓形不仅是为了穿着，更是为了以无声的威严构筑空间。',
    uncomprMaterials: '臻选卓越面料',
    materialsDesc: '全球采购，本土匠心精制。',
    structIntegrity: '非凡结构工艺',
    structDesc: '定型持久、瞩目吸睛的版型设计。',
    readManifesto: '阅读品牌宣言',
    
    // Bags & Shoes
    filters: '筛选',
    clearAll: '清除全部',
    material: '材质',
    color: '颜色',
    price: '价格',
    showingResults: '显示 {count} 个结果',
    sortBy: '排序方式:',
    newest: '新品上架',
    priceHigh: '价格：从高到低',
    priceLow: '价格：从低到高',
    addBag: '加入购物袋',
    viewDetails: '查看详情',
    
    // Cart
    yourCart: '您的购物袋',
    orderSummary: '订单总结',
    subtotal: '小计',
    shipping: '运费',
    tax: '预估税费',
    total: '总计',
    checkoutBtn: '前往结账',
    securePay: '安全加密支付。',
    cartEmpty: '您的购物袋是空的',
    cartEmptyDesc: '为您的收藏增添几件精品吧。',
    
    // Checkout
    contactInfo: '联系信息',
    shippingAddr: '收货地址',
    paymentMethod: '支付方式',
    completePurchase: '完成购买',
    processing: '处理中...',
    firstName: '名字',
    lastName: '姓氏',
    streetAddr: '详细地址',
    aptOpt: '公寓、套房等（选填）',
    city: '城市',
    state: '省份',
    zipCode: '邮政编码',
    redirectMsg: '点击“完成购买”后，您将被重定向至 PayPal 安全完成支付。'
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('lang') || 'EN'
  })

  useEffect(() => {
    localStorage.setItem('lang', language)
  }, [language])

  const t = (key, replaceParams = {}) => {
    let text = TRANSLATIONS[language]?.[key] || TRANSLATIONS['EN']?.[key] || key
    
    // Replace parameters like {count}
    Object.keys(replaceParams).forEach(param => {
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

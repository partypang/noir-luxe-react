import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const DEFAULT_ORDERS = [
  {
    id: 'NL-8265',
    customer: 'Elena Rostova',
    email: 'elena.rostova@example.com',
    date: '2024. 10. 24',
    status: '배송 완료',
    total: 3450,
    items: [
      { name: 'The Obsidian Tote (옵시디언 토트백)', price: 2450, quantity: 1 },
      { name: 'Void Ankle Boot (보이드 앵클 부츠)', price: 1000, quantity: 1 }
    ]
  },
  {
    id: 'NL-8264',
    customer: 'Marcus Vance',
    email: 'marcus.vance@example.com',
    date: '2024. 10. 24',
    status: '처리 중',
    total: 1280,
    items: [
      { name: 'Starlight Clutch (스타라이트 클러치백)', price: 1200, quantity: 1 },
      { name: 'Accessories Kit (액세서리 키트)', price: 80, quantity: 1 }
    ]
  },
  {
    id: 'NL-8263',
    customer: 'Sophia Laurent',
    email: 'sophia.laurent@example.com',
    date: '2024. 10. 23',
    status: '결제 대기',
    total: 5450,
    items: [
      { name: 'The Obsidian Tote (옵시디언 토트백)', price: 2450, quantity: 2 },
      { name: 'Eclipse Shades (이클립스 선글라스)', price: 550, quantity: 1 }
    ]
  },
  {
    id: 'NL-8262',
    customer: 'Kenji Sato',
    email: 'kenji.sato@example.com',
    date: '2024. 10. 22',
    status: '배송 완료',
    total: 2100,
    items: [
      { name: 'Midnight Hobo (미드나잇 호보백)', price: 2100, quantity: 1 }
    ]
  }
]

export default function AdminOrderManagement() {
  const [orders, setOrders] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const localOrders = localStorage.getItem('orders')
    if (localOrders) {
      // Map English statuses to Korean for consistency if any exist
      const parsed = JSON.parse(localOrders).map(order => {
        if (order.status === 'Shipped') order.status = '배송 완료'
        if (order.status === 'Processing') order.status = '처리 중'
        if (order.status === 'Pending' || order.status === 'Paid') order.status = '결제 완료'
        return order
      })
      setOrders(parsed)
    } else {
      localStorage.setItem('orders', JSON.stringify(DEFAULT_ORDERS))
      setOrders(DEFAULT_ORDERS)
    }
  }, [])

  const filteredOrders = orders.filter(order => 
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusStyle = (status) => {
    switch (status) {
      case '배송 완료':
        return 'bg-surface-variant text-pure-white border-deep-slate'
      case '처리 중':
        return 'bg-tertiary/20 text-tertiary border-tertiary/30'
      case '결제 대기':
        return 'bg-primary-container/20 text-primary-container border-primary-container/30'
      case '결제 완료':
        return 'bg-[#dcff00]/20 text-[#dcff00] border-[#dcff00]/30'
      default:
        return 'bg-surface-container text-silver-mist border-deep-slate'
    }
  }

  return (
    <div className="bg-pitch-black text-on-surface font-body-md min-h-screen flex antialiased">
      {/* 사이드바 */}
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
          <Link className="relative flex items-center gap-sm px-sm py-xs text-pure-white bg-surface-container-high/30 transition-colors duration-300" to="/admin">
            <span className="material-symbols-outlined" style={{ color: '#e32652' }}>shopping_cart</span>
            <span className="font-body-md font-bold">주문 관리</span>
          </Link>
          <a className="relative flex items-center gap-sm px-sm py-xs text-silver-mist hover:text-pure-white hover:bg-surface-container-high/50 transition-colors duration-300" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-body-md">상품 관리</span>
          </a>
          <a className="relative flex items-center gap-sm px-sm py-xs text-silver-mist hover:text-pure-white hover:bg-surface-container-high/50 transition-colors duration-300" href="#">
            <span className="material-symbols-outlined">group</span>
            <span className="font-body-md">고객 관리</span>
          </a>
        </nav>
        <div className="p-sm border-t border-deep-slate flex items-center gap-sm">
          <div className="w-10 h-10 rounded-full bg-deep-slate flex items-center justify-center overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              alt="관리자 아바타"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqDnoZAZq3Ws1ginxVjeJkRoihbCXIUJTFbrTL-EC21Ri0IwNHo_UspkYfbmZhfVJ3CzqsJ0W2yBZz_-15X9jk47yrB6V8DdF4fa6LlVKIJ0j8Nr0AoA6e-xCPdhNSAib018a_bNSYK36qulYf57Xz109k6DECItaSBLk3vihfI0KVF6zYb6jclzL-Wiu60R8DPL5QPo64zTdu44q7M0JePc_niClPK7HGmmVS6EIYSNCbBULd5v1_eibEXBAw3J4YY_ROljSUQsfU" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-body-sm text-pure-white">관리자 계정</span>
            <span className="font-label-caps text-label-caps text-silver-mist">총괄 매니저</span>
          </div>
        </div>
      </aside>

      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* 헤더 */}
        <header className="h-20 border-b border-deep-slate bg-surface/90 backdrop-blur-sm flex items-center justify-between px-lg shrink-0">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-pure-white">주문 관리</h1>
            <p className="font-body-sm text-silver-mist">고객의 주문 내역을 실시간으로 모니터링하고 관리합니다.</p>
          </div>
          <div className="flex items-center gap-sm">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-silver-mist">search</span>
              <input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-b border-pure-white focus:outline-none focus:border-primary-container text-pure-white pl-[40px] pr-sm py-xs w-64 placeholder-silver-mist font-body-sm transition-colors rounded-none" 
                placeholder="주문 번호 또는 고객명 검색..." 
                type="text"
              />
            </div>
            <button className="bg-primary-container text-pure-white px-md py-xs rounded-lg font-body-sm hover:bg-inverse-primary transition-colors flex items-center gap-xs">
              <span className="material-symbols-outlined">download</span>
              내보내기
            </button>
          </div>
        </header>

        {/* 스크롤 영역 */}
        <div className="flex-grow overflow-y-auto p-lg space-y-xl">
          {/* 주요 지표 */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="bg-deep-slate p-md rounded-xl border border-deep-slate hover:border-silver-mist/30 transition-colors">
              <div className="flex justify-between items-start mb-sm">
                <span className="font-label-caps text-label-caps text-silver-mist">누적 누적 매출</span>
                <span className="material-symbols-outlined text-tertiary">account_balance_wallet</span>
              </div>
              <div className="font-display-lg text-display-lg text-pure-white font-bold">
                ₩{Math.round(orders.reduce((acc, o) => acc + o.total, 0) * 1300).toLocaleString()}
              </div>
              <div className="mt-xs text-secondary-fixed-dim font-body-sm flex items-center gap-base">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                지난달 대비 +12.5% 상승
              </div>
            </div>
            <div className="bg-deep-slate p-md rounded-xl border border-deep-slate hover:border-silver-mist/30 transition-colors">
              <div className="flex justify-between items-start mb-sm">
                <span className="font-label-caps text-label-caps text-silver-mist">진행 중인 주문</span>
                <span className="material-symbols-outlined text-primary-container">local_shipping</span>
              </div>
              <div className="font-display-lg text-display-lg text-pure-white font-bold">
                {orders.filter(o => o.status !== '배송 완료').length}건
              </div>
              <div className="mt-xs text-silver-mist font-body-sm flex items-center gap-base">
                <span>{orders.filter(o => o.status === '결제 대기').length}건 결제 대기 중</span>
              </div>
            </div>
            <div className="bg-deep-slate p-md rounded-xl border border-deep-slate hover:border-silver-mist/30 transition-colors">
              <div className="flex justify-between items-start mb-sm">
                <span className="font-label-caps text-label-caps text-silver-mist">평균 주문 금액</span>
                <span className="material-symbols-outlined text-silver-mist">receipt_long</span>
              </div>
              <div className="font-display-lg text-display-lg text-pure-white font-bold">
                ₩{orders.length > 0 ? Math.round((orders.reduce((acc, o) => acc + o.total, 0) / orders.length) * 1300).toLocaleString() : 0}
              </div>
              <div className="mt-xs text-secondary-fixed-dim font-body-sm flex items-center gap-base">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                지난달 대비 +5.2% 상승
              </div>
            </div>
          </section>

          {/* 테이블 */}
          <section className="bg-surface rounded-xl border border-deep-slate overflow-hidden">
            <div className="px-md py-sm border-b border-deep-slate flex justify-between items-center bg-surface-container-lowest">
              <h2 className="font-headline-md text-headline-md text-pure-white">최근 주문 내역</h2>
              <button className="text-silver-mist hover:text-pure-white transition-colors flex items-center gap-xs font-body-sm">
                <span className="material-symbols-outlined">filter_list</span>
                필터
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-deep-slate bg-surface-container-low text-silver-mist font-label-caps text-label-caps">
                    <th className="px-md py-sm font-semibold">주문 번호</th>
                    <th className="px-md py-sm font-semibold">고객명</th>
                    <th className="px-md py-sm font-semibold">주문 일자</th>
                    <th className="px-md py-sm font-semibold">주문 상태</th>
                    <th className="px-md py-sm font-semibold text-right">총 결제 금액</th>
                    <th className="px-md py-sm"></th>
                  </tr>
                </thead>
                <tbody className="text-pure-white font-body-sm">
                  {filteredOrders.map(order => (
                    <tr key={order.id} className="border-b border-deep-slate/50 hover:bg-surface-container-high/30 transition-colors group">
                      <td className="px-md py-sm font-bold text-silver-mist group-hover:text-pure-white transition-colors">
                        <Link to={`/admin/order?id=${order.id}`} className="hover:underline text-primary-container">
                          #{order.id}
                        </Link>
                      </td>
                      <td className="px-md py-sm">{order.customer}</td>
                      <td className="px-md py-sm text-silver-mist">{order.date}</td>
                      <td className="px-md py-sm">
                        <span className={`inline-flex items-center px-xs py-base rounded text-[10px] font-bold tracking-widest uppercase border ${getStatusStyle(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-md py-sm text-right font-semibold">${order.total.toLocaleString()}.00</td>
                      <td className="px-md py-sm text-right">
                        <Link to={`/admin/order?id=${order.id}`} className="text-silver-mist hover:text-primary-container transition-colors">
                          <span className="material-symbols-outlined text-[20px]">east</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

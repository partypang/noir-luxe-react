import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function AdminOrderDetailView() {
  const location = useLocation()
  const navigate = useNavigate()
  const [order, setOrder] = useState(null)

  // Parse order ID from query params (?id=NL-xxxxxx)
  const queryParams = new URLSearchParams(location.search)
  const orderId = queryParams.get('id')

  useEffect(() => {
    const localOrders = JSON.parse(localStorage.getItem('orders') || '[]')
    const foundOrder = localOrders.find(o => o.id === orderId)
    if (foundOrder) {
      setOrder(foundOrder)
    } else if (localOrders.length > 0) {
      setOrder(localOrders[0])
    }
  }, [orderId])

  if (!order) {
    return (
      <div className="bg-[#222326] min-h-screen text-pure-white flex items-center justify-center pt-24">
        <p className="font-body-lg text-silver-mist">주문 상세 정보를 불러오는 중입니다...</p>
      </div>
    )
  }

  const handleUpdateStatus = () => {
    const localOrders = JSON.parse(localStorage.getItem('orders') || '[]')
    const nextStatus = order.status === '배송 완료' ? '처리 중' : '배송 완료'
    const updated = localOrders.map(o => {
      if (o.id === order.id) {
        return { ...o, status: nextStatus }
      }
      return o
    })
    localStorage.setItem('orders', JSON.stringify(updated))
    setOrder({ ...order, status: nextStatus })
    alert(`주문 상태가 성공적으로 변경되었습니다: ${nextStatus}`)
  }

  return (
    <div className="bg-[#222326] text-pure-white min-h-screen font-body-md">
      {/* 상단 네비게이션 */}
      <header className="bg-pitch-black/80 backdrop-blur-md fixed top-0 w-full z-50 h-20 flex justify-between items-center px-container-margin max-w-full mx-auto border-b border-deep-slate">
        <div className="flex items-center gap-sm">
          <Link className="text-silver-mist hover:text-pure-white transition-colors duration-300 flex items-center justify-center" to="/admin">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </Link>
          <span className="font-display-lg text-display-lg text-pure-white tracking-tighter" style={{ fontSize: '32px', lineHeight: '1' }}>NOIR LUXE</span>
        </div>
        <div className="flex items-center gap-md">
          <button className="text-silver-mist hover:text-pure-white transition-colors duration-300">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button className="text-silver-mist hover:text-pure-white transition-colors duration-300">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      {/* 메인 캔버스 영역 */}
      <main className="pt-32 pb-xl px-container-margin max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-lg">
        {/* 헤더 및 액션 버튼 */}
        <div className="lg:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-md">
          <div>
            <h1 className="font-headline-serif text-headline-serif text-pure-white">주문 상세 #{order.id}</h1>
            <p className="font-body-md text-body-md text-silver-mist mt-xs">주문 일시: {order.date} (14:32 PST)</p>
          </div>
          <div className="flex gap-sm">
            <button className="bg-transparent text-silver-mist border border-transparent hover:border-silver-mist transition-all duration-300 font-label-caps text-label-caps py-[12px] px-[24px] rounded flex items-center gap-xs">
              <span className="material-symbols-outlined text-sm">print</span>
              포장 명세서 출력
            </button>
            <button 
              onClick={handleUpdateStatus}
              className="bg-primary-container text-on-primary-container font-label-caps text-label-caps py-[12px] px-[24px] rounded flex items-center gap-xs hover:bg-primary transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-sm">edit</span>
              배송 상태 업데이트
            </button>
          </div>
        </div>

        {/* 왼쪽 열: 배송 타임라인 및 상품 목록 */}
        <div className="lg:col-span-8 flex flex-col gap-lg">
          {/* 배송 상태 타임라인 */}
          <section className="bg-deep-slate rounded-xl p-md border border-surface-variant">
            <h2 className="font-label-caps text-label-caps text-silver-mist mb-md tracking-widest">배송 처리 상태</h2>
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center mt-lg mb-sm">
              {/* 타임라인 연결선 */}
              <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-surface-variant md:hidden"></div>
              <div className="hidden md:block absolute top-[15px] left-0 right-0 h-[2px] bg-surface-variant"></div>
              
              {/* 단계 1: 주문 접수 */}
              <div className="relative flex md:flex-col items-center gap-sm md:gap-xs z-10 w-full md:w-auto mb-md md:mb-0">
                <div className="w-8 h-8 rounded-full bg-[#dcff00] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-pitch-black text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <div className="md:text-center ml-sm md:ml-0">
                  <p className="font-label-caps text-label-caps text-pure-white">주문 접수</p>
                  <p className="font-body-sm text-body-sm text-silver-mist mt-1">{order.date}</p>
                </div>
              </div>

              {/* 단계 2: 결제 완료 */}
              <div className="relative flex md:flex-col items-center gap-sm md:gap-xs z-10 w-full md:w-auto mb-md md:mb-0">
                <div className="w-8 h-8 rounded-full bg-[#dcff00] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-pitch-black text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <div className="md:text-center ml-sm md:ml-0">
                  <p className="font-label-caps text-label-caps text-pure-white">결제 확인</p>
                  <p className="font-body-sm text-body-sm text-silver-mist mt-1">{order.date}</p>
                </div>
              </div>

              {/* 단계 3: 상품 준비 중 */}
              <div className="relative flex md:flex-col items-center gap-sm md:gap-xs z-10 w-full md:w-auto mb-md md:mb-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  order.status === '배송 완료' 
                    ? 'bg-[#dcff00]' 
                    : 'bg-deep-slate border-2 border-[#dcff00]'
                }`}>
                  {order.status === '배송 완료' ? (
                    <span className="material-symbols-outlined text-pitch-black text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-[#dcff00]"></div>
                  )}
                </div>
                <div className="md:text-center ml-sm md:ml-0">
                  <p className="font-label-caps text-label-caps text-pure-white">상품 준비 중</p>
                  <p className="font-body-sm text-body-sm text-silver-mist mt-1">
                    {order.status === '배송 완료' ? '완료' : '진행 중'}
                  </p>
                </div>
              </div>

              {/* 단계 4: 배송 완료 */}
              <div className="relative flex md:flex-col items-center gap-sm md:gap-xs z-10 w-full md:w-auto">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  order.status === '배송 완료'
                    ? 'bg-[#dcff00]'
                    : 'bg-deep-slate border-2 border-surface-variant'
                }`}>
                  <span className={`material-symbols-outlined text-sm ${
                    order.status === '배송 완료' ? 'text-pitch-black' : 'text-silver-mist'
                  }`} style={{ fontVariationSettings: order.status === '배송 완료' ? "'FILL' 1" : "'FILL' 0" }}>
                    local_shipping
                  </span>
                </div>
                <div className="md:text-center ml-sm md:ml-0">
                  <p className={`font-label-caps text-label-caps ${
                    order.status === '배송 완료' ? 'text-pure-white' : 'text-silver-mist'
                  }`}>배송 완료</p>
                  <p className={`font-body-sm text-body-sm ${
                    order.status === '배송 완료' ? 'text-silver-mist' : 'text-surface-variant'
                  } mt-1`}>
                    {order.status === '배송 완료' ? '완료' : '대기 중'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 주문 상품 리스트 */}
          <section className="bg-deep-slate rounded-xl p-md border border-surface-variant">
            <h2 className="font-label-caps text-label-caps text-silver-mist mb-md tracking-widest">주문 상품 목록</h2>
            {order.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-md border-b border-surface-variant pb-md mb-md last:border-0 last:mb-0 last:pb-0">
                <div className="w-24 h-24 shrink-0 bg-pitch-black rounded overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    alt={item.name}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANS56f1pi2i15rVUATotZxFp31ASq7IQPBPIm1_iQtVWYX9DIodK0GF8D5XBFbUDDbeynjShhszRMwqyjlhL3JPOLcZOYKCHSeqZgsFo9cyaCY3B81Oe5PeMFoFh1obqFPnUB5gv9XIWuFsW-bwqV2jFsxdlu6AHUro03LkXbQ-rTJ8R05ex8C8jj0NSDKyqyGfpA9uu7DI8Cb6-__WwyLJoL_oRdPAbeQcXMDmAUf1OTXXAkQR--3Svj1GExsg1Iab-4oarCpIvvV" 
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-headline-md text-headline-md text-pure-white">{item.name}</h3>
                  <p className="font-body-sm text-body-sm text-silver-mist mt-xs">색상: Pitch Black | 식별번호(SKU): NL-ITEM-{100 + idx}</p>
                </div>
                <div className="text-right">
                  <p className="font-body-lg text-body-lg text-pure-white">₩{(item.price * 1300).toLocaleString()}</p>
                  <p className="font-body-sm text-body-sm text-silver-mist mt-xs">수량: {item.quantity}개</p>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* 오른쪽 열: 고객 정보 및 결제 요약 */}
        <div className="lg:col-span-4 flex flex-col gap-lg">
          {/* 고객 정보 */}
          <section className="bg-deep-slate rounded-xl p-md border border-surface-variant">
            <div className="flex justify-between items-center mb-md">
              <h2 className="font-label-caps text-label-caps text-silver-mist tracking-widest">고객 정보</h2>
              <a className="text-silver-mist hover:text-pure-white font-body-sm text-body-sm underline" href="#">프로필 보기</a>
            </div>
            <div className="flex items-center gap-sm mb-md">
              <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center">
                <span className="font-headline-md text-headline-md text-pure-white">
                  {order.customer.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-pure-white" style={{ fontSize: '18px' }}>{order.customer}</p>
                <p className="font-body-sm text-body-sm text-silver-mist">{order.email || 'customer@example.com'}</p>
              </div>
            </div>
            <div className="space-y-sm pt-sm border-t border-surface-variant">
              <div>
                <p className="font-label-caps text-label-caps text-silver-mist mb-xs">배송지 주소</p>
                <p className="font-body-sm text-body-sm text-pure-white leading-relaxed">
                  {order.customer}<br/>
                  1420 Luxury Lane, Apt 4B<br/>
                  Beverly Hills, CA 90210<br/>
                  United States (미국)
                </p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-silver-mist mb-xs mt-sm">연락처</p>
                <p className="font-body-sm text-body-sm text-pure-white">+1 (555) 019-8234</p>
              </div>
            </div>
          </section>

          {/* 결제 요약 */}
          <section className="bg-deep-slate rounded-xl p-md border border-surface-variant">
            <h2 className="font-label-caps text-label-caps text-silver-mist mb-md tracking-widest">결제 요약</h2>
            <div className="space-y-sm font-body-sm text-body-sm">
              <div className="flex justify-between text-silver-mist">
                <span>주문 소계</span>
                <span>₩{Math.round((order.total / 1.0875) * 1300).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-silver-mist">
                <span>배송비 (특급 배송)</span>
                <span>무료 배송 (Complimentary)</span>
              </div>
              <div className="flex justify-between text-silver-mist">
                <span>세금 (부가가치세 포함)</span>
                <span>₩{Math.round((order.total - (order.total / 1.0875)) * 1300).toLocaleString()}</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-md pt-md border-t border-surface-variant font-headline-md text-headline-md text-pure-white">
              <span>최종 결제 합계</span>
              <span>₩{Math.round(order.total * 1300).toLocaleString()}</span>
            </div>
            <div className="mt-md bg-pitch-black p-sm rounded flex items-center gap-sm">
              <span className="material-symbols-outlined text-silver-mist">payments</span>
              <div>
                <p className="font-body-sm text-body-sm text-pure-white">PayPal로 결제 완료</p>
                <p className="font-label-caps text-label-caps text-silver-mist mt-xs" style={{ fontSize: '10px' }}>거래 번호: TXN-PP-{order.id}A</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import BagsCollection from './pages/BagsCollection.jsx'
import ShoesCollection from './pages/ShoesCollection.jsx'
import AccessoriesCollection from './pages/AccessoriesCollection.jsx'
import ObsidianToteDetail from './pages/ObsidianToteDetail.jsx'
import ObsidianTotePremiumExperience from './pages/ObsidianTotePremiumExperience.jsx'
import HermesBirkin25Detail from './pages/HermesBirkin25Detail.jsx'
import VoidAnkleBootDetail from './pages/VoidAnkleBootDetail.jsx'
import ShoppingCart from './pages/ShoppingCart.jsx'
import SecureCheckoutPayPal from './pages/SecureCheckoutPayPal.jsx'
import MembershipRegistration from './pages/MembershipRegistration.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminOrderManagement from './pages/AdminOrderManagement.jsx'
import AdminOrderDetailView from './pages/AdminOrderDetailView.jsx'
import AdminProductRegistration from './pages/AdminProductRegistration.jsx'

function CustomerLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">{children}</div>
      </div>
      <Footer />
    </>
  )
}

function MaterialIconGuard() {
  useEffect(() => {
    const protectIcons = () => {
      document.querySelectorAll('.material-symbols-outlined').forEach((icon) => {
        icon.classList.add('notranslate')
        icon.setAttribute('translate', 'no')
        icon.setAttribute('aria-hidden', 'true')
      })
    }

    protectIcons()
    const observer = new MutationObserver(protectIcons)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return null
}

// Protected Route for Admin Portal
function AdminRoute({ children }) {
  const isAuthenticated = sessionStorage.getItem('admin_auth') === 'true'
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <MaterialIconGuard />
      <Routes>
        {/* Customer Facing Routes with Navbar and Footer */}
        <Route path="/" element={<CustomerLayout><Home /></CustomerLayout>} />
        <Route path="/collection" element={<CustomerLayout><BagsCollection /></CustomerLayout>} />
        <Route path="/shoes" element={<CustomerLayout><ShoesCollection /></CustomerLayout>} />
        <Route path="/accessories" element={<CustomerLayout><AccessoriesCollection /></CustomerLayout>} />
        <Route path="/product/obsidian-tote" element={<CustomerLayout><ObsidianToteDetail /></CustomerLayout>} />
        <Route path="/product/obsidian-tote/premium" element={<CustomerLayout><ObsidianTotePremiumExperience /></CustomerLayout>} />
        <Route path="/product/hermes-birkin-25-black-swift" element={<CustomerLayout><HermesBirkin25Detail /></CustomerLayout>} />
        <Route path="/product/void-ankle-boot" element={<CustomerLayout><VoidAnkleBootDetail /></CustomerLayout>} />
        <Route path="/cart" element={<CustomerLayout><ShoppingCart /></CustomerLayout>} />
        <Route path="/login" element={<MembershipRegistration />} />
        <Route path="/register" element={<MembershipRegistration />} />

        {/* Transactional Routes (No standard header/footer) */}
        <Route path="/checkout" element={<SecureCheckoutPayPal />} />

        {/* Admin Login Route */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route path="/admin" element={<AdminRoute><AdminOrderManagement /></AdminRoute>} />
        <Route path="/admin/order" element={<AdminRoute><AdminOrderDetailView /></AdminRoute>} />
        <Route path="/admin/products/new" element={<AdminRoute><AdminProductRegistration /></AdminRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

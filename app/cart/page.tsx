'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'واي بروتين - شوكولاتة', price: 850, quantity: 1, image: '🥛' },
    { id: 2, name: 'كرياتين مونوهيدرات', price: 350, quantity: 2, image: '💪' },
    { id: 3, name: 'شيكر بروتين', price:  85, quantity: 1, image: '🥤' },
  ])

  const updateQuantity = (id:  number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems. reduce((sum, item) => sum + item.price * item. quantity, 0)
  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + shipping

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#11111b]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-purple-500 rounded-xl flex items-center justify-center text-xl">
                🏋️
              </div>
              <span className="text-xl font-bold gradient-text">FitCoach Pro</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            سلة <span className="gradient-text">التسوق</span> 🛒
          </h1>
          <p className="text-gray-400">
            {cartItems.length} منتجات في السلة
          </p>
        </div>

        {cartItems.length > 0 ?  (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="card flex items-center gap-4">
                  <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center text-4xl">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-green-400 font-bold">{item.price} ج. م</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      -
                    </button>
                    <span className="font-bold w-8 text-center">{item. quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-left w-24">
                    <p className="font-bold">{item.price * item.quantity} ج.م</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 hover:text-red-300 text-xl"
                  >
                    🗑️
                  </button>
                </div>
              ))}

              <Link href="/store" className="text-green-400 hover:underline inline-block mt-4">
                ← متابعة التسوق
              </Link>
            </div>

            {/* Order Summary */}
            <div className="card h-fit">
              <h2 className="text-xl font-bold mb-6">ملخص الطلب</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">المجموع الفرعي</span>
                  <span>{subtotal} ج.م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">الشحن</span>
                  <span>{shipping === 0 ? 'مجاني 🎉' : `${shipping} ج.م`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-500">
                    أضف {500 - subtotal} ج. م للحصول على شحن مجاني
                  </p>
                )}
                <hr className="border-white/10" />
                <div className="flex justify-between text-lg font-bold">
                  <span>الإجمالي</span>
                  <span className="text-green-400">{total} ج.م</span>
                </div>
              </div>

              {/* Coupon */}
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="كود الخصم"
                  className="input-field flex-1 text-sm"
                />
                <button className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  تطبيق
                </button>
              </div>

              <Link href="/checkout" className="btn-primary w-full block text-center">
                إتمام الشراء ←
              </Link>

              <div className="mt-4 text-center text-sm text-gray-500">
                <span>🔒 دفع آمن 100%</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold mb-2">السلة فارغة!</h2>
            <p className="text-gray-400 mb-6">لم تضف أي منتجات بعد</p>
            <Link href="/store" className="btn-primary inline-block">
              تصفح المتجر
            </Link>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  )
}
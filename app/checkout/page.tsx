'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  const bookTitle = searchParams.get('title') || 'كتاب إلكتروني'
  const bookPrice = searchParams. get('price') || '0'
  const bookId = searchParams.get('book') || '0'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false)
      setSuccess(true)
    }, 3000)
  }

  if (success) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-20 flex items-center justify-center min-h-screen">
          <div className="card max-w-md w-full text-center py-12">
            <div className="text-7xl mb-6">🎉</div>
            <h1 className="text-3xl font-bold mb-4">تم الشراء بنجاح! </h1>
            <p className="text-gray-400 mb-2">شكراً لك على الشراء</p>
            <p className="text-gray-400 mb-6">
              تم إرسال <span className="text-white font-medium">"{bookTitle}"</span> إلى بريدك الإلكتروني
            </p>
            <div className="p-4 bg-green-500/10 rounded-xl mb-6">
              <p className="text-green-400 text-sm">📧 تحقق من بريدك الإلكتروني</p>
              <p className="text-white font-medium mt-1">{email}</p>
            </div>
            <div className="flex gap-3">
              <Link href="/store" className="btn-secondary flex-1">
                تصفح المزيد
              </Link>
              <Link href="/" className="btn-primary flex-1">
                الرئيسية
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
          {/* Progress */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm">✓</span>
              <span className="text-sm">اختيار الكتاب</span>
            </div>
            <div className="w-12 h-0.5 bg-green-500"></div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm">2</span>
              <span className="text-sm font-bold">الدفع</span>
            </div>
            <div className="w-12 h-0.5 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">3</span>
              <span className="text-sm text-gray-400">التحميل</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card">
                <h2 className="text-xl font-bold mb-6">📧 بيانات التوصيل</h2>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">البريد الإلكتروني (سيتم إرسال الكتاب عليه)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email. com"
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div className="card">
                <h2 className="text-xl font-bold mb-6">💳 طريقة الدفع</h2>
                <div className="space-y-3">
                  <label
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e. target.value)}
                      className="hidden"
                    />
                    <span className="text-2xl">💳</span>
                    <div>
                      <p className="font-bold">بطاقة ائتمان / Debit</p>
                      <p className="text-sm text-gray-400">Visa, Mastercard, Meeza</p>
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'vodafone'
                        ? 'border-green-500 bg-green-500/10'
                        :  'border-white/10 hover: border-white/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="vodafone"
                      checked={paymentMethod === 'vodafone'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="hidden"
                    />
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="font-bold">محفظة إلكترونية</p>
                      <p className="text-sm text-gray-400">Vodafone Cash, Orange Money, Etisalat Cash</p>
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'instapay'
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="instapay"
                      checked={paymentMethod === 'instapay'}
                      onChange={(e) => setPaymentMethod(e. target.value)}
                      className="hidden"
                    />
                    <span className="text-2xl">🏦</span>
                    <div>
                      <p className="font-bold">InstaPay</p>
                      <p className="text-sm text-gray-400">تحويل بنكي فوري</p>
                    </div>
                  </label>
                </div>

                {/* Card Details */}
                {paymentMethod === 'card' && (
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">رقم البطاقة</label>
                      <input type="text" placeholder="1234 5678 9012 3456" className="input-field" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">تاريخ الانتهاء</label>
                        <input type="text" placeholder="MM/YY" className="input-field" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">CVV</label>
                        <input type="text" placeholder="123" className="input-field" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="card h-fit sticky top-24">
              <h2 className="text-xl font-bold mb-6">📖 ملخص الطلب</h2>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl mb-6">
                <div className="text-4xl">📕</div>
                <div>
                  <p className="font-bold">{bookTitle}</p>
                  <p className="text-sm text-gray-400">كتاب إلكتروني - PDF</p>
                </div>
              </div>

              <div className="space-y-3 py-4 border-t border-white/10">
                <div className="flex justify-between">
                  <span className="text-gray-400">السعر</span>
                  <span>{bookPrice} ج.م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">الخصم</span>
                  <span className="text-green-400">- 0 ج.م</span>
                </div>
              </div>

              <div className="flex justify-between py-4 border-t border-white/10 text-lg font-bold">
                <span>الإجمالي</span>
                <span className="text-green-400">{bookPrice} ج.م</span>
              </div>

              <button
                onClick={handleSubmit}
                disabled={processing || !email}
                className="btn-primary w-full py-4 text-lg disabled:opacity-50"
              >
                {processing ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span>
                    جاري المعالجة... 
                  </span>
                ) : (
                  'ادفع الآن ✓'
                )}
              </button>

              <div className="mt-4 space-y-2 text-center text-xs text-gray-500">
                <p>🔒 دفع آمن 100% عبر بوابات معتمدة</p>
                <p>📧 سيتم إرسال الكتاب فوراً بعد الدفع</p>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="text-center mt-8">
            <Link href="/store" className="text-gray-400 hover: text-white transition-colors">
              ← العودة للمكتبة
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
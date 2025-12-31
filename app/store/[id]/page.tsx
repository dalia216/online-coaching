'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function BookPage() {
  const [email, setEmail] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Sample book data (in real app, fetch by ID)
  const book = {
    id: 2,
    title:  'أسرار خسارة الدهون',
    category: 'تغذية',
    price: 149,
    isFree: false,
    cover: '📕',
    pages: 120,
    downloads: 1856,
    rating:  4.9,
    reviews: 234,
    author: 'كوتش أحمد محمد',
    language: 'العربية',
    format: 'PDF',
    size: '15 MB',
    description: 'الدليل الشامل لخسارة الدهون بطريقة صحية ومستدامة.  يتضمن هذا الكتاب كل ما تحتاج معرفته عن آليات حرق الدهون، التغذية السليمة، وأفضل الاستراتيجيات للوصول لوزنك المثالي.',
    features: [
      'شرح علمي مبسط لآليات حرق الدهون',
      'خطط غذائية جاهزة للتطبيق',
      'حساب السعرات والماكروز',
      'أخطاء شائعة يجب تجنبها',
      'نصائح للحفاظ على الوزن بعد الخسارة',
      'تمارين مساعدة لحرق الدهون',
    ],
    chapters: [
      'الفصل 1: فهم آلية حرق الدهون',
      'الفصل 2: حساب احتياجاتك من السعرات',
      'الفصل 3: الماكروز وأهميتها',
      'الفصل 4: خطط غذائية عملية',
      'الفصل 5: التعامل مع الجوع والرغبة',
      'الفصل 6: التمارين المساعدة',
      'الفصل 7: الحفاظ على النتائج',
    ],
  }

  const relatedBooks = [
    { id: 3, title: '50 وصفة صحية للرياضيين', price: 99, cover: '📗', rating: 4.7 },
    { id: 9, title: 'الصيام المتقطع - الدليل الشامل', price: 119, cover: '📗', rating: 4.7 },
    { id: 6, title: 'دليل المكملات الغذائية', price: 0, cover: '📓', rating: 4.5, isFree: true },
  ]

  const reviews = [
    { id: 1, name: 'سارة أحمد', rating: 5, date: 'منذ أسبوع', comment: 'كتاب رائع!  المعلومات علمية وسهلة الفهم.  طبقت النصائح وخسيت 5 كيلو في شهر.' },
    { id: 2, name: 'محمد علي', rating: 5, date: 'منذ أسبوعين', comment: 'أفضل كتاب قرأته عن خسارة الوزن. شرح مفصل ومنظم.' },
    { id: 3, name: 'نور حسن', rating:  4, date:  'منذ شهر', comment:  'محتوى ممتاز وخطط عملية.  أنصح به بشدة.' },
  ]

  const handleFreeDownload = () => {
    setShowModal(true)
    setSuccess(false)
  }

  const handleSubmitEmail = (e:  React.FormEvent) => {
    e.preventDefault()
    setDownloading(true)
    setTimeout(() => {
      setDownloading(false)
      setSuccess(true)
      setEmail('')
    }, 2000)
  }

  const handlePurchase = () => {
    window.location.href = `/checkout?book=${book. id}&title=${encodeURIComponent(book.title)}&price=${book.price}`
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>←</span>
            <Link href="/store" className="hover:text-white">المكتبة</Link>
            <span>←</span>
            <span className="text-white">{book.title}</span>
          </div>

          {/* Book Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Book Cover */}
            <div className="card flex items-center justify-center py-20 bg-gradient-to-br from-white/5 to-white/10">
              <span className="text-[200px]">{book.cover}</span>
            </div>

            {/* Book Info */}
            <div>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                {book.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">{book.title}</h1>
              <p className="text-gray-400 mb-4">بواسطة {book.author}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-yellow-500">{'⭐'.repeat(Math.floor(book. rating))}</span>
                <span className="font-bold">{book.rating}</span>
                <span className="text-gray-500">({book.reviews} تقييم)</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{book.downloads} تحميل</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                {book.isFree ? (
                  <span className="text-4xl font-bold text-green-400">مجاني</span>
                ) : (
                  <span className="text-4xl font-bold text-green-400">{book.price} ج.م</span>
                )}
              </div>

              {/* Book Meta */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl">
                  <p className="text-gray-400 text-sm">📄 عدد الصفحات</p>
                  <p className="font-bold">{book.pages} صفحة</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl">
                  <p className="text-gray-400 text-sm">📁 الصيغة</p>
                  <p className="font-bold">{book. format}</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl">
                  <p className="text-gray-400 text-sm">🌐 اللغة</p>
                  <p className="font-bold">{book. language}</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl">
                  <p className="text-gray-400 text-sm">💾 الحجم</p>
                  <p className="font-bold">{book.size}</p>
                </div>
              </div>

              {/* Action Button */}
              {book.isFree ?  (
                <button onClick={handleFreeDownload} className="btn-primary w-full py-4 text-lg mb-4">
                  📧 حمّل مجاناً الآن
                </button>
              ) : (
                <button onClick={handlePurchase} className="w-full py-4 text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:opacity-90 transition-opacity mb-4">
                  💳 اشتري الآن - {book.price} ج.م
                </button>
              )}

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <span>🔒 دفع آمن</span>
                <span>📧 توصيل فوري</span>
                <span>💯 ضمان الجودة</span>
              </div>
            </div>
          </div>

          {/* Description & Features */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h2 className="text-xl font-bold mb-4">📖 عن الكتاب</h2>
              <p className="text-gray-300 leading-relaxed">{book.description}</p>
            </div>
            <div className="card">
              <h2 className="text-xl font-bold mb-4">✨ ماذا ستتعلم</h2>
              <ul className="space-y-3">
                {book. features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Chapters */}
          <div className="card mb-12">
            <h2 className="text-xl font-bold mb-6">📚 فهرس الكتاب</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {book.chapters.map((chapter, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                  <span className="w-8 h-8 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{chapter}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="card mb-12">
            <h2 className="text-xl font-bold mb-6">⭐ آراء القراء</h2>
            <div className="space-y-4">
              {reviews. map((review) => (
                <div key={review. id} className="p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center font-bold">
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="font-bold">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Books */}
          <div>
            <h2 className="text-2xl font-bold mb-6">📚 كتب مشابهة</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedBooks.map((item) => (
                <Link key={item.id} href={`/store/${item.id}`} className="card hover:scale-105 transition-transform">
                  <div className="h-32 flex items-center justify-center text-6xl mb-4">
                    {item.cover}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    {item.isFree ? (
                      <span className="text-green-400 font-bold">مجاني</span>
                    ) : (
                      <span className="text-green-400 font-bold">{item.price} ج.م</span>
                    )}
                    <span className="text-yellow-500 text-sm">⭐ {item.rating}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Back */}
          <div className="text-center mt-8">
            <Link href="/store" className="text-gray-400 hover:text-white transition-colors">
              ← العودة للمكتبة
            </Link>
          </div>
        </div>
      </div>

      {/* Download Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="card max-w-md w-full relative">
            <button
              onClick={() => { setShowModal(false); setSuccess(false); }}
              className="absolute top-4 left-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {! success ?  (
              <>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{book.cover}</div>
                  <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                  <p className="text-gray-400 text-sm">أدخل بريدك الإلكتروني وسنرسل لك الكتاب فوراً</p>
                </div>

                <form onSubmit={handleSubmitEmail} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@email.com"
                      className="input-field"
                      required
                    />
                  </div>
                  <button type="submit" disabled={downloading} className="btn-primary w-full py-3 disabled:opacity-50">
                    {downloading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin">⏳</span>
                        جاري الإرسال... 
                      </span>
                    ) : (
                      'أرسل الكتاب لإيميلي 📧'
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2">تم بنجاح! </h3>
                <p className="text-gray-400 mb-6">تم إرسال الكتاب إلى بريدك الإلكتروني</p>
                <button onClick={() => { setShowModal(false); setSuccess(false); }} className="btn-secondary">
                  إغلاق
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
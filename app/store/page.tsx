'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [email, setEmail] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedBook, setSelectedBook] = useState<any>(null)
  const [downloading, setDownloading] = useState(false)
  const [success, setSuccess] = useState(false)

  const categories = [
    { id: 'all', name: 'الكل', icon: '📚' },
    { id: 'free', name: 'مجاني', icon: '🎁' },
    { id: 'nutrition', name: 'تغذية', icon:  '🥗' },
    { id: 'workout', name: 'تمارين', icon: '💪' },
    { id: 'mindset', name: 'تحفيز', icon: '🧠' },
    { id: 'recipes', name: 'وصفات', icon: '🍳' },
  ]

  const books = [
    {
      id: 1,
      title: 'دليل المبتدئين للياقة البدنية',
      category: 'workout',
      price:  0,
      isFree: true,
      cover: '📖',
      pages: 45,
      downloads: 2340,
      rating:  4.8,
      description: 'كل ما تحتاج معرفته لبدء رحلتك الرياضية من الصفر',
    },
    {
      id: 2,
      title:  'أسرار خسارة الدهون',
      category: 'nutrition',
      price:  149,
      isFree: false,
      cover:  '📕',
      pages:  120,
      downloads:  1856,
      rating:  4.9,
      description: 'الدليل الشامل لخسارة الدهون بطريقة صحية ومستدامة',
    },
    {
      id: 3,
      title: '50 وصفة صحية للرياضيين',
      category: 'recipes',
      price: 99,
      isFree: false,
      cover:  '📗',
      pages: 85,
      downloads:  1245,
      rating:  4.7,
      description: 'وصفات لذيذة وسهلة التحضير غنية بالبروتين',
    },
    {
      id:  4,
      title: 'خطة تمارين منزلية 30 يوم',
      category:  'workout',
      price: 0,
      isFree: true,
      cover: '📘',
      pages:  35,
      downloads:  3120,
      rating:  4.6,
      description: 'تمارين فعالة بدون معدات يمكنك ممارستها في المنزل',
    },
    {
      id: 5,
      title: 'عقلية البطل - التحفيز الرياضي',
      category: 'mindset',
      price: 129,
      isFree: false,
      cover: '📙',
      pages: 95,
      downloads:  987,
      rating:  4.9,
      description:  'كيف تبني عقلية قوية وتحافظ على التزامك',
    },
    {
      id:  6,
      title: 'دليل المكملات الغذائية',
      category: 'nutrition',
      price: 0,
      isFree: true,
      cover: '📓',
      pages:  40,
      downloads: 2567,
      rating:  4.5,
      description:  'كل ما تحتاج معرفته عن المكملات الغذائية للرياضيين',
    },
    {
      id:  7,
      title: 'بناء العضلات للمبتدئين',
      category: 'workout',
      price: 179,
      isFree: false,
      cover: '📕',
      pages:  150,
      downloads:  1432,
      rating:  4.8,
      description: 'الدليل الكامل لبناء العضلات وزيادة الكتلة العضلية',
    },
    {
      id: 8,
      title: 'وصفات سموذي البروتين',
      category: 'recipes',
      price:  0,
      isFree: true,
      cover:  '📒',
      pages:  25,
      downloads:  1890,
      rating: 4.4,
      description:  '20 وصفة سموذي لذيذة وغنية بالبروتين',
    },
    {
      id: 9,
      title: 'الصيام المتقطع - الدليل الشامل',
      category: 'nutrition',
      price:  119,
      isFree: false,
      cover: '📗',
      pages: 80,
      downloads: 2100,
      rating:  4.7,
      description: 'كل ما تحتاج معرفته عن الصيام المتقطع وفوائده',
    },
  ]

  const filteredBooks = activeCategory === 'all'
    ? books
    : activeCategory === 'free'
    ? books.filter(b => b.isFree)
    : books.filter(b => b.category === activeCategory)

  const handleFreeDownload = (book:  any) => {
    setSelectedBook(book)
    setShowModal(true)
    setSuccess(false)
  }

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setDownloading(true)
    
    // Simulate sending email
    setTimeout(() => {
      setDownloading(false)
      setSuccess(true)
      setEmail('')
    }, 2000)
  }

  const handlePaidPurchase = (book: any) => {
    setSelectedBook(book)
    // Navigate to checkout
    window.location.href = `/checkout?book=${book.id}&title=${encodeURIComponent(book.title)}&price=${book.price}`
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">📚</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              مكتبة <span className="gradient-text">FitCoach</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              كتب إلكترونية حصرية لمساعدتك في رحلتك الرياضية
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <div className="card text-center py-4">
              <div className="text-2xl font-bold text-green-400">{books.length}</div>
              <div className="text-sm text-gray-400">كتاب متاح</div>
            </div>
            <div className="card text-center py-4">
              <div className="text-2xl font-bold text-green-400">{books.filter(b => b.isFree).length}</div>
              <div className="text-sm text-gray-400">كتاب مجاني</div>
            </div>
            <div className="card text-center py-4">
              <div className="text-2xl font-bold text-green-400">15K+</div>
              <div className="text-sm text-gray-400">تحميل</div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-green-500 text-white'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Books Grid */}
          <div className="grid sm:grid-cols-2 lg: grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div key={book.id} className="card hover:scale-105 transition-transform relative">
                {/* Badge */}
                {book.isFree ? (
                  <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    🎁 مجاني
                  </span>
                ) : (
                  <span className="absolute top-4 left-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    💎 مميز
                  </span>
                )}

                {/* Cover */}
                <div className="h-40 flex items-center justify-center text-8xl mb-4 bg-gradient-to-br from-white/5 to-white/10 rounded-xl">
                  {book.cover}
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{book.description}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <span>📄</span>
                    <span>{book.pages} صفحة</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span>⬇️</span>
                    <span>{book.downloads}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span>⭐</span>
                    <span>{book.rating}</span>
                  </span>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  {book.isFree ? (
                    <>
                      <span className="text-xl font-bold text-green-400">مجاني</span>
                      <button
                        onClick={() => handleFreeDownload(book)}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        📧 حمّل الآن
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="text-xl font-bold text-green-400">{book.price} ج. م</span>
                      <button
                        onClick={() => handlePaidPurchase(book)}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity text-sm"
                      >
                        💳 اشتري الآن
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 card bg-gradient-to-r from-green-500/20 to-purple-500/20 text-center py-12">
            <div className="text-4xl mb-4">📬</div>
            <h2 className="text-2xl font-bold mb-2">اشترك في النشرة البريدية</h2>
            <p className="text-gray-400 mb-6">احصل على كتب مجانية وعروض حصرية مباشرة على إيميلك</p>
            <form className="flex flex-col sm: flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="input-field flex-1"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                اشترك الآن
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Download Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="card max-w-md w-full relative">
            <button
              onClick={() => {
                setShowModal(false)
                setSuccess(false)
              }}
              className="absolute top-4 left-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {! success ?  (
              <>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{selectedBook?.cover}</div>
                  <h3 className="text-xl font-bold mb-2">{selectedBook?.title}</h3>
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
                  <button
                    type="submit"
                    disabled={downloading}
                    className="btn-primary w-full py-3 disabled:opacity-50"
                  >
                    {downloading ?  (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin">⏳</span>
                        جاري الإرسال... 
                      </span>
                    ) : (
                      'أرسل الكتاب لإيميلي 📧'
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  🔒 لن نشارك بريدك مع أي طرف ثالث
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2">تم بنجاح! </h3>
                <p className="text-gray-400 mb-6">
                  تم إرسال <span className="text-white font-medium">"{selectedBook?.title}"</span> إلى بريدك الإلكتروني
                </p>
                <p className="text-sm text-gray-500">
                  تحقق من صندوق الوارد (أو مجلد Spam)
                </p>
                <button
                  onClick={() => {
                    setShowModal(false)
                    setSuccess(false)
                  }}
                  className="btn-secondary mt-6"
                >
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
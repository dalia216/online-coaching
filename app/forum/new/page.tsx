'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NewPostPage() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const categories = [
    { id: 'nutrition', name: 'تغذية', icon: '🥗' },
    { id: 'workout', name: 'تمارين', icon: '💪' },
    { id: 'motivation', name: 'تحفيز', icon: '🔥' },
    { id: 'questions', name: 'أسئلة', icon: '❓' },
  ]

  const handleSubmit = (e:  React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      console.log({ title, category, content })
      window.location.href = '/forum'
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>←</span>
            <Link href="/forum" className="hover:text-white">المنتدى</Link>
            <span>←</span>
            <span className="text-white">موضوع جديد</span>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">✏️</div>
            <h1 className="text-3xl font-bold mb-2">موضوع جديد</h1>
            <p className="text-gray-400">شارك معرفتك أو اطرح سؤالك على المجتمع</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card">
            {/* Title */}
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">عنوان الموضوع *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="اكتب عنوان واضح ومختصر..."
                className="input-field"
                required
              />
            </div>

            {/* Category */}
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">القسم *</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat. id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      category === cat. id
                        ?  'border-green-500 bg-green-500/10'
                        :  'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="text-2xl mb-1">{cat.icon}</div>
                    <div className="text-sm">{cat.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">المحتوى *</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="اكتب موضوعك هنا... 

💡 نصائح للكتابة: 
- استخدم عناوين فرعية لتنظيم المحتوى
- أضف أمثلة عملية
- كن واضحاً ومختصراً"
                rows={12}
                className="input-field resize-none"
                required
              ></textarea>
            </div>

            {/* Guidelines */}
            <div className="p-4 bg-white/5 rounded-xl mb-6">
              <h4 className="font-bold mb-2">📋 إرشادات النشر</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• تأكد من أن موضوعك غير مكرر</li>
                <li>• استخدم لغة محترمة ومفيدة</li>
                <li>• لا تنشر إعلانات أو روابط مشبوهة</li>
                <li>• اختر القسم المناسب لموضوعك</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Link href="/forum" className="btn-secondary flex-1 text-center">
                إلغاء
              </Link>
              <button
                type="submit"
                disabled={submitting || !title || !category || !content}
                className="btn-primary flex-1 disabled:opacity-50"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span>
                    جاري النشر...
                  </span>
                ) : (
                  '📤 نشر الموضوع'
                )}
              </button>
            </div>
          </form>

          {/* Back */}
          <div className="text-center mt-8">
            <Link href="/forum" className="text-gray-400 hover:text-white transition-colors">
              ← العودة للمنتدى
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
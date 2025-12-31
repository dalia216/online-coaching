'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'البريد الإلكتروني',
      value: 'support@fitcoach.pro',
      link: 'mailto:support@fitcoach.pro',
      desc: 'رد خلال 24 ساعة',
    },
    {
      icon:  '💬',
      title: 'واتساب',
      value: '+20 123 456 7890',
      link: 'https://wa.me/201234567890',
      desc: 'رد فوري - متاح 24/7',
    },
    {
      icon: '📱',
      title: 'الهاتف',
      value: '+20 123 456 7890',
      link:  'tel:+201234567890',
      desc: 'من 9 ص - 9 م',
    },
    {
      icon:  '📍',
      title: 'العنوان',
      value: 'القاهرة، مصر',
      link: '#',
      desc:  'مقر الشركة',
    },
  ]

  const socialLinks = [
    { icon: '📘', name: 'Facebook', url: '#' },
    { icon: '📸', name: 'Instagram', url: '#' },
    { icon: '🐦', name: 'Twitter', url:  '#' },
    { icon: '▶️', name:  'YouTube', url: '#' },
    { icon: '💼', name: 'LinkedIn', url: '#' },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">📞</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              تواصل <span className="gradient-text">معنا</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              فريقنا جاهز لمساعدتك والإجابة على جميع استفساراتك
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="card text-center hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="font-bold mb-1">{method.title}</h3>
                <p className="text-green-400 text-sm mb-1">{method.value}</p>
                <p className="text-xs text-gray-500">{method.desc}</p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="card">
              {! submitted ? (
                <>
                  <h2 className="text-xl font-bold mb-6">✉️ أرسل لنا رسالة</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">الاسم *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target. value })}
                          placeholder="اسمك الكريم"
                          className="input-field"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">البريد الإلكتروني *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="example@email.com"
                          className="input-field"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">الموضوع *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e. target.value })}
                        className="input-field"
                        required
                      >
                        <option value="">اختر الموضوع</option>
                        <option value="inquiry">استفسار عام</option>
                        <option value="subscription">الاشتراكات والأسعار</option>
                        <option value="technical">مشكلة تقنية</option>
                        <option value="partnership">شراكة تجارية</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">الرسالة *</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="اكتب رسالتك هنا..."
                        rows={5}
                        className="input-field resize-none"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full py-3 disabled:opacity-50"
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="animate-spin">⏳</span>
                          جاري الإرسال... 
                        </span>
                      ) : (
                        'إرسال الرسالة 📤'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold mb-2">تم الإرسال بنجاح! </h2>
                  <p className="text-gray-400 mb-6">
                    شكراً لتواصلك معنا.  سنرد عليك في أقرب وقت ممكن. 
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', subject:  '', message: '' })
                    }}
                    className="btn-secondary"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              )}
            </div>

            {/* Info & Social */}
            <div className="space-y-6">
              {/* FAQ Link */}
              <div className="card bg-gradient-to-br from-green-500/20 to-purple-500/20">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">❓</div>
                  <div>
                    <h3 className="font-bold mb-1">لديك سؤال شائع؟</h3>
                    <p className="text-sm text-gray-400 mb-2">
                      ربما تجد إجابتك في صفحة الأسئلة الشائعة
                    </p>
                    <Link href="/faq" className="text-green-400 text-sm hover:underline">
                      زيارة الأسئلة الشائعة ←
                    </Link>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="card">
                <h3 className="font-bold mb-4">🕐 ساعات العمل</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">السبت - الخميس</span>
                    <span>9:00 ص - 9:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">الجمعة</span>
                    <span>2:00 م - 9:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">واتساب</span>
                    <span className="text-green-400">متاح 24/7</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="card">
                <h3 className="font-bold mb-4">📱 تابعنا على</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl hover:bg-white/20 transition-colors"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card">
                <h3 className="font-bold mb-4">📍 موقعنا</h3>
                <div className="h-48 bg-white/5 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p>القاهرة، مصر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
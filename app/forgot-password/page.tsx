'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e:  React.FormEvent) => {
    e.preventDefault()
    console.log('Reset password for:', email)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl">
              🏋️
            </div>
            <span className="text-2xl font-bold gradient-text">FitCoach Pro</span>
          </Link>
        </div>

        {/* Card */}
        <div className="card">
          {! submitted ? (
            <>
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🔐</div>
                <h1 className="text-2xl font-bold mb-2">نسيت كلمة المرور؟</h1>
                <p className="text-gray-400">
                  لا تقلق! أدخل بريدك الإلكتروني وسنرسل لك رابط لإعادة تعيين كلمة المرور. 
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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

                <button type="submit" className="btn-primary w-full">
                  إرسال رابط الاستعادة 📧
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-bold mb-2">تم الإرسال! </h2>
              <p className="text-gray-400 mb-6">
                تم إرسال رابط استعادة كلمة المرور إلى<br />
                <span className="text-white font-medium">{email}</span>
              </p>
              <p className="text-sm text-gray-500 mb-6">
                لم يصلك الإيميل؟ تحقق من مجلد الـ Spam أو
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-green-400 hover:underline mr-1"
                >
                  أعد المحاولة
                </button>
              </p>
            </div>
          )}

          {/* Back to Login */}
          <div className="text-center mt-6 pt-6 border-t border-white/10">
            <Link href="/login" className="text-green-400 hover:text-green-300">
              ← العودة لتسجيل الدخول
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  )
}
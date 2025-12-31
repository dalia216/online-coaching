'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    age: '',
    weight: '',
    height: '',
    goal: '',
    activity: '',
    plan: 'pro',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const goals = [
    { id: 'lose', name: 'خسارة وزن', icon: '📉' },
    { id: 'gain', name: 'زيادة وزن', icon: '📈' },
    { id: 'muscle', name: 'بناء عضلات', icon: '💪' },
    { id: 'health', name: 'صحة عامة', icon: '❤️' },
  ]

  const activityLevels = [
    { id: 'sedentary', name:  'قليل الحركة', desc: 'عمل مكتبي' },
    { id: 'light', name: 'نشاط خفيف', desc: '1-3 أيام/أسبوع' },
    { id: 'moderate', name: 'نشاط متوسط', desc:  '3-5 أيام/أسبوع' },
    { id: 'active', name: 'نشاط عالي', desc: '6-7 أيام/أسبوع' },
  ]

  const plans = [
    { id: 'basic', name: 'أساسي', price: '299', features: ['خطة غذائية', 'متابعة أسبوعية'] },
    { id: 'pro', name: 'احترافي', price:  '499', features:  ['خطة غذائية + تمارين', 'متابعة يومية', 'مكالمات فيديو'], popular: true },
    { id: 'vip', name: 'VIP', price: '999', features: ['كل المميزات', 'مدرب خاص', 'أولوية الرد'] },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (step < 3) {
      setStep(step + 1)
      return
    }

    // Validation
    if (formData.password !== formData.confirmPassword) {
      alert('كلمة المرور غير متطابقة!')
      return
    }

    setLoading(true)
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          gender: formData.gender,
          age: parseInt(formData.age),
          weight: parseFloat(formData.weight),
          height: parseFloat(formData.height),
          goal: formData.goal,
          activityLevel: formData.activity,
          plan: formData.plan,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        alert('تم التسجيل بنجاح! 🎉')
        router.push('/login')
      } else {
        alert(data.error || 'حدث خطأ في التسجيل')
      }
    } catch (error) {
      console.error('Registration error:', error)
      alert('حدث خطأ في الاتصال. حاول مرة أخرى.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl">
              🏋️
            </div>
            <span className="text-2xl font-bold gradient-text">FitCoach Pro</span>
          </Link>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  step >= s
                    ? 'bg-green-500 text-white'
                    : 'bg-white/10 text-gray-500'
                }`}
              >
                {step > s ?  '✓' :  s}
              </div>
              {s < 3 && (
                <div className={`w-12 h-1 mx-2 ${step > s ? 'bg-green-500' : 'bg-white/10'}`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="card">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold mb-2">إنشاء حساب جديد 🚀</h1>
                  <p className="text-gray-400">الخطوة 1: البيانات الأساسية</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">الاسم الكامل *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target. value })}
                      placeholder="أحمد محمد"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e. target.value })}
                      placeholder="example@email.com"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">رقم الهاتف *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target. value })}
                      placeholder="01xxxxxxxxx"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">كلمة المرور *</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="••••••••"
                        className="input-field"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(! showPassword)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? '🙈' : '👁️'}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">تأكيد كلمة المرور *</label>
                    <input
                      type="password"
                      value={formData. confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder="••••••••"
                      className="input-field"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {/* Step 2: Body Info */}
            {step === 2 && (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold mb-2">معلومات جسمك 📊</h1>
                  <p className="text-gray-400">الخطوة 2: بيانات الجسم والهدف</p>
                </div>

                <div className="space-y-6">
                  {/* Gender */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-3">الجنس *</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, gender: 'male' })}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.gender === 'male'
                            ? 'border-green-500 bg-green-500/10'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <span className="text-2xl">👨</span>
                        <span className="block mt-1">ذكر</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ... formData, gender:  'female' })}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.gender === 'female'
                            ? 'border-green-500 bg-green-500/10'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <span className="text-2xl">👩</span>
                        <span className="block mt-1">أنثى</span>
                      </button>
                    </div>
                  </div>

                  {/* Age, Weight, Height */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">العمر *</label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="25"
                        className="input-field text-center"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">الوزن (كجم) *</label>
                      <input
                        type="number"
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target. value })}
                        placeholder="70"
                        className="input-field text-center"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">الطول (سم) *</label>
                      <input
                        type="number"
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                        placeholder="170"
                        className="input-field text-center"
                        required
                      />
                    </div>
                  </div>

                  {/* Goal */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-3">هدفك *</label>
                    <div className="grid grid-cols-2 gap-3">
                      {goals.map((g) => (
                        <button
                          key={g. id}
                          type="button"
                          onClick={() => setFormData({ ... formData, goal:  g.id })}
                          className={`p-4 rounded-xl border-2 transition-all text-center ${
                            formData.goal === g.id
                              ? 'border-green-500 bg-green-500/10'
                              : 'border-white/10 hover:border-white/30'
                          }`}
                        >
                          <span className="text-2xl">{g.icon}</span>
                          <span className="block mt-1">{g.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Activity Level */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-3">مستوى النشاط *</label>
                    <div className="space-y-2">
                      {activityLevels.map((level) => (
                        <button
                          key={level.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, activity: level.id })}
                          className={`w-full p-3 rounded-xl border-2 text-right transition-all ${
                            formData. activity === level.id
                              ? 'border-green-500 bg-green-500/10'
                              : 'border-white/10 hover:border-white/30'
                          }`}
                        >
                          <span className="font-bold">{level.name}</span>
                          <span className="text-sm text-gray-400 mr-2">- {level.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Step 3: Choose Plan */}
            {step === 3 && (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold mb-2">اختر خطتك 💎</h1>
                  <p className="text-gray-400">الخطوة 3: اختر الباقة المناسبة</p>
                </div>

                <div className="space-y-4">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, plan: plan.id })}
                      className={`w-full p-6 rounded-xl border-2 text-right transition-all relative ${
                        formData.plan === plan.id
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      {plan.popular && (
                        <span className="absolute top-2 left-2 px-2 py-1 bg-green-500 text-xs rounded-full">
                          الأكثر طلباً ⭐
                        </span>
                      )}
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                          <ul className="space-y-1">
                            {plan.features.map((f, i) => (
                              <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                                <span className="text-green-500">✓</span>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-left">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="text-gray-400 block text-sm">ج.م/شهر</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Terms */}
                <div className="mt-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 mt-0.5 rounded" required />
                    <span className="text-sm text-gray-400">
                      أوافق على{' '}
                      <Link href="/terms" className="text-green-400 hover:underline">الشروط والأحكام</Link>
                      {' '}و{' '}
                      <Link href="/privacy" className="text-green-400 hover:underline">سياسة الخصوصية</Link>
                    </span>
                  </label>
                </div>
              </>
            )}

            {/* Actions */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="btn-secondary flex-1"
                >
                  السابق
                </button>
              )}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary flex-1 disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span>
                    جاري التسجيل... 
                  </span>
                ) : step === 3 ?  (
                  'إتمام التسجيل ✓'
                ) : (
                  'التالي ←'
                )}
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="text-center text-gray-400 mt-6">
            لديك حساب بالفعل؟{' '}
            <Link href="/login" className="text-green-400 hover:underline">
              سجل دخولك
            </Link>
          </p>
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
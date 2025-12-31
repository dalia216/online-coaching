'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CalorieCalculatorPage() {
  const [gender, setGender] = useState('male')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activity, setActivity] = useState('moderate')
  const [goal, setGoal] = useState('maintain')
  const [result, setResult] = useState<number | null>(null)

  const activityLevels = [
    { id: 'sedentary', name:  'قليل الحركة', desc: 'عمل مكتبي، بدون رياضة', factor: 1.2 },
    { id: 'light', name: 'نشاط خفيف', desc: 'رياضة 1-3 أيام/أسبوع', factor: 1.375 },
    { id: 'moderate', name: 'نشاط متوسط', desc: 'رياضة 3-5 أيام/أسبوع', factor:  1.55 },
    { id: 'active', name: 'نشاط عالي', desc:  'رياضة 6-7 أيام/أسبوع', factor: 1.725 },
    { id:  'veryActive', name: 'نشاط عالي جداً', desc:  'تمارين مكثفة يومياً', factor: 1.9 },
  ]

  const goals = [
    { id: 'lose', name: 'خسارة وزن', icon: '📉', adjustment: -500 },
    { id: 'maintain', name: 'ثبات الوزن', icon: '⚖️', adjustment: 0 },
    { id: 'gain', name: 'زيادة وزن', icon:  '📈', adjustment: 500 },
  ]

  const calculateCalories = () => {
    if (!age || !weight || !height) return

    const w = parseFloat(weight)
    const h = parseFloat(height)
    const a = parseFloat(age)

    // Mifflin-St Jeor Equation
    let bmr
    if (gender === 'male') {
      bmr = 10 * w + 6.25 * h - 5 * a + 5
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161
    }

    const activityFactor = activityLevels.find(l => l.id === activity)?.factor || 1.55
    const goalAdjustment = goals.find(g => g.id === goal)?.adjustment || 0

    const tdee = Math.round(bmr * activityFactor + goalAdjustment)
    setResult(tdee)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🔥</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              حاسبة <span className="gradient-text">السعرات الحرارية</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              احسب احتياجك اليومي من السعرات الحرارية بناءً على بياناتك وأهدافك
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="card">
              <h2 className="text-xl font-bold mb-6">📊 أدخل بياناتك</h2>

              {/* Gender */}
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-3">الجنس</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      gender === 'male'
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className="text-2xl">👨</span>
                    <span className="block mt-1">ذكر</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      gender === 'female'
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
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">العمر</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target. value)}
                    placeholder="25"
                    className="input-field text-center"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">الوزن (كجم)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="70"
                    className="input-field text-center"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">الطول (سم)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="170"
                    className="input-field text-center"
                  />
                </div>
              </div>

              {/* Activity Level */}
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-3">مستوى النشاط</label>
                <div className="space-y-2">
                  {activityLevels.map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => setActivity(level.id)}
                      className={`w-full p-3 rounded-xl border-2 text-right transition-all ${
                        activity === level.id
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

              {/* Goal */}
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-3">هدفك</label>
                <div className="grid grid-cols-3 gap-3">
                  {goals.map((g) => (
                    <button
                      key={g. id}
                      type="button"
                      onClick={() => setGoal(g.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-center ${
                        goal === g.id
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <span className="text-2xl">{g.icon}</span>
                      <span className="block mt-1 text-sm">{g.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={calculateCalories} className="btn-primary w-full py-4">
                احسب السعرات 🔥
              </button>
            </div>

            {/* Result */}
            <div>
              {result ?  (
                <div className="card bg-gradient-to-br from-green-500/20 to-purple-500/20 border-green-500/30">
                  <div className="text-center mb-8">
                    <p className="text-gray-400 mb-2">احتياجك اليومي من السعرات</p>
                    <div className="text-6xl font-bold gradient-text mb-2">{result}</div>
                    <p className="text-xl">سعرة حرارية / يوم</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <p className="text-2xl font-bold text-blue-400">{Math.round(result * 0.3 / 4)}g</p>
                      <p className="text-sm text-gray-400">بروتين</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <p className="text-2xl font-bold text-yellow-400">{Math.round(result * 0.4 / 4)}g</p>
                      <p className="text-sm text-gray-400">كارب</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <p className="text-2xl font-bold text-red-400">{Math.round(result * 0.3 / 9)}g</p>
                      <p className="text-sm text-gray-400">دهون</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-gray-400">
                    <p>💡 هذه الأرقام تقديرية. للحصول على خطة مخصصة: </p>
                    <Link href="/register" className="btn-primary block text-center">
                      احصل على خطة مخصصة من كوتش
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="card text-center py-16">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-2">أدخل بياناتك</h3>
                  <p className="text-gray-400">املأ البيانات واضغط "احسب السعرات" لمعرفة احتياجك اليومي</p>
                </div>
              )}

              {/* Tips */}
              <div className="card mt-6">
                <h3 className="font-bold mb-4">💡 نصائح مهمة</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• هذه الأرقام تقديرية وقد تختلف من شخص لآخر</li>
                  <li>• راقب وزنك أسبوعياً وعدّل السعرات حسب النتائج</li>
                  <li>• اشرب 8 أكواب ماء على الأقل يومياً</li>
                  <li>• النوم الجيد مهم لحرق الدهون</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
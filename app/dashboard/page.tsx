'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'الوزن الحالي', value: '75', unit: 'كجم', icon: '⚖️', change: '-2.5', positive: true },
    { label: 'السعرات اليوم', value: '1,850', unit: 'سعرة', icon: '🔥', change: '85%', positive: true },
    { label: 'تمارين الأسبوع', value: '4', unit: 'من 5', icon: '💪', change: '80%', positive: true },
    { label: 'أيام متتالية', value: '12', unit: 'يوم', icon: '🔥', change: '+3', positive: true },
  ]

  const todayMeals = [
    { name: 'الفطور', calories: 450, done: true, time: '8:00 ص', items: 'بيض، خبز توست، أفوكادو' },
    { name:  'وجبة خفيفة', calories: 200, done: true, time: '11:00 ص', items: 'موز، لوز' },
    { name: 'الغداء', calories:  650, done: false, time: '2:00 م', items: 'صدور دجاج، أرز، سلطة' },
    { name: 'وجبة خفيفة', calories: 150, done: false, time: '5:00 م', items: 'زبادي يوناني' },
    { name: 'العشاء', calories: 400, done: false, time: '8:00 م', items: 'سمك مشوي، خضار' },
  ]

  const todayWorkout = {
    name: 'تمارين الصدر والترايسبس',
    duration: '45 دقيقة',
    exercises: [
      { name:  'بنش برس', sets: '4×12', done: true },
      { name:  'بنش مائل', sets: '3×12', done: true },
      { name:  'تفتيح دمبل', sets: '3×15', done: false },
      { name: 'ترايسبس بالكابل', sets: '4×12', done: false },
      { name: 'دبس', sets: '3×15', done: false },
    ]
  }

  const progressData = [
    { week: 'أسبوع 1', weight: 80 },
    { week: 'أسبوع 2', weight: 79 },
    { week: 'أسبوع 3', weight: 78 },
    { week: 'أسبوع 4', weight:  77 },
    { week: 'أسبوع 5', weight: 76 },
    { week:  'أسبوع 6', weight: 75 },
  ]

  return (
    <div className="min-h-screen bg-[#11111b]">
      {/* Sidebar */}
      <aside className="fixed right-0 top-0 h-full w-64 bg-[#181825] border-l border-white/10 p-4 hidden lg:block">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-purple-500 rounded-xl flex items-center justify-center text-xl">
            🏋️
          </div>
          <span className="text-xl font-bold gradient-text">FitCoach Pro</span>
        </div>

        <nav className="space-y-2">
          {[
            { id: 'overview', label: 'نظرة عامة', icon: '📊' },
            { id: 'meals', label: 'الوجبات', icon: '🥗' },
            { id: 'workout', label: 'التمارين', icon: '💪' },
            { id: 'progress', label: 'التقدم', icon: '📈' },
            { id: 'chat', label: 'المحادثات', icon: '💬' },
          ]. map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-green-500/20 text-green-400'
                  : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 right-4 left-4">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors">
            <span>🚪</span>
            <span>تسجيل الخروج</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:mr-64 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">أهلاً، أحمد!  👋</h1>
            <p className="text-gray-400">هيا نكمل يومك بنجاح</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/chat" className="btn-primary text-sm">
              💬 راسل الكوتش
            </Link>
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center font-bold">
              أ
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{stat.icon}</span>
                <span className={`text-sm ${stat.positive ?  'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold">{stat.value} <span className="text-sm text-gray-400">{stat.unit}</span></p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Today's Meals */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">🥗 وجبات اليوم</h2>
              <span className="text-sm text-gray-400">1,850 / 2,200 سعرة</span>
            </div>
            <div className="space-y-3">
              {todayMeals. map((meal, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-xl ${
                    meal. done ? 'bg-green-500/10 border border-green-500/30' : 'bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                      meal. done ?  'bg-green-500 text-white' : 'bg-white/10'
                    }`}>
                      {meal.done ?  '✓' :  ''}
                    </span>
                    <div>
                      <p className="font-medium">{meal.name}</p>
                      <p className="text-xs text-gray-500">{meal.items}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-bold">{meal.calories}</p>
                    <p className="text-xs text-gray-500">{meal.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Workout */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">💪 تمرين اليوم</h2>
              <span className="text-sm text-green-400">{todayWorkout.duration}</span>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-purple-500/20 mb-4">
              <p className="font-bold text-lg">{todayWorkout.name}</p>
            </div>
            <div className="space-y-3">
              {todayWorkout.exercises. map((exercise, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-xl ${
                    exercise. done ? 'bg-green-500/10' : 'bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                      exercise.done ?  'bg-green-500 text-white' : 'bg-white/10'
                    }`}>
                      {exercise.done ?  '✓' :  index + 1}
                    </span>
                    <span>{exercise.name}</span>
                  </div>
                  <span className="text-gray-400">{exercise.sets}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="card mt-6">
          <h2 className="text-xl font-bold mb-6">📈 تقدم الوزن</h2>
          <div className="flex items-end justify-between h-48 gap-2">
            {progressData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-green-500 to-purple-500 rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: `${(data.weight - 70) * 15}px` }}
                ></div>
                <span className="text-xs text-gray-400">{data.week}</span>
                <span className="text-sm font-bold">{data.weight}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
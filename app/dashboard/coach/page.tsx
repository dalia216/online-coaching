'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CoachDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'إجمالي العملاء', value:  '48', icon: '👥', change: '+5 هذا الشهر' },
    { label: 'العملاء النشطين', value: '42', icon: '✅', change: '87. 5%' },
    { label: 'الرسائل الجديدة', value:  '12', icon: '💬', change: 'غير مقروءة' },
    { label: 'الإيرادات', value:  '24,500', icon: '💰', change:  '+15% عن الشهر الماضي' },
  ]

  const clients = [
    { id: 1, name: 'أحمد محمد', plan: 'VIP', progress: 85, lastActive: 'منذ ساعة', avatar: 'أ', status: 'online' },
    { id: 2, name: 'سارة علي', plan: 'إحترافي', progress: 72, lastActive: 'منذ 3 ساعات', avatar: 'س', status: 'online' },
    { id: 3, name: 'محمود حسن', plan:  'أساسي', progress: 45, lastActive: 'منذ يوم', avatar:  'م', status: 'offline' },
    { id: 4, name: 'نور أحمد', plan: 'VIP', progress: 90, lastActive: 'منذ 30 دقيقة', avatar: 'ن', status: 'online' },
    { id: 5, name: 'كريم سعيد', plan: 'إحترافي', progress: 68, lastActive: 'منذ 5 ساعات', avatar: 'ك', status: 'offline' },
  ]

  const pendingTasks = [
    { id: 1, client: 'أحمد محمد', task: 'مراجعة صور التقدم', type: 'review', urgent: true },
    { id: 2, client: 'سارة علي', task: 'تعديل الخطة الغذائية', type: 'plan', urgent: false },
    { id:  3, client:  'نور أحمد', task: 'الرد على الاستفسار', type: 'message', urgent: true },
    { id: 4, client: 'محمود حسن', task: 'تحديث برنامج التمارين', type:  'workout', urgent: false },
  ]

  const recentMessages = [
    { id: 1, client: 'أحمد محمد', message: 'كوتش، خلصت تمرين النهاردة 💪', time: 'منذ 10 دقائق', unread: true },
    { id: 2, client: 'نور أحمد', message: 'ممكن أبدل وجبة الغداء؟', time: 'منذ 30 دقيقة', unread:  true },
    { id: 3, client: 'سارة علي', message: 'شكراً على الخطة الجديدة!', time: 'منذ ساعة', unread: false },
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

        <div className="mb-6 p-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
          <p className="text-amber-400 text-sm font-medium">👑 حساب المدرب</p>
        </div>

        <nav className="space-y-2">
          {[
            { id: 'overview', label: 'نظرة عامة', icon: '📊' },
            { id: 'clients', label: 'العملاء', icon: '👥' },
            { id: 'messages', label: 'الرسائل', icon: '💬', badge: 12 },
            { id: 'plans', label: 'الخطط', icon: '📋' },
            { id: 'earnings', label: 'الأرباح', icon: '💰' },
            { id: 'settings', label: 'الإعدادات', icon: '⚙️' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-green-500/20 text-green-400'
                  : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {item. badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 right-4 left-4">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover: text-white transition-colors">
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
            <h1 className="text-2xl font-bold">مرحباً، كوتش محمد!  👋</h1>
            <p className="text-gray-400">لديك 4 مهام تنتظر المراجعة</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn-secondary text-sm">
              📊 تقرير الشهر
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center font-bold">
              م
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats. map((stat, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-xs text-green-400 mt-1">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Clients List */}
          <div className="lg:col-span-2 card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">👥 العملاء النشطين</h2>
              <button className="text-green-400 text-sm hover:underline">عرض الكل</button>
            </div>
            <div className="space-y-3">
              {clients. map((client) => (
                <div key={client.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-lg">
                        {client.avatar}
                      </div>
                      <span className={`absolute bottom-0 left-0 w-3 h-3 rounded-full border-2 border-[#181825] ${
                        client. status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                      }`}></span>
                    </div>
                    <div>
                      <p className="font-bold">{client.name}</p>
                      <p className="text-sm text-gray-400">{client.lastActive}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      client.plan === 'VIP' ? 'bg-amber-500/20 text-amber-400' : 
                      client. plan === 'إحترافي' ? 'bg-green-500/20 text-green-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {client.plan}
                    </span>
                    <div className="mt-2 w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-purple-500 rounded-full"
                        style={{ width: `${client.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Tasks & Messages */}
          <div className="space-y-6">
            {/* Pending Tasks */}
            <div className="card">
              <h2 className="text-xl font-bold mb-4">📋 مهام معلقة</h2>
              <div className="space-y-3">
                {pendingTasks.map((task) => (
                  <div key={task.id} className={`p-3 rounded-xl ${task.urgent ? 'bg-red-500/10 border border-red-500/30' : 'bg-white/5'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-sm">{task.client}</p>
                      {task.urgent && <span className="text-red-400 text-xs">عاجل</span>}
                    </div>
                    <p className="text-gray-400 text-sm">{task. task}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Messages */}
            <div className="card">
              <h2 className="text-xl font-bold mb-4">💬 آخر الرسائل</h2>
              <div className="space-y-3">
                {recentMessages. map((msg) => (
                  <div key={msg. id} className={`p-3 rounded-xl ${msg. unread ? 'bg-green-500/10' : 'bg-white/5'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-sm">{msg.client}</p>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                    <p className="text-gray-400 text-sm truncate">{msg. message}</p>
                  </div>
                ))}
              </div>
              <Link href="/chat" className="block text-center text-green-400 text-sm mt-4 hover:underline">
                عرض كل الرسائل
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
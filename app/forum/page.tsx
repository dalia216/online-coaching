'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ForumPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'الكل', icon: '📋', count: 156 },
    { id: 'nutrition', name: 'تغذية', icon: '🥗', count: 45 },
    { id: 'workout', name: 'تمارين', icon: '💪', count:  52 },
    { id: 'motivation', name: 'تحفيز', icon: '🔥', count: 28 },
    { id: 'questions', name: 'أسئلة', icon: '❓', count: 31 },
  ]

  const posts = [
    {
      id: 1,
      title: 'أفضل تمارين للمبتدئين في الجيم',
      author:  'أحمد محمد',
      avatar: 'أ',
      category: 'workout',
      date: 'منذ ساعتين',
      replies: 24,
      views: 156,
      likes: 45,
      isPinned: true,
      isHot: true,
    },
    {
      id: 2,
      title:  'تجربتي مع الصيام المتقطع - خسيت 15 كيلو! ',
      author:  'سارة علي',
      avatar: 'س',
      category:  'nutrition',
      date: 'منذ 5 ساعات',
      replies: 67,
      views: 423,
      likes:  89,
      isPinned: false,
      isHot:  true,
    },
    {
      id: 3,
      title: 'كيف أحافظ على الالتزام بالدايت؟',
      author: 'محمود حسن',
      avatar: 'م',
      category:  'motivation',
      date: 'منذ يوم',
      replies: 32,
      views: 234,
      likes:  56,
      isPinned: false,
      isHot: false,
    },
    {
      id:  4,
      title: 'سؤال:  هل الكرياتين آمن للاستخدام؟',
      author: 'كريم سعيد',
      avatar: 'ك',
      category:  'questions',
      date: 'منذ يومين',
      replies: 18,
      views: 145,
      likes:  23,
      isPinned: false,
      isHot:  false,
    },
    {
      id:  5,
      title: 'وصفات بروتين سهلة وسريعة',
      author: 'نور أحمد',
      avatar: 'ن',
      category: 'nutrition',
      date:  'منذ 3 أيام',
      replies:  45,
      views: 312,
      likes:  78,
      isPinned: true,
      isHot: false,
    },
    {
      id: 6,
      title: 'برنامج تمارين منزلية بدون معدات',
      author:  'ليلى محمد',
      avatar: 'ل',
      category:  'workout',
      date: 'منذ 4 أيام',
      replies: 29,
      views: 198,
      likes:  34,
      isPinned: false,
      isHot:  false,
    },
    {
      id:  7,
      title: 'قصة نجاحي: من 100 كيلو لـ 75 كيلو',
      author:  'عمر خالد',
      avatar: 'ع',
      category:  'motivation',
      date: 'منذ أسبوع',
      replies:  89,
      views: 567,
      likes:  156,
      isPinned: false,
      isHot: true,
    },
  ]

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  const topContributors = [
    { name: 'أحمد محمد', avatar: 'أ', posts: 45, badge: '🥇' },
    { name: 'سارة علي', avatar: 'س', posts: 38, badge: '🥈' },
    { name: 'محمود حسن', avatar:  'م', posts: 32, badge: '🥉' },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">💬</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              منتدى <span className="gradient-text">FitCoach</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              شارك تجربتك، اسأل أسئلتك، واستفد من خبرات المجتمع
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <div className="card text-center py-4">
              <div className="text-2xl font-bold text-green-400">156</div>
              <div className="text-xs text-gray-400">موضوع</div>
            </div>
            <div className="card text-center py-4">
              <div className="text-2xl font-bold text-green-400">1.2K</div>
              <div className="text-xs text-gray-400">رد</div>
            </div>
            <div className="card text-center py-4">
              <div className="text-2xl font-bold text-green-400">890</div>
              <div className="text-xs text-gray-400">عضو</div>
            </div>
            <div className="card text-center py-4">
              <div className="text-2xl font-bold text-green-400">45</div>
              <div className="text-xs text-gray-400">متصل</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* New Post Button */}
              <Link href="/forum/new" className="btn-primary w-full text-center block py-3">
                ✏️ موضوع جديد
              </Link>

              {/* Categories */}
              <div className="card">
                <h3 className="font-bold mb-4">📁 الأقسام</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                        activeCategory === category.id
                          ? 'bg-green-500/20 text-green-400'
                          :  'hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Top Contributors */}
              <div className="card">
                <h3 className="font-bold mb-4">🏆 أنشط الأعضاء</h3>
                <div className="space-y-3">
                  {topContributors. map((user, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-xl">{user.badge}</span>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                        {user. avatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.posts} مشاركة</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Posts List */}
            <div className="lg:col-span-3">
              {/* Sort Options */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">
                  {activeCategory === 'all' ? 'جميع المواضيع' : categories.find(c => c.id === activeCategory)?.name}
                </h2>
                <select className="bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-sm">
                  <option>الأحدث</option>
                  <option>الأكثر ردوداً</option>
                  <option>الأكثر مشاهدة</option>
                </select>
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/forum/${post.id}`}
                    className="card block hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {post.avatar}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          {post.isPinned && (
                            <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded">📌 مثبت</span>
                          )}
                          {post. isHot && (
                            <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded">🔥 نشط</span>
                          )}
                          <span className="px-2 py-0.5 bg-white/10 text-gray-400 text-xs rounded">
                            {categories.find(c => c.id === post.category)?.icon} {categories.find(c => c.id === post.category)?.name}
                          </span>
                        </div>

                        <h3 className="font-bold text-lg mb-2 hover:text-green-400 transition-colors">
                          {post.title}
                        </h3>

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="hidden sm:flex items-center gap-6 text-sm text-gray-400">
                        <div className="text-center">
                          <div className="font-bold">{post.replies}</div>
                          <div className="text-xs">رد</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold">{post. views}</div>
                          <div className="text-xs">مشاهدة</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold">{post. likes}</div>
                          <div className="text-xs">إعجاب</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <button className="btn-secondary">
                  تحميل المزيد ↓
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
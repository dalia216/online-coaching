'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ForumPostPage() {
  const [newComment, setNewComment] = useState('')
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  const post = {
    id: 1,
    title: 'أفضل تمارين للمبتدئين في الجيم',
    author: 'أحمد محمد',
    avatar: 'أ',
    category: 'تمارين',
    date: 'منذ ساعتين',
    views: 156,
    likes: 24,
    content: `
السلام عليكم يا شباب!  👋

حبيت أشارك معاكم تجربتي كمبتدئ في الجيم وأفضل التمارين اللي ساعدتني أبني أساس قوي. 

## أولاً: تمارين الإحماء 🔥
قبل أي تمرين، لازم تعمل إحماء 5-10 دقائق:
- مشي سريع على التريدميل
- تمارين إطالة خفيفة
- حركات دائرية للمفاصل

## ثانياً: التمارين الأساسية للمبتدئين 💪

### 1. تمرين السكوات (Squat)
- 3 مجموعات × 12 تكرار
- مهم جداً لبناء عضلات الأرجل

### 2. تمرين البنش برس (Bench Press)
- 3 مجموعات × 10 تكرار
- ابدأ بأوزان خفيفة

### 3. تمرين الديدليفت (Deadlift)
- 3 مجموعات × 8 تكرار
- ركز على الفورم الصحيح

### 4. تمرين السحب الأمامي (Lat Pulldown)
- 3 مجموعات × 12 تكرار
- ممتاز لعضلات الظهر

## نصائح مهمة ⚡
1. ابدأ بأوزان خفيفة وزود تدريجياً
2. اشرب مية كتير
3. خد راحة كافية بين المجموعات (60-90 ثانية)
4. النوم مهم جداً للتعافي

أتمنى الموضوع يفيدكم! لو عندكم أي أسئلة اسألوا 😊
    `,
  }

  const comments = [
    {
      id: 1,
      author: 'سارة علي',
      avatar: 'س',
      date: 'منذ ساعة',
      content:  'موضوع رائع! أنا كمان مبتدئة وكنت محتاجة المعلومات دي.  شكراً جزيلاً 🙏',
      likes: 8,
    },
    {
      id: 2,
      author:  'محمود حسن',
      avatar: 'م',
      date:  'منذ 45 دقيقة',
      content: 'إضافة مهمة:  حاولوا تتمرنوا مع حد عنده خبرة في الأول عشان يعلمكم الفورم الصحيح.  ده هيوفر عليكم إصابات كتير.',
      likes: 12,
    },
    {
      id: 3,
      author: 'نور أحمد',
      avatar: 'ن',
      date: 'منذ 30 دقيقة',
      content: 'سؤال:  هل ينفع أتمرن كل يوم ولا لازم أريح؟',
      likes: 3,
    },
    {
      id:  4,
      author: 'أحمد محمد',
      avatar: 'أ',
      date:  'منذ 20 دقيقة',
      content: '@نور أحمد لأ، مينفعش تتمرن كل يوم.  جسمك محتاج راحة للتعافي. الأفضل 3-4 أيام في الأسبوع للمبتدئين.',
      likes: 15,
      isAuthor: true,
    },
  ]

  const handleSubmit = (e:  React.FormEvent) => {
    e.preventDefault()
    console.log('New comment:', newComment)
    setNewComment('')
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>←</span>
            <Link href="/forum" className="hover:text-white">المنتدى</Link>
            <span>←</span>
            <span className="text-white">{post.category}</span>
          </div>

          {/* Post */}
          <article className="card mb-8">
            {/* Post Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-xl">
                {post.avatar}
              </div>
              <div>
                <h3 className="font-bold text-lg">{post.author}</h3>
                <p className="text-sm text-gray-400">{post.date}</p>
              </div>
              <span className="mr-auto px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                {post.category}
              </span>
            </div>

            {/* Post Title */}
            <h1 className="text-2xl md:text-3xl font-bold mb-6">{post.title}</h1>

            {/* Post Content */}
            <div className="prose prose-invert max-w-none mb-8">
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-2 ${liked ? 'text-red-500' : 'text-gray-400 hover:text-white'}`}
                >
                  <span>{liked ? '❤️' : '🤍'}</span>
                  <span>{liked ? post.likes + 1 : post.likes}</span>
                </button>
                <span className="flex items-center gap-2 text-gray-400">
                  <span>💬</span>
                  <span>{comments.length} رد</span>
                </span>
                <span className="flex items-center gap-2 text-gray-400">
                  <span>👁️</span>
                  <span>{post.views} مشاهدة</span>
                </span>
              </div>
              <button
                onClick={() => setSaved(!saved)}
                className={`${saved ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}
              >
                {saved ? '⭐' : '☆'} حفظ
              </button>
            </div>
          </article>

          {/* Comments Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-6">💬 الردود ({comments.length})</h2>

            <div className="space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className={`card ${comment.isAuthor ? 'border-green-500/30 bg-green-500/5' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {comment.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold">{comment.author}</span>
                        {comment.isAuthor && (
                          <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                            صاحب الموضوع
                          </span>
                        )}
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-300 mb-3">{comment.content}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <button className="flex items-center gap-1 text-gray-400 hover:text-white">
                          <span>👍</span>
                          <span>{comment.likes}</span>
                        </button>
                        <button className="text-gray-400 hover:text-white">رد</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Comment */}
          <div className="card">
            <h3 className="font-bold mb-4">✏️ أضف رد</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e. target.value)}
                placeholder="اكتب ردك هنا..."
                rows={4}
                className="input-field resize-none mb-4"
              ></textarea>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  💡 كن محترماً ومفيداً في ردودك
                </p>
                <button type="submit" className="btn-primary">
                  نشر الرد
                </button>
              </div>
            </form>
          </div>

          {/* Back to Forum */}
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
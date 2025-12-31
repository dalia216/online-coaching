'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ChatPage() {
  const [message, setMessage] = useState('')
  const [activeChat, setActiveChat] = useState(1)

  const contacts = [
    { id: 1, name: 'كوتش محمد', role:  'المدرب', avatar: 'م', online: true, lastMessage: 'تمام، أشوف الصور وأرد عليك', time: 'منذ 5 دقائق', unread: 2 },
    { id: 2, name: 'مساعد AI', role: 'ذكاء اصطناعي', avatar:  '🤖', online: true, lastMessage: 'يمكنني مساعدتك في أي وقت! ', time: 'منذ ساعة', unread: 0 },
    { id: 3, name: 'الدعم الفني', role: 'دعم', avatar: '🎧', online: true, lastMessage: 'تم حل المشكلة', time: 'أمس', unread:  0 },
  ]

  const messages = [
    { id: 1, sender: 'coach', text: 'صباح الخير أحمد! كيف حالك اليوم؟', time: '9:00 ص' },
    { id: 2, sender: 'me', text: 'صباح النور كوتش! الحمد لله تمام', time: '9:05 ص' },
    { id: 3, sender: 'me', text: 'خلصت تمرين امبارح كامل 💪', time: '9:05 ص' },
    { id:  4, sender:  'coach', text: 'ممتاز جداً! 🔥 شغل عالي', time: '9:10 ص' },
    { id:  5, sender:  'coach', text: 'ابعتلي صور التقدم لما تقدر عشان نقارن', time: '9:10 ص' },
    { id: 6, sender: 'me', text: 'حاضر، هبعتهالك النهاردة', time: '9:15 ص' },
    { id: 7, sender: 'me', text: 'بس عندي سؤال عن وجبة الغداء', time:  '9:15 ص' },
    { id:  8, sender:  'coach', text: 'اتفضل، اسأل', time: '9:16 ص' },
    { id: 9, sender: 'me', text: 'ممكن أبدل الأرز بالبطاطس؟', time: '9:18 ص' },
    { id:  10, sender:  'coach', text: 'أيوه طبعاً، بس خلي الكمية 150 جرام بطاطس مسلوقة أو مشوية بدل الأرز', time: '9:20 ص' },
    { id: 11, sender: 'coach', text: 'وحاول تبعد عن المقلي 👍', time: '9:20 ص' },
    { id:  12, sender:  'me', text: 'تمام يا كوتش، شكراً جداً ❤️', time:  '9:22 ص' },
  ]

  const handleSend = () => {
    if (message. trim()) {
      console.log('Sending:', message)
      setMessage('')
    }
  }

  return (
    <div className="h-screen bg-[#11111b] flex">
      {/* Sidebar - Contacts */}
      <aside className="w-80 bg-[#181825] border-l border-white/10 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-white/10">
          <Link href="/dashboard" className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-purple-500 rounded-xl flex items-center justify-center text-xl">
              🏋️
            </div>
            <span className="text-xl font-bold gradient-text">FitCoach Pro</span>
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 بحث..."
              className="input-field text-sm py-2"
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div
              key={contact. id}
              onClick={() => setActiveChat(contact.id)}
              className={`flex items-center gap-3 p-4 cursor-pointer transition-colors ${
                activeChat === contact.id ?  'bg-green-500/10' : 'hover:bg-white/5'
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-lg">
                  {contact.avatar}
                </div>
                {contact.online && (
                  <span className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#181825]"></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-bold">{contact.name}</p>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400 truncate">{contact.lastMessage}</p>
                  {contact.unread > 0 && (
                    <span className="bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#181825]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center font-bold">
                م
              </div>
              <span className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#181825]"></span>
            </div>
            <div>
              <p className="font-bold">كوتش محمد</p>
              <p className="text-xs text-green-400">متصل الآن</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              📞
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              📹
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              ⋮
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages. map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  msg.sender === 'me'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-br-none'
                    :  'bg-[#181825] text-white rounded-bl-none'
                }`}
              >
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-white/70' : 'text-gray-500'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-white/10 bg-[#181825]">
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              📎
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              🖼️
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب رسالتك..."
              className="input-field flex-1"
            />
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover: bg-white/20 transition-colors">
              🎤
            </button>
            <button
              onClick={handleSend}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              ➤
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
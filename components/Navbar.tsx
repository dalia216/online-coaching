'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/pricing', label: 'الأسعار' },
    { href:  '/testimonials', label: 'آراء العملاء' },
    { href:  '/forum', label: 'المنتدى' },
    { href: '/store', label: 'المتجر' },
    { href: '/tools/calorie-calculator', label: 'حاسبة السعرات' },
    { href: '/faq', label: 'الأسئلة الشائعة' },
    { href: '/contact', label: 'تواصل معنا' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#11111b]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-purple-500 rounded-xl flex items-center justify-center text-xl">
              🏋️
            </div>
            <span className="text-xl font-bold gradient-text">FitCoach Pro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              تسجيل الدخول
            </Link>
            <Link href="/register" className="btn-primary text-sm">
              ابدأ الآن
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-2xl"
          >
            {isMenuOpen ?  '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-white/10 my-2" />
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                تسجيل الدخول
              </Link>
              <Link
                href="/register"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary text-center"
              >
                ابدأ الآن
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
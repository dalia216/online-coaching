import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    الخدمات: [
      { href:  '/pricing', label: 'الباقات والأسعار' },
      { href:  '/tools/calorie-calculator', label: 'حاسبة السعرات' },
      { href: '/store', label: 'المتجر' },
      { href: '/forum', label: 'المنتدى' },
    ],
    الشركة: [
      { href: '/about', label: 'من نحن' },
      { href: '/testimonials', label: 'آراء العملاء' },
      { href:  '/contact', label:  'تواصل معنا' },
      { href: '/faq', label: 'الأسئلة الشائعة' },
    ],
    قانوني: [
      { href: '/privacy', label: 'سياسة الخصوصية' },
      { href: '/terms', label: 'الشروط والأحكام' },
      { href: '/refund', label: 'سياسة الاسترداد' },
    ],
  }

  const socialLinks = [
    { icon: '📘', name: 'Facebook', url: '#' },
    { icon: '📸', name: 'Instagram', url: '#' },
    { icon: '🐦', name: 'Twitter', url:  '#' },
    { icon: '▶️', name:  'YouTube', url: '#' },
    { icon: '💬', name: 'WhatsApp', url:  '#' },
  ]

  return (
    <footer className="bg-[#11111b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-purple-500 rounded-xl flex items-center justify-center text-xl">
                🏋️
              </div>
              <span className="text-xl font-bold gradient-text">FitCoach Pro</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              منصة التدريب الشخصي الأولى في العالم العربي.  نساعدك للوصول لأهدافك الصحية والرياضية مع أفضل المدربين المحترفين. 
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link. href}
                      className="text-gray-400 hover: text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md: flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 FitCoach Pro. جميع الحقوق محفوظة. 
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>🇪🇬 صنع بكل ❤️ في مصر</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
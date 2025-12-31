import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  const features = [
    { icon: '📊', title: 'خطة مخصصة', desc: 'برنامج غذائي ورياضي مصمم خصيصاً لك' },
    { icon: '💬', title: 'متابعة يومية', desc: 'تواصل مباشر مع مدربك كل يوم' },
    { icon:  '📱', title: 'تطبيق سهل', desc: 'تابع تقدمك من موبايلك في أي وقت' },
    { icon: '🎯', title: 'نتائج مضمونة', desc:  'ضمان استرداد الأموال خلال 30 يوم' },
  ]

  const stats = [
    { number: '5000+', label: 'عميل سعيد' },
    { number: '98%', label: 'نسبة الرضا' },
    { number: '15kg', label: 'متوسط الخسارة' },
    { number: '24/7', label: 'دعم متواصل' },
  ]

  const testimonials = [
    { name: 'أحمد محمد', text: 'خسيت 20 كيلو في 3 شهور! النتائج مذهلة', rating: 5 },
    { name: 'سارة علي', text: 'أفضل استثمار في صحتي.  المتابعة ممتازة', rating: 5 },
    { name: 'محمود حسن', text:  'الكوتش فاهم ومتعاون جداً. أنصح بشدة', rating: 5 },
  ]

  const plans = [
    { name: 'أساسي', price:  '299', features: ['خطة غذائية', 'متابعة أسبوعية', 'دعم واتساب'] },
    { name: 'مميز', price: '499', features: ['خطة غذائية + رياضية', 'متابعة يومية', 'مكالمات فيديو', 'دعم 24/7'], popular: true },
    { name: 'VIP', price: '999', features: ['كل المميزات', 'مدرب خاص', 'تحليل شامل', 'أولوية الرد'] },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            🎉 انضم لأكثر من 5000 عميل سعيد
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            حول جسمك مع
            <span className="gradient-text block mt-2">أفضل مدربين العرب</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            برامج تدريب وتغذية مخصصة 100% لك.  متابعة يومية مع مدربين محترفين. نتائج مضمونة أو استرداد أموالك. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary text-lg px-8 py-4">
              ابدأ رحلتك الآن 🚀
            </Link>
            <Link href="/testimonials" className="btn-secondary text-lg px-8 py-4">
              شاهد قصص النجاح
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ليه تختار <span className="gradient-text">FitCoach Pro</span>؟
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              نقدم لك تجربة تدريب فريدة تجمع بين الخبرة والتكنولوجيا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              قصص <span className="gradient-text">نجاح حقيقية</span>
            </h2>
            <p className="text-gray-400">شوف إيه اللي بيقوله عملاءنا</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-1 mb-4">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center font-bold">
                    {testimonial.name[0]}
                  </div>
                  <span className="font-medium">{testimonial. name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/testimonials" className="text-green-400 hover: underline">
              شاهد المزيد من قصص النجاح ←
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              خطط <span className="gradient-text">مناسبة للجميع</span>
            </h2>
            <p className="text-gray-400">اختار الخطة اللي تناسب أهدافك</p>
          </div>

          <div className="grid md: grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans. map((plan, index) => (
              <div
                key={index}
                className={`card relative ${plan.popular ? 'border-green-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 rounded-full text-sm font-bold">
                    الأكثر طلباً ⭐
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400"> ج.م/شهر</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`block text-center py-3 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? 'btn-primary'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  اشترك الآن
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/pricing" className="text-green-400 hover: underline">
              قارن بين الخطط بالتفصيل ←
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              أدوات <span className="gradient-text">مجانية</span>
            </h2>
            <p className="text-gray-400">استخدم أدواتنا المجانية لبدء رحلتك</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/tools/calorie-calculator" className="card text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-2">حاسبة السعرات</h3>
              <p className="text-gray-400">احسب احتياجك اليومي من السعرات</p>
            </Link>
            <Link href="/forum" className="card text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">المنتدى</h3>
              <p className="text-gray-400">انضم لمجتمعنا واستفد من خبرات الآخرين</p>
            </Link>
            <Link href="/store" className="card text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-xl font-bold mb-2">المتجر</h3>
              <p className="text-gray-400">تسوق أفضل المكملات والمعدات</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-gradient-to-r from-green-500/20 to-purple-500/20 text-center py-16">
            <h2 className="text-3xl md: text-4xl font-bold mb-4">
              جاهز تبدأ رحلتك؟ 🚀
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              انضم لآلاف العملاء اللي غيروا حياتهم.  ابدأ النهاردة واحصل على استشارة مجانية! 
            </p>
            <Link href="/register" className="btn-primary text-lg px-8 py-4 inline-block">
              ابدأ الآن - استشارة مجانية
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
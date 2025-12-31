import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'أحمد محمد',
      age: 28,
      job: 'مهندس برمجيات',
      image: 'أ',
      beforeWeight: 95,
      afterWeight: 75,
      duration: '4 شهور',
      text: 'كنت فاقد الأمل بعد محاولات كتير فاشلة.  مع FitCoach Pro، الكوتش فهم وضعي وصمملي خطة تناسب شغلي المكتبي.  خسيت 20 كيلو وحياتي اتغيرت تماماً!',
      rating: 5,
    },
    {
      name: 'سارة علي',
      age: 32,
      job:  'طبيبة',
      image: 'س',
      beforeWeight: 78,
      afterWeight: 62,
      duration:  '3 شهور',
      text: 'كأم عاملة، مكنتش لاقية وقت للجيم. الكوتش صمملي تمارين منزلية ونظام أكل عملي. النتيجة؟ خسيت 16 كيلو وبقيت أنشط مع ولادي!',
      rating: 5,
    },
    {
      name:  'محمود حسن',
      age:  25,
      job:  'طالب جامعي',
      image: 'م',
      beforeWeight: 65,
      afterWeight: 78,
      duration:  '5 شهور',
      text: 'كنت نحيف جداً ومكنتش عارف أزود وزني صح. الكوتش علمني التغذية السليمة والتمارين المناسبة.  زودت 13 كيلو عضل صافي! ',
      rating:  5,
      type: 'bulk',
    },
    {
      name:  'نور أحمد',
      age: 35,
      job:  'ربة منزل',
      image: 'ن',
      beforeWeight: 88,
      afterWeight: 68,
      duration:  '6 شهور',
      text: 'بعد الولادة وزني زاد كتير وكنت محبطة. المتابعة اليومية والدعم النفسي من الكوتش كانوا مفتاح النجاح. رجعت لوزني قبل الحمل وأحسن! ',
      rating:  5,
    },
    {
      name:  'كريم سعيد',
      age: 42,
      job:  'رجل أعمال',
      image: 'ك',
      beforeWeight: 105,
      afterWeight: 82,
      duration:  '7 شهور',
      text: 'السكر والضغط كانوا مرتفعين والدكتور حذرني.  مع الخطة الغذائية المتوازنة، مش بس خسيت 23 كيلو، كمان التحاليل بقت ممتازة!',
      rating: 5,
    },
    {
      name:  'ليلى محمد',
      age:  29,
      job:  'مصممة جرافيك',
      image: 'ل',
      beforeWeight: 72,
      afterWeight: 58,
      duration:  '4 شهور',
      text: 'كنت بعمل دايت قاسي وبرجع أتخن تاني. الكوتش علمني أكل صحي ومشبع.  خسيت 14 كيلو من غير جوع ولا حرمان!',
      rating: 5,
    },
  ]

  const stats = [
    { number: '5000+', label: 'عميل سعيد' },
    { number:  '45,000+', label:  'كيلو تم خسارتها' },
    { number: '98%', label: 'نسبة الرضا' },
    { number: '4.9', label: 'تقييم متوسط' },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              قصص <span className="gradient-text">نجاح حقيقية</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              شاهد كيف غير عملاؤنا حياتهم مع FitCoach Pro
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats. map((stat, index) => (
              <div key={index} className="card text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials. map((testimonial, index) => (
              <div key={index} className="card hover:scale-105 transition-transform">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {'⭐'.repeat(testimonial.rating)}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Results */}
                <div className="flex items-center justify-center gap-4 p-4 bg-white/5 rounded-xl mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-400">{testimonial. beforeWeight}</p>
                    <p className="text-xs text-gray-500">قبل</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">{testimonial.afterWeight}</p>
                    <p className="text-xs text-gray-500">بعد</p>
                  </div>
                  <div className="text-center mr-4 pr-4 border-r border-white/10">
                    <p className="text-lg font-bold text-purple-400">
                      {testimonial.type === 'bulk' ? '+' : '-'}
                      {Math.abs(testimonial.beforeWeight - testimonial. afterWeight)} كجم
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.duration}</p>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial. name}</p>
                    <p className="text-sm text-gray-400">{testimonial.job}، {testimonial.age} سنة</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="card bg-gradient-to-r from-green-500/20 to-purple-500/20 text-center py-12">
            <h2 className="text-3xl font-bold mb-4">جاهز تكون قصة النجاح الجاية؟ 🚀</h2>
            <p className="text-gray-400 mb-6">انضم لآلاف العملاء اللي غيروا حياتهم</p>
            <Link href="/register" className="btn-primary inline-block px-8 py-4 text-lg">
              ابدأ رحلتك الآن
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
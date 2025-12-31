import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PricingPage() {
  const plans = [
    {
      name: 'الخطة الأساسية',
      price:  '299',
      period: 'شهرياً',
      description: 'مثالية للمبتدئين',
      features: [
        'خطة غذائية مخصصة',
        'متابعة أسبوعية',
        'دعم عبر الواتساب',
        'الوصول للتطبيق',
        'تحديث الخطة شهرياً',
      ],
      notIncluded: ['مكالمات فيديو', 'مدرب خاص', 'تحليل مفصل'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name:  'الخطة الاحترافية',
      price: '499',
      period:  'شهرياً',
      description: 'الأكثر شعبية',
      popular: true,
      features: [
        'خطة غذائية + تمارين',
        'متابعة يومية',
        'دعم 24/7',
        'مكالمات فيديو أسبوعية',
        'تحديث الخطة أسبوعياً',
        'تحليل تقدم مفصل',
      ],
      notIncluded: ['مدرب خاص VIP'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      name:  'خطة VIP',
      price: '999',
      period:  'شهرياً',
      description: 'للنتائج القصوى',
      features: [
        'كل مميزات الاحترافية',
        'مدرب خاص مخصص لك',
        'مكالمات فيديو يومية',
        'خطة مكملات غذائية',
        'أولوية الرد الفوري',
        'تحليل جيني وهرموني',
        'خصومات على المتجر',
      ],
      notIncluded: [],
      color: 'from-amber-500 to-orange-500',
    },
  ]

  const faqs = [
    {
      q: 'هل يمكنني تغيير الخطة لاحقاً؟',
      a: 'نعم، يمكنك الترقية أو تغيير خطتك في أي وقت.',
    },
    {
      q: 'هل هناك ضمان استرداد الأموال؟',
      a: 'نعم، نقدم ضمان استرداد الأموال خلال 7 أيام.',
    },
    {
      q: 'كيف تتم المتابعة؟',
      a:  'عبر تطبيقنا والواتساب ومكالمات الفيديو حسب خطتك.',
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              خطط <span className="gradient-text">مناسبة للجميع</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              اختر الخطة المناسبة لأهدافك وابدأ رحلة التحول اليوم
            </p>
          </div>

          {/* Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card relative ${plan.popular ? 'border-green-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 rounded-full text-sm font-bold">
                    ⭐ الأكثر طلباً
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-2xl mb-6`}>
                  {index === 0 ? '🌱' : index === 1 ? '🚀' : '👑'}
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 mr-2">ج.م/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded. map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-500">
                      <span>✗</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/register"
                  className={`block text-center py-4 rounded-xl font-bold transition-all ${
                    plan. popular
                      ?  'bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  اشترك الآن
                </Link>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">أسئلة شائعة</h2>
            <div className="space-y-4">
              {faqs. map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="font-bold mb-2">{faq. q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/faq" className="text-green-400 hover:underline">
                عرض كل الأسئلة الشائعة ←
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
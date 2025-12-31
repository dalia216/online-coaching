import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              سياسة <span className="gradient-text">الخصوصية</span>
            </h1>
            <p className="text-gray-400">آخر تحديث: يناير 2025</p>
          </div>

          {/* Content */}
          <div className="card prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📋</span> مقدمة
              </h2>
              <p className="text-gray-300 leading-relaxed">
                نحن في FitCoach Pro نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك عند استخدام خدماتنا. 
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📊</span> البيانات التي نجمعها
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>بيانات شخصية: </strong> الاسم، البريد الإلكتروني، رقم الهاتف</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>بيانات صحية:</strong> الوزن، الطول، العمر، الأهداف الرياضية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>بيانات الاستخدام:</strong> تفاعلك مع التطبيق والموقع</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>بيانات الدفع:</strong> معلومات الفواتير (لا نحتفظ ببيانات البطاقات)</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🎯</span> كيف نستخدم بياناتك
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>تقديم خدمات التدريب والتغذية المخصصة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>التواصل معك بخصوص حسابك وخدماتنا</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>تحسين خدماتنا وتجربة المستخدم</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>إرسال تحديثات ونصائح صحية (بموافقتك)</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🛡️</span> حماية بياناتك
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                نستخدم أحدث تقنيات الأمان لحماية بياناتك: 
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>تشفير SSL لجميع البيانات المنقولة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>خوادم آمنة ومحمية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>وصول محدود للموظفين المصرح لهم فقط</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>مراجعات أمنية دورية</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🤝</span> مشاركة البيانات
              </h2>
              <p className="text-gray-300 leading-relaxed">
                <strong>لا نبيع بياناتك أبداً. </strong> قد نشارك بياناتك فقط مع:
              </p>
              <ul className="space-y-2 text-gray-300 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>المدربين المعينين لك (البيانات الضرورية فقط)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>مزودي خدمات الدفع (بشكل آمن)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>السلطات القانونية (عند الضرورة القانونية)</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>⚙️</span> حقوقك
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>الوصول: </strong> طلب نسخة من بياناتك</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>التصحيح:</strong> تعديل بياناتك غير الصحيحة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>الحذف:</strong> طلب حذف بياناتك</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>الاعتراض:</strong> رفض استخدام بياناتك للتسويق</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📧</span> تواصل معنا
              </h2>
              <p className="text-gray-300 leading-relaxed">
                لأي استفسارات حول الخصوصية، تواصل معنا:
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-xl">
                <p className="text-gray-300">📧 privacy@fitcoach. pro</p>
                <p className="text-gray-300">📱 +20 123 456 7890</p>
              </div>
            </section>
          </div>

          {/* Back Links */}
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/terms" className="text-green-400 hover:underline">
              الشروط والأحكام
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/" className="text-gray-400 hover:text-white">
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
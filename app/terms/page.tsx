import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">📜</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              الشروط <span className="gradient-text">والأحكام</span>
            </h1>
            <p className="text-gray-400">آخر تحديث: يناير 2025</p>
          </div>

          {/* Content */}
          <div className="card prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>1️⃣</span> القبول بالشروط
              </h2>
              <p className="text-gray-300 leading-relaxed">
                باستخدامك لخدمات FitCoach Pro، فإنك توافق على الالتزام بهذه الشروط والأحكام.  إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا. 
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>2️⃣</span> وصف الخدمة
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                FitCoach Pro منصة تقدم خدمات التدريب الشخصي والتغذية عبر الإنترنت، تشمل:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>خطط غذائية مخصصة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>برامج تمارين رياضية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>متابعة مع مدربين محترفين</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>كتب إلكترونية ومحتوى تعليمي</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>3️⃣</span> الاشتراكات والدفع
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>الاشتراكات شهرية ويتم تجديدها تلقائياً</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>الأسعار بالجنيه المصري وقابلة للتغيير مع إشعار مسبق</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>يمكن إلغاء الاشتراك قبل 48 ساعة من التجديد</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>ضمان استرداد الأموال خلال 7 أيام من الاشتراك الأول</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>4️⃣</span> مسؤولية المستخدم
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                بصفتك مستخدماً، أنت مسؤول عن: 
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>تقديم معلومات صحيحة ودقيقة عن حالتك الصحية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>استشارة طبيب قبل بدء أي برنامج رياضي أو غذائي</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>الحفاظ على سرية بيانات حسابك</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>عدم مشاركة المحتوى المدفوع مع آخرين</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>5️⃣</span> إخلاء المسؤولية الطبية
              </h2>
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl mb-4">
                <p className="text-amber-400 font-bold mb-2">⚠️ تنبيه مهم</p>
                <p className="text-gray-300">
                  خدماتنا لا تُغني عن الاستشارة الطبية.  يجب استشارة طبيب متخصص قبل البدء في أي برنامج غذائي أو رياضي، خاصة إذا كنت تعاني من أي حالة صحية.
                </p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>لسنا مسؤولين عن أي إصابات ناتجة عن سوء تطبيق التمارين</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>النتائج تختلف من شخص لآخر</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>مدربونا ليسوا أطباء وليسوا بديلاً عن الرعاية الطبية</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>6️⃣</span> الملكية الفكرية
              </h2>
              <p className="text-gray-300 leading-relaxed">
                جميع المحتويات على منصتنا (بما فيها الكتب، الخطط، المقالات، والتصميمات) هي ملكية حصرية لـ FitCoach Pro ومحمية بموجب قوانين الملكية الفكرية.  يُحظر نسخ أو توزيع أو بيع أي محتوى بدون إذن كتابي. 
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>7️⃣</span> الإنهاء
              </h2>
              <p className="text-gray-300 leading-relaxed">
                يحق لنا إنهاء أو تعليق حسابك فوراً دون إشعار مسبق في حالة: 
              </p>
              <ul className="space-y-2 text-gray-300 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>انتهاك هذه الشروط والأحكام</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>مشاركة المحتوى المدفوع بشكل غير قانوني</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>إساءة استخدام المنصة أو التعامل بشكل غير لائق</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>8️⃣</span> التعديلات
              </h2>
              <p className="text-gray-300 leading-relaxed">
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت.  سيتم إخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على المنصة. استمرارك في استخدام الخدمة يعني موافقتك على الشروط المعدلة.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📧</span> تواصل معنا
              </h2>
              <p className="text-gray-300 leading-relaxed">
                لأي استفسارات حول هذه الشروط: 
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-xl">
                <p className="text-gray-300">📧 legal@fitcoach. pro</p>
                <p className="text-gray-300">📱 +20 123 456 7890</p>
              </div>
            </section>
          </div>

          {/* Back Links */}
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/privacy" className="text-green-400 hover:underline">
              سياسة الخصوصية
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
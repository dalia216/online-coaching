import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FitCoach Pro - منصة التدريب الشخصي',
  description: 'احصل على جسم أحلامك مع أفضل مدربين اللياقة البدنية',
}

export default function RootLayout({
  children,
}: {
  children: React. ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
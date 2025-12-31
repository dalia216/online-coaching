import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

// تحميل كتاب مجاني - Download free book
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, bookId } = body

    // التحقق من البيانات المطلوبة - Validate required fields
    if (!email || !bookId) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني ومعرف الكتاب مطلوبان' },
        { status: 400 }
      )
    }

    // التحقق من صحة البريد الإلكتروني - Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني غير صحيح' },
        { status: 400 }
      )
    }

    // التحقق من وجود الكتاب - Check if book exists
    const book = await prisma.book.findUnique({
      where: { id: bookId },
    })

    if (!book) {
      return NextResponse.json(
        { error: 'الكتاب غير موجود' },
        { status: 404 }
      )
    }

    // التحقق من أن الكتاب مجاني - Check if book is free
    if (!book.isFree) {
      return NextResponse.json(
        { error: 'هذا الكتاب غير مجاني' },
        { status: 400 }
      )
    }

    // إضافة البريد الإلكتروني للنشرة البريدية إذا لم يكن موجوداً
    // Add email to newsletter if not exists
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    })

    if (!existingSubscriber) {
      await prisma.newsletterSubscriber.create({
        data: { email },
      })
    }

    // زيادة عدد التحميلات - Increment download count
    await prisma.book.update({
      where: { id: bookId },
      data: {
        downloadCount: {
          increment: 1,
        },
      },
    })

    // إرجاع نجاح العملية (سيتم إضافة إرسال البريد الإلكتروني لاحقاً)
    // Return success (email sending will be added later)
    return NextResponse.json({
      message: 'تم التسجيل بنجاح! سيتم إرسال الكتاب إلى بريدك الإلكتروني قريباً',
      success: true,
    })
  } catch (error) {
    console.error('Download book error:', error)
    return NextResponse.json(
      { error: 'حدث خطأ أثناء تحميل الكتاب' },
      { status: 500 }
    )
  }
}

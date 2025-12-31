import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// الحصول على جميع الكتب - Get all books
export async function GET() {
  try {
    const books = await prisma.book.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json({ books })
  } catch (error) {
    console.error('Get books error:', error)
    return NextResponse.json(
      { error: 'حدث خطأ أثناء جلب الكتب' },
      { status: 500 }
    )
  }
}

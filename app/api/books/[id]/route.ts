import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

// الحصول على كتاب واحد - Get single book
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const book = await prisma.book.findUnique({
      where: { id: params.id },
    })

    if (!book) {
      return NextResponse.json(
        { error: 'الكتاب غير موجود' },
        { status: 404 }
      )
    }

    return NextResponse.json({ book })
  } catch (error) {
    console.error('Get book error:', error)
    return NextResponse.json(
      { error: 'حدث خطأ أثناء جلب الكتاب' },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/auth'

// تسجيل مستخدم جديد - Register new user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      password,
      phone,
      gender,
      age,
      weight,
      height,
      goal,
      activityLevel,
      plan,
    } = body

    // التحقق من البيانات المطلوبة - Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'الاسم والبريد الإلكتروني وكلمة المرور مطلوبة' },
        { status: 400 }
      )
    }

    // التحقق من وجود المستخدم - Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني مستخدم بالفعل' },
        { status: 400 }
      )
    }

    // تشفير كلمة المرور - Hash password
    const hashedPassword = await hashPassword(password)

    // إنشاء المستخدم - Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
        gender,
        age: age ? parseInt(age) : null,
        weight: weight ? parseFloat(weight) : null,
        height: height ? parseFloat(height) : null,
        goal,
        activityLevel,
      },
    })

    // إنشاء الاشتراك إذا تم تحديد خطة - Create subscription if plan is provided
    if (plan) {
      const subscriptionPlan =
        plan.toUpperCase() === 'BASIC'
          ? 'BASIC'
          : plan.toUpperCase() === 'PRO'
          ? 'PRO'
          : plan.toUpperCase() === 'VIP'
          ? 'VIP'
          : 'BASIC'

      await prisma.subscription.create({
        data: {
          userId: user.id,
          plan: subscriptionPlan,
          status: 'ACTIVE',
          startDate: new Date(),
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        },
      })
    }

    // إرجاع بيانات المستخدم (بدون كلمة المرور)
    // Return user data (without password)
    return NextResponse.json(
      {
        message: 'تم التسجيل بنجاح',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'حدث خطأ أثناء التسجيل' },
      { status: 500 }
    )
  }
}

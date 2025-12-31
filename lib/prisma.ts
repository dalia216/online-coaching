import { PrismaClient } from '@prisma/client'

// إنشاء singleton للاتصال بقاعدة البيانات
// Create a singleton for the database connection
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

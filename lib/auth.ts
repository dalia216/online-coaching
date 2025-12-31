import { compare, hash } from 'bcrypt'

// عدد الجولات لتشفير كلمة المرور
// Number of rounds for password hashing
const SALT_ROUNDS = 10

// تشفير كلمة المرور - Hash password
export async function hashPassword(password: string): Promise<string> {
  return hash(password, SALT_ROUNDS)
}

// التحقق من كلمة المرور - Verify password
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return compare(password, hashedPassword)
}

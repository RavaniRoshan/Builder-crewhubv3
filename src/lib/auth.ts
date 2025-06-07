import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from './db';
import { users, type User, type NewUser } from './db/schema';
import { eq } from 'drizzle-orm';

const JWT_SECRET = import.meta.env.VITE_JWT_SECRET || 'your-secret-key';

export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
}

export interface SignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  company?: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export class AuthService {
  static async signUp(data: SignUpData): Promise<{ user: AuthUser; token: string }> {
    try {
      // Check if user already exists
      const existingUser = await db.select().from(users).where(eq(users.email, data.email));
      
      if (existingUser.length > 0) {
        throw new Error('User already exists with this email');
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(data.password, 12);

      // Create user
      const newUser: NewUser = {
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
      };

      const [createdUser] = await db.insert(users).values(newUser).returning();

      // Generate JWT token
      const token = jwt.sign(
        { 
          userId: createdUser.id, 
          email: createdUser.email 
        },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      const authUser: AuthUser = {
        id: createdUser.id,
        email: createdUser.email,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        company: createdUser.company || undefined,
      };

      return { user: authUser, token };
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  }

  static async signIn(data: SignInData): Promise<{ user: AuthUser; token: string }> {
    try {
      // Find user by email
      const [user] = await db.select().from(users).where(eq(users.email, data.email));

      if (!user) {
        throw new Error('Invalid email or password');
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(data.password, user.password);

      if (!isValidPassword) {
        throw new Error('Invalid email or password');
      }

      // Generate JWT token
      const token = jwt.sign(
        { 
          userId: user.id, 
          email: user.email 
        },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      const authUser: AuthUser = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        company: user.company || undefined,
      };

      return { user: authUser, token };
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  }

  static async verifyToken(token: string): Promise<AuthUser | null> {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; email: string };
      
      const [user] = await db.select().from(users).where(eq(users.id, decoded.userId));

      if (!user) {
        return null;
      }

      return {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        company: user.company || undefined,
      };
    } catch (error) {
      console.error('Token verification error:', error);
      return null;
    }
  }
}
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

// Use environment variable for database URL
const databaseUrl = import.meta.env.VITE_DATABASE_URL;

if (!databaseUrl) {
  throw new Error('VITE_DATABASE_URL environment variable is not set');
}

const sql = neon(databaseUrl);
export const db = drizzle(sql, { schema });

export * from './schema';
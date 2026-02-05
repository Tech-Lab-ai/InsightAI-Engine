import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });

export async function getData() {
  try {
    const data = await db.query.posts.findMany();
    return data;
  } catch (error) {
    console.error('Error fetching data with Drizzle:', error);
    // Return an empty array or handle the error as needed
    return [];
  }
}

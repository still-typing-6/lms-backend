import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";

if (process.env.DATABASE_URL != null) {
  const db = drizzle(process.env.DATABASE_URL)
}

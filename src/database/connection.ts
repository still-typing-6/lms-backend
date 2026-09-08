import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const requiredEnv = ["DB_HOST", "DB_USER", "DB_PASSWORD", "DB_NAME"] as const;

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const poolConnection = mysql.createPool({
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  database: process.env.DB_NAME!,
  connectionLimit: 10,
  password: process.env.DB_PASSWORD!,
  port: 3306
});

export const db = drizzle({ client: poolConnection });

export const checkConnection = async () => {
  try {
    await poolConnection.query("SELECT 1");
    console.log("Database connected Successfully");
  } catch (error) {
    console.error("Database connection error", error)
    throw error;

  }
}

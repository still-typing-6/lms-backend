import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const poolConnection = mysql.createPool({
  host: "host",
  user: "user",
  database: "coursera",
  connectionLimit: 10,
  password: "password"
});

export const db = drizzle({ client: poolConnection });

export const checkConnection = async () => {
  try {
    await poolConnection.query("SELECT 1");
    console.log("Database connected Successfully");
  } catch {
    console.error("Database connection error", Error)
    throw Error;

  }
}

import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const poolConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "lmsdb",
  connectionLimit: 10,
  password: "root",
  port: 3306
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

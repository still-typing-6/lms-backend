import { bigint, char, date } from "drizzle-orm/cockroach-core";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const usersTable = mysqlTable('users_table', {
  id: int().primaryKey().autoincrement(),
  fname: char({ length: 25 }),
  lname: char({ length: 25 }),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  phoneNo: varchar({ length: 10 }).unique(),
  dob: date({ mode: "date" }).notNull(),
})

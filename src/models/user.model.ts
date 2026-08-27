import type { InferSelectModel } from "drizzle-orm";
import { int, mysqlTable, varchar, char, date, mysqlEnum } from "drizzle-orm/mysql-core";

export const usersTable = mysqlTable('users_table', {
  id: int().primaryKey().autoincrement(),
  fname: char({ length: 25 }),
  lname: char({ length: 25 }),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  phoneNo: varchar({ length: 10 }).unique(),
  dob: date({ mode: "date" }).notNull(),
  profileType: mysqlEnum(["Student", "Teacher"]).notNull(),
})

export type User = InferSelectModel<typeof usersTable>;

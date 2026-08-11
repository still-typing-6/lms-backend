import { date, int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { usersTable } from "./user.model.js";

export const teacherTable = mysqlTable("teacher_table", {
  teacherId: serial('id').primaryKey(),
  profilePic: varchar({ length: 255 }),
  createdAt: date(),
  updatedAt: date(),
  userId: int('user_id').references(() => usersTable.id).notNull()
}) 

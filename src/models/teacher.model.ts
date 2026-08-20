import { int, mysqlTable, serial, timestamp, varchar } from "drizzle-orm/mysql-core";
import { usersTable } from "./user.model.js";

export const teacherTable = mysqlTable("teacher_table", {
  teacherId: serial('id').primaryKey(),
  profilePic: varchar({ length: 255 }).default("https://i.pravatar.cc/300"),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('update_at').defaultNow().onUpdateNow().notNull(),
  userId: int('user_id').references(() => usersTable.id).notNull()
}) 

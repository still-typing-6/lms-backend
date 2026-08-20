import { int, mysqlTable, varchar, timestamp } from "drizzle-orm/mysql-core"
import { usersTable } from "./user.model.js"
export const studentTable = mysqlTable("student_table", {
  student_id: int().primaryKey().autoincrement(),
  profilePic: varchar({ length: 255 }).default("https://i.pravatar.cc/300"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updateAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  userId: int("user_id").references(() => usersTable.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull()
})


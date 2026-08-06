import { date, int, mysqlTable, varchar } from "drizzle-orm/mysql-core"
import { usersTable } from "./user.js"
export const studentTable = mysqlTable("student_table", {
  student_id: int().primaryKey().autoincrement(),
  profilePic: varchar({ length: 255 }),
  createdAt: date(),
  updateAt: date(),
  userId: int("usere_id").references(() => usersTable.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull()
})

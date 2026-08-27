import { foreignKey, int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { teacherTable } from "./teacher.model.js";

export const courseTable = mysqlTable("course_table", {
  courseId: int().primaryKey().notNull().unique().autoincrement(),
  courseName: varchar({ length: 50 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  teacherId: int("teacher_id").references(() => teacherTable.teacherId, { onDelete: 'cascade', onUpdate: 'cascade' }).notNull(),
  createdAt: timestamp("created_At").defaultNow().notNull(),
  updatedAt: timestamp("updated_At").defaultNow().onUpdateNow().notNull(),
})

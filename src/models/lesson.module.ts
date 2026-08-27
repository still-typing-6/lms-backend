import { foreignKey, int, mysqlTable, primaryKey, timestamp, varchar } from "drizzle-orm/mysql-core";
import { moduleTable } from "./module.model.js";

export const lessonTable = mysqlTable("lesson_table", {
  lessonNo: int("lesson_number").notNull(),
  courseId: int("course_id").notNull(),
  moduleNo: int("module_number").notNull(),
  videoUrl: varchar("video_url", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
  lessonTitle: varchar("lesson_title", { length: 100 }).notNull(),
  lessonContext: varchar("lesson_context", { length: 255 }).notNull(),
}, (table) => [
  primaryKey({
    columns: [table.courseId, table.moduleNo, table.lessonNo]
  }),
  foreignKey({
    name: "fk_lesson_to_module",
    columns: [table.courseId, table.moduleNo],
    foreignColumns: [moduleTable.courseId, moduleTable.moduleNo],
  }).onDelete('cascade').onUpdate('cascade')
]);

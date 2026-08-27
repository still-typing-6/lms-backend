import { int, mysqlTable, primaryKey, timestamp, varchar } from "drizzle-orm/mysql-core";
import { courseTable } from "./course.model.js";

export const moduleTable = mysqlTable("module_table", {
  moduleNo: int("module_number").notNull(),
  courseId: int("course_id").notNull().references(() => courseTable.courseId, { onDelete: "cascade", onUpdate: "cascade" }),
  title: varchar({ length: 50 }).notNull(),
  createdAt: timestamp("created_At").notNull().defaultNow(),
  updatedAt: timestamp("updated_At").notNull().defaultNow().onUpdateNow(),
}, (table) => [

  primaryKey({
    columns: [table.courseId, table.moduleNo]
  })
]);

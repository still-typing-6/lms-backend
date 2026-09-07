import { and, eq } from "drizzle-orm";
import { db } from "../database/connection.js";
import { moduleTable } from "../models/module.model.js";
import type { moduleDetail, updatemoduleDetail } from "../validations/module.validation.js";

export const createModule = async (courseId: number, moduleNo: number, moduleDetail: moduleDetail) => {
  const result = await db.insert(moduleTable).values({ title: moduleDetail.title, courseId: courseId, moduleNo: moduleNo }).$returningId();
  return result;
}

export const updateModule = async (courseId: number, moduleNo: number, moduleDetail: updatemoduleDetail) => {
  const result = await db.update(moduleTable).set({ title: moduleDetail.title }).where(and(eq(moduleTable.courseId, courseId), eq(moduleTable.moduleNo, moduleNo)))
  return result;
}

export const deleteModule = async (courseId: number, moduleNo: number) => {
  const result = await db.delete(moduleTable).where(and(eq(moduleTable.courseId, courseId), eq(moduleTable.moduleNo, moduleNo)));
  return result;
}

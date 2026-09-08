import { createModule, deleteModule, updateModule } from "../repositories/module.repository.js";
import type { moduleDetail, updatemoduleDetail } from "../validations/module.validation.js";


export const createModuleService = async (courseId: number, moduleNo: number, moduleDetail: moduleDetail) => {
  const result = await createModule(courseId, moduleNo, moduleDetail);
  return result;
}

export const updateModuleService = async (courseId: number, moduleNo: number, updateModuleDetail: updatemoduleDetail) => {
  const result = await updateModule(courseId, moduleNo, updateModuleDetail);
  return result;
}

export const deleteModuleService = async (courseId: number, moduleNo: number) => {
  const result = await deleteModule(courseId, moduleNo);
  return result;
}

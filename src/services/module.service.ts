import { createModule } from "../repositories/module.repository.js";
import type { moduleDetail } from "../validations/module.validation.js";


export const createModuleService = async (courseId: number, moduleNo: number, moduleDetail: moduleDetail) => {
  const result = await createModule(courseId, moduleNo, moduleDetail);
  return result;
}

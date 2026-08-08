import bcrypt from "bcryptjs"
export const hashPassword = async (pass: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pass, salt);
  return hash;
}
export const comparePassword = async (pass: string, hashPass: string) => {
  return await bcrypt.compare(pass, hashPass);
}

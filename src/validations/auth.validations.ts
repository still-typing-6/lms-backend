import * as z from "zod";
export const userRegSchema = z.object({
  fname: z.string().max(25),
  lname: z.string().max(25),
  emailId: z.email().nonempty(),
  password: z.string().max(100).nonempty(),
  phoneNo: z.string().max(10),
  dob: z.coerce.date(),
  profileType: z.enum(["Student", "Teacher"]),
})

export const loginSchema = z.object({
  emailId: z.email(),
  password: z.string().max(15)
})
export type LoginCred = z.infer<typeof loginSchema>;
export type userRegistration = z.infer<typeof userRegSchema>;


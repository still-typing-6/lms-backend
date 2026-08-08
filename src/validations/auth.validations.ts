import * as z from "zod";
export const studentRegSchema = z.object({
  fname: z.string().max(25),
  lname: z.string().max(25),
  emailId: z.email().nonempty(),
  password: z.string().max(100).nonempty(),
  phoneNo: z.string().max(10),
  dob: z.date()
})

export const loginSchema = z.object({
  emailId: z.email(),
  password: z.string().max(15)
})
export type studentRegistration = z.infer<typeof studentRegSchema>;


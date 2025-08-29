import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .transform((val) => val.trim())
    .refine(
      (val) => /^[A-Za-z\s]+$/.test(val), // only letters and spaces allowed
      {
        message: "Name must contain only letters and spaces.",
      }
    ),
  email: z
    .string()
    .email({ message: "Please enter a valid email." })
    .transform((val) => val.trim()),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .transform((val) => val.trim()),
});

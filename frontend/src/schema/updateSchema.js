import { z } from "zod";

export const UpdateFormSchema = z.object({
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
});

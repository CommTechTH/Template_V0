import { z } from "zod"

export const createUserSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

export const updateUserSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).optional(),
  bio: z.string().optional(),
  image: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
})

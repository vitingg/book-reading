import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3),
  password: z.string().min(4),
  role: z.enum(["MANAGER", "EMPLOYEE"]),
});

export const loginSchema = z.object({
  name: z.string().min(3),
  password: z.string().min(4),
});

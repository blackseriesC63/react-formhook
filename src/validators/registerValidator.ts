import { z } from 'zod'

export const schema = z.object({
  username: z.string().min(3, "Username must be minimuym 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be minimum 6 characters long")
})
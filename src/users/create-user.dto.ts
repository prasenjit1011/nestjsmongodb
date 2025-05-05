import { z } from 'zod';

export const CreateUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;

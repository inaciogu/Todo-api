import { z } from 'zod';

export const todoSchema = z.object({
  name: z.string().min(3),
  status: z.string(),
});

export type Todo = z.infer<typeof todoSchema>;

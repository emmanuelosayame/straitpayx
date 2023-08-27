import { z } from 'zod';

export const taskS = z.object({
  id: z.string(),
  title: z.string().max(50),
  description: z.string(),
});

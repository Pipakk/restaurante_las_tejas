import { z } from 'zod';

export const reviewSchema = z.object({
  name: z.string().min(2, 'Nombre demasiado corto').max(100),
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, 'Escribe al menos 10 caracteres').max(1000),
  consent: z.literal(true, { errorMap: () => ({ message: 'Debes aceptar el uso de datos.' }) }),
});

export type ReviewFormData = z.infer<typeof reviewSchema>;

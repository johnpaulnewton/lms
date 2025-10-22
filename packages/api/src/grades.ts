import { z } from 'zod';
import { Pagination } from './queries';

// Output DTOs (API responses)
export const GradeOut = z.object({
  
});

export type GradeOut = z.infer<typeof GradeOut>;

// Creation DTOs (API request bodies)
export const GradeCreateIn = z.object({
    gradeValue: z.number(),
    feedback: z.string(),
    gradedDate: z.string().datetime(),
    submissionId: z.string().uuid(),
    graderId: z.string().uuid(),
});
export type GradeCreateIn = z.infer<typeof GradeCreateIn>;

// Update DTOs (API request bodies)
export const GradeUpdateIn = z.object({
    gradeValue: z.number().optional(),
    feedback: z.string().optional(),
    gradedDate: z.string().datetime().optional(),
    submissionId: z.string().uuid().optional(),
    graderId: z.string().uuid().optional(),
});
export type GradeUpdateIn = z.infer<typeof GradeUpdateIn>;


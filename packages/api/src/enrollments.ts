import { z } from 'zod';
import { Pagination } from './queries';

// Reference DTOs (lightweight relation embeds)
export const EnrollmentRef = z.object({
    id: z.uuid(),
});
export type EnrollmentRef = z.infer<typeof EnrollmentRef>;

// Output DTOs (API responses)
export const EnrollmentOut = z.object({
    id: z.string().uuid(),
    term: z.string(),
    course: z.object({
        id: z.string().uuid(),
        title: z.string(),
        description: z.string(),
      }),
});
export type EnrollmentOut = z.infer<typeof EnrollmentOut>;

// Creation DTOs (API request bodies)
export const EnrollmentCreateIn = z.object({
    term: z.string(),
    userId: z.string().uuid(),
    courseId: z.string().uuid(),
});
export type EnrollmentCreateIn = z.infer<typeof EnrollmentCreateIn>;

// Update DTOs (API request bodies)
export const EnrollmentUpdateIn = z.object({
    term: z.string().optional(),
    userId: z.string().uuid().optional(),
    courseId: z.string().uuid().optional(),
});
export type EnrollmentUpdateIn = z.infer<typeof EnrollmentUpdateIn>;

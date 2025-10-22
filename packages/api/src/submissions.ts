import { z } from 'zod';
import { Pagination } from './queries';

// Output DTOs (API responses)
export const SubmissionOut = z.object({
  
});
export type SubmissionOut = z.infer<typeof SubmissionOut>;

// Creation DTOs (API request bodies)
export const SubmissionCreateIn = z.object({
    submissionDate: z.string().datetime(),
    content: z.string(),
    studentId: z.string(),
    assignmentId: z.string(),
});
export type SubmissionCreateIn = z.infer<typeof SubmissionCreateIn>;

// Update DTOs (API request bodies)
export const SubmissionUpdateIn = z.object({
  submissionDate: z.string().datetime().optional(),
    content: z.string().optional(),
    studentId: z.string().optional(),
    assignmentId: z.string().optional(),
});
export type SubmissionUpdateIn = z.infer<typeof SubmissionUpdateIn>;

// Query DTOs (API query parameters)
export const SubmissionsListFilter = Pagination.extend({
  
});

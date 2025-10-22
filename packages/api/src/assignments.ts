import { z } from 'zod';
import { Pagination } from './queries';

// Reference DTOs (lightweight relation embeds)
export const AssignmentRef = z.object({
  id: z.uuid(),
  title: z.string(),
});
export type AssignmentRef = z.infer<typeof AssignmentRef>;

// Output DTOs (API responses)
export const AssignmentOut = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  dueDate: z.string().datetime(),
});
export type AssignmentOut = z.infer<typeof AssignmentOut>;

// Creation DTOs (API request bodies)
export const AssignmentCreateIn = z.object({
  title: z.string(),
  description: z.string(),
  dueDate: z.string().datetime(),
  courseId: z.string().uuid(),
});
export type AssignmentCreateIn = z.infer<typeof AssignmentCreateIn>;

// Update DTOs (API request bodies)
export const AssignmentUpdateIn = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  dueDate: z.string().datetime().optional(),
  courseId: z.string().uuid().optional(),
});
export type AssignmentUpdateIn = z.infer<typeof AssignmentUpdateIn>;

// Query DTOs (API query parameters)
export const AssignmentsListFilter = Pagination.extend({

});

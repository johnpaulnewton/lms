import { z } from 'zod';
import { Pagination } from './queries';

// Output DTOs (API responses)
export const ModuleOut = z.object({
    id: z.string().uuid(),
    title: z.string(),
    content: z.string(),
});
export type ModuleOut = z.infer<typeof ModuleOut>;

// Creation DTOs (API request bodies)
export const ModuleCreateIn = z.object({
    title: z.string(),
    content: z.string(),
    courseId: z.string(),
});
export type ModuleCreateIn = z.infer<typeof ModuleCreateIn>;

// Update DTOs (API request bodies)
export const ModuleUpdateIn = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    courseId: z.string().optional(),
});
export type ModuleUpdateIn = z.infer<typeof ModuleUpdateIn>;

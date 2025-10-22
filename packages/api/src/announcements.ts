import { z } from 'zod';
import { Pagination } from './queries';

// Output DTOs (API responses)
export const AnnouncementOut = z.object({
    id: z.string().uuid(),
    authorId: z.string().uuid(),
    title: z.string(),
    content: z.string(),
    postedDate: z.string().datetime(),
    author: z.object({
        id: z.string().uuid(),
        firstName: z.string(),
        lastName: z.string(),
    }),
});

export type AnnouncementOut = z.infer<typeof AnnouncementOut>;

// Creation DTOs (API request bodies)
export const AnnouncementCreateIn = z.object({
    title: z.string(),
    content: z.string(),
    postedDate: z.string().datetime(),
    courseId: z.string().uuid(),
    authorId: z.string().uuid(),
});
export type AnnouncementCreateIn = z.infer<typeof AnnouncementCreateIn>;

// Update DTOs (API request bodies)
export const AnnouncementUpdateIn = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    postedDate: z.string().datetime().optional(),
    courseId: z.string().uuid().optional(),
    authorId: z.string().uuid().optional(),
});
export type AnnouncementUpdateIn = z.infer<typeof AnnouncementUpdateIn>;

import { z } from 'zod';
import { Pagination } from './queries';
import { AnnouncementOut } from './announcements';
import { ModuleOut } from './modules';
import { AssignmentOut } from './assignments';

// Reference DTOs (lightweight relation embeds)
export const CourseRef = z.object({
  id: z.uuid(),
  name: z.string(),
});
export type CourseRef = z.infer<typeof CourseRef>;

// Output DTOs (API responses)
export const CourseOut = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  announcements: z.array(AnnouncementOut),
  modules: z.array(ModuleOut),
  assignments: z.array(AssignmentOut), 
});

export type CourseOut = z.infer<typeof CourseOut>;

// Creation DTOs (API request bodies)
export const CourseCreateIn = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});
export type CourseCreateIn = z.infer<typeof CourseCreateIn>;

// Update DTOs (API request bodies)
export const CourseUpdateIn = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
});
export type CourseUpdateIn = z.infer<typeof CourseUpdateIn>;

// Query DTOs (API query parameters)
export const CoursesListFilter = Pagination.extend({

});

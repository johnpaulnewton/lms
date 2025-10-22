import { email, z } from 'zod';
import { Pagination } from './queries';

// Define allowed roles
const RoleEnum = z.enum(['STUDENT', 'INSTRUCTOR', 'ADMIN']);

// Reference DTOs (lightweight relation embeds)
export const UserRef = z.object({
  id: z.uuid(),
  name: z.string(),
});
export type UserRef = z.infer<typeof UserRef>;

// Output DTOs (API responses)
export const UserOut = z.object({
  id: z.uuid(),
  name: z.string(),
  email: z.string().email(),
  role: RoleEnum, 
});
export type UserOut = z.infer<typeof UserOut>;

// Creation DTOs (API request bodies)
export const UserCreateIn = z.object({
  name: z.string(),
  email: z.string().email(),
  role: RoleEnum, 
});
export type UserCreateIn = z.infer<typeof UserCreateIn>;

// Update DTOs (API request bodies)
export const UserUpdateIn = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  role: RoleEnum.optional(),
});
export type UserUpdateIn = z.infer<typeof UserUpdateIn>;

// Query DTOs (API query parameters)
export const UsersListFilter = Pagination.extend({
  email: z.string().email().optional(),
  nameLike: z.string().optional(), 
  role: RoleEnum.optional(), 
});
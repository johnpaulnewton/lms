export class CreateUserDto {
    email: string;
    firstName: string;
    lastName: string; 
    role: 'STUDENT' | 'INSTRUCTOR' | 'ADMIN'; 
    passwordHash: string
}
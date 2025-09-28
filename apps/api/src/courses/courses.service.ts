import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoursesService {
    constructor(private prisma: PrismaService) {}

    getCourses() {}

    getCourseById(id: string) {}

    createCourse(courseData: { title: string; description: string;}) {}

    updateCourseById(id: string, courseData: { title?: string; description?: string}) {}

    deleteCourseById(id: string) {}
}

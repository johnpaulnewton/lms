import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HttpException } from '@nestjs/common';

@Injectable()
export class CoursesService {
    constructor(private prisma: PrismaService) {}

    getCourses() {
        return this.prisma.course.findMany();
    }

    async getCourseById(id: string) {
        const course = await this.prisma.course.findUnique({ where: {id: id}, include: { announcements: true, modules: true, assignments: true }});
        return course;
    }

    createCourse(courseData: { title: string; description: string;}) {
        return this.prisma.course.create({ data: courseData });
    }

    async updateCourseById(id: string, courseData: { title?: string; description?: string}) {
        const findCourse = await this.getCourseById(id);
        if(!findCourse){
            throw new HttpException('Course not Found', 404);
        }
        return this.prisma.course.update({where: {id : id}, data: courseData});
    }

    async deleteCourseById(id: string) {
        const findCourse = await this.getCourseById(id);
        if(!findCourse){
            throw new HttpException('Course not Found', 404);
        }
        return this.prisma.course.delete({where: {id : id}});
    }

}

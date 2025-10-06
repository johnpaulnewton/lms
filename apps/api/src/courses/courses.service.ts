import { Injectable } from '@nestjs/common';
import { CourseCreateIn, CourseUpdateIn } from '@repo/api/courses';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}
  create(createCourseDto: CourseCreateIn) {
    return this.prisma.course.create({ data: createCourseDto });
  }

  findAll() {
    return this.prisma.course.findMany();
  }

  findOne(id: string) {
    return this.prisma.course.findUnique({
      where: { id },
    });
  }

  update(id: string, updateCourseDto: CourseUpdateIn) {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  remove(id: string) {
    return this.prisma.course.delete({
      where: { id },
    });
  }
}

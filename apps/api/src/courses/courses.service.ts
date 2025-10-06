import { Injectable } from '@nestjs/common';
import { CourseCreateIn, CourseUpdateIn } from '@repo/api/courses';

@Injectable()
export class CoursesService {
  create(createCourseDto: CourseCreateIn) {
    return 'This action adds a new course';
  }

  findAll() {
    return `This action returns all courses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: CourseUpdateIn) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}

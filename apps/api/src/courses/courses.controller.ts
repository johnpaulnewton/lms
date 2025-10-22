import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseCreateIn, CourseUpdateIn } from '@repo/api/courses';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) {}

    @Get()
    getCourses() {
        return this.coursesService.getCourses();
    }

    @Get(':id')
    getCourseById(@Param('id') id: string ) {
        return this.coursesService.getCourseById(id);
    }

    @Post()
    createCourse(@Body() createCourseDto: CourseCreateIn) {
        return this.coursesService.createCourse(createCourseDto);
    }

    @Patch(':id')
    updateCourseById(@Param('id') id: string, @Body() updateCourseDto: CourseUpdateIn) {
        return this.coursesService.updateCourseById(id, updateCourseDto);
    }

    @Delete(':id')
    deleteCourseById(@Param('id') id: string) {
        return this.coursesService.deleteCourseById(id);
    }
}
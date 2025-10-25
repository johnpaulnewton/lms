import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseCreateIn, CourseUpdateIn } from '@repo/api/courses';
import { AuthGuard } from '@nestjs/passport';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) { }

    @Get()
    getCourses() {
        return this.coursesService.getCourses();
    }

    @Get(':id')
    getCourseById(@Param('id') id: string) {
        return this.coursesService.getCourseById(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createCourse(@Body() createCourseDto: CourseCreateIn) {
        return this.coursesService.createCourse(createCourseDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    updateCourseById(@Param('id') id: string, @Body() updateCourseDto: CourseUpdateIn) {
        return this.coursesService.updateCourseById(id, updateCourseDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteCourseById(@Param('id') id: string) {
        return this.coursesService.deleteCourseById(id);
    }
}
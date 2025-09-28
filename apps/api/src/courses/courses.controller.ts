import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';
import { UpdateCourseDto } from './update-course.dto';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) {}

    @Get()
    getCourses() {
        return this.coursesService.getCourses();
    }

    @Get(':id')
    getCourseById(@Param('id') id: string) {
        return this.coursesService.getCourseById(id);
    }

    @Post()
    createCourse(@Body() createCourseDto: CreateCourseDto) {
        return this.coursesService.createCourse(createCourseDto);
    }

    @Patch(':id')
    updateCourseById(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
        return this.coursesService.updateCourseById(id, updateCourseDto);
    }

    @Delete(':id')
    deleteCourseById(@Param('id') id: string) {
        return this.coursesService.deleteCourseById(id);
    }
}

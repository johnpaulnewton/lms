import { Controller } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { EnrollmentCreateIn, EnrollmentUpdateIn } from '@repo/api/enrollments';

@Controller('enrollments')
export class EnrollmentsController {
    constructor(private enrollmentsService: EnrollmentsService) {}

    @Get()
    getEnrollments() {
        return this.enrollmentsService.getEnrollments();
    }
    
    @Get(':id')
    getEnrollmentById(@Param('id') id: string) {
        return this.enrollmentsService.getEnrollmentById(id);
    }

    @Post()
    createEnrollment(@Body() createEnrollmentDto: EnrollmentCreateIn) {
        return this.enrollmentsService.createEnrollment(createEnrollmentDto);
    }

    @Patch(':id')
    updateEnrollmentById(@Param('id') id: string, @Body() updateEnrollmentDto: EnrollmentUpdateIn) {
        return this.enrollmentsService.updateEnrollmentById(id, updateEnrollmentDto);
    }

    @Delete(':id')
    deleteEnrollmentById(@Param('id') id: string) {
        return this.enrollmentsService.deleteEnrollmentById(id);
    }

    @Get('user/:userId')
    getEnrollmentsByUserId(@Param('userId') userId: string) {
        return this.enrollmentsService.getEnrollmentsByUserId(userId);
    }
}

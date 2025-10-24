import { Controller } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { Get, Post, Patch, Delete, Param, Body, UseGuards, UnauthorizedException } from '@nestjs/common';
import { EnrollmentCreateIn, EnrollmentUpdateIn } from '@repo/api/enrollments';
import { AuthGuard } from '@nestjs/passport';
import { JwtUser } from 'src/auth/jwt.strategy';
import { CurrentUser } from 'src/auth/current-user.decorator';


@Controller('enrollments')
export class EnrollmentsController {
    constructor(private enrollmentsService: EnrollmentsService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    async me(@CurrentUser() auth: JwtUser) {
        console.log(auth);
        if (!auth || !auth.userId) {
            throw new UnauthorizedException();
        }
        const enrollments = await this.enrollmentsService.getEnrollmentsByUserId(auth.userId);
        if (!enrollments) {
            throw new Error('Enrollments not found');
        }
        return enrollments;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getEnrollments() {
        return this.enrollmentsService.getEnrollments();
    }

    @Get(':id')
    getEnrollmentById(@Param('id') id: string) {
        return this.enrollmentsService.getEnrollmentById(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createEnrollment(@Body() createEnrollmentDto: EnrollmentCreateIn) {
        return this.enrollmentsService.createEnrollment(createEnrollmentDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    updateEnrollmentById(@Param('id') id: string, @Body() updateEnrollmentDto: EnrollmentUpdateIn) {
        return this.enrollmentsService.updateEnrollmentById(id, updateEnrollmentDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteEnrollmentById(@Param('id') id: string) {
        return this.enrollmentsService.deleteEnrollmentById(id);
    }
}

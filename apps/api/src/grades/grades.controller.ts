import { Controller } from '@nestjs/common';
import { GradesService } from './grades.service';
import { Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { GradeCreateIn, GradeUpdateIn } from '@repo/api/grades';
import { Grade } from '../../../../packages/database/generated/client';

@Controller('grades')
export class GradesController {
    constructor(private gradesService: GradesService) {};

    @Get()
    getGrades() {
        return this.gradesService.getGrades();
    }
    
    @Get(':id')
    getGradeById(@Param('id') id: string) {
        return this.gradesService.getGradeById(id);
    }

    @Post()
    createGrade(@Body() createGradeDto: GradeCreateIn) {
        return this.gradesService.createGrade(createGradeDto);
    }
    
    @Patch(':id')
    updateGradeById(@Param('id') id: string, @Body() updateGradeDto: GradeUpdateIn) {
        return this.gradesService.updateGradeById(id, updateGradeDto);
    }   

    @Delete(':id')
    deleteGradeById(@Param('id') id: string) {
        return this.gradesService.deleteGradeById(id);
    }


}

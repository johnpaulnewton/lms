import { Controller } from '@nestjs/common';
import { GradesService } from './grades.service';
import { Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CreateGradeDto } from './create-grade.dto';
import { UpdateGradeDto } from './update-grade.dto';

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
    createGrade(@Body() createGradeDto: CreateGradeDto) {
        return this.gradesService.createGrade(createGradeDto);
    }
    
    @Patch(':id')
    updateGradeById(@Param('id') id: string, @Body() updateGradeDto: UpdateGradeDto) {
        return this.gradesService.updateGradeById(id, updateGradeDto);
    }   

    @Delete(':id')
    deleteGradeById(@Param('id') id: string) {
        return this.gradesService.deleteGradeById(id);
    }


}

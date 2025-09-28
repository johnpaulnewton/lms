import { Controller, Get, Post, Patch, Delete, Param, Body  } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { CreateAssignmentDto } from './create-assignment.dto';
import { UpdateAssignmentDto } from './update-assignment.dto';

@Controller('assignments')
export class AssignmentsController {
    constructor(private assignmentService: AssignmentsService) {}

    @Get()
    getAssignments() {
        return this.assignmentService.getAssignments();
    }
    
    @Get(':id')
    getAssignmentById(@Param('id') id: string) {
        return this.assignmentService.getAssignmentById(id);
    }

    @Post()
    createAssignment(@Body() createAssignmentDto: CreateAssignmentDto) {
        return this.assignmentService.createAssignment(createAssignmentDto);
    }

    @Patch(':id')
    updateAssignmentById(@Param('id') id: string, @Body() updateAssignmentDto: UpdateAssignmentDto) {
        return this.assignmentService.updateAssignmentById(id, updateAssignmentDto);
    }

    @Delete(':id')
    deleteAssignmentById(@Param('id') id: string) {
        return this.assignmentService.deleteAssignmentById(id);
    }
}

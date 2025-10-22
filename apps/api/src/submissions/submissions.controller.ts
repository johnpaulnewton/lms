import { Controller } from '@nestjs/common';
import { Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { SubmissionCreateIn, SubmissionUpdateIn} from '@repo/api/submissions';

@Controller('submissions')
export class SubmissionsController {
    constructor(private submissionsService: SubmissionsService) {}

    @Get()
    getSubmissions() {
        return this.submissionsService.getSubmissions();
    }
    
    @Get(':id')
    getSubmissionById(@Param('id') id: string) {
        return this.submissionsService.getSubmissionById(id);
    }
    @Post()
    createSubmission(@Body() createSubmissionDto: SubmissionCreateIn) {
        return this.submissionsService.createSubmission(createSubmissionDto);
    }
    
    @Patch(':id')
    updateSubmissionById(@Param('id') id: string, @Body() updateSubmissionDto: SubmissionUpdateIn) {
        return this.submissionsService.updateSubmissionById(id, updateSubmissionDto);
    }

    @Delete(':id')
    deleteSubmissionById(@Param('id') id: string) {
        return this.submissionsService.deleteSubmissionById(id);
    }
}

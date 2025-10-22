import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubmissionCreateIn, SubmissionUpdateIn} from '@repo/api/submissions';

@Injectable()
export class SubmissionsService {
    constructor(private prisma: PrismaService) {};

    getSubmissions() {
        return this.prisma.submission.findMany();
    }
    
    getSubmissionById(id: string) {
        return this.prisma.submission.findUnique({ where: {id: id}});
    }
    
    createSubmission(submissionData: SubmissionCreateIn) {
        return this.prisma.submission.create({ data: submissionData });
    }
    
    async updateSubmissionById(id: string, submissionData: SubmissionUpdateIn) {
        const findSubmission = await this.getSubmissionById(id);
        if(!findSubmission){
            throw new HttpException('Submission not Found', 404);
        }
        return this.prisma.submission.update({where: {id : id}, data: submissionData});
    }
    
    async deleteSubmissionById(id: string) {
        const findSubmission = await this.getSubmissionById(id);
        if(!findSubmission){
            throw new HttpException('Submission not Found', 404);
        }
        return this.prisma.submission.delete({where: {id : id}});
    }
}

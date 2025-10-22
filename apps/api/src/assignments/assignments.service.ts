import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AssignmentCreateIn, AssignmentUpdateIn } from '@repo/api/assignments';

@Injectable()
export class AssignmentsService {
    constructor(private prisma: PrismaService) { }

    getAssignments() {
        return this.prisma.assignment.findMany();
    }

    getAssignmentById(id: string) {
        return this.prisma.assignment.findUnique({ where: { id: id } });
    }

    createAssignment(assignmentData: AssignmentCreateIn) {
        return this.prisma.assignment.create({ data: assignmentData })
    }

    async updateAssignmentById(id: string, assignmentData: AssignmentUpdateIn) {
        const findAssignment = await this.getAssignmentById(id);
        if (!findAssignment) {
            throw new Error('Assignment not Found');
        }
        return this.prisma.assignment.update({ where: { id: id }, data: assignmentData });
    }

    async deleteAssignmentById(id: string) {
        const findAssignment = await this.getAssignmentById(id);
        if (!findAssignment) {
            throw new Error('Assignment not Found');
        }
        return this.prisma.assignment.delete({ where: { id: id } });
    }
}


import { Module } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { SubmissionsService } from './submissions.service';
import { SubmissionsController } from './submissions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [SubmissionsController],
    providers: [SubmissionsService]
})
export class SubmissionsModule {}

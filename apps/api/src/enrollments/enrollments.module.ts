import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EnrollmentsController } from './enrollments.controller';
import { EnrollmentsService } from './enrollments.service';

@Module({
    imports: [PrismaModule],
    controllers: [EnrollmentsController],
    providers: [EnrollmentsService]
})
export class EnrollmentsModule {}

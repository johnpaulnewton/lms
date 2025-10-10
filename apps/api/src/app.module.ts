import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { CoursesService } from './courses/courses.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesModule } from './courses/courses.module';
import { ModulesService } from './modules/modules.service';
import { ModulesController } from './modules/modules.controller';
import { ModulesModule } from './modules/modules.module';
import { EnrollmentsService } from './enrollments/enrollments.service';
import { EnrollmentsController } from './enrollments/enrollments.controller';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { SubmissionsController } from './submissions/submissions.controller';
import { SubmissionsService } from './submissions/submissions.service';
import { SubmissionsModule } from './submissions/submissions.module';
import { GradesModule } from './grades/grades.module';
import { AnnouncementsService } from './announcements/announcements.service';
import { AnnouncementsModule } from './announcements/announcements.module';

@Module({
  imports: [/*LinksModule,*/UsersModule, PrismaModule, CoursesModule, ModulesModule, EnrollmentsModule, AssignmentsModule, SubmissionsModule, GradesModule, AnnouncementsModule],
  controllers: [AppController, CoursesController, ModulesController, EnrollmentsController, SubmissionsController],
  providers: [AppService, CoursesService, ModulesService, EnrollmentsService, SubmissionsService, AnnouncementsService],
})
export class AppModule {}

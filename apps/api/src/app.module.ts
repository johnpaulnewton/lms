import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [UsersModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

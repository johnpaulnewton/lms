import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from './courses.controller';
<<<<<<< HEAD
=======
import { CoursesService } from './courses.service';
>>>>>>> upstream/main

describe('CoursesController', () => {
  let controller: CoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesController],
<<<<<<< HEAD
=======
      providers: [CoursesService],
>>>>>>> upstream/main
    }).compile();

    controller = module.get<CoursesController>(CoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

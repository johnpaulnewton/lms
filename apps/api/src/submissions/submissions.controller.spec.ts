import { Test, TestingModule } from '@nestjs/testing';
import { SubmissionsController } from './submissions.controller';
<<<<<<< HEAD
=======
import { SubmissionsService } from './submissions.service';
>>>>>>> upstream/main

describe('SubmissionsController', () => {
  let controller: SubmissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubmissionsController],
<<<<<<< HEAD
=======
      providers: [SubmissionsService],
>>>>>>> upstream/main
    }).compile();

    controller = module.get<SubmissionsController>(SubmissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

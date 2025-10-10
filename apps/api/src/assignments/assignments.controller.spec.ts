import { Test, TestingModule } from '@nestjs/testing';
import { AssignmentsController } from './assignments.controller';
<<<<<<< HEAD
=======
import { AssignmentsService } from './assignments.service';
>>>>>>> upstream/main

describe('AssignmentsController', () => {
  let controller: AssignmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignmentsController],
<<<<<<< HEAD
=======
      providers: [AssignmentsService],
>>>>>>> upstream/main
    }).compile();

    controller = module.get<AssignmentsController>(AssignmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

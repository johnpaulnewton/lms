import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
<<<<<<< HEAD

describe('UsersController', () => {
  let controller: UsersController;
=======
import { UsersService } from './users.service';
import { User } from '@repo/database';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;
>>>>>>> upstream/main

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
<<<<<<< HEAD
    }).compile();

    controller = module.get<UsersController>(UsersController);
=======
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
>>>>>>> upstream/main
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
<<<<<<< HEAD
=======

  it('should return an array of users', async () => {
    const result: User[] = [
      { id: '1', name: 'Ada Bart', email: '', emailVerified: null },
    ];
    jest.spyOn(service, 'findAll').mockResolvedValueOnce(result);

    expect(await service.findAll()).toBe(result);
  });
>>>>>>> upstream/main
});

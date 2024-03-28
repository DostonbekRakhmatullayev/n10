import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import { Test } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from '../entities/user.entity';

import { userStub } from './stubs/user.stup';

// import Test from 'supertest/lib/test';
jest.mock('../user.service');

describe('User Controller', () => {
  let userController: UserController;
  let userService: UserService;

  beforeAll(async () => {
    const modulRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, JwtService],
    }).compile();
    userController = modulRef.get<UserController>(UserController);
    userService = modulRef.get<UserService>(UserService);
    jest.clearAllMocks();
  });
  it('User Controlloer', () => {
    expect(userController).toBeDefined();
  });

  it('User Service', () => {
    expect(userService).toBeDefined();
  });

  describe('Create User', () => {
    describe('Create', () => {
      let user: UserModel;
      let createUserDto;
      beforeAll(async () => {
        createUserDto = {
          firstName: userStub().firstName,
          lastName: userStub().lastName,
          email: userStub().email,
          password: userStub().password,
        };
        user = await userController.create(createUserDto);
        console.log(user);
      });

      it('UserService', () => {
        expect(userService.create).toHaveBeenCalledWith(createUserDto);
      });

      it('user return', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('get', () => {
    describe('get', () => {
      let user: UserModel[];

      beforeAll(async () => {
        user = await userController.findAll();
      });

      // test('get', () => {
      //   export(userService.findAll).to
      // });
    });
  });
});

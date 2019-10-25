import {UserRouter} from "../../src/routes/userRouter";
import {UserDao} from "../../src/daos/userDao";
import {Router, Request, Response, NextFunction} from 'express';

jest.mock('../../src/daos/userDao');

describe("UserRouter", () => {
    let instance: UserRouter;
    const req = {} as Request;
    const res = {} as Response;
    const next = {} as NextFunction;

   beforeEach(() => {
      instance = new UserRouter();
      expect(instance).toBeInstanceOf(UserRouter);
   });

   test('Get one user', async () => {
       const user = await instance.getOne(req, res, next);
       expect(user).toBeDefined();
   });

   test('Get all users', async () => {
      const users = await instance.getAll(req, res, next);
      console.log(users);
      expect(users).toBeDefined();
   });
});
import {Request, Response} from "express";
import {UserRouter} from "../../src/routes/userRouter";
import {UserDao} from "../../src/daos/userDao";

jest.mock('../../src/daos/userDao');

// Mock request object.
const mockRequest = () => {
    return {
      body: { userID: 'unit_test_user', givenName: 'Unit Test User', admin: 'false'},
    };
};

// Mock response object.
// Supports the call res.redirect(cmd) and returns the given command.
const mockResponse = () => {
    const res = { redirect: jest.fn((cmd) => {return cmd;})};
    return res;
};

/*describe('Creating Routes', () => {
    let instance: UserRouter;

    // Delete when a actual test is created.
    test('Creating routes', () => {
        expect(true).toBeTruthy();
    });
});*/


describe('User Router', () => {
    let instance: UserRouter;

    beforeEach(() => {
        instance = new UserRouter();
        expect(instance).toBeInstanceOf(UserRouter);
    });

    test('Creating a user', async (done) => {
        const req = mockRequest();
        const res = mockResponse();
        let result = await instance.createUser(req, res);
        expect(result).toBe('back');
        done();
    });
});
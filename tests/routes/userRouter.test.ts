import {Request, Response} from "express";
import {UserRouter} from "../../src/routes/userRouter";
import {UserDao} from "../../src/daos/userDao";

jest.mock('../../src/daos/userDao');

// Mock request object.
const mockRequest = (content : any) => {
    return <Request>content;
};

// Mock response object.
const mockResponse = (content : any) => {
    return <Response><unknown>content;
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

    /* TODO
    * get output of actual userDao.getAllUsers() and use this as the return object in
    * the mocked dao
     */
    test('Getting all users', async(done) => {
       const req = mockRequest({});
       const res = mockResponse({ send: jest.fn((cmd) => {return cmd;})});
       let result = await instance.getAll(req, res);
       expect(result).toBe({});
    });

    test('Getting a single user', async(done) => {

    });

    test('Deleting a user', async(done) => {

    });

    test('Creating a user', async (done) => {
        const req = mockRequest({ body: { userID: 'unit_test_user', givenName: 'Unit Test User', admin: 'false'}, });
        const res = mockResponse({ redirect: jest.fn((cmd) => {return cmd;})});
        let result = await instance.createUser(req, res);
        expect(result).toBe('back');
        done();
    });
});
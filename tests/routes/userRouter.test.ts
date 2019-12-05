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

describe('User Router', () => {
    let instance: UserRouter;

    beforeEach(() => {
        instance = new UserRouter();
        expect(instance).toBeInstanceOf(UserRouter);
    });

    test('Getting all users', async(done) => {
       const req = mockRequest({});
       const res = mockResponse({ send: jest.fn((cmd) => {return cmd;})});

       let result = await instance.getAll(req, res);

       let expected_users = [
           {
               _id: '5daaee8a1c9d4400006d4110',
               userID: 'oliverlewis',
               givenName: 'Oliver Lewis',
               admin: false
           },
           {
               _id: '5daaef8c1c9d4400006d4114',
               userID: 'emilysluis',
               givenName: 'Emily Sluis',
               admin: false
           },
           {
               _id: '5daaefac1c9d4400006d4115',
               userID: 'malcolmnewson',
               givenName: 'Malcolm Newson',
               admin: false
           }
       ];
       let expected_result = {
           message: "Success",
           status: 200,
           users: expected_users,
       };

       expect(result).toStrictEqual(expected_result);
       done();
    });

    test('Getting a single user', async(done) => {
        const req = mockRequest({ params: { userID: 'test_user'}});
        const res = mockResponse({ send: jest.fn((cmd) => {return cmd;})});

        let result = await instance.getOne(req, res);

        let expected_result = {
            message: "Success",
            status: 200,
            user: {
                userID: 'test_user',
                givenName: 'Test User',
                admin: false
            },
        };

        expect(result).toStrictEqual(expected_result);
        done();
    });

    test('Deleting a user', async(done) => {
        const req = mockRequest({ params: { userID: 'test_user'}});
        const res = mockResponse({ redirect: jest.fn((cmd) => {return cmd;})});
        let result = await instance.deleteOne(req, res);
        expect(result).toBe('back');
        done();
    });

    test('Creating a user', async (done) => {
        const req = mockRequest({ body: { userID: 'unit_test_user', givenName: 'Unit Test User', admin: 'false'}, });
        const res = mockResponse({ redirect: jest.fn((cmd) => {return cmd;})});
        let result = await instance.createUser(req, res);
        expect(result).toBe('back');
        done();
    });
});
import {UserRouter} from "../../src/routes/userRouter";
import {UserDao} from "../../src/daos/userDao";

jest.mock('../../src/daos/userDao');
//test the routes, expect functions to be called
//test the functions the routes call

describe('Creating Routes', () => {
    let instance: UserRouter;

    // Delete when a actual test is created.
    test('Creating routes', () => {
       expect(true).toBeTruthy();
    });
});

/*describe('User Router', () => {
    let instance: UserRouter;

    beforeEach(() => {
        instance = new UserRouter();
        expect(instance).toBeInstanceOf(UserRouter);
    });

    test('Creating a user', async (done) => {
        const res = await request
        let result = await instance.getAll(req, res);
    });

});*/
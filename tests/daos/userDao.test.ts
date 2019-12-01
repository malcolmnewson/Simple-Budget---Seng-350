import {UserDao} from "../../src/daos/userDao"

describe('UserDao', () => {
    let instance: UserDao;

    beforeEach(() => {
        instance = new UserDao();
        expect(instance).toBeInstanceOf(UserDao);
    });

    test('Getting a existing user', async (done) => {
        const user = await instance.getUser("test_user");
        expect(user).toBeDefined();
        done();
    });

    test('Getting all users', async (done) => {
        const users = await instance.getAllUsers();
        expect(users).toBeDefined();
        done();
    })
});

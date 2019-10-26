import {UserDao} from "../../src/daos/userDao"

describe('UserDao', () => {
    let instance: UserDao;

    beforeEach(() => {
        instance = new UserDao();
        expect(instance).toBeInstanceOf(UserDao);
    });

    test('Getting a existing user', async () => {
        const user = await instance.getUser("test_user");
        expect(user).toBeDefined();
    });

    test('Getting all users', async () => {
        const users = await instance.getAllUsers();
        expect(users).toBeDefined();
    })
});

import {UserDao} from "../../daos/userDao"

describe('UserDao: Getting users', () => {
    let instance: UserDao;

    beforeEach(() => {
        instance = new UserDao();
        expect(instance).toBeInstanceOf(UserDao);
    });

    test('Getting a existing user', async (done) => {
        const user = await instance.getUser("test_user");
        expect(user).not.toBeNull();
        done();
    });

    test('Getting all users', async (done) => {
        const users = await instance.getAllUsers();
        expect(users).not.toBeNull();
        done();
    });
});

describe('UserDao: Adding and deleting users', () => {
   let instance: UserDao;
   let user = { userID: 'unit_test_user', givenName: 'Unit Test User', admin: 'false'};
   let user_admin = { userID: 'unit_test_user_admin', givenName: 'Unit Test Admin', admin: 'false'};

   beforeEach(() => {
       instance = new UserDao();
       expect(instance).toBeInstanceOf(UserDao);
   });

   test('Adding a new user', async (done) => {
       let result = await instance.addNewUser(user);
       expect(result).not.toBeNull();
       done();
   });

   test('Adding a new admin', async (done) => {
       let result = await instance.addNewUser(user_admin);
       expect(result).not.toBeNull();
       done();
   });

   test('Deleting a user', async(done) => {
      let result = await instance.deleteUser('unit_test_user');
      expect(result).not.toBeNull();
      done();
   });

   test('Deleting an admin', async(done) => {
       let result = await instance.deleteUser('unit_test_user_admin');
       expect(result).not.toBeNull();
       done();
   })
});

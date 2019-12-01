//
// MOCKED implementation of userDao.ts
//

export class UserDao {
    public async getUser(userID : any) {
        return {
            userID: 'test_user',
            givenName: 'Test User',
            admin: false
        };
    }

    public async getAllUsers() {

    }

    public async deleteUser(userID : any) {

    }
}
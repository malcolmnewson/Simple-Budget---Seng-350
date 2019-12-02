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
        return {};
    }

    public async deleteUser(userID : any) {
        return { message: 'Success',};
    }

    public async addNewUser(user : any) {
        return { message: 'Success',};
    }
}
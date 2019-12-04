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
        return [
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
    }

    public async deleteUser(userID : any) {
        return { message: 'Success',};
    }

    public async addNewUser(user : any) {
        return { message: 'Success',};
    }
}
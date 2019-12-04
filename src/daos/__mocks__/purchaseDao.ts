//
// MOCKED implementation of userDao.ts
//

export class PurchaseDao {
    public async getUsersPurchases(userID : any) {
        return [
            {
                userID: 'oliverlewis',
                category: 'Other',
                cost: '35.50',
                date: '2019-12-03',
                description: 'Cat food'
            },
            {
                userID: 'oliverlewis',
                category: 'Transport',
                cost: '10000000',
                date: '2019-11-26',
                description: 'Space Ship'
            },
            {
                userID: 'oliverlewis',
                category: 'Food',
                cost: '0.30',
                date: '2019-10-08',
                description: 'Apple'
            }
        ];
    }

    public async getAllPurchases() {
        return [
            {
                userID: 'oliverlewis',
                category: 'Other',
                cost: '35.50',
                date: '2019-12-03',
                description: 'Cat food'
            },
            {
                userID: 'oliverlewis',
                category: 'Transport',
                cost: '10000000',
                date: '2019-11-26',
                description: 'Space Ship'
            },
            {
                userID: 'oliverlewis',
                category: 'Food',
                cost: '0.30',
                date: '2019-10-08',
                description: 'Apple'
            }
        ];
    }

    public async uploadUsersPurchase(purchase : any) {
        return { message: 'Success'};
    }

    public async updateUsersPurchase(purchase : any) {
        return { message: 'Success'};
    }

    public async deletePurchase(_id : any) {
        return { message: 'Success'};
    }
}
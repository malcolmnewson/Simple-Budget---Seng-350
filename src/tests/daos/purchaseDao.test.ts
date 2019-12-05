import {PurchaseDao} from "../../daos/purchaseDao"
import mongodb = require("mongodb");

describe('PurchaseDao: Getting purchases', () => {
    let instance: PurchaseDao;

    beforeEach(() => {
        instance = new PurchaseDao();
        expect(instance).toBeInstanceOf(PurchaseDao);
    });

    test('Getting a users purchases', async (done) => {
        const purchases = await instance.getUsersPurchases("test_user");
        expect(purchases).toBeDefined();
        done();
    });

    test('Getting all users purchases', async (done) => {
        const purchases = await instance.getAllPurchases();
        expect(purchases).toBeDefined();
        done();
    });
});

describe('PurchaseDao: Adding and deleting purchases', () => {
    let instance: PurchaseDao;
    let new_purchase = {
        userID: 'oliverlewis',
        category: 'Other',
        cost: '500',
        date: '2019-12-03',
        description: 'Unit Test Purchase'
    };

    beforeEach(() => {
        instance = new PurchaseDao();
        expect(instance).toBeInstanceOf(PurchaseDao);
    });

    test('Adding a purchase', async (done) => {
        let result = await instance.uploadUsersPurchase(new_purchase);
        expect(result).not.toBeNull();
        if (result !== null) {
            expect(result.insertedCount).toBe(1);

            //clean up
            instance.deletePurchase(result.ops[0]._id);
        }
        done();
    });

    test('Updating a purchase', async (done) => {
        //setup
        let upload_result = await instance.uploadUsersPurchase(new_purchase);
        let updated_purchase;
        let id;
        if (upload_result !== null) {
            updated_purchase = upload_result.ops[0];
            updated_purchase.cost = 1000;
            id = updated_purchase._id;
        }

        let result = await instance.updateUsersPurchase(updated_purchase)

        expect(result).not.toBeNull();
        if (result !== null) {
            expect(result.modifiedCount).toBe(1);
            expect(result.ops[0].cost).toBe(1000);

            //clean up
            if (updated_purchase !== undefined && id !== undefined) {
                let purchase_id : mongodb.ObjectID = <mongodb.ObjectID>id;
                instance.deletePurchase(purchase_id.toHexString());
            }
        }
        done();
    });

    test('Deleting a purchase', async (done) => {
        let delete_result;
        let upload_result = await instance.uploadUsersPurchase(new_purchase);
        if (upload_result !== null) {
            delete_result = await instance.deletePurchase(upload_result.ops[0]._id);
        }
        if (delete_result !== null && delete_result !== undefined) {
            expect(delete_result.deletedCount).toBe(1);
        }
        done();
    });
});
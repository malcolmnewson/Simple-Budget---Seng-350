import {PurchaseDao} from "../../src/daos/purchaseDao"

describe('PurchaseDao', () => {
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
    })
});

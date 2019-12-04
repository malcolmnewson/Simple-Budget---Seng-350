import {Request, Response} from "express";
import {PurchaseRouter} from "../../src/routes/purchaseRouter";

jest.mock('../../src/daos/purchaseDao');

// Mock request object.
const mockRequest = (content : any) => {
    return <Request>content;
};

// Mock response object.
const mockResponse = (content : any) => {
    return <Response><unknown>content;
};

describe('Purchase Router', () => {
    let instance: PurchaseRouter;
    let expected_purchases = [
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

    beforeEach(() => {
        instance = new PurchaseRouter();
        expect(instance).toBeInstanceOf(PurchaseRouter);
    });

    test('Get User Purchases', async(done) => {
        const req = mockRequest({ params: { userID: 'test_user'}});
        const res = mockResponse({ send: jest.fn((cmd) => {return cmd;})});

        let result = await instance.getUserPurchases(req, res);

        let expected_result = {
            message: "Success",
            purchases: expected_purchases,
            status: 200,
        };

        expect(result).toStrictEqual(expected_result);
        done();
    });

    test('Upload User Purchases', async(done) => {
        const req = mockRequest({ body: { userID: 'test_user'}, });
        const res = mockResponse({ redirect: jest.fn((cmd) => {return cmd;})});

        let result = await instance.uploadUserPurchase(req, res);

        expect(result).toBe('/user/test_user');
        done();
    });

    test('Update User Purchases', async(done) => {
        const req = mockRequest({ body: { userID: 'test_user'}, });
        const res = mockResponse({ redirect: jest.fn((cmd) => {return cmd;})});

        let result = await instance.updateUserPurchase(req, res);

        expect(result).toBe('/user/test_user');
        done();
    });

    test('Delete User Purchases', async(done) => {
        const req = mockRequest({ body: { userID: 'test_user', _id: '1234'}, });
        const res = mockResponse({ redirect: jest.fn((cmd) => {return cmd;})});

        let result = await instance.uploadUserPurchase(req, res);

        expect(result).toBe('/user/test_user');
        done();
    });
});
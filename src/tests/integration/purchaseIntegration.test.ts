const PurchaseRouter = require("../../routes/purchaseRouter");

describe("PurchaseRouter.create", ()=>{
    it("should have create function", () =>{
        expect(typeof PurchaseRouter.PurchaseRouter).toBe("function");
    })
})
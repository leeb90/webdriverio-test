const MainPage = require('../pageobjects/main.page');
const expect= require('chai').expect;

describe('Automation practice application, adding and removing items', () => {
    it('should add item to shopping cart', () => {
        MainPage.open();
        MainPage.clickRandomItem();
        MainPage.waitForElement(MainPage.cartQuantity);
        MainPage.closeAddtoCartpopUp.click();
        const Result = MainPage.cartQuantity.getText();
        expect(MainPage.cartQuantity.isDisplayed(), "Shopping cart should have an item").to.be.true;
        expect(Result, "One Item should be added to the cart").to.equal("1");
    });

    it('should remove item from shopping cart', () => {
        MainPage.shoppinCartMenu.scrollIntoView();
        MainPage.shoppinCartMenu.moveTo();
        MainPage.waitForElement(MainPage.shoppinCartMenuHover);
        MainPage.removeItem.click();
        MainPage.waitForElement(MainPage.cartEmpty);
        const Result = MainPage.cartEmpty.getText();
        expect(Result, "Shopping cart should be empty").to.equal("(empty)");
    });
});



const MainPage = require('../pageobjects/main.page');
const expect= require('chai').expect;

describe('Automation practice application, searching intems', () => {
    it('should search non existing item', () => {
        MainPage.open();
        MainPage.searchProduct('Jeans');
        MainPage.waitForElement(MainPage.alertMessage);
        const Result = MainPage.alertMessage.getText();
        expect(Result, "Warning message should appear indicating no results were found").to.contain("No results were found for your search");
    });

    it('should search existing item', () => {
        MainPage.searchProduct('Faded');
        MainPage.waitForExist(MainPage.searchProductList);
        const Result = MainPage.searchProductList.isExisting();
        expect(Result, "Search should return a product list").to.be.true;
    });
});



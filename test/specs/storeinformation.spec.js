const MainPage = require('../pageobjects/main.page');
const expect= require('chai').expect;
const storeInfomationArray = ["Selenium Framework, Research Triangle Park, North Carolina, USA", 
                              "Call us now: (347) 466-7432", 
                              "Email: support@seleniumframework.com"];

describe('Automation practice application, verify store information', () => {
    it('should check store information on footer', () => {
        MainPage.open();
        MainPage.storeInformationBlock.scrollIntoView();
        for (var i = 0; i < MainPage.storeInformationList.length; i++) {
            expect(MainPage.storeInformationList[i].getText(), "Address, phone number and email should appear").to.equal(storeInfomationArray[i]);
        }
    });
});

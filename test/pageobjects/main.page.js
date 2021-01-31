const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get itemsPopularAddtocart () { return $$('.product_list.active [title^="Add to cart"]') }
    get PopularBlocksItems () { return $$('.product_list.active .product-container') }
    get closeAddtoCartpopUp () { return $('.cross[title^="Close window"]') }
    get cartQuantity () { return $('.ajax_cart_quantity.unvisible') }
    get cartEmpty () { return $('.ajax_cart_no_product') }
    get shoppinCartMenu () { return $('.shopping_cart [title^="View my shopping cart"]') }
    get shoppinCartMenuHover () { return $('.cart_block') }
    get removeItem () { return $('.ajax_cart_block_remove_link') }
    get searchBox () { return $('#search_query_top') }
    get searchButton () { return $('.button-search') }
    get alertMessage () { return $('.alert.alert-warning') }
    get searchProductList () { return $('.product_list') }
    get storeInformationBlock () { return $('#block_contact_infos') }
    get storeInformationList () { return $$('#block_contact_infos > div > ul > li') }

    //Function to click random item on main page to add to cart and close popup
    clickRandomItem(){
      const index = Math.floor(Math.random() * this.PopularBlocksItems.length);
      this.PopularBlocksItems[index].scrollIntoView();
      this.PopularBlocksItems[index].moveTo();
      this.itemsPopularAddtocart[index].click();
       browser.waitUntil(() => {
         return this.addtoCartpopUp.isDisplayed()
       },"Add to Cart Popup is not displayed");
    }

    //function to wait for element to be visible
    waitForElement(element){
      browser.waitUntil(() => {
        return element.isDisplayed()
      },"Element not displayed");
    }

    //Function to wait for element to exist
    waitForExist(element){
      browser.waitUntil(() => {
        return element.isExisting()
      },"Element does not exist");
    }

    //Function to search for an item on the search box and click on search button
    searchProduct(item){
     this.searchBox.setValue(item);
     this.searchButton.click();
    }

    open () {
        return super.open('http://automationpractice.com/index.php');
    }

}

module.exports = new MainPage();

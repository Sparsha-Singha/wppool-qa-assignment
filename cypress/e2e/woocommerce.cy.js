const LoginPage = require("../pages/LoginPage");
const OpenPage = require("../pages/OpenPage");
const AddToCart = require("../pages/AddToCart");
const ContactInfo = require("../pages/ContactInfo");

describe("Woocommerce Webstore Visit", () => {
    
    

    it("User Account Order History", () => {
    OpenPage.pageShop();
    AddToCart.AddToCart();
    OpenPage.openCart();
    OpenPage.checkout();
    ContactInfo.contactGmail();
    ContactInfo.shippingAddress();
    ContactInfo.billingAddress();
    ContactInfo.placeOrder();
    })

    it("End-to-End Checkout Flow", () => {
        OpenPage.pageShop(); cy.wait(2000); 
        LoginPage.loginAccount();
        OpenPage.pageOrders();
    })
})
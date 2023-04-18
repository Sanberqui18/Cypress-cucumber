/// <reference types ="Cypress" />

import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
//mport Base_PO from "../page_objects/Base_PO";
import Homepage_PO from "../page_objects/Homepage_PO";

//const url = "https://www.webdriveruniversity.com/";

//const basePage = new Base_PO();
const homePage = new Homepage_PO();

Before(() => { 
    cy.log("Exacuting commands inside Homepage Steps");
});

Given(`I navigate to the webdriveruniversity homepage`, () => {
    //cy.visit(url);
   //basePage.navigate("");
   homePage.navigate("");
//    basePage.getPageTitle().then((title) => {
//         expect(title).to.eql("WebDriverUniversity.com");
//    });
});

When(`I click on the contact us button`, () => {
   // cy.get("#contact-us").invoke("removeAttr", "target").click({force: true});
   //cy.clickAndOpenLink_InSameTab("#contact-us");
   homePage.clickOn_ContactUs_Button();
});

When(`I click on the login portal button`, () => {
    //cy.get("#login-portal").invoke("removeAttr", "target").click({force: true});
    //cy.clickAndOpenLink_InSameTab("#login-portal");
    homePage.clickOn_Login_Button();
});




/// <reference types ="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage = new Login_PO();
let stub;

Given('I navigate to the webdriveruniversity login page', () =>{
    loginPage.navigate_To_Login_Page();
});

When('I type a username {}', (username) => {
    //cy.get('#text').type(username);
    loginPage.type_Username(username);
});

When('I type a password {}', (password) => {
    //cy.get('#password').type(password);
    loginPage.type_Password(password);
});

When('I click on the Login button', () => {
    stub = cy.stub();
    cy.on("window:alert", stub);

    //cy.get('#login-button').click();
    loginPage.clickOn_Login_Button();

});

Then('I should be presented with the {string} message', (message) => {
    expect(stub).to.have.been.calledWith(message);
});


//Cucumber source: https://github.com/cucumber/cucumber-expressions#readme
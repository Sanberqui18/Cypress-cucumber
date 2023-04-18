/// <reference types ="Cypress" />
import { When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log("Exacutes before each Scenario/Test");
    cy.clearLocalStorage();
});

Before({tags: "@smoke"},() => {
    cy.log("Exacuting smoke Pack");
});


After(() => {
    cy.log("Exacutes after each Scenario/Test");
});


When("I wait for {int} seconds", (seconds) => {
    cy.wait(seconds * 1000);
});
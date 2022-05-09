
/// <reference types="cypress" />

export class MainPage {
    navigateMainPage() {
        cy.visit('https://the-internet.herokuapp.com/');
    };

    clickFormAuntentication() {
        cy.get(':nth-child(21) > a').click();
    };
}
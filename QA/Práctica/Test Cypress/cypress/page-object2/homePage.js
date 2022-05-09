/// <reference types="cypress" />

export class HomePage {
    navigateMainPage() {
        cy.visit('https://the-internet.herokuapp.com/');
    };

    clickShifting() {
        cy.get(':nth-child(39) > a').click();
    }
}

/// <reference types="cypress" />

export class SecureArea {
    validLogin(message) {
        cy.get('#flash').contains(message);
    }
}
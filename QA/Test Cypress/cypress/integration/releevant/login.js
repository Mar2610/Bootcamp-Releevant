/// <reference types="cypress" />


describe('tests de login', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/');
    })

    it('check valid login', () => {   
        cy.get(':nth-child(21) > a').click();
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
        cy.get('#flash').contains('You logged into a secure area!');
    })
    
    it('check valid login', () => {
        cy.get(':nth-child(21) > a').click();
        cy.get('#username').type('Mar');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
        cy.get('#flash').contains('Your username is invalid!');
    })
    
    it('check valid login', () => {
        cy.get(':nth-child(21) > a').click();
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('lala!');
        cy.get('.fa').click();
        cy.get('#flash').contains('Your password is invalid!');
    })
})
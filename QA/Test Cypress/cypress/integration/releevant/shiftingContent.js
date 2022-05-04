/// <reference types="cypress" />

import { HomePage } from "../../page-object2/homePage";


describe ('test contenido', () => {
    const homePage = new HomePage();

    it('check content', () => {
        homePage.navigateMainPage();
        homePage.clickShifting();
    })
})
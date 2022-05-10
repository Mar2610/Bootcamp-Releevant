import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';

import { MainPage } from "../../page-object/mainpage";
import { LoginPage } from "../../page-object/loginpage";
import { SecureArea } from "../../page-object/secureAreaPage";

const mainPage = new MainPage();
const loginPage = new LoginPage();
const securePage = new SecureArea();

Given('I navigate main page', () =>{
    mainPage.navigateMainPage();
})

When('I click Form Auntentication', () => {
    mainPage.clickFormAuntentication();
})

And('I enter username', () => {
    loginPage.enterUserName("tomsmith");
})

And('I enter password', () => {
    loginPage.enterPassword("SuperSecretPassword!");
})

And('I click login button', () => {
    loginPage.clickLogin();
})

Then('Message appears', () => {
    securePage.validLogin("You logged into a secure area!");
})
/// <reference types="cypress" />

import { MainPage } from "../../page-object/mainpage";
import { LoginPage } from "../../page-object/loginpage";
import { SecureArea } from "../../page-object/secureAreaPage";

describe("tests de login", () => {
  const mainPage = new MainPage();
  const loginPage = new LoginPage();
  const securePage = new SecureArea();

  beforeEach(() => {
    mainPage.navigateMainPage();
  });

  it("check valid login", () => {
    mainPage.clickFormAuntentication();
    loginPage.enterUserName("tomsmith");
    loginPage.enterPassword("SuperSecretPassword!");
    loginPage.clickLogin();
    securePage.validLogin("You logged into a secure area!");
  });

  it("check valid login", () => {
    mainPage.clickFormAuntentication();
    loginPage.enterUserName("Mar");
    loginPage.enterPassword("SuperSecretPassword!");
    loginPage.clickLogin();
    securePage.validLogin("Your username is invalid!");
  });

  it("check valid login", () => {
    mainPage.clickFormAuntentication();
    loginPage.enterUserName("tomsmith");
    loginPage.enterPassword("pepe!");
    loginPage.clickLogin();
    securePage.validLogin("Your password is invalid!");
  });
});



//import { test, expect } from "@playwright/test";
import {test , expect} from '../fixtures/baseFixtures';

import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePag";

test("verify valid login", async ({ homePage }) => {

  await expect(homePage.page).toHaveTitle('My Account');

  // let loginPage = new LoginPage(page);
  // await loginPage.goToLoginPage();
  // let homePage:HomePage = await loginPage.doLogin("pwtest@nal.com", "test123");
  // expect(await homePage.isUserLoggedIn()).toBeTruthy();

});

test.skip("Verify Invalid Login", async ({ page , baseURL}) => {
  let loginPage = new LoginPage(page);
  await loginPage.goToLoginPage(baseURL);
  await loginPage.doLogin("test@g.com", "yuiyiuy");
  const errorMesg = await loginPage.getInvalidLoginMessage();

  expect(errorMesg).toContain(
    " Warning: No match for E-Mail Address and/or Password."
  );
});

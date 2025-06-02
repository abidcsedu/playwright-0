import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import testData from "../../fixtures/testData.json";

test("Login with valid data", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate(testData.Url.baseurl);

  await loginPage.login(
    testData.validUser.username,
    testData.validUser.password
  );

  await page.context().storageState({
    path: "fixtures/auth/userAuthState.json",
  });
});

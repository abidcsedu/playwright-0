import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import testdata from "../../fixtures/testdata.json";

test("Login with valid data", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate(testdata.Url.baseurl);

  await loginPage.login(
    testdata.validuser.username,
    testdata.validuser.password
  );

  await page.context().storageState({
    path: "fixtures/auth/userAuthState.json",
  });
});

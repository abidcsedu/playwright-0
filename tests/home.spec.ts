import { test, expect } from "@playwright/test";
import testData from "../fixtures/testData.json";

test.describe("Home Page Tests", () => {
  test("go to homepage", async ({ page }) => {
    await page.goto(testData.Url.homePage);
  });

  test("go to budget dashboard", async ({ page }) => {
    // await page.goto(testData.Url.baseurl + "/budget/dashboard/");
    await page.goto("https://nsdev6.na-dev-qa.com/budget/dashboard/");
  });
});

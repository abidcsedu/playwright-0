import { test, expect } from "@playwright/test";
import testData from "../fixtures/testData.json";

test.describe("Home Page Tests", () => {
test.beforeEach("go to deal dashboard", async ({ page }) => {
  await page.goto(testData.Url.homePage);
});

test("Verify home page title", async ({ page }) => {
  // Verify the title of the home page
   await page.waitForURL(/worldmap/);
});
});
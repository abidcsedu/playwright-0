import { test, expect } from "@playwright/test";
import testData from "../fixtures/testData.json";

test("go to deal dashboard", async ({ page }) => {
  await page.goto(testData.Url.homePage);
});

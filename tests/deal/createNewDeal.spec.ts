import { test, expect } from "@playwright/test";
import testData from "../../fixtures/testData.json";

test.describe("Create a new deal", () => {
  test("select network and rp and create a simple deal", async ({ page }) => {
    await page.goto(testData.Url.baseurl + "business/deals/");

    await page.getByRole("link", { name: "Create deal" }).click();
    await page.getByRole("searchbox", { name: "All" }).click();

    for (const network of testData.dealData.networks) {
      await page.getByRole("option", { name: network }).click();
    }

    // await page.getByRole("option", { name: "AAZOR" }).click();
    // await page.getByRole("option", { name: "BELMO" }).click();

    await page
      .locator("div")
      .filter({ hasText: /^Click to Select$/ })
      .locator("span")
      .click();

    // await page.getByRole("listitem").filter({ hasText: "" }).click();
    // await page.getByRole("listitem").filter({ hasText: "" }).click();

    // for (const rp of testData.dealData.roamingPartner) {
    //   await page.getByRole("listitem").filter({ hasText: rp }).click();
    // }

    testData.dealData.roamingPartner.forEach((rp) => {
      page.getByRole("listitem").filter({ hasText: rp }).click(); // Note: No await here
    });

    await page.getByRole("button", { name: "Confirm" }).click();
    await page.getByRole("button", { name: "Save" }).click();
  });
});

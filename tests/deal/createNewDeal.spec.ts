import { test, expect } from "@playwright/test";
import testData from "../../fixtures/testData.json";
import { CreateDeal } from "../../pages/createDeal.page";

test.describe("Create a new deal", () => {
  test("select network and rp and create a simple deal", async ({ page }) => {
    const createDeal = new CreateDeal(page);

    await createDeal.navigateToDealRepoAndCreateNew(
      testData.Url.baseurl + "business/deals/"
    );

    await createDeal.selectNetworks();

    for (const network of testData.dealData.networks) {
      await page.getByRole("option", { name: network });
    }

    await createDeal.selectRPs();

    for (const rp of testData.dealData.roamingPartner) {
      await page.getByRole("listitem").filter({ hasText: rp });
    }
    await createDeal.confirmRPs();

    await createDeal.saveDeal();
  });
});

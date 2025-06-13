import { Page, Locator } from "playwright";
import { BasePage } from "./base.page";
import testData from "../fixtures/testData.json";

export class CreateDeal extends BasePage {
  readonly createDealButton: Locator;
  readonly selectNetwork: Locator;
  // readonly selectNetworkOption: Locator;
  readonly selectRP: Locator;
  // readonly selectRPOption: Locator;
  readonly confirmRPButton: Locator;
  readonly saveDealButton: Locator;

  constructor(page: Page) {
    super(page);

    this.createDealButton = page.getByRole("link", { name: "Create deal" });
    this.selectNetwork = page.getByRole("searchbox", { name: "All" });
    // this.selectNetworkOption = page.getByRole("option", { name: network });
    this.selectRP = page
      .locator("div")
      .filter({ hasText: /^Click to Select$/ })
      .locator("span");
    // this.selectRPOption = page.getByRole("listitem").filter({ hasText: rp });
    this.confirmRPButton = page.getByRole("button", { name: "Confirm" });
    this.saveDealButton = page.getByRole("button", { name: "Save" });
  }

  async navigateToDealRepoAndCreateNew(url: string) {
    await this.page.goto(url);
    await this.createDealButton.click();
  }

  async selectNetworks() {
    await this.selectNetwork.click();
    // for (const network of testData.dealData.networks) {
    //   await this.page.getByRole("option", { name: network });
    // }
  }

  async selectRPs() {
    await this.selectRP.click();
    // for (const rp of testData.dealData.roamingPartner) {
    //   await this.page.getByRole("listitem").filter({ hasText: rp });
    // }
  }

  async confirmRPs() {
    await this.confirmRPButton.click();
  }

  async saveDeal() {
    await this.saveDealButton.click();
  }
}

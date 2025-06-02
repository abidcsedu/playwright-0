import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  constructor(page: Page) {
    super(page);
    this.username = page.getByRole("textbox", { name: "Username:" });
    this.password = page.getByRole("textbox", { name: "Password:" });
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.username.fill(username);

    await this.password.fill(password);

    await this.loginButton.click();
  }
}

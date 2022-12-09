import { Locator, Page } from "@playwright/test";

export class BaseTest {
  public readonly page: Page;

  async gotoLoginPage(url: string): Promise<void> {
    await this.page.goto(url);
  };

  async location(locator: string): Promise<Locator> {
    return this.page.locator(locator);
  };
};
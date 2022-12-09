import { Locator, Page } from "@playwright/test";

export class MainPage {

    public readonly page: Page;
    public menuButton: Locator;
    constructor(page: Page) {
      this.page = page;
      this.menuButton = page.locator("#react-burger-menu-btn");
    };
};
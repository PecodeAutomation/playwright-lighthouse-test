import { Page } from "@playwright/test";
import { LOGIN, PASSWORD } from "../data/login.data";
import { test, expect } from "../modules/fixtures/import.helper";
const { playAudit } = require("playwright-lighthouse");
import { LoginPage } from '../modules/page/login.page';
import { lighthouseConfig } from '../modules/fixtures/lighthouse.helper'
import AxeBuilder from "@axe-core/playwright";
import { MainPage } from "../modules/page/main.page";

test.describe('Add a simple invoice test', () => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test("Functional test login page", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page)
    await loginPage.goto();
    await loginPage.login(LOGIN, PASSWORD);
    await expect(mainPage.menuButton).toBeVisible();
  });

  test("Have at least one automatically detectable accessibility issue", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).not.toEqual([]);
  });
});


lighthouseConfig.describe('Lighthouse test', () => {
  lighthouseConfig('Performance test home page', async ({ page, port }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await playAudit({
      page: page,
      port: port,
      thresholds: {
        performance: 50,
        accessibility: 50,
        'best-practices': 50,
        seo: 50,
        pwa: 50
      },
      reports: {
        formats: {
          json: true,
          html: true,
          csv: true,
        },
        name: `name-of-the-report`,
        directory: `path/to/directory`,
      },
    });
  });


  lighthouseConfig('Perfomance test after login', async ({ page, port }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page)

    await loginPage.goto();
    await loginPage.login(LOGIN, PASSWORD);
    await expect(mainPage.menuButton).toBeVisible();
    await playAudit({
      page: page,
      port: port,
      thresholds: {
        performance: 50,
        accessibility: 50,
        'best-practices': 50,
        seo: 50,
        pwa: 50
      },
      reports: {
        formats: {
          json: true,
          html: true,
          csv: true,
        },
        name: `name-of-the-report`,
        directory: `path/to/directory`,
      },
    });
  });
});
import { Page, test as importHelper } from "@playwright/test";
import { LoginPage } from "../page/login.page";

const test = importHelper.extend<{
  page: Page;
  loginPage: LoginPage;
}>({
    loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});
export default test;
export { expect } from "@playwright/test";
export { test };
import { Page } from "@playwright/test";
import { BaseTest } from "./baseTest.page";

export class LoginPage extends BaseTest {
  public readonly page: Page;
  private readonly userName: string;
  private readonly passwordField: string;
  private readonly loginBtn: string;
  constructor(page: Page) {
    super();
    this.page = page;
    this.userName =  "#user-name";
    this.passwordField = "#password";
    this.loginBtn = "#login-button";
  };

  async goto() {
    await this.page.goto('/');
  };

  async login(userName: string, password: string) {
    await this.page.fill(this.userName, userName);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginBtn);
  };
};
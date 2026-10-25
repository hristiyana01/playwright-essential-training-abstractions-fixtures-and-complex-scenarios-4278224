import { test as setup, expect } from "@playwright/test";
import {LoginPage} from "../lib/pages/login.page";

setup("Create customer 01 auth", async ({ page, context }) => {
  const email = "customer@practicesoftwaretesting.com";
  const password = "welcome01";
  const customer01AuthFile = ".auth/customer01.json";

  const loginPage = new LoginPage(page); //locator on the login page

  await loginPage.goto();

  await loginPage.login(email, password); //login using the login method from the LoginPage class  

  await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
  await context.storageState({ path: customer01AuthFile });
});

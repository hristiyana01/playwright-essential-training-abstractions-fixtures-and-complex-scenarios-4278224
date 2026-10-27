import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByTestId('nav-sign-in').click();
  await page.getByTestId('register-link').click();
  await page.getByTestId('first-name').click();
  await page.getByTestId('first-name').fill('Test');
  await page.getByTestId('first-name').press('Tab');
  await page.getByTestId('last-name').fill('User');
  await page.getByTestId('last-name').press('Tab');
  await page.getByTestId("dob").fill("2001-01-01");
  await page.getByTestId('dob').press('Tab');
  await page.getByTestId('country').selectOption('AT');
  await page.getByTestId('postal_code').click();
  await page.getByTestId("postal_code").fill("1010");
  await page.getByTestId('house_number').click();
  await page.getByTestId('house_number').fill('32');
  await page.getByTestId('street').click();
  await page.getByTestId('street').fill('Test Street');
  await page.getByTestId('city').click();
  await page.getByTestId('city').fill('Test City');
  await page.getByTestId("state").click();
  await page.getByTestId("state").fill("Vienna");
  await page.getByTestId('phone').click();
  await page.getByTestId('phone').fill('3598865474');

  const email = `testUser${Date.now()}@lin.com`;
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill(email);
  await page.getByTestId("password").click();
  await page.getByTestId("password").fill("TestUserL123!");
  await page.getByTestId('dob').click();
  await page.getByTestId("register-submit").click();

  const responsePromise = page.waitForResponse("**/users/register");
  await page.getByTestId("register-submit").click();
  const response = await responsePromise;
  expect(response.status()).toBe(201);
});
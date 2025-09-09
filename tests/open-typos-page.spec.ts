import { test, expect } from "@playwright/test";
import * as allure from "allure-js-commons";

test("Open Inputs Page", async ({ page }) => {
  await allure.feature("Page loads");
  await allure.story("Typos Page");
  await page.goto("https://the-internet.herokuapp.com/");

  await expect(
    page.locator("h1", { hasText: "Welcome to the-internet" })
  ).toBeVisible();
  await page.locator("a", { hasText: "Typos" }).click();
  await expect(page.locator("h3", { hasText: "Typos" })).toBeVisible();
});

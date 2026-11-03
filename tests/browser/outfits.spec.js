import { test, expect } from "@playwright/test";

test("outfit preference is optional, reversible, and does not change the bag", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".outfit-card")).toHaveCount(3);
  await expect(page.locator("#outfit-next")).toBeHidden();
  await expect(page.locator("#bag-count")).toHaveText("0");
  const simple = page.getByRole("button", {
    name: "Keep it simple",
    exact: true,
  });
  const layer = page.getByRole("button", { name: "Add a layer", exact: true });
  await simple.focus();
  await page.keyboard.press("Enter");
  await expect(simple).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#outfit-result")).toContainText("everyday jeans");
  await expect(page.locator("#outfit-next")).toBeVisible();
  await layer.click();
  await expect(simple).toHaveAttribute("aria-pressed", "false");
  await expect(layer).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#outfit-result")).toContainText(
    "open shirt or jacket",
  );
  await expect(page.locator("#bag-count")).toHaveText("0");
  await page.getByRole("button", { name: "Clear preference" }).click();
  await expect(page.locator("#outfit-next")).toBeHidden();
  await expect(simple).toBeFocused();
  await layer.click();
  await page.reload();
  await expect(layer).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator("#outfit-next")).toBeHidden();
});

test("a shopper can add a size without choosing an outfit preference", async ({
  page,
}) => {
  await page.goto("/");
  await page.locator('input[name="size"][value="M"]').check();
  await page
    .getByRole("button", { name: "Add to demo bag", exact: true })
    .click();
  await expect(page.locator("#bag-count")).toHaveText("1");
  await expect(page.locator('[data-outfit][aria-pressed="true"]')).toHaveCount(
    0,
  );
});

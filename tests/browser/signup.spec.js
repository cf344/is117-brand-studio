import { test, expect } from "@playwright/test";

test("sign-up validates input and confirms a local demo without sending or storing the address", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Sign up", exact: true }).click();
  await expect(page).toHaveURL(/\/signup\.html$/);
  const form = page.locator("#signup-form");
  const email = page.getByLabel("Email address", { exact: true });
  const submit = page.getByRole("button", { name: "Try demo sign-up" });
  await submit.click();
  await expect(page.locator("#email-error")).toContainText("Enter a sample");
  await expect(email).toBeFocused();
  await email.fill("invalid");
  await submit.click();
  await expect(email).toHaveAttribute("aria-invalid", "true");
  await expect(page.locator("#signup-confirmation")).toBeEmpty();
  const requests = [];
  page.on("request", (request) => requests.push(request.url()));
  await email.fill("hello@example.com");
  await email.press("Enter");
  await expect(form).toBeHidden();
  await expect(page.locator("#signup-confirmation")).toContainText(
    "you are not subscribed",
  );
  await expect(email).toHaveValue("");
  expect(requests).toEqual([]);
  expect(
    await page.evaluate(() => ({
      local: localStorage.length,
      session: sessionStorage.length,
      query: location.search,
    })),
  ).toEqual({ local: 0, session: 0, query: "" });
  await page
    .getByRole("button", { name: "Try another sample address" })
    .click();
  await expect(email).toBeFocused();
  await expect(form).toBeVisible();
  await expect(page.locator("#signup-confirmation")).toBeEmpty();
});

test("without JavaScript the sign-up demo cannot submit an address", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:5174/signup.html");
    await expect(page.locator("#signup-form")).toBeHidden();
    await expect(
      page.getByText("Enable JavaScript to try this demo form.", {
        exact: false,
      }),
    ).toBeVisible();
  } finally {
    await context.close();
  }
});

import { expect, test, type Page } from "@playwright/test";

const expectedRoutes = [
  { path: "/", heading: /Even weg\./i },
  { path: "/menu", heading: /Ons menu/i },
  { path: "/about", heading: /Over It's All Greek/i },
  { path: "/contact", heading: /We helpen je graag/i },
  { path: "/order", heading: /Bestel vers Grieks/i },
] as const;

async function watchPageHealth(page: Page, options: { allowExpectedNavigation404?: boolean } = {}) {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  const failedLocalImages: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      const text = message.text();

      if (
        options.allowExpectedNavigation404 &&
        text === "Failed to load resource: the server responded with a status of 404 (Not Found)"
      ) {
        return;
      }

      consoleErrors.push(text);
    }
  });

  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  page.on("requestfailed", (request) => {
    const resourceType = request.resourceType();
    const url = request.url();

    if (resourceType === "image" && new URL(url).origin === new URL(page.url()).origin) {
      failedLocalImages.push(url);
    }
  });

  return {
    assertHealthy() {
      expect(pageErrors, "uncaught page errors").toEqual([]);
      expect(consoleErrors, "unexpected console errors").toEqual([]);
      expect(failedLocalImages, "failed local image requests").toEqual([]);
    },
  };
}

async function expectNoHorizontalOverflow(page: Page) {
  const metrics = await page.evaluate(() => {
    const documentElement = document.documentElement;
    const body = document.body;

    return {
      clientWidth: documentElement.clientWidth,
      scrollWidth: Math.max(documentElement.scrollWidth, body.scrollWidth),
    };
  });

  expect(metrics.scrollWidth, "document should not overflow horizontally").toBeLessThanOrEqual(
    metrics.clientWidth + 1,
  );
}

async function expectCriticalImagesLoaded(page: Page) {
  const brokenImages = await page.evaluate(() =>
    [...document.images]
      .filter((image) => image.complete && image.naturalWidth === 0)
      .map((image) => image.currentSrc || image.src),
  );

  expect(brokenImages, "critical rendered images should load").toEqual([]);
}

test.describe("route smoke", () => {
  for (const route of expectedRoutes) {
    test(`${route.path} renders with healthy document state`, async ({ page }) => {
      const health = await watchPageHealth(page);
      const response = await page.goto(route.path);

      expect(response?.status(), `${route.path} status`).toBe(200);
      await expect(page.getByRole("heading", { level: 1, name: route.heading })).toBeVisible();
      await expect(page.getByRole("banner")).toBeVisible();
      await expect(page.getByRole("contentinfo")).toBeVisible();

      await expectCriticalImagesLoaded(page);
      await expectNoHorizontalOverflow(page);
      health.assertHealthy();
    });
  }

  test("missing route renders the custom 404 page", async ({ page }) => {
    const health = await watchPageHealth(page, { allowExpectedNavigation404: true });
    const response = await page.goto("/this-page-does-not-exist");

    expect(response?.status(), "missing route status").toBe(404);
    await expect(page.getByRole("heading", { level: 1, name: "404" })).toBeVisible();
    await expect(page.getByRole("link", { name: /Terug naar home/i })).toBeVisible();

    await expectCriticalImagesLoaded(page);
    await expectNoHorizontalOverflow(page);
    health.assertHealthy();
  });
});

test.describe("navigation smoke", () => {
  test("desktop navigation links visit the main routes", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop navigation is hidden behind the mobile menu");

    const health = await watchPageHealth(page);
    await page.goto("/");

    const desktopNav = page.getByRole("navigation", { name: /Primaire navigatie/i });
    for (const label of ["Home", "Menu", "Over ons", "Contact", "Bestellen"]) {
      await expect(desktopNav.getByRole("link", { name: label })).toBeVisible();
    }

    await desktopNav.getByRole("link", { name: /^Menu$/i }).click();
    await expect(page).toHaveURL(/\/menu$/);
    await expect(page.getByRole("heading", { level: 1, name: /Ons menu/i })).toBeVisible();

    await desktopNav.getByRole("link", { name: /^Over ons$/i }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.getByRole("heading", { level: 1, name: /Over It's All Greek/i })).toBeVisible();

    await desktopNav.getByRole("link", { name: /^Contact$/i }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("heading", { level: 1, name: /We helpen je graag/i })).toBeVisible();

    await expectNoHorizontalOverflow(page);
    health.assertHealthy();
  });

  test("mobile menu opens, closes, supports Escape, and navigates", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile menu is only visible below the desktop breakpoint");

    const health = await watchPageHealth(page);
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: /Open menu/i });
    await expect(menuButton).toBeVisible();
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("dialog", { name: /Mobiel menu/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Sluit menu/i })).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog", { name: /Mobiel menu/i })).toBeHidden();
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await menuButton.click();
    await page.getByRole("dialog", { name: /Mobiel menu/i }).getByRole("link", { name: /^Menu$/i }).click();
    await expect(page).toHaveURL(/\/menu$/);
    await expect(page.getByRole("heading", { level: 1, name: /Ons menu/i })).toBeVisible();

    await expectNoHorizontalOverflow(page);
    health.assertHealthy();
  });
});

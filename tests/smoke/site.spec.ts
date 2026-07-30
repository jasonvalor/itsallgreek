import { expect, test, type Page } from "@playwright/test";

const expectedRoutes = [
  { path: "/", desktopHeading: /Even weg\./i, mobileHeading: /Authentiek/i },
  { path: "/menu", desktopHeading: /Ons menu/i, mobileHeading: /Ons menu/i },
  { path: "/about", desktopHeading: /Over It's All Greek/i, mobileHeading: /Over ons/i },
  { path: "/contact", desktopHeading: /We helpen je graag/i, mobileHeading: /Contact/i },
  { path: "/order", desktopHeading: /Bestel vers Grieks/i, mobileHeading: /Bestellen/i },
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

async function expectCompactMobileHeader(page: Page) {
  const header = page.getByRole("banner");
  const headerBox = await header.boundingBox();

  expect(headerBox?.height, "mobile header height").toBeGreaterThanOrEqual(64);
  expect(headerBox?.height, "mobile header height").toBeLessThanOrEqual(76);

  const logo = header.getByAltText("It's All Greek Food & Drinks");
  await expect(logo).toHaveAttribute("src", /logo-dark-transparent/);

  const logoParentBackground = await logo.evaluate((image) => {
    const parent = image.closest("a");
    return parent ? getComputedStyle(parent).backgroundColor : "";
  });
  expect(logoParentBackground, "logo parent should not be a white tile").not.toBe("rgb(255, 255, 255)");

  const menuButton = page.getByRole("button", { name: /Open menu/i });
  const menuButtonBox = await menuButton.boundingBox();
  expect(menuButtonBox?.width, "hamburger hit area should stay compact").toBeLessThanOrEqual(48);
  expect(menuButtonBox?.height, "hamburger hit area should stay compact").toBeLessThanOrEqual(48);
}

test.describe("route smoke", () => {
  for (const route of expectedRoutes) {
    test(`${route.path} renders with healthy document state`, async ({ page, isMobile }) => {
      const health = await watchPageHealth(page);
      const response = await page.goto(route.path);

      expect(response?.status(), `${route.path} status`).toBe(200);
      await expect(page.getByRole("heading", { level: 1, name: isMobile ? route.mobileHeading : route.desktopHeading })).toBeVisible();
      await expect(page.getByRole("banner")).toBeVisible();
      await expect(page.getByRole("contentinfo")).toBeVisible();

      if (isMobile) {
        await expectCompactMobileHeader(page);
      }

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

test.describe("mobile approved design structure", () => {
  test("homepage uses contained mobile food composition", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile structure assertions only apply below the desktop breakpoint");

    const health = await watchPageHealth(page);
    await page.goto("/");

    const mobileHome = page.getByTestId("mobile-home");
    await expect(mobileHome.getByRole("heading", { level: 1, name: /Authentiek/i })).toBeVisible();
    await expect(mobileHome.getByRole("link", { name: /Bestel nu/i })).toBeVisible();
    await expect(mobileHome.getByRole("heading", { name: /Onze specialiteiten/i })).toBeVisible();

    const mobileImageSources = await mobileHome.locator("img").evaluateAll((images) =>
      images.map((image) => (image as HTMLImageElement).currentSrc || (image as HTMLImageElement).src),
    );
    expect(
      mobileImageSources.some((src) => src.includes("restaurant-day.png")),
      "mobile homepage should not use the restaurant photo hero",
    ).toBe(false);

    await expectNoHorizontalOverflow(page);
    health.assertHealthy();
  });

  test("mobile inner pages expose expected bottom actions and menu rows", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile structure assertions only apply below the desktop breakpoint");

    const health = await watchPageHealth(page);

    await page.goto("/menu");
    await expect(page.getByTestId("mobile-menu-page").getByRole("heading", { name: /Gyros Pita/i })).toBeVisible();
    await expect(page.getByTestId("mobile-menu-page").getByRole("link", { name: /Bestel nu/i })).toBeVisible();

    await page.goto("/about");
    await expect(page.getByTestId("mobile-about-page").getByRole("link", { name: /Bekijk menu/i })).toBeVisible();

    await page.goto("/contact");
    await expect(page.getByTestId("mobile-contact-page").getByRole("link", { name: /Neem contact op/i })).toBeVisible();

    await page.goto("/order");
    await expect(page.getByTestId("mobile-order-page").getByRole("link", { name: /Bel restaurant/i })).toBeVisible();

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
    await expect(page.getByRole("dialog", { name: /Mobiel menu/i }).getByRole("link", { name: /^Home$/i })).toHaveAttribute(
      "aria-current",
      "page",
    );

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

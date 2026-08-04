import { expect, test, type Page } from "@playwright/test";

const expectedRoutes = [
  { path: "/", desktopHeading: /Authentiek/i, mobileHeading: /Authentiek/i },
  { path: "/menu", desktopHeading: /Ons menu/i, mobileHeading: /Ons menu/i },
  { path: "/about", desktopHeading: /Over ons/i, mobileHeading: /Over ons/i },
  { path: "/contact", desktopHeading: /Contact/i, mobileHeading: /Contact/i },
  { path: "/order", desktopHeading: /Bestellen/i, mobileHeading: /Bestellen/i },
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

async function expectNoInternalScrollContainer(page: Page) {
  const internalScrollers = await page.evaluate(() =>
    [...document.querySelectorAll<HTMLElement>("body *")]
      .filter((element) => {
        const style = getComputedStyle(element);
        return /(auto|scroll)/.test(style.overflowY) && element.scrollHeight > element.clientHeight + 1;
      })
      .map((element) => ({
        className: String(element.className),
        id: element.id,
        testId: element.getAttribute("data-testid"),
        tagName: element.tagName,
      })),
  );

  expect(internalScrollers, "homepage should not create unintended internal scroll containers").toEqual([]);
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

  expect(headerBox?.height, "mobile header height").toBeGreaterThanOrEqual(112);
  expect(headerBox?.height, "mobile header height").toBeLessThanOrEqual(124);

  const logo = header.getByAltText("It's All Greek Food & Drinks");
  await expect(logo).toHaveAttribute("src", /logo-dark-transparent/);
  const logoBox = await logo.boundingBox();
  expect(logoBox?.width, "mobile logo width").toBeGreaterThanOrEqual(112);
  expect(logoBox?.width, "mobile logo width").toBeLessThanOrEqual(126);

  const logoParentBackground = await logo.evaluate((image) => {
    const parent = image.closest("a");
    return parent ? getComputedStyle(parent).backgroundColor : "";
  });
  expect(logoParentBackground, "logo parent should not be a white tile").not.toBe("rgb(255, 255, 255)");

  const menuButton = page.getByRole("button", { name: /Open menu/i });
  const menuButtonBox = await menuButton.boundingBox();
  expect(menuButtonBox?.width, "hamburger hit area should stay compact").toBeLessThanOrEqual(48);
  expect(menuButtonBox?.height, "hamburger hit area should stay compact").toBeLessThanOrEqual(48);

  const menuButtonChrome = await menuButton.evaluate((button) => {
    const style = getComputedStyle(button);
    const icon = button.querySelector("svg");
    const iconBox = icon?.getBoundingClientRect();

    return {
      backgroundColor: style.backgroundColor,
      borderColor: style.borderTopColor,
      iconHeight: iconBox?.height ?? 0,
      iconWidth: iconBox?.width ?? 0,
    };
  });
  expect(menuButtonChrome.backgroundColor, "hamburger should not show a visible box").toBe(
    "rgba(0, 0, 0, 0)",
  );
  expect(menuButtonChrome.borderColor, "hamburger border should stay invisible").toBe("rgba(0, 0, 0, 0)");
  expect(menuButtonChrome.iconWidth, "hamburger visible icon width").toBeGreaterThanOrEqual(30);
  expect(menuButtonChrome.iconWidth, "hamburger visible icon width").toBeLessThanOrEqual(34);
  expect(menuButtonChrome.iconHeight, "hamburger visible icon height").toBeGreaterThanOrEqual(30);
  expect(menuButtonChrome.iconHeight, "hamburger visible icon height").toBeLessThanOrEqual(34);
}

async function expectMobileHomeFidelity(page: Page) {
  const mobileHome = page.getByTestId("mobile-home");
  const heading = mobileHome.getByRole("heading", { level: 1, name: /Authentiek/i });
  const cta = mobileHome.getByRole("link", { name: /Bestel nu/i });
  const artwork = page.getByTestId("mobile-hero-artwork");

  const headingBox = await heading.boundingBox();
  expect(headingBox?.width, "mobile hero heading width").toBeLessThanOrEqual(300);
  expect(headingBox?.y, "mobile hero heading should be near the approved top position").toBeLessThanOrEqual(190);

  const ctaBox = await cta.boundingBox();
  expect(ctaBox?.width, "mobile hero CTA width").toBeGreaterThanOrEqual(196);
  expect(ctaBox?.width, "mobile hero CTA width").toBeLessThanOrEqual(212);
  expect(ctaBox?.height, "mobile hero CTA height").toBeGreaterThanOrEqual(52);
  expect(ctaBox?.height, "mobile hero CTA height").toBeLessThanOrEqual(58);
  await expect(cta).toBeInViewport();

  const imageSources = await mobileHome.locator("img").evaluateAll((images) =>
    images.map((image) => (image as HTMLImageElement).currentSrc || (image as HTMLImageElement).src),
  );
  expect(imageSources, "mobile hero should render one coherent artwork image").toHaveLength(1);
  expect(imageSources[0], "mobile hero should use the combined artwork asset").toContain("home-hero-artwork");
  expect(
    imageSources.some((src) => src.includes("mobile-drink-detail") || src.includes("menu-salad")),
    "mobile hero should not render the old separate image sources",
  ).toBe(false);

  const artworkBox = await artwork.boundingBox();
  expect(artworkBox?.y, "combined artwork should start near the CTA").toBeLessThanOrEqual(500);
  expect(artworkBox?.width, "combined artwork should span the approved mobile frame").toBeGreaterThanOrEqual(370);

  await expectNoInternalScrollContainer(page);
}

async function expectCompactMobileMenu(page: Page) {
  const dialog = page.getByRole("dialog", { name: /Mobiel menu/i });
  const closeButton = dialog.getByRole("button", { name: /Sluit menu/i });
  const closeBox = await closeButton.boundingBox();

  expect(closeBox?.width, "close hit area should stay compact").toBeLessThanOrEqual(48);
  expect(closeBox?.height, "close hit area should stay compact").toBeLessThanOrEqual(48);

  const closeChrome = await closeButton.evaluate((button) => {
    const style = getComputedStyle(button);
    const icon = button.querySelector("svg");
    const iconBox = icon?.getBoundingClientRect();

    return {
      backgroundColor: style.backgroundColor,
      borderTopWidth: style.borderTopWidth,
      iconHeight: iconBox?.height ?? 0,
      iconWidth: iconBox?.width ?? 0,
    };
  });
  expect(closeChrome.backgroundColor, "close control should not show a visible box").toBe(
    "rgba(0, 0, 0, 0)",
  );
  expect(closeChrome.borderTopWidth, "close control should not show a visible border").toBe("0px");
  expect(closeChrome.iconWidth, "close visible icon width").toBeGreaterThanOrEqual(30);
  expect(closeChrome.iconWidth, "close visible icon width").toBeLessThanOrEqual(34);
  expect(closeChrome.iconHeight, "close visible icon height").toBeGreaterThanOrEqual(30);
  expect(closeChrome.iconHeight, "close visible icon height").toBeLessThanOrEqual(34);

  const firstLink = dialog.getByRole("link", { name: /^Home$/i });
  const firstLinkBox = await firstLink.boundingBox();
  const viewport = page.viewportSize();
  expect(firstLinkBox?.y, "first mobile nav link should sit in the upper half").toBeLessThan(
    (viewport?.height ?? 844) / 2,
  );

  const firstRowStyle = await firstLink.evaluate((link) => {
    const icon = link.querySelector("svg");
    const label = link.querySelector("span");
    const iconRect = icon?.getBoundingClientRect();

    return {
      iconHeight: iconRect?.height ?? 0,
      iconWidth: iconRect?.width ?? 0,
      labelFontSize: label ? Number.parseFloat(getComputedStyle(label).fontSize) : 0,
    };
  });
  expect(firstRowStyle.iconWidth, "mobile nav icon width").toBeGreaterThanOrEqual(38);
  expect(firstRowStyle.iconWidth, "mobile nav icon width").toBeLessThanOrEqual(42);
  expect(firstRowStyle.iconHeight, "mobile nav icon height").toBeGreaterThanOrEqual(38);
  expect(firstRowStyle.iconHeight, "mobile nav icon height").toBeLessThanOrEqual(42);
  expect(firstRowStyle.labelFontSize, "mobile nav label size").toBeGreaterThanOrEqual(30);
  expect(firstRowStyle.labelFontSize, "mobile nav label size").toBeLessThanOrEqual(40);
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
    await expectMobileHomeFidelity(page);

    const mobileImageSources = await mobileHome.locator("img").evaluateAll((images) =>
      images.map((image) => (image as HTMLImageElement).currentSrc || (image as HTMLImageElement).src),
    );
    expect(mobileImageSources).toHaveLength(1);
    expect(mobileImageSources[0]).toContain("home-hero-artwork");
    expect(
      mobileImageSources.some((src) => src.includes("restaurant-day.png")),
      "mobile homepage should not use the restaurant photo hero",
    ).toBe(false);
    await expect(mobileHome.locator("#mobile-specialties-heading + ul > li")).toHaveCount(3);

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
    await expect(page.getByTestId("mobile-order-page").getByRole("link", { name: /Bestel nu/i })).toBeVisible();

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
    await expect(page.getByRole("heading", { level: 1, name: /Over ons/i })).toBeVisible();

    await desktopNav.getByRole("link", { name: /^Contact$/i }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("heading", { level: 1, name: /Contact/i })).toBeVisible();

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
    await expectCompactMobileMenu(page);
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

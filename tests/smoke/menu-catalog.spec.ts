import { expect, test } from "@playwright/test";
import {
  EXPECTED_MENU_ITEM_COUNT,
  EXPECTED_REGULAR_CATEGORY_COUNT,
  menuCategories,
  menuItems,
  popularMenuItems,
  validateMenuData,
} from "../../data/menu";

const itemsWithoutSourceDescriptions = [
  "extra-tzatziki-klein",
  "extra-friet",
  "extra-fritessaus",
  "extra-rijst",
  "extra-pita",
  "extra-knoflooksaus",
  "extra-bakje-gyros-250-gram",
  "extra-bakje-gyros-450-gram",
  "dessert-cheesecake",
  "frisdranken-coca-cola-coca-cola-zero-sprite-fanta",
  "frisdranken-spa-blauw-en-spa-rood",
  "frisdranken-red-bull",
] as const;

test.describe("menu data", () => {
  test("contains the complete static source menu", () => {
    const integrity = validateMenuData();

    expect(integrity.categoryCount).toBe(EXPECTED_REGULAR_CATEGORY_COUNT);
    expect(integrity.itemCount).toBe(EXPECTED_MENU_ITEM_COUNT);
    expect(menuCategories).toHaveLength(14);
    expect(menuItems).toHaveLength(78);
  });

  test("uses unique ids and keeps required product fields", () => {
    const categoryIds = menuCategories.map((category) => category.id);
    const itemIds = menuItems.map((item) => item.id);

    expect(new Set(categoryIds).size).toBe(categoryIds.length);
    expect(new Set(itemIds).size).toBe(itemIds.length);

    for (const item of menuItems) {
      expect(item.name.trim()).not.toBe("");
      expect(item.price.trim()).not.toBe("");
    }
  });

  test("omits descriptions only for source items without descriptions", () => {
    const missingDescriptionIds = menuItems
      .filter((item) => !item.description)
      .map((item) => item.id)
      .sort();

    expect(missingDescriptionIds).toEqual([...itemsWithoutSourceDescriptions].sort());
  });

  test("popular products point to the underlying menu products", () => {
    expect(popularMenuItems.map((entry) => [entry.item.name, entry.category.label, entry.item.price])).toEqual([
      ["Souvlaki", "Schotels van de grill", "€ 23,50"],
      ["Mousaka", "Ovenschotels", "€ 24,00"],
      ["Choriatiki", "Salades", "€ 11,50"],
      ["Gyros", "Schotels van de grill", "€ 22,50"],
    ]);

    for (const entry of popularMenuItems) {
      expect(menuItems).toContain(entry.item);
    }
  });
});

test.describe("mobile menu catalog interaction", () => {
  const expectedFilterLabels = [
    "Populair",
    "Koude voorgerechten",
    "Salades",
    "Warme voorgerechten",
    "Pita's",
    "Patat met Gyros",
    "Ovenschotels",
    "Visgerechten",
    "Schotels van de grill",
    "Extra",
    "Mixed grill",
    "Kindermenu",
    "Dessert",
    "Frisdranken",
    "Alcoholische dranken",
  ];

  test("starts on Populair with four image cards and scrollable category buttons", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile menu catalog assertions only apply below the desktop breakpoint");

    await page.goto("/menu");

    const menuPage = page.getByTestId("mobile-menu-page");
    await expect(menuPage.getByRole("button", { name: "Populair" })).toHaveAttribute("aria-pressed", "true");
    await expect(menuPage.getByRole("button", { name: /^Alle$/i })).toHaveCount(0);
    await expect(page.getByTestId("active-category-title")).toHaveText("Populair");
    await expect(page.getByTestId("popular-menu-card")).toHaveCount(4);
    await expect(page.getByTestId("popular-menu-image")).toHaveCount(4);
    await expect(menuPage.getByRole("heading", { name: "Souvlaki" })).toBeVisible();
    await expect(menuPage.getByRole("heading", { name: "Mousaka" })).toBeVisible();
    await expect(menuPage.getByRole("heading", { name: "Choriatiki" })).toBeVisible();
    await expect(menuPage.getByRole("heading", { name: "Gyros" })).toBeVisible();

    const categoryScrollMetrics = await page.getByTestId("menu-category-scroller").evaluate((element) => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
    }));

    expect(categoryScrollMetrics.scrollWidth).toBeGreaterThan(categoryScrollMetrics.clientWidth);

    const pageWidthMetrics = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    }));

    expect(pageWidthMetrics.scrollWidth).toBeLessThanOrEqual(pageWidthMetrics.clientWidth + 1);
  });

  test("shows text-only rows for selected source categories", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile menu catalog assertions only apply below the desktop breakpoint");

    await page.goto("/menu");

    await page.getByRole("button", { name: "Pita's" }).click();
    await expect(page.getByRole("button", { name: "Pita's" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByTestId("active-category-title")).toHaveText("Pita's");
    await expect(page.getByTestId("category-menu-list").locator("[data-testid^='menu-item-']")).toHaveCount(9);
    await expect(page.getByTestId("menu-item-pitas-gyros")).toContainText("Gyros");
    await expect(page.getByTestId("menu-item-pitas-gyros").getByTestId("item-description")).toHaveCount(1);
    await expect(page.getByTestId("menu-item-pitas-gyros")).toContainText("€ 10,50");
    await expect(page.getByTestId("category-menu-list").locator("img")).toHaveCount(0);

    await page.getByRole("button", { name: "Dessert" }).click();
    await expect(page.getByRole("button", { name: "Dessert" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByTestId("active-category-title")).toHaveText("Dessert");
    await expect(page.getByTestId("category-menu-list").locator("[data-testid^='menu-item-']")).toHaveCount(7);
    await expect(page.getByTestId("menu-item-dessert-bougatsa")).toContainText(
      "Filodeeg gevuld met vanille custard, bestrooid met poedersuiker en kaneel",
    );
    await expect(page.getByTestId("menu-item-dessert-cheesecake").getByTestId("item-description")).toHaveCount(0);
    await expect(page.getByTestId("category-menu-list").locator("img")).toHaveCount(0);

    await page.getByRole("button", { name: "Alcoholische dranken" }).click();
    await expect(page.getByRole("button", { name: "Alcoholische dranken" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(page.getByTestId("active-category-title")).toHaveText("Alcoholische dranken");
    await expect(page.getByTestId("category-menu-list").locator("[data-testid^='menu-item-']")).toHaveCount(4);
    await expect(page.getByTestId("menu-item-alcoholische-dranken-griekse-wijn")).toContainText(
      "Fles 0,7 liter (rood - wit)",
    );
    await expect(page.getByTestId("category-menu-list").locator("img")).toHaveCount(0);
  });

  test("lets every category button become active without rendering extra images", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile menu catalog assertions only apply below the desktop breakpoint");

    await page.goto("/menu");

    for (const label of expectedFilterLabels) {
      const button = page.getByRole("button", { name: label });

      await button.click();
      await expect(button).toHaveAttribute("aria-pressed", "true");
      await expect(page.getByTestId("active-category-title")).toHaveText(label);

      if (label === "Populair") {
        await expect(page.getByTestId("popular-menu-image")).toHaveCount(4);
      } else {
        await expect(page.getByTestId("category-menu-list").locator("img")).toHaveCount(0);
      }
    }
  });

  test("renders only active category content and lets short categories stay short", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile menu catalog assertions only apply below the desktop breakpoint");

    await page.goto("/menu");

    await page.getByRole("button", { name: "Pita's" }).click();
    const pitasHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    await expect(page.getByTestId("menu-item-pitas-gyros")).toBeVisible();
    await expect(page.getByTestId("menu-item-dessert-cheesecake")).toHaveCount(0);

    await page.getByRole("button", { name: "Dessert" }).click();
    const dessertHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    await expect(page.getByTestId("menu-item-dessert-cheesecake")).toBeVisible();
    await expect(page.getByTestId("menu-item-pitas-gyros")).toHaveCount(0);

    expect(dessertHeight, "shorter active categories should not retain the previous taller panel height").toBeLessThan(
      pitasHeight - 100,
    );
  });

  test("keeps every menu name and price visible after category switches", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile menu catalog assertions only apply below the desktop breakpoint");

    await page.goto("/menu");

    for (const category of menuCategories) {
      await page.getByRole("button", { name: category.buttonLabel ?? category.label }).click();

      for (const item of category.items) {
        const row = page.getByTestId(`menu-item-${item.id}`);

        await expect(row).toBeVisible();
        await expect(row).toContainText(item.name);
        await expect(row).toContainText(item.price);
      }
    }
  });
});

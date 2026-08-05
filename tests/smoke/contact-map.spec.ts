import { expect, test, type Page } from "@playwright/test";
import { googleMapsEmbedUrl, mapSearchHref, openingHours, siteConfig } from "../../lib/site";

async function expectNoHorizontalOverflow(page: Page) {
  const metrics = await page.evaluate(() => {
    const documentElement = document.documentElement;
    const body = document.body;

    return {
      clientWidth: documentElement.clientWidth,
      scrollWidth: Math.max(documentElement.scrollWidth, body.scrollWidth),
    };
  });

  expect(metrics.scrollWidth, "contact page should not overflow horizontally").toBeLessThanOrEqual(
    metrics.clientWidth + 1,
  );
}

test.describe("contact Google Maps embed", () => {
  test("renders one safe Google Maps iframe and keeps the verified map link", async ({ page }) => {
    await page.goto("/contact");

    const iframe = page.getByTestId("contact-map-iframe");
    await expect(iframe).toHaveCount(1);
    await expect(iframe).toHaveAttribute("src", googleMapsEmbedUrl);
    await expect(iframe).toHaveAttribute("title", "Locatie van It's All Greek op Google Maps");
    await expect(iframe).toHaveAttribute("loading", "lazy");
    await expect(iframe).toHaveAttribute("referrerpolicy", "no-referrer-when-downgrade");

    const iframeState = await iframe.evaluate((element) => {
      const frame = element as HTMLIFrameElement;
      const style = getComputedStyle(frame);

      return {
        allowFullscreen: frame.allowFullscreen,
        hasApiKey: frame.src.includes("key="),
        pointerEvents: style.pointerEvents,
        src: frame.src,
      };
    });

    expect(iframeState.allowFullscreen, "map iframe should allow fullscreen").toBe(true);
    expect(iframeState.hasApiKey, "map iframe should not contain an API key").toBe(false);
    expect(iframeState.pointerEvents, "map iframe should stay interactive").toBe("auto");
    expect(iframeState.src, "map iframe src should use Google Maps").toContain("google.com/maps");

    const mapLink = page.getByRole("link", { name: "Open in Google Maps" });
    await expect(mapLink).toHaveAttribute("href", mapSearchHref);
    await expect(mapLink).toHaveAttribute("target", "_blank");
    await expect(mapLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("preserves contact details and opening hours", async ({ page }) => {
    await page.goto("/contact");

    const contactPage = page.getByTestId("mobile-contact-page");

    await expect(contactPage.getByText(siteConfig.name, { exact: true })).toBeVisible();
    await expect(contactPage.getByText("Winkelcentrum De Reigerhof", { exact: true })).toBeVisible();
    await expect(contactPage.getByText("Nieuwerkerk a/d IJssel", { exact: true })).toBeVisible();
    await expect(contactPage.getByRole("link", { name: siteConfig.phone })).toHaveAttribute(
      "href",
      siteConfig.phoneHref,
    );
    await expect(contactPage.getByRole("link", { name: siteConfig.email })).toHaveAttribute(
      "href",
      siteConfig.emailHref,
    );

    for (const item of openingHours) {
      await expect(contactPage.getByText(item.label, { exact: true })).toBeVisible();
      await expect(contactPage.getByText(item.value, { exact: true })).toBeVisible();
    }
  });

  test("fits the mobile frame without the old decorative map markup", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/contact");

    await expect(page.locator("a.mobile-surface[aria-label^='Route naar']")).toHaveCount(0);
    await expect(page.getByTestId("contact-map").locator("svg")).toHaveCount(0);
    await expect(page.getByTestId("contact-map").locator("span.absolute")).toHaveCount(0);

    const mapMetrics = await page.getByTestId("contact-map").evaluate((element) => {
      const box = element.getBoundingClientRect();
      const iframe = element.querySelector("iframe");
      const iframeBox = iframe?.getBoundingClientRect();
      const style = getComputedStyle(element);

      return {
        borderRadius: Number.parseFloat(style.borderTopLeftRadius),
        height: box.height,
        iframeHeight: iframeBox?.height ?? 0,
        iframeWidth: iframeBox?.width ?? 0,
        overflow: style.overflow,
      };
    });

    expect(mapMetrics.height, "mobile map should stay compact").toBeGreaterThanOrEqual(220);
    expect(mapMetrics.height, "mobile map should not add excessive height").toBeLessThanOrEqual(280);
    expect(
      Math.abs(mapMetrics.height - mapMetrics.iframeHeight),
      "iframe should fill the map content area inside the existing border",
    ).toBeLessThanOrEqual(2);
    expect(mapMetrics.iframeWidth, "iframe should use the available map width").toBeGreaterThan(250);
    expect(mapMetrics.overflow, "map radius should clip the iframe").toBe("hidden");
    expect(mapMetrics.borderRadius, "map should keep the rounded approved container").toBeGreaterThan(0);

    await expectNoHorizontalOverflow(page);
  });
});

import type { Metadata } from "next";
import { MenuCatalog } from "@/components/menu/menu-catalog";
import { Button } from "@/components/ui/button";
import { menuCategories, popularMenuItems } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Bekijk het volledige menu van It's All Greek in Nieuwerkerk aan den IJssel.",
  openGraph: {
    title: "Menu | It's All Greek",
    description: "Bekijk het volledige menu van It's All Greek.",
  },
};

export default function MenuPage() {
  return (
    <main className="flex-1" id="main-content">
      <section className="mobile-approved-page flex flex-col" data-testid="mobile-menu-page">
        <div>
          <h1 className="mobile-title">ONS MENU</h1>
          <div className="mobile-accent-line mt-7" />
        </div>

        <MenuCatalog categories={menuCategories} popularItems={popularMenuItems} />

        <div className="mt-auto pt-12">
          <Button className="h-[3.8rem] w-full border-2 border-brand-blue bg-transparent" href="/order" variant="secondary">
            Bestel nu
          </Button>
        </div>
      </section>
    </main>
  );
}

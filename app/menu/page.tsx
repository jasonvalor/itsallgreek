import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { MenuItemCard } from "@/components/menu/menu-item-card";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/page-intro";
import { menuCategories, menuItems, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Bekijk een beschikbare selectie Griekse gerechten van It's All Greek in Nieuwerkerk aan den IJssel.",
  openGraph: {
    title: "Menu | It's All Greek",
    description: "Bekijk een beschikbare selectie Griekse gerechten van It's All Greek.",
  },
};

export default function MenuPage() {
  return (
    <main className="flex-1" id="main-content">
      <section className="mobile-approved-page flex flex-col md:hidden" data-testid="mobile-menu-page">
        <div className="space-y-4">
          <h1 className="mobile-title">ONS MENU</h1>
          <div className="mobile-accent-line" />
        </div>

        <nav aria-label="Menu categorieen" className="mt-5">
          <ul className="flex min-w-0 gap-6 overflow-x-auto pb-1 text-[0.7rem] font-bold uppercase leading-none">
            <li>
              <a className="inline-flex min-h-11 items-center border-b border-brand-blue text-brand-blue" href="#selectie">
                Selectie
              </a>
            </li>
          </ul>
        </nav>

        <section className="mt-3 grid gap-4" id="selectie" aria-label="Beschikbare selectie">
          {menuItems.map((item, index) => (
            <article className="grid grid-cols-[5.8rem_1fr] gap-3 min-[390px]:grid-cols-[6.35rem_1fr]" key={item.name}>
              <div className="relative aspect-square overflow-hidden rounded-[0.55rem] border border-border-subtle bg-surface-secondary">
                <Image
                  alt={item.image.alt}
                  className="object-cover"
                  fill
                  priority={index < 2}
                  sizes="112px"
                  src={item.image.src}
                />
              </div>
              <div className="min-w-0 pt-1">
                <h2 className="text-[1.45rem] leading-none text-text-primary">{item.name}</h2>
                <p className="mt-1.5 text-[0.75rem] leading-5 text-text-secondary">
                  {item.description ?? "Vraag naar de actuele omschrijving."}
                </p>
                <p className="mt-1.5 text-[0.82rem] font-bold leading-none text-brand-blue">{item.price}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-auto pt-5">
          <Button className="w-full border-brand-blue/95 bg-transparent" href="/order" variant="secondary">
            Bestel nu
          </Button>
        </div>
      </section>

      <div className="hidden md:block page-shell">
        <Container className="space-y-10">
        <PageIntro
          body="Bekijk ons assortiment authentieke Griekse gerechten. Alle gerechten worden vers bereid. Wil je bestellen? Dat kan eenvoudig telefonisch."
          eyebrow="Menu"
          heading="Ons menu"
        />

        <nav aria-label="Menu categorieen">
          <ul className="flex gap-2 overflow-x-auto pb-1">
            {menuCategories.map((category) => (
              <li className="shrink-0" key={category.id}>
                <a
                  className="inline-flex min-h-11 items-center rounded-[var(--radius-sm)] border border-brand-blue bg-brand-blue/10 px-4 text-base font-semibold text-brand-blue"
                  href={`#${category.id}`}
                >
                  {category.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {menuCategories.map((category) => (
          <section className="space-y-5 scroll-mt-28" id={category.id} key={category.id}>
            <div className="flex flex-col gap-3 border-b border-border-subtle pb-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-4xl text-text-primary">{category.label}</h2>
                {category.note ? (
                  <p className="mt-2 text-base leading-7 text-text-secondary">{category.note}</p>
                ) : null}
              </div>
              <Button href="/order" variant="secondary">
                Bestellen
              </Button>
            </div>

            <div className="grid gap-4">
              {category.items.map((item, index) => (
                <MenuItemCard item={item} key={item.name} priority={index === 0} />
              ))}
            </div>
          </section>
        ))}

        <section className="grid gap-5 border-t border-border-subtle pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-4xl text-text-primary">Zin in Grieks?</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-text-secondary">
              Bestel telefonisch bij {siteConfig.name} of neem contact op voor de actuele menukaart.
            </p>
          </div>
          <Button href="/order">Bestel afhalen</Button>
        </section>
        </Container>
      </div>
    </main>
  );
}

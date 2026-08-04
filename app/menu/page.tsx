import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/lib/site";

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
      <section className="mobile-approved-page flex flex-col" data-testid="mobile-menu-page">
        <div>
          <h1 className="mobile-title">ONS MENU</h1>
          <div className="mobile-accent-line mt-7" />
        </div>

        <nav aria-label="Menu categorieen" className="mt-8">
          <ul className="flex min-w-0 gap-9 overflow-x-auto pb-2 font-display text-[clamp(1.35rem,5.8vw,1.7rem)] uppercase leading-none">
            <li>
              <a
                aria-current="true"
                className="inline-flex min-h-11 items-center border-b-[0.18rem] border-brand-blue text-brand-blue"
                href="#selectie"
              >
                Alle
              </a>
            </li>
          </ul>
        </nav>

        <section className="mt-8 grid gap-9" id="selectie" aria-label="Beschikbare selectie">
          {menuItems.map((item, index) => (
            <article
              className="grid grid-cols-[clamp(6.8rem,33vw,8.35rem)_1fr] gap-[clamp(1.3rem,7vw,2rem)]"
              key={item.name}
            >
              <div className="relative aspect-square overflow-hidden rounded-[0.65rem] border border-border-subtle bg-surface-secondary">
                <Image
                  alt={item.image.alt}
                  className="object-cover"
                  fill
                  priority={index < 2}
                  sizes="(max-width: 767px) 140px, 150px"
                  src={item.image.src}
                />
              </div>
              <div className="min-w-0 pt-2">
                <h2 className="text-[clamp(1.9rem,7.8vw,2.25rem)] leading-none text-text-primary">
                  {item.name}
                </h2>
                {item.description ? (
                  <p className="mt-4 text-[clamp(1rem,4.3vw,1.12rem)] font-semibold leading-[1.65] text-text-secondary">
                    {item.description}
                  </p>
                ) : null}
                <p className="mt-5 text-[clamp(1.2rem,5vw,1.45rem)] font-bold leading-none text-brand-blue">
                  {item.price}
                </p>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-auto pt-12">
          <Button className="h-[3.8rem] w-full border-2 border-brand-blue bg-transparent" href="/order" variant="secondary">
            Bestel nu
          </Button>
        </div>
      </section>
    </main>
  );
}

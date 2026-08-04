import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileValueIcons, type MobileValueIcon } from "@/components/ui/mobile-value-icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Grieks eten in ${siteConfig.location}`,
  description:
    "Authentieke Griekse gerechten in Nieuwerkerk aan den IJssel. Bekijk het menu, bestel afhalen of neem contact op.",
  openGraph: {
    title: `${siteConfig.name} | Grieks eten in ${siteConfig.location}`,
    description:
      "Authentieke Griekse gerechten in Nieuwerkerk aan den IJssel. Vers bereid en gastvrij.",
  },
};

export default function Home() {
  const specialties: readonly MobileValueIcon[] = [
    { icon: "leaf", label: "Verse ingredienten" },
    { icon: "temple", label: "Authentieke recepten" },
    { icon: "heart", label: "Met liefde bereid" },
  ];

  return (
    <main className="flex-1" id="main-content">
      <section className="mobile-approved-page flex flex-col overflow-hidden" data-testid="mobile-home">
        <div className="relative flex flex-1 flex-col">
          <div className="relative z-10 max-w-[19rem] pt-3">
            <h1 className="max-w-[18rem] text-[clamp(3rem,13.6vw,3.65rem)] leading-[0.92] text-text-primary md:text-[3.75rem]">
              <span className="block">AUTHENTIEK</span>
              <span className="block text-brand-blue">GRIEKS</span>
              <span className="block">FOOD &amp; DRINKS</span>
            </h1>
            <p className="mt-[1.35rem] max-w-[18rem] text-[clamp(1rem,4.4vw,1.15rem)] font-semibold leading-[1.45] text-text-primary">
              Pure smaken. Verse ingredienten.
              <br />
              Met liefde bereid.
            </p>
            <Button className="mt-6 h-[3.45rem] w-[12.9rem] px-5 py-0" href="/order">
              Bestel nu
            </Button>
          </div>

          <div className="-mx-[var(--mobile-page-x)] mt-2" data-testid="mobile-hero-artwork">
            <Image
              alt="Griekse salade met feta en een Grieks drinkglas op donkere achtergrond"
              className="h-auto w-full max-w-none"
              height={1050}
              priority
              sizes="(max-width: 767px) 100vw, 500px"
              src="/images/home-hero-artwork.webp"
              width={940}
            />
          </div>

          <section
            aria-labelledby="mobile-specialties-heading"
            className="mobile-surface relative -mx-[calc(var(--mobile-page-x)-0.4rem)] -mt-10 px-4 pb-7 pt-6"
          >
            <h2
              className="mb-6 text-center text-[1.45rem] leading-none text-text-primary"
              id="mobile-specialties-heading"
            >
              ONZE SPECIALITEITEN
            </h2>
            <MobileValueIcons compact items={specialties} />
          </section>
        </div>
      </section>
    </main>
  );
}

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
            <p className="mt-6 max-w-[18rem] text-[clamp(1rem,4.4vw,1.15rem)] font-semibold leading-[1.65] text-text-primary">
              Pure smaken. Verse ingredienten.
              <br />
              Met liefde bereid.
            </p>
            <Button className="mt-8 h-[3.45rem] w-[12.9rem] px-5 py-0" href="/order">
              Bestel nu
            </Button>
          </div>

          <div
            className="absolute -right-[0.9rem] top-[20rem] z-0 h-[15.2rem] w-[6.4rem] overflow-hidden rounded-[0.65rem] border border-border-subtle bg-surface-secondary shadow-[0_1.1rem_2rem_rgb(0_0_0_/_0.38)] min-[400px]:top-[20.5rem] min-[400px]:h-[16rem] min-[400px]:w-[6.75rem]"
            data-testid="mobile-hero-detail-image"
          >
            <Image
              alt="Detail van een Grieks drinkglas"
              className="object-cover object-[63%_50%]"
              fill
              priority
              sizes="120px"
              src="/images/mobile-drink-detail.png"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(9_10_11_/_0.04),rgb(9_10_11_/_0.28))]" />
          </div>

          <div
            className="relative -mx-[var(--mobile-page-x)] mt-16 h-[21rem] overflow-hidden bg-surface-secondary min-[375px]:h-[21.8rem] min-[400px]:h-[22.5rem]"
            data-testid="mobile-hero-main-image"
          >
            <Image
              alt="Griekse salade met feta, tomaat, komkommer en olijven"
              className="object-cover object-[50%_47%]"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 500px"
              src="/images/menu-salad.png"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgb(9_10_11_/_0.88))]" />
          </div>

          <section
            aria-labelledby="mobile-specialties-heading"
            className="mobile-surface relative -mx-[calc(var(--mobile-page-x)-0.4rem)] -mt-3 px-4 pb-10 pt-8"
          >
            <h2
              className="mb-8 text-center text-[1.45rem] leading-none text-text-primary"
              id="mobile-specialties-heading"
            >
              ONZE SPECIALITEITEN
            </h2>
            <MobileValueIcons items={specialties} />
          </section>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileValueIcons, type MobileValueIcon } from "@/components/ui/mobile-value-icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Lees meer over de gastvrijheid, kwaliteit en Griekse smaken van It's All Greek.",
  openGraph: {
    title: "Over ons | It's All Greek",
    description: "Gastvrijheid, kwaliteit en Griekse smaken in Nieuwerkerk aan den IJssel.",
  },
};

export default function AboutPage() {
  const values: readonly MobileValueIcon[] = [
    { icon: "temple", label: "Authentieke recepten" },
    { icon: "leaf", label: "Verse ingredienten" },
    { icon: "heart", label: "Griekse gastvrijheid" },
  ];

  return (
    <main className="flex-1" id="main-content">
      <section className="mobile-approved-page flex flex-col" data-testid="mobile-about-page">
        <div>
          <h1 className="mobile-title">OVER ONS</h1>
          <div className="mobile-accent-line mt-7" />
        </div>

        <div className="relative mt-12 aspect-[1.22] overflow-hidden rounded-[0.85rem] border border-border-subtle bg-surface-secondary">
          <Image
            alt="Zonnig Grieks terras met witte muren en blauwe details"
            className="object-cover object-[55%_45%]"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 500px"
            src="/images/restaurant-day.png"
          />
        </div>

        <div className="mt-12">
          <p className="text-[clamp(1.35rem,6vw,1.62rem)] font-bold leading-[1.55] text-text-primary">
            Bij {siteConfig.name} draait alles om gastvrijheid, kwaliteit en de smaken van Griekenland.
          </p>
          <p className="mt-8 text-[clamp(1rem,4.4vw,1.16rem)] font-semibold leading-[1.85] text-text-secondary">
            Iedere gast moet zich welkom voelen. Of je nu langskomt om te eten, iets afhaalt of laat bezorgen.
          </p>
        </div>

        <div className="mt-12">
          <MobileValueIcons items={values} />
        </div>

        <div className="mt-auto pt-12">
          <Button className="h-[3.8rem] w-full border-2 border-brand-blue bg-transparent" href="/menu" variant="secondary">
            Bekijk menu
          </Button>
        </div>
      </section>
    </main>
  );
}

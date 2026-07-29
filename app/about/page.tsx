import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { PageIntro } from "@/components/ui/page-intro";
import { brandValues, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Lees meer over de gastvrijheid, kwaliteit en Griekse smaken van It's All Greek.",
  openGraph: {
    title: "Over ons | It's All Greek",
    description: "Gastvrijheid, kwaliteit en Griekse smaken in Nieuwerkerk aan den IJssel.",
  },
};

export default function AboutPage() {
  return (
    <main className="page-shell flex-1" id="main-content">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-7">
          <PageIntro
            body={`Bij ${siteConfig.name} draait alles om gastvrijheid, kwaliteit en de smaken van Griekenland.`}
            eyebrow="Over ons"
            heading={`Over ${siteConfig.name}`}
          />
          <div className="space-y-4 text-base leading-8 text-text-secondary">
            <p>
              Iedere gast moet zich welkom voelen. Of je nu langskomt om uitgebreid te dineren,
              iets af te halen of een bestelling laat bezorgen.
            </p>
            <p>
              De sfeer blijft warm en rustig, met aandacht voor authentieke gerechten en helder
              contact met het restaurant.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/menu">Bekijk menu</Button>
            <Button href="/contact" variant="secondary">
              Neem contact op
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] border border-border-subtle bg-surface">
          <Image
            alt="Zonnig Grieks terras met witte muren en blauwe details"
            className="object-cover"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            src="/images/restaurant-day.png"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgb(15_15_16_/_0.2))]" />
        </div>
      </Container>

      <section className="mt-16 border-y border-border-subtle bg-surface py-[var(--space-section-y)]">
        <Container className="space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl text-text-primary sm:text-6xl">Waar we voor staan</h2>
            <div className="mt-4 h-0.5 w-12 rounded-full bg-brand-blue" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {brandValues.map((feature) => (
              <FeatureCard compact feature={feature} key={feature.title} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

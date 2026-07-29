import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { features, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Lees over de gastvrije en authentieke basis van It's All Greek.",
};

export default function AboutPage() {
  return (
    <main className="page-shell flex-1">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-7">
          <SectionHeading
            description={`Bij ${siteConfig.name} draait het om authentieke Griekse gerechten, verse ingredienten en een warme familiesfeer.`}
            eyebrow="Over ons"
            heading="Griekse gastvrijheid in Nieuwerkerk"
            level={1}
          />
          <p className="max-w-2xl text-base leading-8 text-text-secondary">
            De herstelde bron legt de nadruk op hospitality, sfeer, authenticiteit, terras en familie. Verdere historie, awards of reviews zijn niet toegevoegd omdat die niet bevestigd zijn.
          </p>
          <Button href="/contact" variant="secondary">
            Neem contact op
          </Button>
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
        </div>
      </Container>

      <Container className="mt-14">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article className="surface-card p-6" key={feature.title}>
              <h2 className="mb-3 text-3xl text-text-primary">{feature.title}</h2>
              <p className="text-base leading-7 text-text-secondary">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}

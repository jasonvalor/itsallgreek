import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeCopy, menuItems, siteConfig, uspFeatures } from "@/lib/site";

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
  const highlightedMenuItems = menuItems.slice(0, 3);

  return (
    <main className="flex-1" id="main-content">
      <section className="relative isolate min-h-[calc(86svh-var(--header-height))] overflow-hidden border-b border-border-subtle">
        <Image
          alt="Zonnig Grieks restaurantterras met blauwe stoelen en uitzicht op zee"
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/restaurant-day.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(15_15_16_/_0.94),rgb(15_15_16_/_0.64)_52%,rgb(15_15_16_/_0.3))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <Container className="relative z-10 flex min-h-[calc(86svh-var(--header-height))] items-center py-14">
          <div className="w-full max-w-[21rem] space-y-7 sm:max-w-2xl">
            <p className="text-base font-semibold text-brand-blue">{homeCopy.hero.label}</p>
            <div className="space-y-5">
              <h1 className="text-5xl text-text-primary sm:text-7xl lg:text-8xl">
                <span className="block">{homeCopy.hero.headlineStart}</span>
                <span className="block text-brand-blue">{homeCopy.hero.headlineEmphasis}</span>
              </h1>
              <p className="max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
                {homeCopy.hero.body}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="w-full sm:w-auto" href="/order">
                {homeCopy.hero.primaryCta}
              </Button>
              <Button className="w-full sm:w-auto" href="/menu" variant="secondary">
                {homeCopy.hero.secondaryCta}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-[var(--space-section-y)]">
        <Container className="space-y-10">
          <SectionHeading
            description="Drie duidelijke manieren om van It's All Greek te genieten."
            eyebrow="Onze specialiteiten"
            heading="Vers, gastvrij en dichtbij"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {uspFeatures.map((feature) => (
              <FeatureCard feature={feature} key={feature.title} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface py-[var(--space-section-y)]">
        <Container className="space-y-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              description="Een compacte selectie uit de beschikbare menudata."
              eyebrow="Menu"
              heading="Populaire gerechten"
            />
            <Button href="/menu" variant="secondary">
              Naar menu
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {highlightedMenuItems.map((item, index) => (
              <article className="surface-card overflow-hidden" key={item.name}>
                <div className="relative aspect-square bg-surface-secondary">
                  <Image
                    alt={item.image.alt}
                    className="object-cover"
                    fill
                    priority={index === 0}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={item.image.src}
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex min-w-0 items-start justify-between gap-4">
                    <h3 className="text-3xl text-text-primary">{item.name}</h3>
                    <p className="shrink-0 text-base font-semibold text-brand-blue">{item.price}</p>
                  </div>
                  {item.description ? (
                    <p className="text-base leading-7 text-text-secondary">{item.description}</p>
                  ) : (
                    <p className="text-base leading-7 text-text-muted">Beschrijving volgt binnenkort.</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-[var(--space-section-y)]">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] border border-border-subtle bg-surface">
            <Image
              alt="Collage van Griekse gerechten met gyros, souvlaki, mixed grill en salade"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              src="/images/food-collage.png"
            />
          </div>
          <div className="space-y-6">
            <SectionHeading
              description={homeCopy.experience.body}
              eyebrow={homeCopy.experience.eyebrow}
              heading={homeCopy.experience.heading}
            />
            <Button href="/about" variant="secondary">
              Lees meer
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue py-14 text-white">
        <Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-5xl text-white sm:text-6xl">{homeCopy.cta.heading}</h2>
            <p className="mt-3 text-base leading-8 text-white/90">{homeCopy.cta.body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="bg-white text-brand-blue hover:bg-white/90" href="/order">
              {homeCopy.cta.primaryCta}
            </Button>
            <Button className="border-white text-white hover:bg-white/10" href={siteConfig.phoneHref} variant="secondary">
              {homeCopy.cta.secondaryCta}
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { features, menuItems, siteConfig } from "@/lib/site";

const heroImage = {
  src: "/images/restaurant-day.png",
  alt: "Zonnig Grieks restaurantterras met witte gevels en blauwe accenten",
};

export default function Home() {
  const highlightedMenuItems = menuItems.slice(0, 3);

  return (
    <main className="flex-1">
      <section className="border-b border-border-subtle">
        <Container className="grid gap-10 py-8 lg:min-h-[calc(78svh-var(--header-height))] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-14">
          <div className="min-w-0 space-y-7">
            <p className="text-base font-semibold text-brand-blue">{siteConfig.name}</p>
            <div className="space-y-5">
              <h1 className="max-w-3xl break-words text-4xl text-text-primary sm:text-7xl lg:text-8xl">
                Authentiek Grieks eten & drinken
              </h1>
              <p className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
                Authentieke Griekse gerechten in het hart van {siteConfig.location}. Pure smaken,
                verse ingredienten en gemaakt met liefde.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/order">Bestellen</Button>
              <Button href="/menu" variant="secondary">
                Bekijk menu
              </Button>
            </div>
          </div>

          <div className="relative min-h-[24rem] overflow-hidden rounded-[var(--radius-md)] border border-border-subtle bg-surface shadow-[var(--shadow-surface)] sm:min-h-[34rem]">
            <Image
              alt={heroImage.alt}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={heroImage.src}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(15_15_16_/_0.04),rgb(15_15_16_/_0.48))]" />
          </div>
        </Container>
      </section>

      <section className="py-[var(--space-section-y)]">
        <Container className="space-y-10">
          <SectionHeading
            description="De belangrijkste kracht van de herstelde bron: helder, persoonlijk en direct gericht op lekker Grieks eten."
            eyebrow="Onze specialiteiten"
            heading="Klein in vorm, groot in smaak"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article className="surface-card p-6" key={feature.title}>
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-brand-blue text-brand-blue">
                  <span aria-hidden="true">✓</span>
                </div>
                <h2 className="mb-3 text-3xl text-text-primary">{feature.title}</h2>
                <p className="text-base leading-7 text-text-secondary">{feature.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface py-[var(--space-section-y)]">
        <Container className="space-y-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              description="Een beperkte selectie uit de herstelde lokale menugegevens. De volledige officiele menukaart moet nog worden bevestigd."
              eyebrow="Menu"
              heading="Populaire gerechten"
            />
            <Button href="/menu" variant="secondary">
              Naar menu
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {highlightedMenuItems.map((item) => (
              <article className="surface-card overflow-hidden" key={item.name}>
                <div className="relative aspect-square bg-surface-secondary">
                  <Image
                    alt={item.image.alt}
                    className="object-cover"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={item.image.src}
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-3xl text-text-primary">{item.name}</h2>
                    <p className="shrink-0 text-base font-semibold text-brand-blue">{item.price}</p>
                  </div>
                  <p className="text-base leading-7 text-text-secondary">Beschrijving nog niet bevestigd.</p>
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
              alt="Collage van Griekse gerechten uit de beschikbare bronassets"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              src="/images/food-collage.png"
            />
          </div>
          <div className="space-y-6">
            <SectionHeading
              description="De website houdt de toon bewust rustig: snelle keuzes, duidelijke informatie en genoeg ruimte voor sfeer zonder overbodige claims."
              eyebrow="Sfeer"
              heading="Even weg. Even Griekenland."
            />
            <Button href="/about" variant="secondary">
              Lees meer
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue py-14 text-white">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-5xl text-white sm:text-6xl">Zin in Grieks?</h2>
            <p className="mt-3 text-base leading-8 text-white/86">
              Bestellen kan via de bevestigde contactgegevens. Een online bestel-link is nog niet bevestigd.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="bg-white text-brand-blue hover:bg-white/90" href="/order">
              Bestellen
            </Button>
            <Button className="border-white text-white hover:bg-white/10" href="/contact" variant="secondary">
              Contact
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { MobileValueIcons, type MobileValueIcon } from "@/components/ui/mobile-value-icons";
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
  const mobileSpecialties: readonly MobileValueIcon[] = [
    { icon: "leaf", label: "Verse ingredienten" },
    { icon: "temple", label: "Authentieke recepten" },
    { icon: "heart", label: "Met liefde bereid" },
  ];

  return (
    <main className="flex-1" id="main-content">
      <section className="relative isolate overflow-hidden md:hidden" data-testid="mobile-home">
        <div className="mobile-approved-page flex min-h-[calc(100svh-var(--header-height))] flex-col">
          <div className="relative flex flex-1 flex-col">
            <div className="relative z-10 max-w-[15.5rem] pt-5">
              <h1 className="text-[clamp(2.75rem,12.2vw,3.35rem)] leading-[0.91] text-text-primary">
                <span className="block">AUTHENTIEK</span>
                <span className="block text-brand-blue">GRIEKS</span>
                <span className="block">FOOD &amp; DRINKS</span>
              </h1>
              <p className="mt-4 text-[0.92rem] leading-7 text-text-primary">
                Pure smaken. Verse ingredienten.
                <br />
                Met liefde bereid.
              </p>
              <Button className="mt-5 min-h-11 px-4 text-[0.78rem]" href="/order">
                Bestel nu
              </Button>
            </div>

            <div className="absolute right-[-0.7rem] top-[9.1rem] h-[12.8rem] w-[5.8rem] overflow-hidden rounded-[0.55rem] border border-border-subtle bg-surface-secondary shadow-[0_1rem_2rem_rgb(0_0_0_/_0.35)] min-[400px]:right-0 min-[400px]:w-[6.6rem]">
              <Image
                alt="Detail van Griekse gerechten en blauwe glazen"
                className="object-cover object-[78%_12%]"
                fill
                priority
                sizes="110px"
                src="/images/food-collage.png"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(9_10_11_/_0.1),rgb(9_10_11_/_0.48))]" />
            </div>

            <div className="relative mt-9 h-[14.2rem] overflow-hidden rounded-[0.6rem] border border-border-subtle bg-surface-secondary min-[375px]:h-[15.6rem] min-[400px]:h-[16.6rem]">
              <Image
                alt="Griekse salade met feta, tomaat, komkommer en olijven"
                className="object-cover object-[50%_48%]"
                fill
                priority
                sizes="(max-width: 430px) 100vw, 430px"
                src="/images/menu-salad.png"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,rgb(15_15_16_/_0.82))]" />
            </div>

            <section className="mobile-surface relative -mt-2 px-4 pb-5 pt-4" aria-labelledby="mobile-specialties-heading">
              <h2
                className="mb-5 text-center text-[1rem] leading-none text-text-primary"
                id="mobile-specialties-heading"
              >
                ONZE SPECIALITEITEN
              </h2>
              <MobileValueIcons items={mobileSpecialties} />
            </section>
          </div>
        </div>
      </section>

      <section className="relative isolate hidden min-h-[calc(86svh-var(--header-height))] overflow-hidden border-b border-border-subtle md:block">
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

      <section className="hidden py-[var(--space-section-y)] md:block">
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

      <section className="hidden border-y border-border-subtle bg-surface py-[var(--space-section-y)] md:block">
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

      <section className="hidden py-[var(--space-section-y)] md:block">
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

      <section className="hidden bg-brand-blue py-14 text-white md:block">
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

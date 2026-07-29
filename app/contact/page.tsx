import type { Metadata } from "next";
import { ContactCard } from "@/components/contact/contact-card";
import { OpeningHours } from "@/components/contact/opening-hours";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { PageIntro } from "@/components/ui/page-intro";
import { contactItems, mapSearchHref, openingHours, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactgegevens, adres en openingstijden van It's All Greek in Nieuwerkerk aan den IJssel.",
  openGraph: {
    title: "Contact | It's All Greek",
    description: "Bel, mail of vind de route naar It's All Greek.",
  },
};

export default function ContactPage() {
  return (
    <main className="page-shell flex-1" id="main-content">
      <Container className="space-y-10">
        <PageIntro
          body="Heb je een vraag, wil je bestellen of wil je langskomen? Neem gerust contact met ons op."
          eyebrow="Contact"
          heading="We helpen je graag."
        />

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="surface-card p-6 sm:p-7" aria-labelledby="contact-details-heading">
            <h2 className="mb-6 text-4xl text-text-primary" id="contact-details-heading">
              Gegevens
            </h2>
            <dl className="grid gap-6">
              {contactItems.map((item) => (
                <ContactCard item={item} key={item.label} />
              ))}
            </dl>
          </section>

          <section className="surface-card p-6 sm:p-7" aria-labelledby="contact-hours-heading">
            <h2 className="mb-6 text-4xl text-text-primary" id="contact-hours-heading">
              Openingstijden
            </h2>
            <OpeningHours hours={openingHours} />
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={siteConfig.phoneHref}>Bel restaurant</Button>
              <Button href={siteConfig.emailHref} variant="secondary">
                Mail ons
              </Button>
            </div>
          </section>
        </div>

        <section className="grid gap-6 border-t border-border-subtle pt-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h2 className="text-4xl text-text-primary">Kom langs</h2>
            <p className="mt-3 max-w-xl text-base leading-8 text-text-secondary">
              Je vindt {siteConfig.name} bij {siteConfig.address}.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={mapSearchHref} rel="noreferrer" target="_blank" variant="secondary">
                Route
              </Button>
              <Button href="/order">Bestellen</Button>
            </div>
          </div>

          <div
            aria-label={`Kaartlocatie voor ${siteConfig.address}`}
            className="relative min-h-[18rem] overflow-hidden rounded-[var(--radius-md)] border border-border-subtle bg-surface-secondary"
            role="img"
          >
            <div className="absolute inset-0 opacity-55">
              <div className="absolute left-0 top-1/3 h-px w-full rotate-6 bg-border-subtle" />
              <div className="absolute left-0 top-2/3 h-px w-full -rotate-6 bg-border-subtle" />
              <div className="absolute left-1/4 top-0 h-full w-px rotate-12 bg-border-subtle" />
              <div className="absolute right-1/4 top-0 h-full w-px -rotate-12 bg-border-subtle" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-brand-blue/40" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgb(13_115_200_/_0.18),transparent_34%)]" />
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-blue text-white shadow-[var(--shadow-blue)]">
              <Icon className="h-7 w-7" name="mapPin" />
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}

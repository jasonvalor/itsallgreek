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
    <main className="flex-1" id="main-content">
      <section className="mobile-approved-page flex flex-col md:hidden" data-testid="mobile-contact-page">
        <div className="space-y-4">
          <h1 className="mobile-title">CONTACT</h1>
          <div className="mobile-accent-line" />
        </div>

        <section className="mt-7" aria-labelledby="mobile-contact-details">
          <h2 className="sr-only" id="mobile-contact-details">
            Contactgegevens
          </h2>
          <dl className="grid gap-5">
            {contactItems.map((item) => {
              const value = item.href ? (
                <a className="hover:text-text-primary" href={item.href}>
                  {item.value}
                </a>
              ) : (
                item.value
              );

              return (
                <div className="grid grid-cols-[1.75rem_1fr] gap-4" key={item.label}>
                  <dt className="pt-1 text-brand-blue">
                    <Icon className="h-6 w-6" name={item.icon} />
                    <span className="sr-only">{item.label}</span>
                  </dt>
                  <dd className="min-w-0 text-[0.88rem] leading-6 text-text-primary">{value}</dd>
                </div>
              );
            })}
            <div className="grid grid-cols-[1.75rem_1fr] gap-4">
              <dt className="pt-1 text-brand-blue">
                <Icon className="h-6 w-6" name="clock" />
                <span className="sr-only">Openingstijden</span>
              </dt>
              <dd className="min-w-0">
                <p className="text-[0.88rem] leading-6 text-text-primary">Openingstijden</p>
                <dl className="mt-1 grid gap-0.5">
                  {openingHours.map((item) => (
                    <div className="grid grid-cols-[4.5rem_1fr] gap-2 text-[0.82rem] leading-6" key={item.label}>
                      <dt className="text-text-secondary">{item.label}</dt>
                      <dd className="text-text-primary">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </dd>
            </div>
          </dl>
        </section>

        <a
          aria-label={`Route naar ${siteConfig.name}`}
          className="mobile-surface relative mt-7 block h-[8.5rem] overflow-hidden bg-[#111315]"
          href={mapSearchHref}
          rel="noreferrer"
          target="_blank"
        >
          <span className="absolute inset-0 opacity-60">
            <span className="absolute left-0 top-[22%] h-px w-full rotate-[-8deg] bg-border-subtle" />
            <span className="absolute left-0 top-[58%] h-px w-full rotate-[9deg] bg-border-subtle" />
            <span className="absolute left-[20%] top-0 h-full w-px rotate-[14deg] bg-border-subtle" />
            <span className="absolute right-[22%] top-0 h-full w-px rotate-[-14deg] bg-border-subtle" />
            <span className="absolute left-[54%] top-0 h-full w-px bg-brand-blue/50" />
          </span>
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_53%_48%,rgb(13_115_200_/_0.24),transparent_32%)]" />
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-brand-blue">
            <Icon className="h-9 w-9" name="mapPin" />
          </span>
        </a>

        <div className="mt-auto pt-7">
          <Button className="w-full border-brand-blue/95 bg-transparent" href={siteConfig.phoneHref} variant="secondary">
            Neem contact op
          </Button>
        </div>
      </section>

      <div className="hidden md:block page-shell">
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
      </div>
    </main>
  );
}

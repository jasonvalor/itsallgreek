import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactItems, openingHours, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactgegevens, adres en openingstijden van It's All Greek.",
};

export default function ContactPage() {
  return (
    <main className="page-shell flex-1">
      <Container className="space-y-10">
        <SectionHeading
          description="Bel, mail of kom langs. Alleen de gegevens uit de bevestigde lokale bron worden hier getoond."
          eyebrow="Contact"
          heading="Neem contact op"
          level={1}
        />

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="surface-card p-6">
            <h2 className="mb-5 text-4xl text-text-primary">Gegevens</h2>
            <dl className="grid gap-5">
              {contactItems.map((item) => (
                <div key={item.label}>
                  <dt className="text-base font-semibold text-brand-blue">{item.label}</dt>
                  <dd className="mt-1 text-base leading-7 text-text-secondary">
                    {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="surface-card p-6">
            <h2 className="mb-5 text-4xl text-text-primary">Openingstijden</h2>
            <dl className="grid gap-4">
              {openingHours.map((item) => (
                <div className="flex justify-between gap-4 border-b border-border-subtle pb-4 last:border-b-0 last:pb-0" key={item.label}>
                  <dt className="text-base text-text-muted">{item.label}</dt>
                  <dd className="text-base font-semibold text-text-primary">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <section className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-4xl text-text-primary">Bestellen of langskomen?</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-text-secondary">
              {siteConfig.address}. Een kaartlink is nog niet bevestigd in de brondata.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.phoneHref}>Bel direct</Button>
            <Button href="/order" variant="secondary">
              Bestellen
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}

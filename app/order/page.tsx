import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { PageIntro } from "@/components/ui/page-intro";
import { orderBenefits, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bestellen",
  description: "Bestel afhalen of neem telefonisch contact op met It's All Greek.",
  openGraph: {
    title: "Bestellen | It's All Greek",
    description: "Bestel afhalen of neem telefonisch contact op met It's All Greek.",
  },
};

export default function OrderPage() {
  return (
    <main className="page-shell flex-1" id="main-content">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-7">
          <PageIntro
            body="Bestellen kan eenvoudig telefonisch. Zodra de bevestigde online bestel-link beschikbaar is, plaatsen we die hier."
            eyebrow="Bestellen"
            heading="Bestel vers Grieks"
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.phoneHref}>Bel {siteConfig.phone}</Button>
            <Button href="/menu" variant="secondary">
              Bekijk menu
            </Button>
          </div>
        </div>

        <section className="surface-card p-6 sm:p-8" aria-labelledby="order-options-heading">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[var(--radius-md)] border border-brand-blue/70 text-brand-blue">
            <Icon className="h-10 w-10" name="bag" />
          </div>
          <h2 className="text-4xl text-text-primary" id="order-options-heading">
            Afhalen of bezorgen
          </h2>
          <p className="mt-4 text-base leading-8 text-text-secondary">
            We bereiden je bestelling vers. Er is geen winkelmandje, checkout of betaling op deze
            website.
          </p>
          <ul className="mt-7 grid gap-4">
            {orderBenefits.map((benefit) => (
              <li className="flex items-center gap-3 text-base text-text-secondary" key={benefit.label}>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-brand-blue">
                  <Icon className="h-5 w-5" name={benefit.icon} />
                </span>
                <span>{benefit.label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.phoneHref}>Bel restaurant</Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}

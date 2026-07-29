import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bestellen",
  description: "Bestelinformatie voor It's All Greek.",
};

export default function OrderPage() {
  return (
    <main className="page-shell flex-1">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          description="Er is nog geen bevestigde online bestel-URL in de brondata. Daarom bouwen we geen nep-checkout en verzamelen we geen betaal- of bestelgegevens."
          eyebrow="Bestellen"
          heading="Bestel via de bevestigde contactgegevens"
          level={1}
        />

        <section className="surface-card p-6 sm:p-8">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[var(--radius-md)] border border-brand-blue text-4xl text-brand-blue">
            <span aria-hidden="true">✓</span>
          </div>
          <h2 className="text-4xl text-text-primary">Online bestellen nog niet bevestigd</h2>
          <p className="mt-4 text-base leading-8 text-text-secondary">
            Gebruik voorlopig de telefoon of bekijk eerst het beschikbare menu. Zodra een echte bestel-link is bevestigd, kan die hier veilig worden geplaatst.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.phoneHref}>Bel {siteConfig.phone}</Button>
            <Button href="/menu" variant="secondary">
              Bekijk menu
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}

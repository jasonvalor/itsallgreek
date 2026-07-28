import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Home() {
  return (
    <main className="flex-1 py-[var(--space-section-y)]">
      <Container className="space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <p className="text-base font-semibold text-brand-blue">
              Design foundation preview
            </p>
            <h1 className="max-w-3xl text-6xl text-text-primary sm:text-7xl md:text-8xl">
              It&apos;s All Greek
            </h1>
            <p className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
              A dark, mobile-first visual system for modern Greek food and
              drinks. This temporary preview keeps the foundation focused before
              full page content is designed.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/">Primary action</Button>
              <Button href="/" variant="secondary">
                Secondary action
              </Button>
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-border-subtle bg-surface p-[var(--space-card)] shadow-[var(--shadow-surface)]">
            <div className="mb-6 h-1 w-12 rounded-full bg-brand-blue" />
            <h2 className="mb-5 text-4xl text-text-primary sm:text-5xl">
              Elevated surface
            </h2>
            <p className="text-base leading-8 text-text-secondary">
              Cards use quiet borders, restrained depth and comfortable spacing
              so content remains easy to scan on small screens.
            </p>
            <div className="mt-8 grid gap-3 text-base">
              <p className="text-text-primary">Primary text color</p>
              <p className="text-text-secondary">Secondary text color</p>
              <p className="text-text-muted">Muted supporting text color</p>
            </div>
          </div>
        </section>

        <section className="rounded-[var(--radius-xl)] border border-border-subtle bg-surface-secondary p-[var(--space-card)]">
          <SectionHeading
            eyebrow="Reusable system"
            heading="Clear hierarchy"
            description="The foundation pairs condensed display headings with readable Inter body text, visible focus states and touch-friendly controls."
          />
        </section>
      </Container>
    </main>
  );
}

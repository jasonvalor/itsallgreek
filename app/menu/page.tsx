import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { menuCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description: "Bekijk de beschikbare It's All Greek menugegevens uit de herstelde bron.",
};

export default function MenuPage() {
  return (
    <main className="page-shell flex-1">
      <Container className="space-y-10">
        <SectionHeading
          description="De volledige officiele menukaart is nog niet geimporteerd. Hieronder staat alleen wat in de bevestigde lokale brondata aanwezig was."
          eyebrow="Menu"
          heading="Ons menu"
          level={1}
        />

        {menuCategories.map((category) => (
          <section className="space-y-5" key={category.id}>
            <div className="flex flex-col gap-3 border-b border-border-subtle pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl text-text-primary">{category.label}</h2>
                <p className="mt-2 max-w-2xl text-base leading-7 text-text-secondary">{category.note}</p>
              </div>
              <Button href="/order" variant="secondary">
                Bestellen
              </Button>
            </div>

            <div className="grid gap-4">
              {category.items.map((item) => (
                <article className="surface-card grid gap-4 p-4 sm:grid-cols-[8rem_1fr] sm:items-center" key={item.name}>
                  <div className="relative aspect-square overflow-hidden rounded-[var(--radius-sm)] bg-surface-secondary">
                    <Image
                      alt={item.image.alt}
                      className="object-cover"
                      fill
                      sizes="(min-width: 640px) 128px, 100vw"
                      src={item.image.src}
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                    <div>
                      <h3 className="text-3xl text-text-primary">{item.name}</h3>
                      <p className="mt-2 text-base leading-7 text-text-secondary">
                        {item.description ?? "Beschrijving nog niet bevestigd."}
                      </p>
                    </div>
                    <p className="text-lg font-semibold text-brand-blue">{item.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </Container>
    </main>
  );
}

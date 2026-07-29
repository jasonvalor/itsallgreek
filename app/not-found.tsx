import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex-1 py-[var(--space-section-y)]">
      <Container className="relative min-h-[32rem] overflow-hidden rounded-[var(--radius-md)] border border-border-subtle bg-surface p-6 sm:p-10">
        <Image
          alt="Grieks restaurantterras als achtergrond voor de 404 pagina"
          className="object-cover opacity-40"
          fill
          sizes="100vw"
          src="/images/restaurant-day.png"
        />
        <div className="absolute inset-0 bg-background/64" />
        <div className="relative z-10 flex min-h-[26rem] flex-col items-center justify-center text-center">
          <h1 className="text-8xl text-text-primary sm:text-9xl">404</h1>
          <p className="mt-4 text-base font-semibold text-text-primary">Pagina niet gevonden</p>
          <div className="my-5 h-0.5 w-12 rounded-full bg-brand-blue" />
          <p className="max-w-md text-base leading-8 text-text-secondary">
            De pagina die je zoekt bestaat niet of is verplaatst.
          </p>
          <Button className="mt-8" href="/">
            Terug naar home
          </Button>
        </div>
      </Container>
    </main>
  );
}

import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex-1" id="main-content">
      <section className="mobile-approved-page flex flex-col md:hidden" data-testid="mobile-404-page">
        <div className="mobile-surface relative isolate mt-4 min-h-[30rem] overflow-hidden px-5 py-8 text-center">
          <Image
            alt="Grieks terras met witte muren en blauwe details"
            className="object-cover object-[60%_50%]"
            fill
            sizes="(max-width: 430px) 100vw, 430px"
            src="/images/restaurant-day.png"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(9_10_11_/_0.72),rgb(9_10_11_/_0.9)_48%,rgb(9_10_11_/_0.98))]" />
          <div className="relative z-10 flex min-h-[26rem] flex-col items-center justify-center">
            <h1 className="text-[5.3rem] leading-none text-text-primary">404</h1>
            <p className="mt-3 text-[0.83rem] font-bold uppercase leading-none text-text-primary">
              Pagina niet gevonden
            </p>
            <div className="my-4 mobile-accent-line" />
            <p className="max-w-[15rem] text-[0.82rem] leading-6 text-text-secondary">
              De pagina die je zoekt bestaat niet of is verplaatst.
            </p>
            <Button className="mt-7 px-4 text-[0.78rem]" href="/">
              Terug naar home
            </Button>
          </div>
        </div>
      </section>

      <div className="hidden py-[var(--space-section-y)] md:block">
        <Container>
        <section className="relative isolate min-h-[32rem] overflow-hidden rounded-[var(--radius-md)] border border-border-subtle bg-surface p-6 sm:p-10">
          <Image
            alt="Grieks terras met witte muren en blauwe details"
            className="object-cover"
            fill
            sizes="100vw"
            src="/images/restaurant-day.png"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(15_15_16_/_0.94),rgb(15_15_16_/_0.7),rgb(15_15_16_/_0.35))]" />
          <div className="relative z-10 flex min-h-[26rem] max-w-xl flex-col justify-center">
            <h1 className="text-8xl text-text-primary sm:text-9xl">404</h1>
            <p className="mt-4 text-base font-semibold text-text-primary">Pagina niet gevonden.</p>
            <div className="my-5 h-0.5 w-12 rounded-full bg-brand-blue" />
            <p className="max-w-md text-base leading-8 text-text-secondary">
              De pagina die je zoekt bestaat niet of is verplaatst.
            </p>
            <Button className="mt-8 w-fit" href="/">
              Terug naar home
            </Button>
          </div>
        </section>
        </Container>
      </div>
    </main>
  );
}

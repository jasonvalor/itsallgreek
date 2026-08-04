import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-1 items-start justify-center px-0 py-0" id="main-content">
      <section
        className="relative isolate flex min-h-svh w-full max-w-none overflow-hidden rounded-[1.35rem] border-2 border-white/15 bg-[var(--brand-background-deep)] md:aspect-[2.282] md:min-h-0"
        data-testid="approved-404-page"
      >
        <Image
          alt="Griekse witte gebouwen met blauwe deuren aan zee"
          className="object-cover object-[64%_50%]"
          fill
          priority
          sizes="100vw"
          src="/images/restaurant-day.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(6_7_8_/_0.86),rgb(6_7_8_/_0.86)),linear-gradient(90deg,rgb(6_7_8_/_0.98)_0%,rgb(6_7_8_/_0.88)_44%,rgb(6_7_8_/_0.28)_72%)] md:bg-[linear-gradient(90deg,rgb(6_7_8_/_0.98)_0%,rgb(6_7_8_/_0.86)_43%,rgb(6_7_8_/_0.22)_74%)]" />

        <p className="absolute left-4 top-2 z-10 font-display text-[2.2rem] leading-none text-text-primary md:left-5 md:top-1 md:text-[3rem]">
          404 ERROR
        </p>

        <div className="relative z-10 mx-auto flex w-full max-w-[34rem] flex-col items-center justify-center px-6 py-20 text-center md:ml-[15%] md:mr-0 md:py-12">
          <h1 className="text-[8rem] leading-none text-text-primary md:text-[12.5rem]">404</h1>
          <p className="mt-7 font-display text-[clamp(2rem,9vw,3.4rem)] leading-none text-text-primary md:mt-8">
            OOPS! PAGINA NIET GEVONDEN
          </p>
          <div className="mobile-accent-line my-8 md:my-9" />
          <p className="max-w-[20rem] text-[clamp(1rem,4vw,1.25rem)] font-semibold leading-[1.75] text-text-secondary">
            De pagina die je zoekt bestaat niet of is verplaatst.
          </p>
          <Button className="mt-12 h-[4.1rem] w-full max-w-[22rem] md:h-[4.55rem]" href="/">
            Terug naar home
          </Button>
        </div>
      </section>
    </main>
  );
}

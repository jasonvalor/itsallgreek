import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export function CTASection() {
  return (
    <Section
      className="bg-[#0D73C8] text-white"
      containerClassName="text-center"
    >
      <h2 className="text-4xl font-semibold tracking-tight">Zin in Grieks?</h2>
      <p className="mx-auto mt-5 max-w-sm text-base leading-7 text-white/80">
        Bestel eenvoudig online of bel ons direct.
      </p>

      <div className="mt-10 flex flex-col gap-3">
        <Button href={siteConfig.takeawayHref} variant="light">
          Bestel afhalen
        </Button>
        <Button href={siteConfig.phoneHref} variant="secondaryLight">
          Bel restaurant
        </Button>
      </div>
    </Section>
  );
}

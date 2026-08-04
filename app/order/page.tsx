import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
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
    <main className="flex-1" id="main-content">
      <section className="mobile-approved-page flex flex-col" data-testid="mobile-order-page">
        <div>
          <h1 className="mobile-title">BESTELLEN</h1>
          <div className="mobile-accent-line mt-7" />
        </div>

        <section className="mt-24 text-center" aria-labelledby="order-options-heading">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-2 border-border-subtle bg-surface/45 text-brand-blue shadow-[inset_0_0_2rem_rgb(255_255_255_/_0.03)]">
            <Icon className="h-16 w-16" name="bag" strokeWidth={2} />
          </div>
          <h2 className="sr-only" id="order-options-heading">
            Bestelopties
          </h2>
          <p className="mx-auto mt-14 max-w-[19rem] text-[clamp(1.35rem,6vw,1.62rem)] font-bold leading-[1.55] text-text-primary">
            Bestel eenvoudig telefonisch en geniet van echte Griekse smaken.
          </p>
        </section>

        <ul className="mx-auto mt-16 grid max-w-[19rem] gap-7">
          {orderBenefits.map((benefit) => (
            <li
              className="grid grid-cols-[2.2rem_1fr] items-center gap-6 text-[clamp(1.15rem,5vw,1.38rem)] font-semibold text-text-primary"
              key={benefit.label}
            >
              <span className="text-brand-blue">
                <Icon className="h-9 w-9" name={benefit.icon} strokeWidth={2.2} />
              </span>
              <span>{benefit.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-16">
          <Button
            className="h-[3.8rem] w-full border-2 border-brand-blue bg-transparent"
            href={siteConfig.phoneHref}
            variant="secondary"
          >
            Bestel nu
          </Button>
        </div>
      </section>
    </main>
  );
}

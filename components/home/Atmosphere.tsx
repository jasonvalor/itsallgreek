import Image from "next/image";

import { ArrowIcon } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";

export function Atmosphere() {
  return (
    <Section className="bg-[#020a12] py-8 text-white" id="sfeer">
      <article className="relative overflow-hidden rounded-xl border border-white/12 bg-[#07131f]">
        <div className="relative min-h-[420px]">
          <Image
            alt="Warme Griekse restaurantsfeer met blauwe accenten"
            className="object-cover"
            fill
            sizes="100vw"
            src="/images/restaurant-night.png"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#06111b] via-[#06111b]/78 to-transparent"
          />
        </div>

        <div className="absolute inset-0 flex items-center p-8">
          <div className="max-w-xs">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0D73C8]">
              De Griekse beleving
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight">
              Even uit.
              <br />
              Even Griekenland.
            </h2>
            <div className="mt-6 h-px w-14 bg-[#0D73C8]" />
            <p className="mt-8 text-base leading-7 text-white/82">
              Geniet van pure Griekse gerechten in een ontspannen sfeer. Binnen
              of buiten, je bent altijd welkom.
            </p>
            <a
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-[#0D73C8]"
              href="#"
            >
              Meer over ons
              <ArrowIcon className="size-5" />
            </a>
          </div>
        </div>
      </article>
    </Section>
  );
}

import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  ArrowIcon,
  BagIcon,
  PhoneIcon,
  ScooterIcon,
  SunIcon,
  UtensilsIcon,
} from "@/components/ui/Icons";
import { siteConfig } from "@/lib/site";

const services = [
  { label: "Binnen eten", icon: <UtensilsIcon className="size-8" /> },
  { label: "Terras", icon: <SunIcon className="size-8" /> },
  { label: "Afhalen", icon: <BagIcon className="size-8" /> },
  { label: "Bezorgen", icon: <ScooterIcon className="size-8" /> },
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pb-10 pt-48 text-white"
      id="top"
    >
      <Image
        alt="Avondterras van een warm Grieks restaurant"
        className="object-cover"
        fill
        priority
        sizes="100vw"
        src="/images/restaurant-night.png"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#020a12] via-[#020a12]/82 to-[#020a12]/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020a12] to-transparent"
      />

      <Container className="relative z-10">
        <div>
          <p className="font-serif text-3xl italic text-[#0D73C8]">
            Welkom bij
          </p>
          <div className="mt-3 h-px w-12 bg-[#0D73C8]" />

          <h1 className="mt-6 text-6xl font-black uppercase leading-[0.9] tracking-tight">
            It&apos;s All
            <br />
            Greek
          </h1>

          <p className="mt-6 max-w-xs text-xl leading-7 text-white/90">
            Authentieke Griekse smaken, midden in Nieuwerkerk aan den IJssel.
          </p>

          <div className="mt-9 grid grid-cols-4 gap-2 text-center">
            {services.map((service) => (
              <div className="text-[#0D73C8]" key={service.label}>
                <div className="mx-auto flex size-10 items-center justify-center">
                  {service.icon}
                </div>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-white">
                  {service.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-3" id="bestel">
            <Button
              className="justify-between"
              href={siteConfig.takeawayHref}
            >
              <span className="flex items-center gap-4">
                <BagIcon />
                Bestel afhalen
              </span>
              <ArrowIcon />
            </Button>
            <Button
              className="justify-between"
              href={siteConfig.thuisbezorgdHref}
              variant="secondaryLight"
            >
              <span className="flex items-center gap-4">
                <ScooterIcon />
                <span className="text-left">
                  Bezorgen
                  <span className="block text-xs font-normal normal-case tracking-normal text-white/70">
                    via Thuisbezorgd
                  </span>
                </span>
              </span>
              <ArrowIcon />
            </Button>
            <Button
              className="justify-between"
              href={siteConfig.phoneHref}
              variant="secondaryLight"
            >
              <span className="flex items-center gap-4">
                <PhoneIcon />
                <span className="text-left">
                  Bel ons
                  <span className="block text-xs font-normal tracking-normal text-white/70">
                    {siteConfig.phone}
                  </span>
                </span>
              </span>
              <ArrowIcon />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

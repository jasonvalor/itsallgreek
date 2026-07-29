import Image from "next/image";

import { ArrowIcon } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { menuItems, siteConfig } from "@/lib/site";

export function PopularMenu() {
  return (
    <Section className="bg-[#020a12] py-12 text-white" id="menu">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0D73C8]">
        Populair
      </p>
      <h2 className="mt-3 font-serif text-4xl leading-tight">Onze favorieten</h2>

      <div className="mt-8 grid grid-cols-2 gap-4">
        {menuItems.map((item) => (
          <article
            className="overflow-hidden rounded-lg border border-white/12 bg-[#07131f]"
            key={item.title}
          >
            <div className="relative aspect-[1.18/1]">
              <Image
                alt={item.alt}
                className="object-cover"
                fill
                sizes="50vw"
                src={item.image}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-base font-semibold text-[#0D73C8]">
                {item.price}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-7 flex justify-center gap-4" aria-hidden="true">
        <span className="size-3 rounded-full bg-[#0D73C8]" />
        <span className="size-3 rounded-full bg-white/25" />
        <span className="size-3 rounded-full bg-white/25" />
        <span className="size-3 rounded-full bg-white/25" />
      </div>

      <a
        className="mt-7 flex min-h-14 items-center justify-center gap-5 rounded-lg border border-white/20 text-sm font-bold uppercase tracking-wide text-white"
        href={siteConfig.menuHref}
      >
        Bekijk het hele menu
        <ArrowIcon />
      </a>
    </Section>
  );
}

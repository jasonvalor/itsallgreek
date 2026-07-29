import {
  ClockIcon,
  PhoneIcon,
  PinIcon,
  ScooterIcon,
} from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { openingHours, siteConfig } from "@/lib/site";

const contactItems = [
  {
    icon: <ClockIcon />,
    title: "Openingstijden",
    content: openingHours,
  },
  {
    icon: <PinIcon className="size-7" />,
    title: "Locatie",
    content: ["Winkelcentrum", "De Reigerhof", "Nieuwerkerk a/d IJssel"],
  },
  {
    icon: <PhoneIcon />,
    title: "Bel ons",
    content: [siteConfig.phone],
  },
  {
    icon: <ScooterIcon />,
    title: "WhatsApp",
    content: [siteConfig.whatsapp],
  },
];

export function ContactStrip() {
  return (
    <Section className="bg-[#020a12] pb-28 pt-4 text-white" id="contact">
      <div className="overflow-hidden rounded-xl border border-white/15 bg-[#06111b]/80">
        {contactItems.map((item) => (
          <section
            aria-labelledby={`contact-${item.title}`}
            className="border-b border-white/15 p-6 last:border-b-0"
            key={item.title}
          >
            <div className="flex items-start gap-4">
              <div className="text-[#0D73C8]">{item.icon}</div>
              <div>
                <h2
                  className="text-sm font-semibold uppercase tracking-wide text-[#0D73C8]"
                  id={`contact-${item.title}`}
                >
                  {item.title}
                </h2>
                <div className="mt-3 space-y-1 text-base leading-6 text-white/85">
                  {item.content.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </Section>
  );
}

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { googleMapsEmbedUrl, mapSearchHref, openingHours, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactgegevens, adres en openingstijden van It's All Greek in Nieuwerkerk aan den IJssel.",
  openGraph: {
    title: "Contact | It's All Greek",
    description: "Bel, mail of vind de route naar It's All Greek.",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1" id="main-content">
      <section className="mobile-approved-page mobile-contact-page flex flex-col" data-testid="mobile-contact-page">
        <div>
          <h1 className="mobile-title">CONTACT</h1>
          <div className="mobile-accent-line mt-7" />
        </div>

        <section className="mt-14" aria-labelledby="contact-details-heading">
          <h2 className="sr-only" id="contact-details-heading">
            Contactgegevens
          </h2>
          <dl className="grid gap-7">
            <div className="grid grid-cols-[3.25rem_1fr] gap-5">
              <dt className="pt-1 text-brand-blue">
                <Icon className="h-10 w-10" name="mapPin" strokeWidth={2} />
                <span className="sr-only">Adres</span>
              </dt>
              <dd className="min-w-0 text-[clamp(1rem,4.25vw,1.14rem)] font-semibold leading-[1.65] text-text-primary">
                <address className="not-italic">
                  <span className="block">{siteConfig.name}</span>
                  <span className="block">Winkelcentrum De Reigerhof</span>
                  <span className="block">Nieuwerkerk a/d IJssel</span>
                </address>
              </dd>
            </div>

            <div className="grid grid-cols-[3.25rem_1fr] items-center gap-5">
              <dt className="text-brand-blue">
                <Icon className="h-10 w-10" name="phone" strokeWidth={2} />
                <span className="sr-only">Telefoon</span>
              </dt>
              <dd className="min-w-0 text-[clamp(1rem,4.25vw,1.14rem)] font-semibold text-text-primary">
                <a className="hover:text-brand-blue" href={siteConfig.phoneHref}>
                  {siteConfig.phone}
                </a>
              </dd>
            </div>

            <div className="grid grid-cols-[3.25rem_1fr] items-center gap-5">
              <dt className="text-brand-blue">
                <Icon className="h-10 w-10" name="mail" strokeWidth={2} />
                <span className="sr-only">E-mail</span>
              </dt>
              <dd className="min-w-0 text-[clamp(1rem,4.25vw,1.14rem)] font-semibold text-text-primary">
                <a className="hover:text-brand-blue" href={siteConfig.emailHref}>
                  {siteConfig.email}
                </a>
              </dd>
            </div>

            <div className="grid grid-cols-[3.25rem_1fr] gap-5">
              <dt className="pt-1 text-brand-blue">
                <Icon className="h-10 w-10" name="clock" strokeWidth={2} />
                <span className="sr-only">Openingstijden</span>
              </dt>
              <dd className="min-w-0">
                <p className="text-[clamp(1rem,4.25vw,1.14rem)] font-semibold leading-[1.45] text-text-primary">
                  Openingstijden
                </p>
                <dl className="mt-2 grid gap-1">
                  {openingHours.map((item) => (
                    <div
                      className="grid grid-cols-[4.25rem_1fr] gap-2 text-[clamp(0.8rem,3.45vw,0.95rem)] font-semibold leading-[1.45]"
                      key={item.label}
                    >
                      <dt className="text-text-secondary">{item.label}</dt>
                      <dd className="text-text-primary">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </dd>
            </div>
          </dl>
        </section>

        <div className="mt-10">
          <div className="mobile-surface overflow-hidden bg-[#111315]" data-testid="contact-map">
            <iframe
              allowFullScreen
              className="block h-[14.5rem] w-full border-0 md:h-[18rem]"
              data-testid="contact-map-iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={googleMapsEmbedUrl}
              title="Locatie van It's All Greek op Google Maps"
            />
          </div>
          <a
            className="mt-3 inline-flex text-[0.78rem] font-bold uppercase tracking-normal text-brand-blue underline decoration-brand-blue/55 underline-offset-4 hover:text-brand-blue-hover"
            href={mapSearchHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open in Google Maps
          </a>
        </div>

        <div className="pt-8">
          <Button
            className="h-[3.8rem] w-full border-2 border-brand-blue bg-transparent"
            href={siteConfig.phoneHref}
            variant="secondary"
          >
            Neem contact op
          </Button>
        </div>
      </section>
    </main>
  );
}

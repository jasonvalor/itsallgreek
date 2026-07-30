import Link from "next/link";
import { SiteLogo } from "@/components/brand/site-logo";
import { OpeningHours } from "@/components/contact/opening-hours";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { contactItems, navigationItems, openingHours, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const footerNavigation = navigationItems.filter((item) => item.href !== "/");

  return (
    <footer className="border-t border-border-subtle bg-background py-12">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_0.7fr_1fr] lg:gap-14">
        <div className="space-y-5">
          <SiteLogo />
          <p className="max-w-sm text-base leading-8 text-text-secondary">
            Authentieke Griekse gerechten in het hart van {siteConfig.location}.
          </p>
          <Button href="/order">Bestel afhalen</Button>
        </div>

        <nav aria-label="Footer navigatie">
          <h2 className="mb-4 text-3xl text-text-primary">Navigatie</h2>
          <ul className="grid gap-2">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link className="text-base text-text-secondary hover:text-text-primary" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-7">
          <section aria-labelledby="footer-contact-heading">
            <h2 className="mb-4 text-3xl text-text-primary" id="footer-contact-heading">
              Contact
            </h2>
            <ul className="grid gap-2">
              {contactItems.map((item) => (
                <li className="text-base text-text-secondary" key={item.label}>
                  {item.href ? (
                    <a className="hover:text-text-primary" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-hours-heading">
            <h2 className="mb-4 text-3xl text-text-primary" id="footer-hours-heading">
              Openingstijden
            </h2>
            <OpeningHours hours={openingHours} />
          </section>
        </div>
      </Container>

      <Container className="mt-10 border-t border-border-subtle pt-6">
        <p className="text-sm leading-6 text-text-muted">
          © {currentYear} {"It's All Greek • Authentic Greek Street Food"}. Alle rechten voorbehouden.
        </p>
      </Container>
    </footer>
  );
}

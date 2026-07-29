import Link from "next/link";
import { SiteLogo } from "@/components/brand/site-logo";
import { Container } from "@/components/layout/container";
import { contactItems, navigationItems, openingHours, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-background py-12">
      <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div className="space-y-5">
          <SiteLogo />
          <p className="max-w-sm text-base leading-8 text-text-secondary">
            Authentieke Griekse gerechten in het hart van {siteConfig.location}.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-3xl text-text-primary">Navigatie</h2>
          <ul className="grid gap-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link className="text-base text-text-secondary hover:text-text-primary" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="mb-4 text-3xl text-text-primary">Contact</h2>
            <ul className="grid gap-2">
              {contactItems.map((item) => (
                <li className="text-base text-text-secondary" key={item.label}>
                  {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-3xl text-text-primary">Openingstijden</h2>
            <dl className="grid gap-2">
              {openingHours.map((item) => (
                <div className="flex justify-between gap-4 text-base" key={item.label}>
                  <dt className="text-text-muted">{item.label}</dt>
                  <dd className="text-text-secondary">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </footer>
  );
}

import { Container } from "@/components/ui/Container";
import { openingHours, siteConfig, socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#111111] py-16 text-white">
      <Container>
        <div className="space-y-10">
          <div>
            <p className="text-xl font-semibold tracking-tight">
              It&apos;s All Greek
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
              Grieks restaurant in {siteConfig.location}.
            </p>
          </div>

          <div className="grid gap-8 text-sm">
            <section aria-labelledby="footer-address">
              <h2
                className="text-xs font-semibold uppercase tracking-[0.26em] text-white/40"
                id="footer-address"
              >
                Adres
              </h2>
              <p className="mt-4 leading-6 text-white/70">{siteConfig.address}</p>
            </section>

            <section aria-labelledby="footer-hours">
              <h2
                className="text-xs font-semibold uppercase tracking-[0.26em] text-white/40"
                id="footer-hours"
              >
                Openingstijden
              </h2>
              <ul className="mt-4 space-y-2 text-white/70">
                {openingHours.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="footer-contact">
              <h2
                className="text-xs font-semibold uppercase tracking-[0.26em] text-white/40"
                id="footer-contact"
              >
                Contact
              </h2>
              <div className="mt-4 space-y-2 text-white/70">
                <p>
                  <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                </p>
                <p>
                  <a href={siteConfig.emailHref}>{siteConfig.email}</a>
                </p>
              </div>
            </section>

            <section aria-labelledby="footer-social">
              <h2
                className="text-xs font-semibold uppercase tracking-[0.26em] text-white/40"
                id="footer-social"
              >
                Social
              </h2>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    aria-label={link.label}
                    className="flex size-11 items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-white/70"
                    href={link.href}
                    key={link.label}
                  >
                    {link.label.slice(0, 2)}
                  </a>
                ))}
              </div>
            </section>
          </div>

          <p className="border-t border-white/10 pt-8 text-xs text-white/40">
            © 2026 It&apos;s All Greek. Alle rechten voorbehouden.
          </p>
        </div>
      </Container>
    </footer>
  );
}

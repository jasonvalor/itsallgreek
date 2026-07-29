"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { SiteLogo } from "@/components/brand/site-logo";
import { Container } from "@/components/layout/container";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/lib/site";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const primaryItems = navigationItems.slice(0, -1);
  const orderItem = navigationItems[navigationItems.length - 1];
  const isOrderActive = isActivePath(pathname, orderItem.href);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 8);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    window.requestAnimationFrame(() => {
      menuButtonRef.current?.focus();
    });
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? "border-b border-border-subtle bg-background/94 shadow-[0_1rem_2rem_rgb(0_0_0_/_0.22)] backdrop-blur-md"
          : "border-b border-transparent bg-background/76 backdrop-blur-sm"
      }`}
    >
      <Container
        as="div"
        className="flex min-h-[var(--header-height)] items-center justify-between gap-5 py-3"
      >
        <SiteLogo priority />

        <nav aria-label="Primaire navigatie" className="hidden items-center gap-2 md:flex">
          {primaryItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-11 items-center rounded-[var(--radius-sm)] px-4 text-base font-semibold transition-colors ${
                  isActive ? "text-brand-blue" : "text-text-secondary hover:text-text-primary"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            aria-current={isOrderActive ? "page" : undefined}
            className={isOrderActive ? "ml-2 ring-2 ring-focus-ring/70" : "ml-2"}
            href={orderItem.href}
          >
            {orderItem.label}
          </Button>
        </nav>

        <button
          ref={menuButtonRef}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Open menu"
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-border-subtle text-text-primary transition-colors hover:bg-surface-secondary active:bg-surface md:hidden"
          onClick={() => setIsMenuOpen(true)}
          type="button"
        >
          <span aria-hidden="true" className="grid gap-1.5">
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </Container>

      <div id="mobile-navigation">
        <MobileMenu activePath={pathname} isOpen={isMenuOpen} items={navigationItems} onClose={closeMenu} />
      </div>
    </header>
  );
}

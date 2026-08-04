"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { SiteLogo } from "@/components/brand/site-logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
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
  const isKnownRoute = navigationItems.some((item) => pathname === item.href);

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

  if (!isKnownRoute) {
    return null;
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 md:border-b ${
        isScrolled
          ? "bg-transparent md:border-border-subtle md:bg-[var(--brand-header-background)] md:shadow-[0_1rem_2rem_rgb(0_0_0_/_0.22)] md:backdrop-blur-md"
          : "bg-transparent md:border-transparent md:bg-background/96 md:backdrop-blur-sm"
      }`}
    >
      <div className="site-header-inner flex items-center justify-between gap-5">
        <SiteLogo imageClassName="h-[4.8rem] md:h-16" priority />

        <nav aria-label="Primaire navigatie" className="hidden items-center gap-2 lg:flex">
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
          aria-controls="mobile-navigation-dialog"
          aria-expanded={isMenuOpen}
          aria-label="Open menu"
          className="-mr-2 inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center border border-transparent bg-transparent p-0 text-text-primary transition-colors hover:text-brand-blue active:text-brand-blue lg:hidden"
          onClick={() => setIsMenuOpen(true)}
          type="button"
        >
          <Icon className="h-8 w-8" name="menu" strokeWidth={2.2} />
        </button>
      </div>

      <div>
        <MobileMenu activePath={pathname} isOpen={isMenuOpen} items={navigationItems} onClose={closeMenu} />
      </div>
    </header>
  );
}

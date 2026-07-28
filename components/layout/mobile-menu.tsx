"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { SiteLogo } from "@/components/brand/site-logo";
import { Button } from "@/components/ui/button";

export type NavigationItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  activePath: string;
  isOpen: boolean;
  items: NavigationItem[];
  onClose: () => void;
};

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export function MobileMenu({
  activePath,
  isOpen,
  items,
  onClose,
}: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-background/98 px-[var(--space-page-x)] py-5 backdrop-blur-md md:hidden">
      <div className="mx-auto flex min-h-full w-full max-w-[var(--container-sm)] flex-col">
        <div className="flex min-h-[var(--header-height)] items-center justify-between gap-4">
          <SiteLogo />
          <button
            ref={closeButtonRef}
            aria-label="Close navigation menu"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] border border-border-subtle text-text-primary transition-colors hover:bg-surface-secondary active:bg-surface"
            onClick={onClose}
            type="button"
          >
            <span aria-hidden="true" className="relative h-5 w-5">
              <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rotate-45 rounded-full bg-current" />
              <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
            </span>
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex flex-1 flex-col justify-center py-10">
          <ul className="grid gap-3">
            {items.map((item) => {
              const isActive = isActivePath(activePath, item.href);

              return (
                <li key={item.href}>
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-14 items-center justify-between rounded-[var(--radius-md)] border px-5 text-3xl font-display transition-colors ${
                      isActive
                        ? "border-brand-blue bg-brand-blue/10 text-brand-blue"
                        : "border-border-subtle bg-surface text-text-primary hover:border-brand-blue hover:bg-surface-secondary"
                    }`}
                    href={item.href}
                    onClick={onClose}
                  >
                    {item.label}
                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button className="mb-5 w-full" href="/order" onClick={onClose}>
          Bestellen
        </Button>
      </div>
    </div>
  );
}

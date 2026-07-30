"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { SiteLogo } from "@/components/brand/site-logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import type { NavigationItem } from "@/types/site";

type MobileMenuProps = {
  activePath: string;
  isOpen: boolean;
  items: readonly NavigationItem[];
  onClose: () => void;
};

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export function MobileMenu({ activePath, isOpen, items, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      const focusable = Array.from(focusableElements ?? []).filter(
        (element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true",
      );

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
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
    <div
      ref={dialogRef}
      aria-label="Mobiel menu"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[var(--brand-mobile-menu-background)] px-[var(--space-page-x)] py-5 lg:hidden"
      id="mobile-navigation-dialog"
      role="dialog"
    >
      <div className="mx-auto flex min-h-full w-full max-w-[var(--container-sm)] flex-col">
        <div className="flex min-h-[var(--header-height)] items-center justify-between gap-4">
          <SiteLogo priority />
          <button
            ref={closeButtonRef}
            aria-label="Sluit menu"
            className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-border-subtle text-text-primary transition-colors hover:bg-surface-secondary active:bg-surface"
            onClick={onClose}
            type="button"
          >
            <Icon className="h-6 w-6" name="close" />
          </button>
        </div>

        <nav aria-label="Mobiele navigatie" className="flex flex-1 flex-col justify-center py-10">
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
                    <span>{item.label}</span>
                    {isActive ? <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" /> : null}
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

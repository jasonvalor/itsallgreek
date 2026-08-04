"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { SiteLogo } from "@/components/brand/site-logo";
import { Icon } from "@/components/ui/icon";
import type { IconName, NavigationItem } from "@/types/site";

type MobileMenuProps = {
  activePath: string;
  isOpen: boolean;
  items: readonly NavigationItem[];
  onClose: () => void;
};

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

const navigationIcons: Record<NavigationItem["href"], IconName> = {
  "/": "home",
  "/menu": "plate",
  "/about": "temple",
  "/contact": "phone",
  "/order": "bag",
};

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
      className="fixed inset-0 z-50 bg-[var(--brand-mobile-menu-background)] px-[var(--mobile-page-x)] pb-8 pt-[calc(2.8rem+env(safe-area-inset-top))] lg:hidden"
      id="mobile-navigation-dialog"
      role="dialog"
    >
      <div className="mx-auto flex min-h-full w-full max-w-[29.25rem] flex-col">
        <div className="flex min-h-[8.7rem] items-start justify-between gap-4">
          <SiteLogo imageClassName="h-[7.25rem] md:h-[7.25rem]" priority />
          <button
            ref={closeButtonRef}
            aria-label="Sluit menu"
            className="mt-4 -mr-2 inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center border-0 bg-transparent p-0 text-brand-blue transition-colors hover:text-brand-blue-hover focus-visible:outline-none active:text-brand-blue-active"
            onClick={onClose}
            type="button"
          >
            <Icon className="h-8 w-8" name="close" strokeWidth={2.2} />
          </button>
        </div>

        <nav aria-label="Mobiele navigatie" className="pt-5">
          <ul className="grid gap-3">
            {items.map((item) => {
              const isActive = isActivePath(activePath, item.href);

              return (
                <li key={item.href}>
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-[3.7rem] items-center gap-7 rounded-[var(--radius-sm)] px-1 font-display text-[clamp(2rem,9vw,2.55rem)] leading-none transition-colors ${
                      isActive ? "text-brand-blue" : "text-text-primary hover:text-brand-blue"
                    }`}
                    href={item.href}
                    onClick={onClose}
                  >
                    <Icon
                      className="h-10 w-10 shrink-0 text-brand-blue"
                      name={navigationIcons[item.href]}
                      strokeWidth={2.1}
                    />
                    <span className={isActive ? "text-brand-blue" : "text-text-primary"}>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

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
      className="fixed inset-0 z-50 bg-[var(--brand-mobile-menu-background)] px-[var(--mobile-page-x)] py-[calc(1rem+env(safe-area-inset-top))] lg:hidden"
      id="mobile-navigation-dialog"
      role="dialog"
    >
      <div className="mx-auto flex min-h-full w-full max-w-[28rem] flex-col">
        <div className="flex min-h-[4rem] items-center justify-between gap-4">
          <SiteLogo priority />
          <button
            ref={closeButtonRef}
            aria-label="Sluit menu"
            className="-mr-2 inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] text-brand-blue transition-colors hover:text-brand-blue-hover active:text-brand-blue-active"
            onClick={onClose}
            type="button"
          >
            <Icon className="h-6 w-6" name="close" />
          </button>
        </div>

        <nav aria-label="Mobiele navigatie" className="pt-12">
          <ul className="grid gap-2">
            {items.map((item) => {
              const isActive = isActivePath(activePath, item.href);

              return (
                <li key={item.href}>
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-11 items-center gap-4 rounded-[var(--radius-sm)] px-1 text-[1rem] font-semibold transition-colors ${
                      isActive ? "text-brand-blue" : "text-text-primary hover:text-brand-blue"
                    }`}
                    href={item.href}
                    onClick={onClose}
                  >
                    <Icon
                      className={`h-[1.15rem] w-[1.15rem] shrink-0 ${
                        isActive ? "text-brand-blue" : "text-text-primary"
                      }`}
                      name={navigationIcons[item.href]}
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

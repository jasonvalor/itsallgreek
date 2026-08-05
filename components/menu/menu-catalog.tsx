"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MenuItemRow } from "@/components/menu/menu-item-row";
import { PopularMenuCard } from "@/components/menu/popular-menu-card";
import { POPULAR_MENU_FILTER_ID, menuFilterOptions, type PopularMenuItem } from "@/data/menu";
import type { MenuCategory } from "@/types/site";

type MenuCatalogProps = {
  categories: MenuCategory[];
  popularItems: PopularMenuItem[];
};

export function MenuCatalog({ categories, popularItems }: MenuCatalogProps) {
  const [activeFilterId, setActiveFilterId] = useState(POPULAR_MENU_FILTER_ID);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeCategory = useMemo(
    () => categories.find((category) => category.id === activeFilterId) ?? null,
    [activeFilterId, categories],
  );
  const activeTitle =
    activeFilterId === POPULAR_MENU_FILTER_ID ? "Populair" : activeCategory?.buttonLabel ?? activeCategory?.label ?? "";

  useEffect(() => {
    const activeButton = buttonRefs.current[activeFilterId];

    if (!activeButton) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    activeButton.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [activeFilterId]);

  return (
    <section aria-labelledby="active-menu-heading" className="mt-6">
      <div className="-mx-[var(--mobile-page-x)] overflow-hidden">
        <div
          aria-label="Menu categorieen"
          className="flex gap-2 overflow-x-auto overscroll-x-contain px-[var(--mobile-page-x)] pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          data-testid="menu-category-scroller"
          role="group"
        >
          {menuFilterOptions.map((filter) => {
            const isActive = filter.id === activeFilterId;

            return (
              <button
                aria-pressed={isActive}
                aria-controls="active-menu-panel"
                className={`inline-flex min-h-11 shrink-0 items-center rounded-[var(--radius-full)] border px-4 pt-1.5 pb-1 font-display text-[1.05rem] uppercase leading-none transition-colors ${
                  isActive
                    ? "border-brand-blue bg-brand-blue text-text-primary shadow-[0_0.75rem_1.5rem_rgb(13_115_200_/_0.22)]"
                    : "border-border-subtle bg-surface text-text-secondary hover:border-brand-blue/70 hover:text-text-primary"
                }`}
                key={filter.id}
                onClick={() => setActiveFilterId(filter.id)}
                ref={(button) => {
                  buttonRefs.current[filter.id] = button;
                }}
                type="button"
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      <h2
        className="mt-5 text-[clamp(1.9rem,8vw,2.35rem)] leading-none text-text-primary"
        data-testid="active-category-title"
        id="active-menu-heading"
      >
        {activeTitle}
      </h2>

      {activeFilterId === POPULAR_MENU_FILTER_ID ? (
        <div className="mt-4 grid gap-3.5" data-testid="popular-menu-list" id="active-menu-panel">
          {popularItems.map((entry, index) => (
            <PopularMenuCard entry={entry} key={entry.id} priority={index < 2} />
          ))}
        </div>
      ) : (
        <ul className="mt-3 divide-y divide-border-subtle" data-testid="category-menu-list" id="active-menu-panel">
          {activeCategory?.items.map((item) => <MenuItemRow item={item} key={item.id} />)}
        </ul>
      )}
    </section>
  );
}

import Image from "next/image";
import type { PopularMenuItem } from "@/data/menu";

type PopularMenuCardProps = {
  entry: PopularMenuItem;
  priority?: boolean;
};

export function PopularMenuCard({ entry, priority = false }: PopularMenuCardProps) {
  const { image, item } = entry;

  return (
    <article
      className="mobile-surface grid grid-cols-[clamp(5.7rem,28vw,7rem)_minmax(0,1fr)] items-center gap-3 overflow-hidden p-2.5"
      data-testid="popular-menu-card"
    >
      <div className="relative aspect-square overflow-hidden rounded-[var(--radius-md)] border border-border-subtle bg-surface-secondary">
        <Image
          alt={image.alt}
          className="h-full w-full object-cover"
          data-testid="popular-menu-image"
          height={image.height}
          priority={priority}
          sizes="(max-width: 767px) 112px, 120px"
          src={image.src}
          width={image.width}
        />
      </div>
      <div className="min-w-0">
        <h3 className="text-[clamp(1.45rem,6.2vw,1.8rem)] leading-none text-text-primary">{item.name}</h3>
        {item.description ? (
          <p className="mt-1.5 text-[clamp(0.82rem,3.55vw,0.95rem)] font-semibold leading-[1.38] text-text-secondary">
            {item.description}
          </p>
        ) : null}
        <p className="mt-2.5 whitespace-nowrap text-[clamp(1.02rem,4.3vw,1.18rem)] font-bold leading-none text-brand-blue [font-variant-numeric:tabular-nums]">
          {item.price}
        </p>
      </div>
    </article>
  );
}

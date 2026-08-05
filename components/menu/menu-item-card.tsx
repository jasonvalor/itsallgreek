import Image from "next/image";
import type { ImageAsset, MenuItem } from "@/types/site";

type MenuItemCardProps = {
  image: ImageAsset;
  item: MenuItem;
  priority?: boolean;
};

export function MenuItemCard({ image, item, priority = false }: MenuItemCardProps) {
  return (
    <article className="surface-card grid min-w-0 gap-4 overflow-hidden p-3 sm:grid-cols-[7.5rem_1fr] sm:items-center sm:p-4">
      <div className="relative aspect-square overflow-hidden rounded-[var(--radius-sm)] bg-surface-secondary">
        <Image
          alt={image.alt}
          className="object-cover"
          fill
          priority={priority}
          sizes="(min-width: 640px) 120px, 100vw"
          src={image.src}
        />
      </div>
      <div className="grid min-w-0 gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
        <div className="min-w-0">
          <h3 className="text-3xl text-text-primary">{item.name}</h3>
          {item.description ? (
            <p className="mt-2 text-base leading-7 text-text-secondary">{item.description}</p>
          ) : null}
        </div>
        <p className="text-lg font-semibold text-brand-blue sm:pt-1">{item.price}</p>
      </div>
    </article>
  );
}

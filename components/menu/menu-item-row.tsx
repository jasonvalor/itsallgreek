import type { MenuItem } from "@/types/site";

type MenuItemRowProps = {
  item: MenuItem;
};

export function MenuItemRow({ item }: MenuItemRowProps) {
  return (
    <li className="py-3" data-testid={`menu-item-${item.id}`}>
      <article className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-0.5">
        <h3 className="min-w-0 text-[clamp(1.35rem,5.5vw,1.65rem)] leading-[0.98] text-text-primary">
          {item.name}
        </h3>
        <p className="justify-self-end whitespace-nowrap pt-0.5 text-[0.98rem] font-bold leading-none text-brand-blue [font-variant-numeric:tabular-nums]">
          {item.price}
        </p>
        {item.description ? (
          <p className="col-span-2 text-[0.84rem] leading-[1.45] text-text-secondary" data-testid="item-description">
            {item.description}
          </p>
        ) : null}
      </article>
    </li>
  );
}

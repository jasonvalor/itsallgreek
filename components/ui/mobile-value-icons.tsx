import { Icon } from "@/components/ui/icon";
import type { IconName } from "@/types/site";

export type MobileValueIcon = {
  icon: IconName;
  label: string;
};

type MobileValueIconsProps = {
  items: readonly MobileValueIcon[];
};

export function MobileValueIcons({ items }: MobileValueIconsProps) {
  return (
    <ul className="grid grid-cols-3 divide-x divide-border-subtle/70">
      {items.map((item) => (
        <li className="min-w-0 px-2 text-center" key={item.label}>
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center text-brand-blue">
            <Icon className="h-11 w-11" name={item.icon} strokeWidth={2} />
          </div>
          <p className="break-normal font-display text-[clamp(1rem,4.2vw,1.25rem)] uppercase leading-[1.18] text-text-primary [overflow-wrap:normal]">
            {item.label}
          </p>
        </li>
      ))}
    </ul>
  );
}

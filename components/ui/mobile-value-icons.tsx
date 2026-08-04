import { Icon } from "@/components/ui/icon";
import type { IconName } from "@/types/site";

export type MobileValueIcon = {
  icon: IconName;
  label: string;
};

type MobileValueIconsProps = {
  compact?: boolean;
  items: readonly MobileValueIcon[];
};

export function MobileValueIcons({ compact = false, items }: MobileValueIconsProps) {
  const iconWrapClass = compact
    ? "mx-auto mb-2 flex h-11 w-11 items-center justify-center text-brand-blue"
    : "mx-auto mb-5 flex h-12 w-12 items-center justify-center text-brand-blue";
  const iconClass = compact ? "h-10 w-10" : "h-11 w-11";
  const labelClass = compact
    ? "break-normal font-display text-[clamp(0.92rem,3.8vw,1.1rem)] uppercase leading-[1.08] text-text-primary [overflow-wrap:normal]"
    : "break-normal font-display text-[clamp(1rem,4.2vw,1.25rem)] uppercase leading-[1.18] text-text-primary [overflow-wrap:normal]";

  return (
    <ul className="grid grid-cols-3 divide-x divide-border-subtle/70">
      {items.map((item) => (
        <li className="min-w-0 px-2 text-center" key={item.label}>
          <div className={iconWrapClass}>
            <Icon className={iconClass} name={item.icon} strokeWidth={2} />
          </div>
          <p className={labelClass}>{item.label}</p>
        </li>
      ))}
    </ul>
  );
}

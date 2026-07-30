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
    <ul className="grid grid-cols-3 gap-3">
      {items.map((item) => (
        <li className="min-w-0 text-center" key={item.label}>
          <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center text-brand-blue">
            <Icon className="h-7 w-7" name={item.icon} />
          </div>
          <p className="break-normal text-[clamp(0.56rem,2.5vw,0.66rem)] font-bold uppercase leading-[1.15] text-text-primary [overflow-wrap:normal]">
            {item.label}
          </p>
        </li>
      ))}
    </ul>
  );
}

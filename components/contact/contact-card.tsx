import { Icon } from "@/components/ui/icon";
import type { ContactItem } from "@/types/site";

type ContactCardProps = {
  item: ContactItem;
};

export function ContactCard({ item }: ContactCardProps) {
  const value = item.href ? (
    <a className="hover:text-text-primary" href={item.href}>
      {item.value}
    </a>
  ) : (
    item.value
  );

  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-brand-blue/60 text-brand-blue">
        <Icon className="h-5 w-5" name={item.icon} />
      </div>
      <div className="min-w-0">
        <dt className="text-base font-semibold text-text-primary">{item.label}</dt>
        <dd className="mt-1 text-base leading-7 text-text-secondary">{value}</dd>
      </div>
    </div>
  );
}

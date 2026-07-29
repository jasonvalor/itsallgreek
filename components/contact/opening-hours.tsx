import type { OpeningHour } from "@/types/site";

type OpeningHoursProps = {
  hours: OpeningHour[];
};

export function OpeningHours({ hours }: OpeningHoursProps) {
  return (
    <dl className="grid gap-3">
      {hours.map((item) => (
        <div
          className="flex min-w-0 justify-between gap-4 border-b border-border-subtle pb-3 text-base last:border-b-0 last:pb-0"
          key={item.label}
        >
          <dt className="text-text-muted">{item.label}</dt>
          <dd className="text-right font-semibold text-text-primary">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

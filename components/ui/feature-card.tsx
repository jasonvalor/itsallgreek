import { Icon } from "@/components/ui/icon";
import type { Feature } from "@/types/site";

type FeatureCardProps = {
  feature: Feature;
  compact?: boolean;
};

export function FeatureCard({ compact = false, feature }: FeatureCardProps) {
  return (
    <article className="surface-card flex h-full flex-col p-5 sm:p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] border border-brand-blue/70 text-brand-blue">
        <Icon className="h-6 w-6" name={feature.icon} />
      </div>
      <h3 className={compact ? "text-2xl text-text-primary" : "text-3xl text-text-primary"}>
        {feature.title}
      </h3>
      <p className="mt-3 text-base leading-7 text-text-secondary">{feature.description}</p>
    </article>
  );
}

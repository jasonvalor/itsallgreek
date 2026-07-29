import { FeatureCard } from "@/components/ui/FeatureCard";
import { Section } from "@/components/ui/Section";
import { features } from "@/lib/site";

export function Features() {
  return (
    <Section className="bg-[#020a12] pt-0 text-white">
      <div className="overflow-hidden rounded-xl border border-white/15 bg-[#06111b]/80">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  );
}

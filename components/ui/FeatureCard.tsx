import type { Feature } from "@/types/site";
import { LeafIcon, PinIcon, SunIcon, UsersIcon } from "@/components/ui/Icons";

const icons: Record<Feature["icon"], React.ReactNode> = {
  leaf: <LeafIcon />,
  users: <UsersIcon />,
  fresh: <SunIcon />,
  pin: <PinIcon className="size-8" />,
};

export function FeatureCard({
  description,
  icon,
  title,
}: Readonly<Feature>) {
  return (
    <article className="border-b border-white/15 px-4 py-7 text-center last:border-b-0">
      <div className="mx-auto flex size-12 items-center justify-center text-[#0D73C8]">
        {icons[icon]}
      </div>
      <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-white/75">{description}</p>
    </article>
  );
}

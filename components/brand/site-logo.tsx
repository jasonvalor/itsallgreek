import Link from "next/link";

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className = "" }: SiteLogoProps) {
  return (
    <Link
      aria-label="It's All Greek home"
      className={`inline-flex min-h-11 items-center rounded-[var(--radius-sm)] ${className}`}
      href="/"
    >
      <span className="grid leading-none">
        <span className="text-[0.72rem] font-semibold tracking-[0.16em] text-text-primary">
          IT&apos;S ALL
        </span>
        <span className="font-display text-3xl text-brand-blue sm:text-4xl">
          GREEK
        </span>
        <span className="text-[0.58rem] font-semibold tracking-[0.24em] text-text-primary">
          FOOD &amp; DRINKS
        </span>
        <span className="mt-1 text-[0.58rem] font-medium text-text-muted">
          Temporary logo placeholder
        </span>
      </span>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";

const logoSize = {
  width: 689,
  height: 445,
};

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ className = "", priority = false }: SiteLogoProps) {
  return (
    <Link
      aria-label="It's All Greek home"
      className={`inline-flex min-h-11 shrink-0 items-center rounded-[var(--radius-sm)] ${className}`}
      href="/"
    >
      <Image
        alt="It's All Greek Food & Drinks"
        className="h-12 w-auto sm:h-16"
        height={logoSize.height}
        priority={priority}
        sizes="(min-width: 768px) 150px, 120px"
        src="/images/logo.png"
        width={logoSize.width}
      />
    </Link>
  );
}

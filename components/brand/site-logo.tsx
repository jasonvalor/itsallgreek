import Image from "next/image";
import Link from "next/link";

const logoSize = {
  width: 689,
  height: 445,
};

type SiteLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function SiteLogo({ className = "", imageClassName = "", priority = false }: SiteLogoProps) {
  return (
    <Link
      aria-label="It's All Greek homepagina"
      className={`inline-flex min-h-11 shrink-0 items-center rounded-[var(--radius-sm)] ${className}`}
      href="/"
    >
      <Image
        alt="It's All Greek Food & Drinks"
        className={`h-12 w-auto md:h-16 ${imageClassName}`}
        height={logoSize.height}
        priority={priority}
        sizes="(min-width: 768px) 150px, 78px"
        src="/images/logo-dark-transparent.png"
        width={logoSize.width}
      />
    </Link>
  );
}

import type { ReactNode, SVGProps } from "react";
import type { IconName } from "@/types/site";

type IconProps = {
  name: IconName;
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, "aria-hidden" | "role" | "viewBox">;

const paths: Record<IconName, ReactNode> = {
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  bag: (
    <>
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
      <path d="M9.5 13.5 12 16l3.5-4" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  heart: (
    <path d="M20 8.5c0 5-8 9.5-8 9.5S4 13.5 4 8.5A4.3 4.3 0 0 1 8.3 4c1.5 0 2.8.8 3.7 2 .9-1.2 2.2-2 3.7-2A4.3 4.3 0 0 1 20 8.5Z" />
  ),
  home: (
    <>
      <path d="m4 11 8-7 8 7" />
      <path d="M6.5 10.5V20h11v-9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14Z" />
      <path d="M5 19 15 9" />
    </>
  ),
  mail: (
    <>
      <rect height="12" rx="1.5" width="16" x="4" y="6" />
      <path d="m5 8 7 5 7-5" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  phone: (
    <path d="M7 5h3l1.4 3.3-1.8 1.2a10.5 10.5 0 0 0 4.9 4.9l1.2-1.8L19 14v3a2 2 0 0 1-2.2 2A13.2 13.2 0 0 1 5 7.2 2 2 0 0 1 7 5Z" />
  ),
  plate: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  route: (
    <>
      <path d="M6 19c3-6 9-1 12-7" />
      <path d="M6 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
      <path d="M18 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v18" />
      <path d="m5 12 7-9 7 9-7 9-7-9Z" />
    </>
  ),
  temple: (
    <>
      <path d="M4 10h16" />
      <path d="M6 10v8" />
      <path d="M10 10v8" />
      <path d="M14 10v8" />
      <path d="M18 10v8" />
      <path d="M3 20h18" />
      <path d="m4 8 8-4 8 4" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h11v9H3V7Z" />
      <path d="M14 10h3l4 4v2h-7v-6Z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
};

export function Icon({ className = "", name, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

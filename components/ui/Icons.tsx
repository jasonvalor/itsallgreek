type IconProps = Readonly<{
  className?: string;
}>;

const base = "fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round";

export function MenuIcon({ className = "size-7" }: IconProps) {
  return (
    <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function BagIcon({ className = "size-7" }: IconProps) {
  return (
    <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 24 24">
      <path d="M6 8h12l1 13H5L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

export function ScooterIcon({ className = "size-7" }: IconProps) {
  return (
    <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 24 24">
      <path d="M4 16h3l3-7h4l2 4h2a3 3 0 0 1 3 3" />
      <path d="M8 16h7" />
      <path d="M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "size-7" }: IconProps) {
  return (
    <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.78 19.78 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.61a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.26-1.26a2 2 0 0 1 2.11-.45c.84.28 1.71.48 2.61.6A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function HomeIcon({ className = "size-6" }: IconProps) {
  return (
    <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 24 24">
      <path d="M3 11 12 3l9 8" />
      <path d="M5 10v11h14V10" />
      <path d="M9 21v-7h6v7" />
    </svg>
  );
}

export function UtensilsIcon({ className = "size-6" }: IconProps) {
  return (
    <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 24 24">
      <path d="M7 3v18M4 3v6a3 3 0 0 0 6 0V3" />
      <path d="M17 3v18M14 3h3a3 3 0 0 1 3 3v5h-6V3Z" />
    </svg>
  );
}

export function InfoIcon({ className = "size-6" }: IconProps) {
  return (
    <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 24 24">
      <path d="M12 17v-6" />
      <path d="M12 7h.01" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

export function PinIcon({ className = "size-6" }: IconProps) {
  return (
    <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 24 24">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function LeafIcon({ className = "size-8" }: IconProps) {
  return (
    <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 24 24">
      <path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16Z" />
      <path d="M4 20 15 9" />
    </svg>
  );
}

export function UsersIcon({ className = "size-8" }: IconProps) {
  return (
    <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-8 0v2" />
      <circle cx="12" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M2 21v-2a4 4 0 0 1 3-3.87" />
    </svg>
  );
}

export function SunIcon({ className = "size-8" }: IconProps) {
  return (
    <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function ArrowIcon({ className = "size-6" }: IconProps) {
  return (
    <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 24 24">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function ClockIcon({ className = "size-7" }: IconProps) {
  return (
    <svg aria-hidden="true" className={`${base} ${className}`} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

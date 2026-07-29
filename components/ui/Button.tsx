type ButtonVariant = "primary" | "secondaryDark" | "secondaryLight" | "light";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#0D73C8] text-white",
  secondaryDark: "border border-[#111]/15 bg-transparent text-[#111]",
  secondaryLight:
    "border border-white/25 bg-white/5 text-white backdrop-blur",
  light: "bg-white text-[#111111]",
};

export function Button({
  children,
  className = "",
  href,
  variant = "primary",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: ButtonVariant;
}>) {
  const styles = `inline-flex min-h-16 w-full items-center justify-center rounded-lg px-6 text-sm font-bold uppercase tracking-wide ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a className={styles} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} type="button">
      {children}
    </button>
  );
}

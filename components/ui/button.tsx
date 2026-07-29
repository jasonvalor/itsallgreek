import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "quiet";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
    disabled?: never;
  };

type NativeButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-3 rounded-[var(--radius-sm)] px-5 py-3 text-base font-semibold leading-none transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-brand-blue text-white shadow-[var(--shadow-blue)] hover:bg-brand-blue-hover active:bg-brand-blue-active",
  secondary:
    "border border-brand-blue text-white hover:bg-brand-blue/10 active:bg-brand-blue/20",
  quiet:
    "border border-border-subtle bg-surface text-text-primary hover:border-brand-blue hover:bg-surface-secondary active:bg-surface-secondary",
};

export function Button({
  children,
  className = "",
  showArrow = true,
  variant = "primary",
  ...props
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <span aria-hidden="true">→</span> : null}
    </>
  );
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if ("href" in props) {
    const { href, ...linkProps } = props as LinkButtonProps;

    return (
      <Link className={classes} href={href} {...linkProps}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as NativeButtonProps)}>
      {content}
    </button>
  );
}

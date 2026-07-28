import type { ElementType } from "react";

type SectionHeadingProps = {
  align?: "left" | "center";
  className?: string;
  description?: string;
  eyebrow?: string;
  heading: string;
  level?: 1 | 2 | 3;
};

export function SectionHeading({
  align = "left",
  className = "",
  description,
  eyebrow,
  heading,
  level = 2,
}: SectionHeadingProps) {
  const HeadingTag = `h${level}` as ElementType;
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="text-base font-semibold text-brand-blue">{eyebrow}</p>
      ) : null}
      <HeadingTag className="text-5xl text-text-primary sm:text-6xl">
        {heading}
      </HeadingTag>
      {description ? (
        <p className="max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

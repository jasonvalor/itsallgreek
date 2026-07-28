import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerElement = "div" | "main" | "section" | "header" | "footer";

type ContainerProps<TElement extends ContainerElement = "div"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

const sizes = {
  sm: "max-w-[var(--container-sm)]",
  md: "max-w-[var(--container-md)]",
  lg: "max-w-[var(--container-lg)]",
};

export function Container<TElement extends ContainerElement = "div">({
  as,
  children,
  className = "",
  size = "lg",
  ...props
}: ContainerProps<TElement>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={`mx-auto w-full px-[var(--space-page-x)] ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

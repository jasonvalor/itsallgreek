import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerElement = "div" | "main" | "section" | "header" | "footer";

type ContainerProps<TElement extends ContainerElement = "div"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

const sizes = {
  sm: "site-container-sm",
  md: "site-container-md",
  lg: "site-container-lg",
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
    <Component className={`min-w-0 ${sizes[size]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
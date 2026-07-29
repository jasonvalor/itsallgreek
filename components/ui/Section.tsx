import { Container } from "@/components/ui/Container";

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}>) {
  return (
    <section className={`py-20 ${className}`} id={id}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { MenuIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 py-6 text-white">
      <Container className="flex items-center justify-between">
        <a
          aria-label="It's All Greek home"
          className="inline-flex"
          href="#top"
        >
          <Logo compact />
        </a>
        <button
          aria-label="Open menu"
          className="flex size-11 items-center justify-center text-white"
          type="button"
        >
          <MenuIcon />
        </button>
      </Container>
    </header>
  );
}

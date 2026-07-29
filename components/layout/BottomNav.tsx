import {
  BagIcon,
  HomeIcon,
  InfoIcon,
  PhoneIcon,
  UtensilsIcon,
} from "@/components/ui/Icons";

const items = [
  { label: "Home", href: "#top", icon: <HomeIcon />, active: false },
  { label: "Menu", href: "#menu", icon: <UtensilsIcon />, active: false },
  { label: "Bestel", href: "#bestel", icon: <BagIcon />, active: true },
  { label: "Over ons", href: "#sfeer", icon: <InfoIcon />, active: false },
  { label: "Contact", href: "#contact", icon: <PhoneIcon />, active: false },
];

export function BottomNav() {
  return (
    <nav
      aria-label="Primaire navigatie"
      className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-6xl rounded-t-3xl border border-white/10 bg-[#07131f]/95 px-4 pb-4 pt-3 text-white shadow-[0_-18px_60px_rgba(0,0,0,0.45)] backdrop-blur"
    >
      <ul className="grid grid-cols-5 items-end">
        {items.map((item) => (
          <li className="flex justify-center" key={item.label}>
            <a
              className={`flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-wide ${
                item.active ? "-mt-9 size-20 rounded-full bg-[#0D73C8]" : "text-white/85"
              }`}
              href={item.href}
            >
              {item.icon}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

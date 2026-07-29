import type { Feature, MenuItem, SocialLink } from "@/types/site";

export const siteConfig = {
  name: "It's All Greek",
  location: "Nieuwerkerk aan den IJssel",
  address: "Winkelcentrum De Reigerhof, Nieuwerkerk a/d IJssel",
  phone: "0180 - 315 127",
  phoneHref: "tel:+31180315127",
  whatsapp: "06 - 23 18 45 67",
  whatsappHref: "https://wa.me/31623184567",
  email: "info@itsallgreek.nl",
  emailHref: "mailto:info@itsallgreek.nl",
  takeawayHref: "#",
  menuHref: "#",
  thuisbezorgdHref: "#",
};

export const openingHours = [
  "Ma - Do 12:30 - 22:00",
  "Vr - Za 12:30 - 22:30",
  "Zondag 13:00 - 22:00",
];

export const features: Feature[] = [
  {
    icon: "leaf",
    title: "Authentieke keuken",
    description: "Traditionele recepten vol van smaak.",
  },
  {
    icon: "users",
    title: "Familiesfeer",
    description: "Warm, gastvrij en altijd welkom.",
  },
  {
    icon: "fresh",
    title: "Vers bereid",
    description: "Dagelijks vers en met de beste ingrediënten.",
  },
  {
    icon: "pin",
    title: "Centraal gelegen",
    description: "In winkelcentrum De Reigerhof.",
  },
];

export const menuItems: MenuItem[] = [
  {
    title: "Gyros Pita",
    price: "€ 8,00",
    image: "/images/menu-gyros.png",
    alt: "Gyros pita met tzatziki",
  },
  {
    title: "Souvlaki Kip",
    price: "€ 15,00",
    image: "/images/menu-souvlaki.png",
    alt: "Kip souvlaki spiesjes",
  },
  {
    title: "Mixed Grill",
    price: "€ 20,00",
    image: "/images/menu-mixed-grill.png",
    alt: "Mixed grill schotel",
  },
  {
    title: "Griekse Salade",
    price: "€ 9,00",
    image: "/images/menu-salad.png",
    alt: "Griekse salade met feta",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "Facebook",
    href: "#",
  },
];

import type { ContactItem, Feature, MenuCategory, OpeningHour } from "@/types/site";

export const siteConfig = {
  name: "It's All Greek",
  tagline: "Food & Drinks",
  location: "Nieuwerkerk aan den IJssel",
  address: "Winkelcentrum De Reigerhof, Nieuwerkerk a/d IJssel",
  phone: "0180 - 315 127",
  phoneHref: "tel:+31180315127",
  email: "info@itsallgreek.nl",
  emailHref: "mailto:info@itsallgreek.nl",
  whatsapp: "06 - 23 18 45 67",
  whatsappHref: "https://wa.me/31623184567",
  onlineOrderHref: null as string | null,
  sourceNote:
    "Deze gegevens komen uit de bevestigde lokale bron en moeten voor livegang nog een laatste bedrijfscheck krijgen.",
};

export const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Over ons" },
  { href: "/contact", label: "Contact" },
  { href: "/order", label: "Bestellen" },
] as const;

export const openingHours: OpeningHour[] = [
  { label: "Ma - Do", value: "12:30 - 22:00" },
  { label: "Vr - Za", value: "12:30 - 22:30" },
  { label: "Zondag", value: "13:00 - 22:00" },
];

export const features: Feature[] = [
  {
    title: "Verse ingredienten",
    description: "Dagelijks vers bereid met aandacht voor pure smaken.",
  },
  {
    title: "Authentieke recepten",
    description: "Griekse klassiekers met een warme, gastvrije basis.",
  },
  {
    title: "Met liefde gemaakt",
    description: "Comfortabel eten voor afhalen, bezorgen of een rustig moment samen.",
  },
];

export const contactItems: ContactItem[] = [
  {
    label: "Adres",
    value: siteConfig.address,
  },
  {
    label: "Telefoon",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    label: "E-mail",
    value: siteConfig.email,
    href: siteConfig.emailHref,
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "recovered-selection",
    label: "Selectie uit brondata",
    note:
      "De volledige officiele menukaart is nog niet geimporteerd. Deze gerechten en prijzen komen uit de herstelde lokale brondata.",
    items: [
      {
        name: "Gyros Pita",
        description: null,
        price: "€ 8,00",
        image: {
          src: "/images/menu-gyros.png",
          alt: "Gyros pita met tzatziki",
          width: 627,
          height: 627,
        },
      },
      {
        name: "Souvlaki Kip",
        description: null,
        price: "€ 15,00",
        image: {
          src: "/images/menu-souvlaki.png",
          alt: "Kip souvlaki spiesjes",
          width: 627,
          height: 627,
        },
      },
      {
        name: "Mixed Grill",
        description: null,
        price: "€ 20,00",
        image: {
          src: "/images/menu-mixed-grill.png",
          alt: "Mixed grill schotel",
          width: 627,
          height: 627,
        },
      },
      {
        name: "Griekse Salade",
        description: null,
        price: "€ 9,00",
        image: {
          src: "/images/menu-salad.png",
          alt: "Griekse salade met feta",
          width: 627,
          height: 627,
        },
      },
    ],
  },
];

export const menuItems = menuCategories.flatMap((category) => category.items);

import type {
  ContactItem,
  Feature,
  NavigationItem,
  OpeningHour,
  OrderBenefit,
} from "@/types/site";

export const siteConfig = {
  name: "It's All Greek",
  tagline: "Food & Drinks",
  location: "Nieuwerkerk aan den IJssel",
  address: "Winkelcentrum De Reigerhof, Nieuwerkerk a/d IJssel",
  phone: "0180 - 315 127",
  phoneHref: "tel:+31180315127",
  email: "info@itsallgreek.nl",
  emailHref: "mailto:info@itsallgreek.nl",
  onlineOrderHref: null as string | null,
};

export const mapSearchHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.name} ${siteConfig.address} ${siteConfig.location}`,
)}`;

export const navigationItems: readonly NavigationItem[] = [
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

export const homeCopy = {
  hero: {
    label: siteConfig.name,
    headlineStart: "Even weg.",
    headlineEmphasis: "Even Griekenland.",
    body:
      "Authentieke Griekse gerechten in het hart van Nieuwerkerk aan den IJssel. Vers bereid, met de gastvrijheid waar Griekenland om bekendstaat.",
    primaryCta: "Bestel afhalen",
    secondaryCta: "Bekijk menu",
  },
  experience: {
    eyebrow: "Onze sfeer",
    heading: "Griekse gastvrijheid.",
    body:
      "Bij It's All Greek draait alles om goed eten, aandacht en gezelligheid. Of je nu langskomt voor een snelle afhaalmaaltijd of uitgebreid blijft dineren, je bent altijd welkom.",
    cta: "Bekijk menu",
  },
  cta: {
    heading: "Zin in Grieks?",
    body: "Bestel eenvoudig online zodra de bestel-link bevestigd is, of neem telefonisch contact met ons op.",
    primaryCta: "Bestel afhalen",
    secondaryCta: "Bel restaurant",
  },
};

export const uspFeatures: Feature[] = [
  {
    title: "Binnen & terras",
    description: "Geniet van de warme Griekse sfeer binnen of neem plaats op ons zonnige terras.",
    icon: "home",
  },
  {
    title: "Afhalen",
    description: "Vers bereid en eenvoudig telefonisch of via Thuisbezorgd te bestellen.",
    icon: "bag",
  },
  {
    title: "Bezorgen",
    description: "Jouw favoriete Griekse gerechten, gemakkelijk thuisbezorgd.",
    icon: "truck",
  },
];

export const brandValues: Feature[] = [
  {
    title: "Authentieke recepten",
    description: "Griekse klassiekers met een warme, gastvrije basis.",
    icon: "temple",
  },
  {
    title: "Verse ingredienten",
    description: "Dagelijks vers bereid met aandacht voor pure smaken.",
    icon: "leaf",
  },
  {
    title: "Griekse gastvrijheid",
    description: "Een ontspannen plek voor afhalen, bezorgen of samen eten.",
    icon: "heart",
  },
];

export const orderBenefits: OrderBenefit[] = [
  { label: "Snel en gemakkelijk", icon: "check" },
  { label: "Vers bereid", icon: "check" },
  { label: "Afhalen of bezorgen", icon: "check" },
];

export const contactItems: ContactItem[] = [
  {
    label: "Adres",
    value: siteConfig.address,
    icon: "mapPin",
  },
  {
    label: "Telefoon",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: "phone",
  },
  {
    label: "E-mail",
    value: siteConfig.email,
    href: siteConfig.emailHref,
    icon: "mail",
  },
];

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type IconName =
  | "arrowRight"
  | "bag"
  | "check"
  | "clock"
  | "close"
  | "heart"
  | "home"
  | "leaf"
  | "mail"
  | "mapPin"
  | "menu"
  | "phone"
  | "plate"
  | "route"
  | "spark"
  | "temple"
  | "truck";

export type NavigationItem = {
  href: "/" | "/menu" | "/about" | "/contact" | "/order";
  label: string;
};

export type MenuItem = {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  buttonLabel?: string;
  items: MenuItem[];
};

export type Feature = {
  title: string;
  description: string;
  icon: IconName;
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: IconName;
};

export type OpeningHour = {
  label: string;
  value: string;
};

export type OrderBenefit = {
  label: string;
  icon: IconName;
};

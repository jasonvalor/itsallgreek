export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MenuItem = {
  name: string;
  description: string | null;
  price: string;
  image: ImageAsset;
};

export type MenuCategory = {
  id: string;
  label: string;
  note: string;
  items: MenuItem[];
};

export type Feature = {
  title: string;
  description: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

export type OpeningHour = {
  label: string;
  value: string;
};

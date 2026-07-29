export type Feature = {
  title: string;
  description: string;
  icon: "leaf" | "users" | "fresh" | "pin";
};

export type SocialLink = {
  label: string;
  href: string;
};

export type MenuItem = {
  title: string;
  price: string;
  image: string;
  alt: string;
};

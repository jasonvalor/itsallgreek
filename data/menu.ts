import type { ImageAsset, MenuCategory, MenuItem } from "@/types/site";

type MenuCategoryInput = Omit<MenuCategory, "items">;
type MenuItemInput = Omit<MenuItem, "categoryId">;

export type PopularMenuItem = {
  id: string;
  category: MenuCategory;
  item: MenuItem;
  image: ImageAsset;
};

export const POPULAR_MENU_FILTER_ID = "popular";
export const EXPECTED_REGULAR_CATEGORY_COUNT = 14;
export const EXPECTED_MENU_ITEM_COUNT = 78;

function defineCategory(category: MenuCategoryInput, items: MenuItemInput[]): MenuCategory {
  return {
    ...category,
    items: items.map((item) => ({
      ...item,
      categoryId: category.id,
    })),
  };
}

export const menuCategories: MenuCategory[] = [
  defineCategory(
    {
      id: "koude-voorgerechten",
      label: "Koude voorgerechten",
    },
    [
      {
        id: "koude-voorgerechten-elies-piperies",
        name: "Elies-Piperies",
        description: "Kalamata olijven en groene pepers",
        price: "€ 7,50",
      },
      {
        id: "koude-voorgerechten-feta",
        name: "Feta",
        description: "Griekse schapenkaas met olijfolie en oregano",
        price: "€ 9,00",
      },
      {
        id: "koude-voorgerechten-tzatziki",
        name: "Tzatziki",
        description: "Griekse yoghurt met verse knoflook en komkommer",
        price: "€ 7,50",
      },
      {
        id: "koude-voorgerechten-tirokafteri",
        name: "Tirokafteri",
        description: "Pittige fetamousse",
        price: "€ 8,50",
      },
      {
        id: "koude-voorgerechten-melitzanosalata",
        name: "Melitzanosalata",
        description: "Aubergine mousse",
        price: "€ 8,50",
      },
      {
        id: "koude-voorgerechten-tarama",
        name: "Tarama",
        description: "Viskuit aangemaakt met aardappelen en citroen",
        price: "€ 8,50",
      },
      {
        id: "koude-voorgerechten-trio",
        name: "Trio",
        description: "Tzatziki, Tirokafteri, Melitzanosalade",
        price: "€ 8,50",
      },
    ],
  ),
  defineCategory(
    {
      id: "salades",
      label: "Salades",
    },
    [
      {
        id: "salades-choriatiki",
        name: "Choriatiki",
        description: "Tomaat, komkommer, uit, olijven, groene pepers, feta en olijfolie",
        price: "€ 11,50",
      },
      {
        id: "salades-laganosalata",
        name: "Laganosalata",
        description: "Traditionele Griekse koolsalade",
        price: "€ 6,50",
      },
      {
        id: "salades-kotosalata",
        name: "Kotosalata",
        description: "Rucola, tomaat, kappertjes, gegrilde kipfilet en een overheerlijke dressing",
        price: "€ 12,50",
      },
    ],
  ),
  defineCategory(
    {
      id: "warme-voorgerechten",
      label: "WARME voorgerechten",
      buttonLabel: "Warme voorgerechten",
    },
    [
      {
        id: "warme-voorgerechten-loukaniko",
        name: "Loukaniko",
        description: "Pikant gekruid worstje",
        price: "€ 9,95",
      },
      {
        id: "warme-voorgerechten-dolmadakia",
        name: "Dolmadakia",
        description: "Gevulde wijnbladeren met rijst en rundergehakt",
        price: "€ 10,50",
      },
      {
        id: "warme-voorgerechten-keftedakia",
        name: "Keftedakia",
        description: "Gehaktballetjes in tomatensaus",
        price: "€ 9,95",
      },
      {
        id: "warme-voorgerechten-spanakopita",
        name: "Spanakopita",
        description: "Filodeeg met spinazie en feta kaas",
        price: "€ 10,50",
      },
      {
        id: "warme-voorgerechten-gigandes",
        name: "Gigandes",
        description: "Grote witte bonen in tomatensaus",
        price: "€ 6,50",
      },
      {
        id: "warme-voorgerechten-tiropita",
        name: "Tiropita",
        description: "Filodeeg gevuld met feta kaas, overgoten met honing en sesamzaad",
        price: "€ 10,50",
      },
      {
        id: "warme-voorgerechten-feta-loukoumas",
        name: "Feta Loukoumas",
        description: "Gepaneerde feta met honing en sesamzaadjes",
        price: "€ 10,50",
      },
      {
        id: "warme-voorgerechten-kalamarakia",
        name: "Kalamarakia",
        description: "Gebakken inktvisringen met knoflooksaus",
        price: "€ 10,50",
      },
      {
        id: "warme-voorgerechten-pikilia-1-pers",
        name: "Pikilia 1 pers.",
        description: "Diverse warme en koude hapjes met warme pita brood",
        price: "€ 16,50",
      },
      {
        id: "warme-voorgerechten-pikilia-2-pers",
        name: "Pikilia 2 pers.",
        description: "Diverse warme en koude hapjes met warme pita brood",
        price: "€ 30,50",
      },
    ],
  ),
  defineCategory(
    {
      id: "pitas",
      label: "Pita's",
    },
    [
      {
        id: "pitas-gyros",
        name: "Gyros",
        description: "Gesneden varkensvlees van het spit met tomaat, ui en tzatziki",
        price: "€ 10,50",
      },
      {
        id: "pitas-kip-gyros",
        name: "Kip Gyros",
        description: "Kippendijen van het spit met tomaat, ui en chilimayonaise",
        price: "€ 10,50",
      },
      {
        id: "pitas-souvlaki",
        name: "Souvlaki",
        description: "Spies van varkenshaas met tomaat, ui en tzatziki",
        price: "€ 10,50",
      },
      {
        id: "pitas-kotopoulo",
        name: "Kotopoulo",
        description: "Kipfilet met tomaat, ui en tzatziki",
        price: "€ 10,50",
      },
      {
        id: "pitas-bifteki",
        name: "Bifteki",
        description: "Gekruid gehakt met tomaat, ui en tzatziki",
        price: "€ 10,50",
      },
      {
        id: "pitas-loukaniko",
        name: "Loukaniko",
        description: "Gekruid worstje met tomaat, ui en mosterd",
        price: "€ 10,50",
      },
      {
        id: "pitas-pita-vega",
        name: "Pita Vega",
        description: "Gebakken groente met Tzatziki en feta topping",
        price: "€ 10,50",
      },
      {
        id: "pitas-pita-feta",
        name: "Pita Feta",
        description: "Gepaneerde feta met rucola, honing en sesamzaadjes",
        price: "€ 10,50",
      },
      {
        id: "pitas-garides",
        name: "Garides",
        description: "Garnalen met sla, tomaat, komkommer, uien en chiliemayonaise.",
        price: "€ 10,95",
      },
    ],
  ),
  defineCategory(
    {
      id: "patat-met-gyros",
      label: "Patat met Gyros",
    },
    [
      {
        id: "patat-met-gyros-patat-gyros",
        name: "Patat Gyros",
        description: "Tomaat, uien en Tzatziki",
        price: "€ 13,50",
      },
      {
        id: "patat-met-gyros-patat-kip-gyros",
        name: "Patat kip Gyros",
        description: "Tomaat, uien en chilimayonaise",
        price: "€ 13,50",
      },
    ],
  ),
  defineCategory(
    {
      id: "ovenschotels",
      label: "Ovenschotels",
    },
    [
      {
        id: "ovenschotels-mousaka",
        name: "Mousaka",
        description: "Pastei met meerdere lagen van aubergine, aardappel, rundergehakt en bechamel",
        price: "€ 24,00",
      },
      {
        id: "ovenschotels-kokkinisto",
        name: "Kokkinisto",
        description: "Kalfsvlees in tomatensaus",
        price: "€ 25,50",
      },
      {
        id: "ovenschotels-stifado",
        name: "Stifado",
        description: "Kalfsvlees met sjalotjes",
        price: "€ 27,00",
      },
    ],
  ),
  defineCategory(
    {
      id: "visgerechten",
      label: "Visgerechten",
    },
    [
      {
        id: "visgerechten-kalamaria",
        name: "Kalamaria",
        description: "Gebakken inktvisringen met knoflooksaus",
        price: "€ 22,50",
      },
      {
        id: "visgerechten-lavraki",
        name: "Lavraki",
        description: "Gebakken zeebaars met verse warme groenten",
        price: "€ 25,50",
      },
    ],
  ),
  defineCategory(
    {
      id: "schotels-van-de-grill",
      label: "Schotels van de grill",
    },
    [
      {
        id: "grill-gyros",
        name: "Gyros",
        description: "Gekruide stukjes varkensvlees van het spit",
        price: "€ 22,50",
      },
      {
        id: "grill-kip-gyros",
        name: "Kip Gyros",
        description: "Kippendijen van het spit",
        price: "€ 22,50",
      },
      {
        id: "grill-souvlaki",
        name: "Souvlaki",
        description: "3 spiesen van varkenshaas",
        price: "€ 23,50",
      },
      {
        id: "grill-kotopoulo",
        name: "Kotopoulo",
        description: "3 spiesen van kipfilet",
        price: "€ 22,50",
      },
      {
        id: "grill-bifteki",
        name: "Bifteki",
        description: "3 stukken gekruid gehakt",
        price: "€ 23,00",
      },
      {
        id: "grill-paidakia",
        name: "Paidakia",
        description: "Gegrilde lamsrack (± 350 gram)",
        price: "€ 29,50",
      },
      {
        id: "grill-gemisto",
        name: "Gemisto",
        description: "Gehakt gevuld met feta kaas",
        price: "€ 24,50",
      },
      {
        id: "grill-kalamakia",
        name: "Kalamakia",
        description: "3 spiezen van buikspek",
        price: "€ 22,50",
      },
      {
        id: "grill-mix-spies",
        name: "Mix Spies",
        description: "3 spiezen van kip, varken en lam",
        price: "€ 24,50",
      },
    ],
  ),
  defineCategory(
    {
      id: "extra",
      label: "Extra",
    },
    [
      {
        id: "extra-tzatziki-klein",
        name: "Tzatziki klein",
        price: "€ 4,50",
      },
      {
        id: "extra-friet",
        name: "Friet",
        price: "€ 4,50",
      },
      {
        id: "extra-fritessaus",
        name: "Fritessaus",
        price: "€ 1,00",
      },
      {
        id: "extra-rijst",
        name: "Rijst",
        price: "€ 5,00",
      },
      {
        id: "extra-pita",
        name: "Pita",
        price: "€ 2,50",
      },
      {
        id: "extra-knoflooksaus",
        name: "Knoflooksaus",
        price: "€ 1,50",
      },
      {
        id: "extra-bakje-gyros-250-gram",
        name: "Bakje Gyros (± 250 gram)",
        price: "€ 13,00",
      },
      {
        id: "extra-bakje-gyros-450-gram",
        name: "Bakje Gyros (± 450 gram)",
        price: "€ 19,00",
      },
    ],
  ),
  defineCategory(
    {
      id: "mixed-grill",
      label: "Mixed grill",
    },
    [
      {
        id: "mixed-grill-corfu",
        name: "Corfu",
        description: "Bifteki, gyros en souvlaki",
        price: "€ 26,00",
      },
      {
        id: "mixed-grill-rhodos",
        name: "Rhodos",
        description: "Paidaki, gyros en souvlaki",
        price: "€ 27,00",
      },
      {
        id: "mixed-grill-kreta",
        name: "Kreta",
        description: "Kotopoulo, gyros en souvlaki",
        price: "€ 26,00",
      },
      {
        id: "mixed-grill-naxos",
        name: "Naxos",
        description: "Loukaniko, kotopoulo, paidaki en gyros",
        price: "€ 28,50",
      },
      {
        id: "mixed-grill-mix-grill-2-pers",
        name: "Mix Grill 2 pers.",
        description: "Kipspies, bifteki, gyros met friet, tzatziki, pitabrood en een Griekse salade met feta",
        price: "€ 54,50",
      },
    ],
  ),
  defineCategory(
    {
      id: "kindermenu",
      label: "KINDERMENU",
      buttonLabel: "Kindermenu",
    },
    [
      {
        id: "kindermenu-gyros",
        name: "Gyros",
        description: "Gekruide stukjes varkensvlees met friet, appelmoes en fritessaus",
        price: "€ 12,00",
      },
      {
        id: "kindermenu-souvlaki",
        name: "Souvlaki",
        description: "Spies van varkenshaas met friet, appelmoes en fritessaus",
        price: "€ 12,00",
      },
      {
        id: "kindermenu-kotopoulo",
        name: "Kotopoulo",
        description: "Kipfilet met tomaat met friet, appelmoes en fritessaus",
        price: "€ 12,00",
      },
      {
        id: "kindermenu-bifteki",
        name: "Bifteki",
        description: "Gekruid gehakt met friet, appelmoes en fritessaus",
        price: "€ 12,00",
      },
      {
        id: "kindermenu-kip-gyros",
        name: "Kip Gyros",
        description: "Kippendij van het spit met friet, appelmoes en fritessaus",
        price: "€ 12,00",
      },
    ],
  ),
  defineCategory(
    {
      id: "dessert",
      label: "Dessert",
    },
    [
      {
        id: "dessert-karidopita",
        name: "Karidopita",
        description: "Walnotengebak met honingsiroop",
        price: "€ 5,00",
      },
      {
        id: "dessert-diafora",
        name: "Diafora",
        description: "Assortiment van 5 verschillende zoetigheden",
        price: "€ 7,50",
      },
      {
        id: "dessert-baklavas",
        name: "Baklavas",
        description: "Filodeeg met walnoten, amandelen en honingsiroop",
        price: "€ 6,50",
      },
      {
        id: "dessert-giaourti-me-meli",
        name: "Giaourti me meli",
        description: "Griekse yoghurt met honing en walnoten",
        price: "€ 7,00",
      },
      {
        id: "dessert-bougatsa",
        name: "Bougatsa",
        description: "Filodeeg gevuld met vanille custard, bestrooid met poedersuiker en kaneel",
        price: "€ 7,50",
      },
      {
        id: "dessert-cheesecake",
        name: "Cheesecake",
        price: "€ 7,50",
      },
      {
        id: "dessert-profiterol",
        name: "Profiterol",
        description: "Voor de chocolade liefhebber",
        price: "€ 7,50",
      },
    ],
  ),
  defineCategory(
    {
      id: "frisdranken",
      label: "Frisdranken",
    },
    [
      {
        id: "frisdranken-coca-cola-coca-cola-zero-sprite-fanta",
        name: "Coca-Cola, Coca-Cola Zero, Sprite, Fanta",
        price: "€ 3,00",
      },
      {
        id: "frisdranken-ice-tea",
        name: "Ice Tea",
        description: "Green, Peach en Sparkling",
        price: "€ 3,50",
      },
      {
        id: "frisdranken-spa-blauw-en-spa-rood",
        name: "Spa Blauw en Spa Rood",
        price: "€ 3,25",
      },
      {
        id: "frisdranken-red-bull",
        name: "Red Bull",
        price: "€ 4,00",
      },
    ],
  ),
  defineCategory(
    {
      id: "alcoholische-dranken",
      label: "Alcoholische dranken",
    },
    [
      {
        id: "alcoholische-dranken-bieren",
        name: "Bieren",
        description: "Heineken (blik), Hertog Jan (blik)",
        price: "€ 3,50",
      },
      {
        id: "alcoholische-dranken-mythos",
        name: "Mythos",
        description: "Fles 330 ml",
        price: "€ 4,50",
      },
      {
        id: "alcoholische-dranken-ouzo-plomari",
        name: "Ouzo Plomari",
        description: "Fles 200 ml",
        price: "€ 12,00",
      },
      {
        id: "alcoholische-dranken-griekse-wijn",
        name: "Griekse wijn",
        description: "Fles 0,7 liter (rood - wit)",
        price: "€ 16,00",
      },
    ],
  ),
];

export const menuItems = menuCategories.flatMap((category) => category.items);

const sourceItemsWithoutDescriptions = new Set([
  "extra-tzatziki-klein",
  "extra-friet",
  "extra-fritessaus",
  "extra-rijst",
  "extra-pita",
  "extra-knoflooksaus",
  "extra-bakje-gyros-250-gram",
  "extra-bakje-gyros-450-gram",
  "dessert-cheesecake",
  "frisdranken-coca-cola-coca-cola-zero-sprite-fanta",
  "frisdranken-spa-blauw-en-spa-rood",
  "frisdranken-red-bull",
]);

export function validateMenuData(categories: readonly MenuCategory[] = menuCategories) {
  const errors: string[] = [];
  const categoryIds = categories.map((category) => category.id);
  const items = categories.flatMap((category) => category.items);
  const itemIds = items.map((item) => item.id);

  if (categories.length !== EXPECTED_REGULAR_CATEGORY_COUNT) {
    errors.push(`Expected ${EXPECTED_REGULAR_CATEGORY_COUNT} categories, received ${categories.length}.`);
  }

  if (items.length !== EXPECTED_MENU_ITEM_COUNT) {
    errors.push(`Expected ${EXPECTED_MENU_ITEM_COUNT} products, received ${items.length}.`);
  }

  if (new Set(categoryIds).size !== categoryIds.length) {
    errors.push("Every menu category must have a unique id.");
  }

  if (new Set(itemIds).size !== itemIds.length) {
    errors.push("Every menu product must have a unique id.");
  }

  for (const item of items) {
    if (!item.name.trim()) {
      errors.push(`Menu product ${item.id} is missing a name.`);
    }

    if (!item.price.trim()) {
      errors.push(`Menu product ${item.id} is missing a price.`);
    }
  }

  for (const item of items) {
    const hasDescription = typeof item.description === "string" && item.description.trim().length > 0;
    const shouldOmitDescription = sourceItemsWithoutDescriptions.has(item.id);

    if (!hasDescription && !shouldOmitDescription) {
      errors.push(`Menu product ${item.id} is missing a source description.`);
    }

    if (hasDescription && shouldOmitDescription) {
      errors.push(`Menu product ${item.id} should not have a description.`);
    }
  }

  for (const expectedItemId of sourceItemsWithoutDescriptions) {
    if (!itemIds.includes(expectedItemId)) {
      errors.push(`Expected source item without description is missing: ${expectedItemId}.`);
    }
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  return {
    categoryCount: categories.length,
    itemCount: items.length,
  };
}

function findMenuCategory(categoryId: string) {
  const category = menuCategories.find((candidate) => candidate.id === categoryId);

  if (!category) {
    throw new Error(`Unknown menu category: ${categoryId}`);
  }

  return category;
}

function findMenuItem(categoryId: string, itemId: string) {
  const category = findMenuCategory(categoryId);
  const item = category.items.find((candidate) => candidate.id === itemId);

  if (!item) {
    throw new Error(`Unknown menu product: ${categoryId}/${itemId}`);
  }

  return {
    category,
    item,
  };
}

const popularMenuDefinitions = [
  {
    id: "popular-souvlaki",
    categoryId: "schotels-van-de-grill",
    itemId: "grill-souvlaki",
    image: {
      src: "/images/menu/popular-souvlaki.webp",
      alt: "Souvlaki schotel met gegrilde spiesen",
      width: 627,
      height: 627,
    },
  },
  {
    id: "popular-mousaka",
    categoryId: "ovenschotels",
    itemId: "ovenschotels-mousaka",
    image: {
      src: "/images/menu/popular-mousaka.webp",
      alt: "Mousaka met zichtbare lagen aubergine en bechamel",
      width: 800,
      height: 800,
    },
  },
  {
    id: "popular-choriatiki",
    categoryId: "salades",
    itemId: "salades-choriatiki",
    image: {
      src: "/images/menu/popular-choriatiki.webp",
      alt: "Choriatiki salade met tomaat, komkommer, olijven en feta",
      width: 627,
      height: 627,
    },
  },
  {
    id: "popular-gyros",
    categoryId: "schotels-van-de-grill",
    itemId: "grill-gyros",
    image: {
      src: "/images/menu/popular-gyros.webp",
      alt: "Gyros schotel met tzatziki",
      width: 800,
      height: 800,
    },
  },
] satisfies Array<{
  id: string;
  categoryId: string;
  itemId: string;
  image: ImageAsset;
}>;

export const popularMenuItems: PopularMenuItem[] = popularMenuDefinitions.map((definition) => {
  const { category, item } = findMenuItem(definition.categoryId, definition.itemId);

  return {
    id: definition.id,
    category,
    item,
    image: definition.image,
  };
});

export const menuFilterOptions = [
  {
    id: POPULAR_MENU_FILTER_ID,
    label: "Populair",
  },
  ...menuCategories.map((category) => ({
    id: category.id,
    label: category.buttonLabel ?? category.label,
  })),
];

export const menuIntegrity = validateMenuData();

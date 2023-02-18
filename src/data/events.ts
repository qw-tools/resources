import { categories } from "./categories.js";
import { DefaultItem, Item } from "@/types";

function toItem(item: Partial<Item>): Item {
  return {
    ...DefaultItem,
    ...item,
    category: categories.events,
  };
}

export const events: Item[] = [
  {
    title: "QHLAN",
    logo: "qhlan.png",
    slogan:
      'The Quake-o-Holics LAN a.k.a "QHLAN" a legendary LAN event series.',
    url: "https://www.qhlan.org/",
    related: ["https://www.quakeworld.nu/wiki/QHLAN"],
  },
].map(toItem);

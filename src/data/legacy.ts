import { categories } from "./categories.js";
import { DefaultItem, Item } from "@/types";

function toItem(item: Partial<Item>): Item {
  return {
    ...DefaultItem,
    ...item,
    category: categories.legacy,
  };
}

export const legacy: Item[] = [
  {
    title: "EQL",
    logo: "eql.png",
    slogan: "European Quake League",
    url: "https://eql.quakeworld.nu/",
    related: ["https://www.quakeworld.nu/wiki/European_Quake_League"],
  },
  {
    title: "NQR",
    logo: "nqr.png",
    slogan: "Nations Quake Rank",
    url: "https://nqr.quakeworld.nu/",
    related: ["https://www.quakeworld.nu/wiki/Nations_Quake_Rank"],
  },
].map(toItem);

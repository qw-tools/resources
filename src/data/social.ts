import { categories } from "./categories.js";
import { DefaultItem, Item } from "@/types";

function toItem(item: Partial<Item>): Item {
  return {
    ...DefaultItem,
    ...item,
    category: categories.social,
  };
}

export const social: Item[] = [
  {
    title: "Quake.World Discord",
    slogan: "Main QuakeWorld Discord server.",
    url: "https://discord.quake.world/",
  },
].map(toItem);

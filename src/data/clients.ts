import type { Item } from "../types";
import { categories } from "./categories.js";

function toItem(client: Partial<Item>): Item {
  const defaultItem: Item = {
    title: "",
    slogan: "",
    description: "",
    url: "",
    related: [],
    category: categories.clients,
    tags: [],
  };

  return {
    ...defaultItem,
    ...client,
  };
}

export const clients: Item[] = [
  {
    title: "ezQuake",
    slogan: "Modern QuakeWorld Client",
    url: "https://ezquake.com/",
    related: ["https://github.com/QW-Group/ezquake-source"],
  },
  {
    title: "FTE",
    url: "https://www.fteqw.org/",
    related: ["https://github.com/fte-team/fteqw"],
  },
  {
    title: "bootable quake",
    url: "https://github.com/ciscon/quake-bootable/",
  },
  {
    title: "nQuake",
    url: "https://nquake.com/",
    related: ["https://github.com/nQuake"],
  },
].map(toItem);

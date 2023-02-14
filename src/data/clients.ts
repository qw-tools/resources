import type { Item } from "@/types";
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
    logo: "ezquake.png",
    slogan: "Modern QuakeWorld Client",
    url: "https://ezquake.com/",
    related: ["https://github.com/QW-Group/ezquake-source"],
  },
  {
    title: "FTE",
    logo: "fte.png",
    url: "https://www.fteqw.org/",
    related: ["https://github.com/fte-team/fteqw"],
  },
  {
    title: "bootable quake",
    url: "https://github.com/ciscon/quake-bootable/",
  },
  {
    title: "nQuake",
    slogan: "QuakeWorld client and server packages.",
    logo: "nquake.png",
    url: "https://nquake.com/",
    related: ["https://github.com/nQuake"],
  },
].map(toItem);

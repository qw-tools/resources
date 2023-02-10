import type { Item } from "../types";
import { categories } from "./categories.js";

function toItem(client: Pick<Item, "title" | "url" | "related">): Item {
  return {
    title: client.title,
    url: client.url,
    related: client.related ?? [],
    category: categories.clients,
    tags: []
  }
}

export const clients: Item[] = [
  {
    title: "ezQuake",
    url: "https://ezquake.com/",
    related: ["https://github.com/QW-Group/ezquake-source"]
  },
  {
    title: "FTE",
    url: "https://www.fteqw.org/",
    related: ["https://github.com/fte-team/fteqw"]
  },
  {
    title: "bootable quake",
    url: "https://github.com/ciscon/quake-bootable/",
  },
  {
    title: "nQuake",
    url: "https://nquake.com/",
    related: ["https://github.com/nQuake"]
  },
].map(toItem);

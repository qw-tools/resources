import type { Item } from "../types";
import { categories } from "./categories.js";

function toItem(client: Pick<Item, "title" | "url">): Item {
  return {
    title: client.title,
    url: client.url,
    category: categories.clients,
    tags: []
  }
}

export const clients: Item[] = [
  {
    title: "ezQuake",
    url: ["https://ezquake.com/", "https://github.com/QW-Group/ezquake-source"],
  },
  {
    title: "FTE",
    url: ["https://fte.triptohell.info/", "https://sourceforge.net/projects/fteqw/"],
  },
  {
    title: "bootable quake",
    url: "https://github.com/ciscon/quake-bootable/",
  },
  {
    title: "nQuake",
    url: "https://nquake.com/",
  },
].map(toItem);

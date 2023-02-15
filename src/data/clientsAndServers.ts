import type { Item } from "@/types";
import { categories } from "./categories.js";

function toItem(client: Partial<Item>): Item {
  const defaultItem: Item = {
    title: "",
    slogan: "",
    description: "",
    url: "",
    related: [],
    category: categories.clientsAndServers,
    tags: [],
  };

  return {
    ...defaultItem,
    ...client,
  };
}

export const clientsAndServers: Item[] = [
  {
    title: "ezQuake",
    logo: "ezquake.png",
    slogan: "QuakeWorld client with competitive features and customizable graphics.",
    url: "https://ezquake.com/",
    related: ["https://github.com/QW-Group/ezquake-source"],
  },
  {
    title: "FTE",
    logo: "fte.png",
    slogan: "Cross-platform multipurpose engine for Quake 1/2/3 and Hexen 2.",
    url: "https://www.fteqw.org/",
    related: ["https://github.com/fte-team/fteqw"],
  },
  {
    title: "bootable quake",
    slogan: "Highly optimized unix image with ezQuake.",
    url: "https://github.com/ciscon/quake-bootable/",
    tags: ["ciscon"],
  },
  {
    title: "nQuake",
    slogan: "QuakeWorld client and server packages.",
    logo: "nquake.png",
    url: "https://nquake.com/",
    related: ["https://github.com/nQuake"],
  },
].map(toItem);

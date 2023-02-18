import { DefaultItem, Item } from "@/types";
import { categories } from "./categories.js";

function toItem(item: Partial<Item>): Item {
  return {
    ...DefaultItem,
    ...item,
    category: categories.clientsAndServers,
  };
}

export const clientsAndServers: Item[] = [
  {
    title: "ezQuake",
    logo: "ezquake.png",
    slogan:
      "QuakeWorld client with competitive features and customizable graphics.",
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
  {
    title: "MVDSV",
    logo: "mvdsv.png",
    slogan: "a QuakeWorld Server",
    url: "https://github.com/QW-Group/mvdsv",
  },
  {
    title: "KTX",
    logo: "ktx.png",
    slogan: "Server modification adding numerous features.",
    url: "https://github.com/QW-Group/ktx",
  },
  {
    title: "QTV",
    slogan: "Match broadcasting tool.",
    url: "https://github.com/QW-Group/qtv",
  },
  {
    title: "QWFWD",
    slogan: "Server proxy.",
    url: "https://github.com/QW-Group/qwfwd",
  },
].map(toItem);

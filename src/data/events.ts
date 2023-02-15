import { categories } from "./categories.js";
import type { Item } from "@/types";

export const events: Item[] = [
  {
    title: "QHLAN",
    logo: "qhlan.png",
    slogan: "The Quake-o-Holics LAN a.k.a \"QHLAN\" a legendary LAN event series.",
    url: "https://www.qhlan.org/",
    related: ["https://www.quakeworld.nu/wiki/QHLAN"]
  },
].map((w) => ({
  ...w,
  category: categories.events,
}));

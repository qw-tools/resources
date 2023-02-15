import { categories } from "./categories.js";
import type { Item } from "@/types";

export const gameMedia: Item[] = [
  {
    title: "QuakeWorld GFX",
    logo: "qwgfx.jpg",
    slogan: "Download graphics, custom maps and other replacement media for QuakeWorld.",
    url: "https://gfx.quakeworld.nu/",
  },
  {
    title: "maps.quakeworld.nu",
    slogan: "QuakeWorld map archive.",
    url: "https://maps.quakeworld.nu/",
  },
  {
    title: "TrenchBroom",
    logo: "trenchbroom.png",
    slogan: "Cross-Platform Level Editor",
    url: "https://trenchbroom.github.io/",
    related: ["https://github.com/TrenchBroom/TrenchBroom"],
    tags: ["maps", "editor", "tool"],
  },
].map((w) => ({
  ...w,
  category: categories.gameMedia,
}));

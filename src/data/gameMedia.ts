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
    title: "QuakeWorld Map Archive",
    url: "https://maps.quakeworld.nu/",
  },
  {
    title: "HUD numbers generator",
    url: "https://vikpe.org/qwnum/",
    related: ["https://github.com/vikpe/qwnum"],
    tags: ["xantom", "editor", "tool"]
  },
  {
    title: "Model Texture Editor",
    url: "https://vikpe.org/qw-gfx/",
    related: ["https://github.com/vikpe/qw-gfx"],
    tags: ["xantom", "editor", "tool"]
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

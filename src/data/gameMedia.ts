import { categories } from "./categories.js";
import type { Item } from "@/types";

export const gameMedia: Item[] = [
  {
    title: "QuakeWorld GFX",
    logo: "qwgfx.jpg",
    slogan: "Download graphics, custom maps and other replacement media for QuakeWorld.",
    url: "https://gfx.quakeworld.nu/",
    tags: ["graphic"],
  },
  {
    title: "QuakeWorld Map Archive",
    url: "https://maps.quakeworld.nu/",
  },
  {
    title: "HUD Numbers Editor",
    url: "https://tools.quake.world/hud-numbers/",
    related: ["https://github.com/qw-tools/hud-numbers"],
    tags: ["xantom", "editor", "tool", "graphic"]
  },
  {
    title: "Model Texture Editor",
    url: "https://tools.quake.world/model-textures/",
    related: ["https://github.com/qw-tools/model-textures"],
    tags: ["xantom", "editor", "tool", "graphic"]
  },
  {
    title: "Mapshots",
    url: "https://github.com/vikpe/qw-mapshots",
    slogan: "Screenshots of QuakeWorld maps."
  },
  {
    title: "TrenchBroom",
    logo: "trenchbroom.png",
    slogan: "Cross-Platform Map Editor",
    url: "https://trenchbroom.github.io/",
    related: ["https://github.com/TrenchBroom/TrenchBroom"],
    tags: ["map", "editor", "tool"],
  },
].map((w) => ({
  ...w,
  category: categories.gameMedia,
}));

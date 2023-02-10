import { categories } from "./categories.js";

export const discords = [
  {
    title: "Quake.World Discord",
    url: "https://discord.quake.world/",
  }
].map(d => ({
  ...d,
  category: categories.community,
  tags: ["discord"],
}));

const websites = [
  {
    title: "QuakeWorld.nu",
    url: "https://www.quakeworld.nu/",
  },
  {
    title: "QuakeWorld Wiki",
    url: "https://www.quakeworld.nu/wiki/",
  },
  {
    title: "QuakeWorld GFX",
    url: "https://gfx.quakeworld.nu/",
  },
  {
    title: "QuakeWorld Hub",
    url: "https://hub.quakeworld.nu/",
  },
].map(w => ({
  ...w,
  category: categories.community
}));
export const community = [].concat(discords).concat(websites);

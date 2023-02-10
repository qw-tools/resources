import { categories } from "./categories.js";
import type { Item } from "../types";

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

const websites: Partial<Item>[] = [
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
    related: ["https://github.com/quakeworldnu/hub.quakeworld.nu"]
  },
].map(w => ({
  ...w,
  category: categories.community
}));
export const community = [].concat(discords).concat(websites);

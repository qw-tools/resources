import { categories } from "./categories.js";
import type { Item } from "@/types";

export const discords = [
  {
    title: "Quake.World Discord",
    slogan: "Main QuakeWorld Discord server.",
    url: "https://discord.quake.world/",
  },
].map((d) => ({
  ...d,
  category: categories.community,
  tags: ["discord"],
}));

const websites: Partial<Item>[] = [
  {
    title: "QuakeWorld.nu",
    logo: "quakeworldnu.gif",
    slogan: "Community portal with news and forums.",
    url: "https://www.quakeworld.nu/",
  },
  {
    title: "QuakeWorld Wiki",
    logo: "qwwiki.png",
    slogan: "The QuakeWorld encyclopedia.",
    url: "https://www.quakeworld.nu/wiki/",
  },
  {
    title: "QuakeWorld Hub",
    logo: "qwhub.svg",
    slogan: "Live games, streams, news, events.",
    url: "https://hub.quakeworld.nu/",
    related: ["https://github.com/quakeworldnu/hub.quakeworld.nu"],
  },
].map((w) => ({
  ...w,
  category: categories.community,
}));
export const community = [].concat(discords).concat(websites);

import { categories } from "./categories.js";
import { DefaultItem, Item } from "@/types";

function toItem(item: Partial<Item>): Item {
  return {
    ...DefaultItem,
    ...item,
    category: categories.community,
  };
}

export const community: Item[] = [
  {
    title: "Quake.World Discord",
    slogan: "Main QuakeWorld Discord server.",
    url: "https://discord.quake.world/",
  },
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
  {
    title: "QuakeWorld Open Collective",
    slogan: "Supporting critical parts of the QuakeWorld community.",
    url: "https://opencollective.com/quakeworld",
  },
].map(toItem);

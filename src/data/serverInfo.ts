import { DefaultItem, Item } from "@/types";
import { categories } from "./categories";

function toItem(item: Partial<Item>): Item {
  return {
    ...DefaultItem,
    ...item,
    category: categories.serverInfo,
  };
}

export const serverInfo: Item[] = [
  {
    title: "Ciscons server list",
    url: "https://nicotinelounge.com/servers.txt",
    tags: ["ciscon"],
  },
  {
    title: "Ciscons anti-lag server list",
    url: "https://nicotinelounge.com/servers-antilag.txt",
    tags: ["ciscon", "antilag"],
  },
  {
    title: "QuakeWorld Server Overview",
    slogan: "Server info, geo location and statistics.",
    url: "https://tools.quake.world/servers/",
    related: ["https://github.com/qw-tools/servers"],
    tags: ["xantom"],
  },
  {
    title: "QuakeServers.net",
    slogan: "Listing servers for Quake games series.",
    url: "https://www.quakeservers.net/quakeworld/servers/",
  },
  {
    title: "masterstat",
    slogan: "Get info from QuakeWorld master servers.",
    url: "https://github.com/vikpe/masterstat",
    tags: ["xantom"],
  },
  {
    title: "serverstat",
    slogan: "Get info from QuakeWorld servers.",
    url: "https://github.com/vikpe/serverstat",
    tags: ["xantom"],
  },
].map(toItem);

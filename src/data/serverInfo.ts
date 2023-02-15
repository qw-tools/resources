import type { Item } from "@/types";
import { categories } from "./categories";

const toItem = (w) => ({
  ...w,
  category: categories.serverInfo,
});

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
    url: "https://vikpe.org/qw-server-overview/",
    related: ["https://github.com/vikpe/qw-server-overview"],
    tags: ["xantom"],
  },
  {
    title: "QuakeServers.net",
    slogan: "Listing active servers for Quake games series.",
    url: "https://www.quakeservers.net/",
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

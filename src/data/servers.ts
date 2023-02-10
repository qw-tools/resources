import type { Item } from "../types";
import { categories } from "./categories";

const toItem = w => ({
  ...w,
  category: categories.servers
});

export const servers: Item[] = [
  {
    title: "Ciscons server list",
    url: "https://nicotinelounge.com/servers.txt",
    tags: ["ciscon"]
  },
  {
    title: "QuakeWorld Server Overview",
    url: ["https://vikpe.org/qw-server-overview/", "https://github.com/vikpe/qw-server-overview"],
    tags: ["xantom"]
  },
  {
    title: "QuakeServers.net",
    url: ["https://www.quakeservers.net/"],
    tags: []
  },
].map(toItem);

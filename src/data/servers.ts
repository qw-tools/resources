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
].map(toItem);

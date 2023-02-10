import type { Item } from "../types";
import { clients } from "./clients.js";
import { community } from "./community.js";
import { mods } from "./mods.js";
import { servers } from "./servers";
import { streams } from "./streams";

export const resources: Item[] = []
  .concat(clients)
  .concat(community)
  .concat(mods)
  .concat(servers)
  .concat(streams);

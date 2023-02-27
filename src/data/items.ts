import { Item } from "@/types";
import { clientsAndServers } from "./clientsAndServers";
import { community } from "./community.js";
import { events } from "@/data/events";
import { legacy } from "./legacy.js";
import { mods } from "./mods.js";
import { gameMedia } from "./gameMedia";
import { serverInfo } from "./serverInfo";
import { streamsAndVideos } from "./streamsAndVideos";

export const items: Item[] = [
  clientsAndServers,
  events,
  community,
  gameMedia,
  legacy,
  mods,
  serverInfo,
  streamsAndVideos,
].flat(1);

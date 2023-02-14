import type { Item } from "@/types";
import { categories } from "./categories.js";

function toItem(value: [string, string]): Item {
  const urls = value[1].split(" ");
  const hasYoutube = urls.length > 1;

  return {
    title: value[0],
    url: `https://www.twitch.tv/${urls[0]}`,
    related: hasYoutube ? [urls[1]] : [],
    category: categories.streams,
    tags: hasYoutube ? ["twitch", "youtube"] : ["twitch"],
  };
}

export const streams: Item[] = Object.entries({
  QuakeWorld: "quakeworld",
  ake_vader: "ake_vader",
  suddendeathTV: "suddendeathTV https://www.youtube.com/@TVsuddendeath",
  anni: "annihilazor",
  badsebitv1: "badsebitv https://www.youtube.com/@badsebitv",
  "BLooD_DoG(D_P)": "maalox1",
  bogojoker: "bogojoker",
  bps: "bps__",
  dev: "devqw",
  dracs: "dracsqw",
  eb: "proudsausage",
  Flea: "novate",
  glad: "amd_glad",
  HangTime: "hangtime_of_qw",
  hemostick: "hemostick",
  hiipe: "hiipe_qw",
  hmr: "qwhammer",
  klice: "kliceo",
  LocKtar: "locktar",
  lordlame: "lordlame",
  Milton: "miltonizer https://www.youtube.com/@Miltonizer",
  niw: "niwsen",
  reppie: "reppie",
  sae: "4ksae",
  Shining: "shining_ctf",
  velocity: "chadmcdouche",
  Wimp: "wimpeeh",
  XantoM: "vikpe",
  Zorak: "zorakwar",
}).map(toItem);

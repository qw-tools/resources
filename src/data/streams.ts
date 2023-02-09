import type { Item } from "../types";
import { categories } from "./categories.js";

const toItem = value => ({
  title: value[0],
  url: `https://www.twitch.tv/${value[1]}`,
  category: categories.streams,
  tags: ["twitch"],
});

export const streams: Item[] = Object.entries({
  "[streambot]": "quakeworld",
  "ake_vader": "ake_vader",
  "andeh": "suddendeathTV",
  "anni": "annihilazor",
  "badsebitv1": "badsebitv",
  "BLooD_DoG(D_P)": "maalox1",
  "bogojoker": "bogojoker",
  "bps": "bps__",
  "dev": "devqw",
  "dracs": "dracsqw",
  "eb": "proudsausage",
  "Flea": "novate",
  "glad": "amd_glad",
  "HangTime": "hangtime_of_qw",
  "hemostick": "hemostick",
  "hiipe": "hiipe_qw",
  "hmr": "qwhammer",
  "klice": "kliceo",
  "LocKtar": "locktar",
  "lordlame": "lordlame",
  "Milton": "miltonizer",
  "niw": "niwsen",
  "reppie": "reppie",
  "sae": "4ksae",
  "Shining": "shining_ctf",
  "velocity": "chadmcdouche",
  "Wimp": "wimpeeh",
  "XantoM": "vikpe",
  "Zora": "zorakwar",
}).map(toItem);


import type { Item } from "@/types";
import { categories } from "./categories.js";

const toItem = (mod) => ({ ...mod, category: categories.mods });

export const mods: Item[] = [
  {
    title: "FortressOne",
    logo: "fortressone.png",
    slogan: "Quake Team Fortress Remastered",
    description:
      "Free and open source fork of the original 1996 QuakeWorld mod Team Fortress. Fast-paced, class based, arena first person shooter remastered with refined graphics, new mechanics and evolved gameplay.",
    url: "https://www.fortressone.org",
    related: ["https://www.youtube.com/@FortressOne", "https://github.com/fortressone"],
    tags: ["fortress"],
  },
].map(toItem);

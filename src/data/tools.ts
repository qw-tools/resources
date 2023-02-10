import type { Item } from "../types";
import { categories } from "./categories.js";

export const tools: Item[] = [
  {
    title: "TrenchBroom",
    description: "Cross-Platform Level Editor",
    url: "https://trenchbroom.github.io/",
    related: ["https://github.com/TrenchBroom/TrenchBroom"],
    category: categories.tools,
    tags: ["maps", "editors"],
  },
];

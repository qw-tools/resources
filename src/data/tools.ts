import type { Item } from "../types";
import { categories } from "./categories.js";

const toItem = tool => ({
  ...tool,
  category: categories.tools,
});

export const tools: Item[] = [
  {
    title: "TrenchBroom",
    "description": "Cross-Platform Level Editor",
    url: ["https://trenchbroom.github.io/", "https://github.com/TrenchBroom/TrenchBroom"],
    tags: ["maps", "editors"]
  }
].map(toItem);

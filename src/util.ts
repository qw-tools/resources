import { Item, ItemCollection } from "./types";
import fs from "node:fs";

export function slugify(text: string): string {
  return text
    .toString() // Cast to string (optional)
    .normalize("NFKD") // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/_/g, "-") // Replace _ with -
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/-$/g, ""); // Remove trailing -
}

export function getIconNameByUrl(url: string): string {
  if (url.includes(".txt")) {
    return "file_text";
  }

  const services = {
    "https://github.com/": "github",
    "https://www.twitch.tv/": "twitch",
    "https://www.youtube.com/": "youtube",
    discord: "discord",
    "https://sourceforge.net/": "sourceforge",
  };

  for (const [sUrl, sName] of Object.entries(services)) {
    if (url.includes(sUrl)) {
      return sName;
    }
  }

  return "website";
}

export function getIconUrlByUrl(url: string): string {
  return `/assets/img/icons/${getIconNameByUrl(url)}.svg`;
}

export function getLogoUrlByTitle(title: string): string {
  return `/assets/img/logotypes/${slugify(title)}.png`;
}

export function hasPublicFile(path: string): boolean {
  const absPath = `public/${path}`;

  try {
    fs.statSync(absPath);
    return true;
  } catch {
    return false;
  }
}

function toSortString(item: Item): string {
  return `${item.category.title} ${item.title}`.toLowerCase();
}

export function toItemCollections(items: Item[]): ItemCollection[] {
  if (0 === items.length) {
    return [];
  }

  items.sort((a: Item, b: Item) => {
    return toSortString(a).localeCompare(toSortString(b));
  });

  let currentCollection: ItemCollection = {
    category: items[0].category,
    items: [],
  };
  let lastCategoryTitle = currentCollection.category.title;
  const result: ItemCollection[] = [];

  for (let i = 0; i < items.length; i++) {
    const itemCategory = items[i].category;

    if (items[i].category.title !== lastCategoryTitle) {
      result.push(currentCollection);

      currentCollection = {
        category: itemCategory,
        items: [],
      };
    }

    currentCollection.items.push(items[i]);
    lastCategoryTitle = items[i].category.title;
  }

  if (currentCollection.items.length > 0) {
    result.push(currentCollection);
  }

  return result;
}

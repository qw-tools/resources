import { Item, ItemCollection } from "./types";

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
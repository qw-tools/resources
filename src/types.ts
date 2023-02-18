import { categories } from "@/data/categories";

export type Category = {
  title: string;
};

export interface Item {
  title: string;
  slogan?: string;
  description?: string;
  logo?: string;
  url: string;
  related?: string[];
  category: Category;
  tags?: string[];
}

export const DefaultItem: Item = {
  title: "",
  slogan: "",
  description: "",
  logo: "",
  url: "",
  related: [],
  category: categories.misc,
  tags: [],
}

export function ItemToKeyword(item: Item): string {
  return (item.tags ?? []).concat([item.title, item.category.title]).join(" ").toLowerCase();
}

export type ItemCollection = {
  category: Category;
  items: Item[];
};

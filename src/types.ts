export type Category = {
  title: string;
}

export type Item = {
  title: string;
  slogan?: string;
  url: string | string[];
  category: Category;
  tags: string[];
}

export type ItemCollection = {
  category: Category;
  items: Item[];
}
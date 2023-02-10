export type Category = {
  title: string;
};

export type Item = {
  title: string;
  slogan?: string;
  description?: string;
  url: string;
  related?: string[];
  category: Category;
  tags?: string[];
};

export type ItemCollection = {
  category: Category;
  items: Item[];
};

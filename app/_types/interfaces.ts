export interface BestSellersListInfo {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: Date;
  newest_published_date: Date;
  updated: Updated;
}

enum Updated {
  Monthly = "MONTHLY",
  Weekly = "WEEKLY",
}

export interface BookListInfo {
  results?: BookListResults;
}

export interface BookListResults {
  list_name: string;
  list_name_encoded: string;
  bestsellers_date: Date;
  published_date: Date;
  published_date_description: string;
  next_published_date: string;
  previous_published_date: Date;
  display_name: string;
  normal_list_ends_at: number;
  updated: string;
  books: Book[];
  corrections: any[];
}

export interface Book {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  description: string;
  price: string;
  title: string;
  author: string;
  contributor: string;
  contributor_note: string;
  book_image: undefined | string;
  book_image_width: number | undefined;
  book_image_height: number | undefined;
  amazon_product_url: undefined | string;
  age_group: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
  isbns: Isbn[];
  buy_links: BuyLink[];
  book_uri: string;
}

export interface BuyLink {
  name: Name;
  url: string;
}

export enum Name {
  Amazon = "Amazon",
  AppleBooks = "Apple Books",
  BarnesAndNoble = "Barnes and Noble",
  BooksAMillion = "Books-A-Million",
  Bookshop = "Bookshop",
  IndieBound = "IndieBound",
}

interface Isbn {
  isbn10: string;
  isbn13: string;
}

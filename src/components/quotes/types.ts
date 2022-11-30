export interface QuoteAfterGet {
  id: string;
  author: string;
  text: string;
}

export interface QuoteBeforePost {
  author: string;
  text: string;
}

export interface QuoteInFirebase {
  [id: string]: QuoteBeforePost;
}

export interface QuoteAfterGet {
  id: string;
  author: string;
  text: string;
}

export interface QuoteBeforePost {
  author: string;
  text: string;
}

export interface QuoteDataInFirebase {
  [id: string]: QuoteBeforePost;
}

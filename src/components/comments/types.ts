export interface CommentType {
  quoteId: string;
  text: string;
}

export interface CommentInFirebaseType {
  [id: string]: CommentType;
}

export interface CommnetInAppType {
  id: string;
  quoteId: string;
  text: string;
}
import { QuoteAfterGet, QuoteBeforePost } from '@/components/quotes/types';
import { CommentInFirebaseType, CommentType } from '@/components/comments/types';

const FIREBASE_DOMAIN = import.meta.env.VITE_FIREBASE_DOMAIN;

export const getAllQuotes = async () => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not fetch quotes');
  }

  console.log(data);

  let transformedQuotes: QuoteAfterGet[] = [];

  for (const key in data) {
    const quote = {
      id: key,
      ...data[key],
    };
    transformedQuotes.push(quote);
  }

  return transformedQuotes;
};

export const getSingleQuote = async (quoteId: string) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not fetch the quote');
  }

  console.log(data);

  const loadedQuote: QuoteAfterGet = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
};

export const addQuote = async (quote: QuoteBeforePost) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quote),
    headers: {
      'Context-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not add the quote');
  }
};

export const addComment = async (comment: CommentType) => {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${comment.quoteId}.json`,
    {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = response.json();

  if (!response.ok) {
    throw new Error('Could not add comment');
  }
};

export const getAllComments = async (quoteId: string) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error('Could not get comments');
  }

  let transformedComments: CommentInFirebaseType[] = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    }
    transformedComments.push(commentObj);
  }

  return transformedComments;
}

// import { useFirebaseQuotes } from '../hooks/use-firebase';
// import { QuoteAfterGet, QuoteBeforePost } from '../quotes/types';

// const FIREBASE_DOMAIN =
//   'https://react-httprequest-sample-default-rtdb.asia-southeast1.firebasedatabase.app/';
// const firebaseRequestConfig = {
//   url: FIREBASE_DOMAIN,
// };

// export const getAllQuotes = async () => {
//   const { sendGetRequest } = useFirebaseQuotes(firebaseRequestConfig);
//   const data = await sendGetRequest('');

//   let transformedQuotes: QuoteAfterGet[] = [];

//   for (const key in data) {
//     const quote = {
//       id: key,
//     ...data[key],
//     };
//     transformedQuotes.push(quote);
//   }

//   return transformedQuotes;
// };

// export const getSingleQuote = async (quoteId: string) => {
//   const { sendGetRequest } = useFirebaseQuotes(firebaseRequestConfig);
//   const data = await sendGetRequest(quoteId);

//   const loadedQuote = {
//     id: quoteId,
//     ...data,
//   };

//   return loadedQuote;
// };

// export const addQuote = async (quote: QuoteBeforePost) => {
//   const { sendPostRequest } = useFirebaseQuotes(firebaseRequestConfig);
//   const data = await sendPostRequest(quote);
// }

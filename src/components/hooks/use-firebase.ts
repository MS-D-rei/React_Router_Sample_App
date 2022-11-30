import { useCallback } from 'react';
import { QuoteBeforePost, QuoteInFirebase } from '@/components/quotes/types';

interface QuotesFirebaseRequestProps {
  url: string;
  method?: string;
  body?: string;
  headers?: HeadersInit;
}

export const useFirebaseQuotes = (
  firebaseRequest: QuotesFirebaseRequestProps,
) => {
  const sendGetRequest = useCallback(async (quoteId: string) => {
    const singleQuoteQuery = quoteId ? `/${quoteId}` : ''
    try {
      const response = await fetch(`${firebaseRequest.url}/quotes${singleQuoteQuery}.json`, {
        method: firebaseRequest.method ? firebaseRequest.method : 'GET',
        headers: firebaseRequest.headers ? firebaseRequest.headers : {},
        body: firebaseRequest.body
          ? JSON.stringify(firebaseRequest.body)
          : null,
      });
      if (!response.ok) {
        throw new Error('response is not ok');
      }
      const data: QuoteInFirebase = await response.json();
      return data;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      } else {
        console.log(`Unexpected Error: ${err}`);
      }
    }
  }, [firebaseRequest]);

  const sendPostRequest = async (quote: QuoteBeforePost) => {
    try {
      const response = await fetch(`${firebaseRequest.url}/quotes.json`, {
        method: 'POST',
        body: JSON.stringify(quote),
        headers: {
          'Context-Type': 'application/json',
        },
      });
      const data = response.json();
      return data;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      } else {
        console.log(`Unexpected Error: ${err}`);
      }
    }
  };

  return {
    sendGetRequest,
    sendPostRequest,
  };
};

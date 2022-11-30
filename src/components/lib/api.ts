import { useFirebaseQuotes } from '../hooks/use-firebase';
import { QuoteAfterGet, QuoteBeforePost } from '../quotes/types';

const FIREBASE_DOMAIN =
  'https://react-httprequest-sample-default-rtdb.asia-southeast1.firebasedatabase.app/';
const firebaseRequestConfig = {
  url: FIREBASE_DOMAIN,
};

export const getAllQuotes = async () => {
  const { sendGetRequest } = useFirebaseQuotes(firebaseRequestConfig);
  const data = await sendGetRequest('');

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
  const { sendGetRequest } = useFirebaseQuotes(firebaseRequestConfig);
  const data = await sendGetRequest(quoteId);

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
};

export const addQuote = async (quote: QuoteBeforePost) => {
  const { sendPostRequest } = useFirebaseQuotes(firebaseRequestConfig);
  const data = await sendPostRequest(quote);
}

import { useCallback, useReducer } from 'react';
import { QuoteAfterGet, QuoteDataInFirebase } from '@/components/quotes/types';

enum HttpReducerActionsType {
  SEND = 'SEND',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

interface HttpStateType {
  status: string | null;
  data: QuoteAfterGet | QuoteAfterGet[] | null;
  error: string | null;
}

interface HttpReducerAction {
  type: HttpReducerActionsType;
  payload?: QuoteAfterGet | QuoteAfterGet[] | string;
}

function httpReducer(
  state: HttpStateType,
  action: HttpReducerAction
): HttpStateType {
  switch (action.type) {
    case HttpReducerActionsType.SEND:
      return {
        status: 'pending',
        data: null,
        error: null,
      };
    case HttpReducerActionsType.SUCCESS:
      return {
        status: 'completed',
        data: action.payload as QuoteAfterGet,
        error: null,
      };
    case HttpReducerActionsType.ERROR:
      return {
        status: 'completed',
        data: null,
        error: action.payload as string,
      };
    default:
      return {
        status: 'completed',
        data: null,
        error: 'something wrong',
      };
  }
}

export function useHttp(requestFunction: Function, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData: any) => {
      dispatch({ type: HttpReducerActionsType.SEND });
      try {
        const data = await requestFunction(requestData);
        dispatch({ type: HttpReducerActionsType.SUCCESS, payload: data });
        console.log(httpState);
      } catch (err) {
        if (err instanceof Error) {
          dispatch({
            type: HttpReducerActionsType.ERROR,
            payload: err.message,
          });
        } else {
          console.log(`Unexpected Error: ${err}`);
        }
      }
    },
    [requestFunction]
  );

  return {
    httpState,
    sendRequest,
  };
}

// import { useCallback } from 'react';
// import { QuoteBeforePost, QuoteInFirebase } from '@/components/quotes/types';

// interface QuotesFirebaseRequestProps {
//   url: string;
//   method?: string;
//   body?: string;
//   headers?: HeadersInit;
// }

// export const useFirebaseQuotes = (
//   firebaseRequest: QuotesFirebaseRequestProps,
// ) => {
//   const sendGetRequest = useCallback(async (quoteId: string) => {
//     const singleQuoteQuery = quoteId ? `/${quoteId}` : ''
//     try {
//       const response = await fetch(`${firebaseRequest.url}/quotes${singleQuoteQuery}.json`, {
//         method: firebaseRequest.method ? firebaseRequest.method : 'GET',
//         headers: firebaseRequest.headers ? firebaseRequest.headers : {},
//         body: firebaseRequest.body
//           ? JSON.stringify(firebaseRequest.body)
//           : null,
//       });
//       if (!response.ok) {
//         throw new Error('response is not ok');
//       }
//       const data: QuoteInFirebase = await response.json();
//       return data;
//     } catch (err) {
//       if (err instanceof Error) {
//         console.log(err);
//       } else {
//         console.log(`Unexpected Error: ${err}`);
//       }
//     }
//   }, [firebaseRequest]);

//   const sendPostRequest = async (quote: QuoteBeforePost) => {
//     try {
//       const response = await fetch(`${firebaseRequest.url}/quotes.json`, {
//         method: 'POST',
//         body: JSON.stringify(quote),
//         headers: {
//           'Context-Type': 'application/json',
//         },
//       });
//       const data = response.json();
//       return data;
//     } catch (err) {
//       if (err instanceof Error) {
//         console.log(err);
//       } else {
//         console.log(`Unexpected Error: ${err}`);
//       }
//     }
//   };

//   return {
//     sendGetRequest,
//     sendPostRequest,
//   };
// };

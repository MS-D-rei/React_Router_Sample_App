import { useEffect } from 'react';
import { Route, Routes, useMatch, useParams } from 'react-router-dom';
import Comments from '@/components/comments/Comments';
import HighlightedQuote from '@/components/quotes/HighlightedQuote';
import { QuoteAfterGet } from '@/components/quotes/types';
import { NotFoundDiv } from './NotFoundStyle';
import {
  QuoteDetailCenteredDiv,
  QuoteDetailErrorP,
  QuoteDetailLink,
  QuoteDetailLoadingDiv,
} from './QuoteDetailStyle';
import { useHttp } from '@/components/hooks/use-firebase';
import { getSingleQuote } from '@/components/lib/api';
import { LoadingSpinnerDiv } from '../UI/LoadingSpinnerStyle';

// const DUMMY_QUOTES: QuoteAfterGet[] = [
//   { id: 'q1', author: 'John', text: 'React is fun' },
//   { id: 'q2', author: 'Mary', text: 'Rust is fun' },
// ];

interface paramsProps {
  [quoteId: string]: string;
}

function QuoteDetail() {
  const params = useParams<paramsProps>();
  //   const match = useRouteMatch();
  //   // console.log(match);
  //   /*
  //   {path: '/quotes/:quoteId', url: '/quotes/q1', isExact: false, params: {…}}
  //   isExact: false
  //   params: {quoteId: 'q1'}
  //   path: "/quotes/:quoteId"
  //   url: "/quotes/q1"
  //   [[Prototype]]: Object
  // */
  const match = useMatch('quotes/:quoteId');
  console.log(match);
  /*
  params: {quoteId: '-NID1590_OKhP75TIdhj'}
  pathname: "/quotes/-NID1590_OKhP75TIdhj"
  pathnameBase: "/quotes/-NID1590_OKhP75TIdhj"
  pattern: {path: 'quotes/:quoteId', caseSensitive: false, end: true}
  */

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  const { sendRequest, httpState } = useHttp(getSingleQuote, true);
  const { status, data, error } = httpState;

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest]);

  // remove QuoteAfterGet[] type from data
  const quote = data as QuoteAfterGet;

  if (status === 'pending') {
    return (
      <QuoteDetailLoadingDiv>
        <LoadingSpinnerDiv className="spinner" />
      </QuoteDetailLoadingDiv>
    );
  }

  if (error) {
    return <QuoteDetailErrorP>{error}</QuoteDetailErrorP>;
  }

  if (status === 'completed' && !quote.text) {
    return (
      <NotFoundDiv>
        <p>No Quote Found</p>
      </NotFoundDiv>
    );
  }

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <QuoteDetailCenteredDiv>
        <QuoteDetailLink to='comments'>Load Comments</QuoteDetailLink>
      </QuoteDetailCenteredDiv>
      <Routes>
        {/* <Route
          path={`.`}
          element={
            <QuoteDetailCenteredDiv>
              <QuoteDetailLink to={`comments`}>Load Comments</QuoteDetailLink>
            </QuoteDetailCenteredDiv>
          }
        /> */}
        <Route path='comments' element={<Comments />} />
      </Routes>
    </>
  );
}

export default QuoteDetail;

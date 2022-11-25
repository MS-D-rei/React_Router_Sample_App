import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '@/components/comments/Comments';
import { QuoteType } from '@/components/quotes/types';
import HighlightedQuote from '../quotes/HighlightedQuote';
import { NotFoundDiv } from './NotFoundStyle';
import { QuoteDetailCenteredDiv, QuoteDetailLink } from './QuoteDetailStyle';

const DUMMY_QUOTES: QuoteType[] = [
  { id: 'q1', author: 'John', text: 'React is fun' },
  { id: 'q2', author: 'Mary', text: 'Rust is fun' },
];

interface paramsProps {
  quoteId: string;
}

function QuoteDetail() {
  const params = useParams<paramsProps>();
  const match = useRouteMatch();
  console.log(match);
/*
  {path: '/quotes/:quoteId', url: '/quotes/q1', isExact: false, params: {…}}
  isExact: false
  params: {quoteId: 'q1'}
  path: "/quotes/:quoteId"
  url: "/quotes/q1"
  [[Prototype]]: Object
*/

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return (
      <NotFoundDiv>
        <p>No Quote Found</p>
      </NotFoundDiv>
    );
  }

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`${match.path}`} exact>
        <QuoteDetailCenteredDiv>
          <QuoteDetailLink to={`${match.url}/comments`}>
            Load Comments
          </QuoteDetailLink>
        </QuoteDetailCenteredDiv>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;

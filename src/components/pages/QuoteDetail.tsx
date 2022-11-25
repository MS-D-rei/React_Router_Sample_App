import { Route, useParams } from 'react-router-dom';
import Comments from '@/components/comments/Comments';
import { QuoteType } from '@/components/quotes/types';
import HighlightedQuote from '../quotes/HighlightedQuote';
import { NotFoundDiv } from './NotFoundStyle';

const DUMMY_QUOTES: QuoteType[] = [
  { id: 'q1', author: 'John', text: 'React is fun' },
  { id: 'q2', author: 'Mary', text: 'Rust is fun' },
];

interface paramsProps {
  quoteId: string;
}

function QuoteDetail() {
  const params = useParams<paramsProps>();

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
      <Route path={`/quotes/:quoteId/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;

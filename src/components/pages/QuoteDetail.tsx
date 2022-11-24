import { Route, useParams } from 'react-router-dom';
import Comments from '@/components/comments/Comments';

function QuoteDetail() {
  const params = useParams();
  return (
    <>
      <h1>Quote Detail</h1>
      <Route path={`/quotes/:quoteId/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;

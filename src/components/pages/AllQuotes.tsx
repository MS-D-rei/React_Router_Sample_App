import { QuoteAfterGet } from '@/components/quotes/types';
import QuoteList from '@/components/quotes/QuoteList';
import { useHttp } from '@/components/hooks/use-firebase';
import { getAllQuotes } from '@/components/lib/api';
import { useEffect } from 'react';
import { LoadingSpinnerDiv } from '@/components/UI/LoadingSpinnerStyle';
import {
  AllQuotesErrorP,
  AllQuotesLoadingDiv,
} from '@/components/pages/AllQuotesStyle';
import { NotFoundDiv } from '@/components/pages/NotFoundStyle';
import NoQuotesFound from './NoQuotesFound';

const DUMMY_QUOTES: QuoteAfterGet[] = [
  { id: 'q1', author: 'John', text: 'React is fun' },
  { id: 'q2', author: 'Mary', text: 'Rust is fun' },
];

function AllQuotes() {
  const { sendRequest, httpState } = useHttp(getAllQuotes, true);
  const { status, data, error } = httpState;

  // remove QuoteAfterGet type from httpState.data
  const quotes = data as QuoteAfterGet[] | null;

  useEffect(() => {
    sendRequest('');
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <AllQuotesLoadingDiv>
        <LoadingSpinnerDiv className="spinner" />
      </AllQuotesLoadingDiv>
    );
  }

  if (error) {
    return <AllQuotesErrorP>{error}</AllQuotesErrorP>;
  }

  if (
    (status === 'completed' && (!quotes || quotes.length === 0)) ||
    quotes === null
  ) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={quotes} />;
}

export default AllQuotes;

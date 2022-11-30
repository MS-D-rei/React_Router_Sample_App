import { QuoteAfterGet } from '@/components/quotes/types';
import QuoteList from '@/components/quotes/QuoteList';

const DUMMY_QUOTES: QuoteAfterGet[] = [
  { id: 'q1', author: 'John', text: 'React is fun' },
  { id: 'q2', author: 'Mary', text: 'Rust is fun' },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;

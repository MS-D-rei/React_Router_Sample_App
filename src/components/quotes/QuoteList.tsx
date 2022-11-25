import { QuoteType } from '@/components/quotes/types';
import QuoteITem from '@/components/quotes/QuoteItem';
import { QuoteListUl } from '@/components/quotes/QuoteListStyle';

interface QuoteListProps {
  quotes: QuoteType[];
}

function QuoteList({ quotes }: QuoteListProps) {
  return (
    <>
      <QuoteListUl>
        {quotes.map((quote) => (
          <QuoteITem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </QuoteListUl>
    </>
  );
}

export default QuoteList;

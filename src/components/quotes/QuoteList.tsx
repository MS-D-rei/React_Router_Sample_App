import { QuoteType } from '@/components/quotes/types';
import QuoteITem from '@/components/quotes/QuoteItem';
import {
  QuoteListSortDiv,
  QuoteListUl,
} from '@/components/quotes/QuoteListStyle';
import { useHistory, useLocation } from 'react-router-dom';

const sortQuotes = (quotes: QuoteType[], isAscending: boolean) => {
  return quotes.sort((a: QuoteType, b: QuoteType) => {
    if (isAscending) {
      return a.id > b.id ? 1 : -1;
    } else {
      return a.id < b.id ? 1 : -1;
    }
  });
};

interface QuoteListProps {
  quotes: QuoteType[];
}

function QuoteList({ quotes }: QuoteListProps) {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  console.log(location);
  console.log(queryParams);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(quotes, isSortingAscending);

  const changeSortingHandler = () => {
    // after push, this component will be re-evaluated.
    history.push(`/quotes?sort=${isSortingAscending ? 'desc' : 'asc'}`);
  };

  return (
    <>
      <QuoteListSortDiv>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Decending' : 'Ascending'}
        </button>
      </QuoteListSortDiv>
      <QuoteListUl>
        {sortedQuotes.map((quote) => (
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

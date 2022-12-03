import { QuoteAfterGet } from '@/components/quotes/types';
import QuoteItem from '@/components/quotes/QuoteItem';
import {
  QuoteListSortDiv,
  QuoteListUl,
} from '@/components/quotes/QuoteListStyle';
import { useLocation, useNavigate } from 'react-router-dom';

const sortQuotes = (quotes: QuoteAfterGet[], isAscending: boolean) => {
  if (!quotes) {
    return
  }
  return quotes.sort((a: QuoteAfterGet, b: QuoteAfterGet) => {
    if (isAscending) {
      return a.id > b.id ? 1 : -1;
    } else {
      return a.id < b.id ? 1 : -1;
    }
  });
};

interface QuoteListProps {
  quotes: QuoteAfterGet[];
}

function QuoteList({ quotes }: QuoteListProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  // console.log(location);
  /*
    {pathname: '/quotes', search: '', hash: '', state: null, key: '69glwf'}
    hash: ""
    key: "69glwf"
    pathname: "/quotes"
    search: ""
    state: null
    [[Prototype]]: Object
  */
  // console.log(queryParams);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(quotes, isSortingAscending);

  const changeSortingHandler = () => {
    // after push, this component will be re-evaluated.
    // history.push(`${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc'}`);
    navigate({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
    });
  };

  return (
    <>
      <QuoteListSortDiv>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Decending' : 'Ascending'}
        </button>
      </QuoteListSortDiv>
      <QuoteListUl>
        {sortedQuotes?.map((quote) => (
          <QuoteItem
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

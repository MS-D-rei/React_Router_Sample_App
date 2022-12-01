import { NoQuotesFoundAddQuoteLink, NoQuotesFoundDiv } from '@/components/pages/NoQuotesFoundStyle';

function NoQuotesFound() {
  return (
    <NoQuotesFoundDiv>
      <p>No quotes found</p>
      <NoQuotesFoundAddQuoteLink to='/new-quote'>
        Add a Quote
      </NoQuotesFoundAddQuoteLink>
    </NoQuotesFoundDiv>
  )
}

export default NoQuotesFound;
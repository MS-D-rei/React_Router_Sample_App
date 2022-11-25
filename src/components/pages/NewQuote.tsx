import QuoteForm from "@/components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

function NewQuote() {
  const history = useHistory();

  const addQuoteHandler = (quote: {author: string | undefined, text: string | undefined}) => {
    console.log(quote);

    history.push('/quotes');
  }

  return (
    <QuoteForm isLoading={false} onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote;
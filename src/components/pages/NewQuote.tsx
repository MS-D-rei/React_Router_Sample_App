import QuoteForm from "@/components/quotes/QuoteForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "@/components/hooks/use-firebase";
import { addQuote } from "@/components/lib/api";

function NewQuote() {
  const navigate = useNavigate();
  const { sendRequest, httpState } = useHttp(addQuote);

  useEffect(() => {
    if (httpState.status === 'completed') {
      navigate('/quotes');
    }
  }, [httpState, history])

  const addQuoteHandler = (quote: {author: string | undefined, text: string | undefined}) => {
    sendRequest(quote);
    console.log(quote);
  }

  return (
    <QuoteForm isLoading={httpState.status === 'pending'} onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote;
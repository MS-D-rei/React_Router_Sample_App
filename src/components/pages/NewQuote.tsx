import QuoteForm from "@/components/quotes/QuoteForm";

function NewQuote() {
  const addQuoteHandler = (quote: {author: string | undefined, text: string | undefined}) => {
    console.log(quote);
  }

  return (
    <QuoteForm isLoading={false} onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote;
import { HighlightedQuoteFigure } from "@/components/quotes/HighlightedQuoteStyle";

interface HighlightedQuoteProps {
  author: string | undefined;
  text: string | undefined;
}

function HighlightedQuote({ author, text }: HighlightedQuoteProps) {
  return (
    <HighlightedQuoteFigure>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </HighlightedQuoteFigure>
  );
}

export default HighlightedQuote;

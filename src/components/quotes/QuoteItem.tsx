import { QuoteItemA, QuoteItemLi } from '@/components/quotes/QuoteItemStyle';

interface QuoteItemProps {
  id: string;
  author: string;
  text: string;
}

function QuoteITem({ author, text }: QuoteItemProps) {
  return (
    <QuoteItemLi>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <QuoteItemA>View Fullscreen</QuoteItemA>
    </QuoteItemLi>
  );
}

export default QuoteITem;

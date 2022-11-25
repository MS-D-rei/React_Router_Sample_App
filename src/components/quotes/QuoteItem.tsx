import { QuoteItemLink, QuoteItemLi } from '@/components/quotes/QuoteItemStyle';

interface QuoteItemProps {
  id: string;
  author: string;
  text: string;
}

function QuoteITem({ id, author, text }: QuoteItemProps) {
  return (
    <QuoteItemLi>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <QuoteItemLink to={`/quotes/${id}`}>View Fullscreen</QuoteItemLink>
    </QuoteItemLi>
  );
}

export default QuoteITem;

import React, { useRef } from 'react';
import { CardDiv } from '@/components/UI/CardStyle';
import {
  QuoteFormActionButton,
  QuoteFormActionsDiv,
  QuoteFormControlDiv,
  QuoteFormForm,
  QuoteFormLoadingDiv,
} from '@/components/quotes/QuoteFormStyle';
import { LoadingSpinnerDiv } from '../UI/LoadingSpinnerStyle';

interface QuoteFormProps {
  isLoading: boolean;
  onAddQuote: (quote: {author: string | undefined, text: string | undefined}) => void;
}

function QuoteForm({ isLoading, onAddQuote }: QuoteFormProps) {
  const authorInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const authorInput = authorInputRef.current?.value;
    const textInput = textInputRef.current?.value;

    onAddQuote({author: authorInputRef.current?.value, text: textInputRef.current?.value});
  };

  return (
    <CardDiv>
      <QuoteFormForm onSubmit={submitHandler}>
        {isLoading && (
          <QuoteFormLoadingDiv>
            <LoadingSpinnerDiv className='spinner' />
          </QuoteFormLoadingDiv>
        )}
        <QuoteFormControlDiv>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </QuoteFormControlDiv>
        <QuoteFormControlDiv>
          <label htmlFor="text">Text</label>
          <textarea
            name="text"
            id="text"
            rows={5}
            ref={textInputRef}
          ></textarea>
        </QuoteFormControlDiv>
        <QuoteFormActionsDiv>
          <QuoteFormActionButton>Add Quote</QuoteFormActionButton>
        </QuoteFormActionsDiv>
      </QuoteFormForm>
    </CardDiv>
  );
}

export default QuoteForm;

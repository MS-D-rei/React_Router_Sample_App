import React, { useRef } from 'react';
import {
  NewCommentFormActionButton,
  NewCommentFormControlDiv,
  NewCommentFormForm,
  NewCommentFormLoadingDiv,
} from '@/components/comments/NewCommentFormStyle';
import { useHttp } from '@/components/hooks/use-firebase';
import { addComment } from '@/components/lib/api';
import { LoadingSpinnerDiv } from '../UI/LoadingSpinnerStyle';
import { useParams } from 'react-router-dom';

interface paramsProps {
  quoteId: string;
}

function NewCommentForm() {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);
  const params = useParams<paramsProps>();
  const { sendRequest, httpState } = useHttp(addComment);
  const { status } = httpState;

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendRequest({ quoteId: params.quoteId, text: commentTextRef.current?.value });
  };

  return (
    <NewCommentFormForm onSubmit={submitHandler}>
      {status === 'pending' && (
        <NewCommentFormLoadingDiv>
          <LoadingSpinnerDiv className="spinner" />
        </NewCommentFormLoadingDiv>
      )}
      <NewCommentFormControlDiv>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          name="comment"
          id="comment"
          rows={5}
          ref={commentTextRef}
        ></textarea>
      </NewCommentFormControlDiv>
      <div>
        <NewCommentFormActionButton>Add Comment</NewCommentFormActionButton>
      </div>
    </NewCommentFormForm>
  );
}

export default NewCommentForm;

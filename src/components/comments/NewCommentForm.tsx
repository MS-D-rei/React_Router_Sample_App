import React, { useRef } from "react";
import { NewCommentFormActionButton, NewCommentFormControlDiv, NewCommentFormForm } from "@/components/comments/NewCommentFormStyle";

function NewCommentForm() {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <NewCommentFormForm onSubmit={submitHandler}>
      <NewCommentFormControlDiv>
        <label htmlFor="comment">Your Comment</label>
        <textarea name="comment" id="comment" rows={5} ref={commentTextRef}></textarea>
      </NewCommentFormControlDiv>
      <div>
        <NewCommentFormActionButton>Add Comment</NewCommentFormActionButton>
      </div>
    </NewCommentFormForm>
  )
}

export default NewCommentForm;
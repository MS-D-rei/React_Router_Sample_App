import { useState } from "react";
import { CommentsSection } from "@/components/comments/CommentsStyle";
import NewCommentForm from "@/components/comments/NewCommentForm";

function Comments() {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const addCommentHandler = () => {
    setIsAddingComment(true);
  }

  return (
    <CommentsSection>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button onClick={addCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </CommentsSection>
  )
}

export default Comments;
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsList from '@/components/comments/CommentsList';
import NewCommentForm from '@/components/comments/NewCommentForm';
import {
  CommentsErrorP,
  CommentsLoadingDiv,
  CommentsSection,
} from '@/components/comments/CommentsStyle';
import { useHttp } from '@/components/hooks/use-firebase';
import { getAllComments } from '@/components/lib/api';
import { LoadingSpinnerDiv } from '@/components/UI/LoadingSpinnerStyle';
import { CommentInAppType } from '@/components/comments/types';

interface paramsProps {
  [quoteId: string]: string;
}

function Comments() {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams<paramsProps>();
  const { sendRequest, httpState } = useHttp(getAllComments);
  const { status, data, error } = httpState;
  const allComments = data as unknown as CommentInAppType[];

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params]);

  // useEffect(() => {
  //   if (status === 'completed' && !error) {
  //     sendRequest(params.quoteId);
  //   }
  // }, [sendRequest, params, status, error]);

  const addCommentHandler = () => {
    setIsAddingComment(true);
  };

  let commentsContent;

  // While pending
  if (status === 'pending') {
    commentsContent = (
      <CommentsLoadingDiv>
        <LoadingSpinnerDiv className="spinner" />
      </CommentsLoadingDiv>
    );
  }

  // Status completed & allComments has 1 content at least
  if (status === 'completed' && allComments && allComments.length > 0) {
    commentsContent = <CommentsList comments={allComments} />;
  }

  // Status completed & no content
  if (status === 'completed' && (!allComments || allComments.length === 0)) {
    commentsContent = <CommentsErrorP>No comments found</CommentsErrorP>;
  }

  const afterAddCommentHandler = useCallback(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params]);

  return (
    <CommentsSection>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button onClick={addCommentHandler}>Add a Comment</button>
      )}
      {isAddingComment && (
        <NewCommentForm onAddComment={afterAddCommentHandler} />
      )}
      {commentsContent}
    </CommentsSection>
  );
}

export default Comments;

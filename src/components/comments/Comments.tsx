import { useEffect, useState } from 'react';
import { CommentsLoadingDiv, CommentsSection } from '@/components/comments/CommentsStyle';
import NewCommentForm from '@/components/comments/NewCommentForm';
import { useHttp } from '../hooks/use-firebase';
import { getAllComments } from '../lib/api';
import { useParams } from 'react-router-dom';
import { LoadingSpinnerDiv } from '../UI/LoadingSpinnerStyle';
import { CommnetInAppType } from './types';

interface paramsProps {
  quoteId: string;
}

function Comments() {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams<paramsProps>();
  const { sendRequest, httpState } = useHttp(getAllComments);
  const { status, data } = httpState;
  const allComments = data as unknown as CommnetInAppType[];

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [params, sendRequest]);

  const addCommentHandler = () => {
    setIsAddingComment(true);
  };

  let commentsContent;

  if (status === 'pending') {
    commentsContent = (
      <CommentsLoadingDiv>
        <LoadingSpinnerDiv className='spinner' />
      </CommentsLoadingDiv>
    )
  }

  // if (status === 'completed' && (allComments && allComments.length > 0)) {
    
  // }

  return (
    <CommentsSection>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button onClick={addCommentHandler}>Add a Comment</button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </CommentsSection>
  );
}

export default Comments;

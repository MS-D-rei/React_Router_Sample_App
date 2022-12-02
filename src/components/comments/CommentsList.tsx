import CommentItem from '@/components/comments/CommentItem';
import { CommentInAppType } from '@/components/comments/types';
import { CommnetsListUl } from '@/components/comments/CommentsListStyle';

interface CommentListProps {
  comments: CommentInAppType[];
}

function CommentsList({ comments }: CommentListProps) {
  return (
    <CommnetsListUl>
      {comments.map((comment) => (
        <CommentItem key={comment.id} id={comment.id} text={comment.text} />
      ))}
    </CommnetsListUl>
  );
}

export default CommentsList;

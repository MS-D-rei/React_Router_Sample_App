import { CommnetItemLi } from "@/components/comments/CommentItemStyle";

interface CommnetItemProps {
  id: string;
  text: string;
}

function CommentItem({ text }: CommnetItemProps) {
  return (
    <CommnetItemLi>
      <p>{text}</p>
    </CommnetItemLi>
  );
}

export default CommentItem;

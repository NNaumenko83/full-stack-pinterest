import "./comments.css";

import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest.js";
import { Comment } from "./comment.jsx";
import { CommentForm } from "./commentForm.jsx";

const Comments = ({ id }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading user: {error.message}</div>;

  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">
          {data.length === 0 ? "No comments" : `${data.length} comments`}
        </span>
        {data.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))}
      </div>
      <CommentForm />
    </div>
  );
};

export default Comments;

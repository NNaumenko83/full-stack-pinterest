import "./postPage.css";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import Comments from "../../components/comments/comments";
import Image from "../../components/image/Image";
import PostInteractions from "../../components/postInteracions/postInteractions";
import apiRequest from "../../utils/apiRequest";

const PostPage = () => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["pin", id],
    queryFn: () => apiRequest.get(`/pins/${id}`).then((res) => res.data),
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading pin: {error.message}</div>;
  if (!data) return <div>Pin not found</div>;

  return (
    <div className="postPage">
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg
        height="20"
        viewBox="0 0 24 24"
        width="20"
        style={{ cursor: "pointer" }}
      >
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
      </svg>
      <div className="postContainer">
        <div className="postImg">
          <Image src={data.media} alt="" w={736} />
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link to={`/${data.user.userName}`} className="postUser">
            <Image src={data.user.img || "/general/noAvatar.png"} />
            <span>{data.user.displayName}</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;

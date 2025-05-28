import "./boards.css";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { format } from "timeago.js";

import apiRequest from "../../utils/apiRequest.js";
import Image from "../image/image.jsx";

const Boards = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["boards", userId],
    queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading user: {error.message}</div>;

  return (
    <div className="collections">
      {/* COLLECTION */}
      {data?.map((board) => (
        <Link
          to={`/search?boardId=${board._id}`}
          className="collection"
          key={board._id}
        >
          <Image src={board.firstPin.media} alt="" />
          <div className="collectionInfo">
            <h1>{board.title}</h1>
            <span>
              {board.pinCount} Pins • {format(board.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Boards;

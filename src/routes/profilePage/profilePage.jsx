import "./profilePage.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router";

import Boards from "../../components/boards/boards";
import Gallery from "../../components/gallery/gallery";
import Image from "../../components/image/image";
import apiRequest from "../../utils/apiRequest";
import FollowButton from "./FollowButton";

const ProfilePage = () => {
  const [type, setType] = useState("saved");

  const { username } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading user: {error.message}</div>;
  if (!data) return <div>User not found</div>;

  return (
    <div className="profilePage">
      <Image
        className="profileImage"
        path={data.img || "/general/noAvatar.png"}
        alt="avatar"
        w={100}
        h={100}
      />
      <h1 className="profileName">{data.displayName}</h1>
      <span className="profileUsername">@{data.userName}</span>
      <div className="followCounts">
        {data.followerCount} followers • {data.followingCount} followings
      </div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button type="button">Message</button>
          <FollowButton
            isFollowing={data.isFollowing}
            userName={data.userName}
          />
        </div>

        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? (
        <Gallery userId={data._id} />
      ) : (
        <Boards userId={data._id} />
      )}
    </div>
  );
};

export default ProfilePage;

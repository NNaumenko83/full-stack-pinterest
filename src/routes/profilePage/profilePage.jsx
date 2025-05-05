import "./profilePage.css";
import { useState } from "react";
import Image from "../../components/Image/Image";
import Collections from "../../components/collections/collections";
import Gallery from "../../components/gallery/gallery";

const ProfilePage = () => {
  const [type, setType] = useState("saved");

  return (
    <div className="profilePage">
      <Image
        className="profileImage"
        path="/general/noAvatar.png"
        alt="avatar"
        w={100}
        h={100}
      />
      <h1 className="profileName">John Doe</h1>
      <span className="profileUsername">@johndoe</span>
      <div className="followCounts">10 followers • 20 followings</div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button type="button">Message</button>
          <button type="button">Follow</button>
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
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;

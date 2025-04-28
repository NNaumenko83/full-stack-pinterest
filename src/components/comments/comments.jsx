import "./comments.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import Image from "../image/image";

const Comments = () => {
  const [open, setOpen] = useState(false);

  useState;
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 comments</span>

        {/* COMMENT */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              omnis.
            </p>
            <span className="commentTime">1h</span>
          </div>
          commentText
        </div>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              omnis.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              omnis.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              omnis.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
      </div>
      <form className="commentForm">
        <input type="text" name="" id="" placeholder="Add a comment" />
        <div className="emoji">
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div onClick={() => setOpen((prev) => !prev)}>😊</div>
          {open && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;

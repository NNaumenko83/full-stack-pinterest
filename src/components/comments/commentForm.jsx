import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

export const CommentForm = () => {
  const [open, setOpen] = useState(false);
  return (
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
  );
};

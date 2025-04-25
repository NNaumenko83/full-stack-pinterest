import "./postInteractions.css";
import Image from "../image/image";

const PostInteractions = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <Image path="/general/react.svg" alt="pic" />
        273
        <Image path="/general/share.svg" alt="pic" />
        <Image path="/general/more.svg" alt="pic" />
      </div>
      <button type="button">Save</button>
    </div>
  );
};

export default PostInteractions;

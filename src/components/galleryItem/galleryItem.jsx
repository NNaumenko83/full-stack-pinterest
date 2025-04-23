import Image from "../image/image";
import "./galleryItem.css";
import { Link } from "react-router";

const GalleryItem = ({ item }) => {
  const optimazedHeight = (372 * item.hight) / item.hight;

  return (
    <div className="galleryItem" style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}>
      {/* <img src={item.media} alt="phot" /> */}
      <Image path={item.media} alt="picture" w={372} h={optimazedHeight} />

      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton" type="button">
        Save
      </button>
      <div className="overlayIcons">
        <button type="button">
          <Image path="/general/share.svg" alt="share" />
        </button>
        <button type="button">
          <Image path="/general/more.svg" alt="share" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;

import "./topBar.css";
import Image from "../image/image";
import UserButton from "../userButton/userButton";

const TopBar = () => {
  return (
    <div className="topBar">
      {/* SEARCH */}
      <div className="search">
        <Image path="/general/search.svg" alt="" className="" />
        <input type="text" className="" placeholder="Search" />
      </div>
      {/* USER */}
      <UserButton />
    </div>
  );
};

export default TopBar;

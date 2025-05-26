import "./topBar.css";
import { useNavigate } from "react-router";
import Image from "../image/image";
import UserButton from "../userButton/userButton";

const TopBar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?search=${e.target[0].value}`);
  };

  return (
    <div className="topBar">
      {/* SEARCH */}
      <form onSubmit={handleSubmit} className="search">
        <Image path="/general/search.svg" alt="" className="" />
        <input type="text" className="" placeholder="Search" />
      </form>
      {/* USER */}
      <UserButton />
    </div>
  );
};

export default TopBar;

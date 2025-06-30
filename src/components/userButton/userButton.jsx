import { useState } from "react";
import Image from "../image/image";
import "./userButton.css";
import apiRequest from "../../utils/apiRequest";
import { useNavigate } from "react-router";
import useAuthStore from "../../utils/authStore";
import { Link } from "react-router";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { currentUser, removeCurrentUser } = useAuthStore();
  console.log("currentUser:", currentUser);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/users/auth/logout", {});
      removeCurrentUser();
      navigate("/auth");
    } catch (err) {}
  };

  return currentUser ? (
    <div className="userButton">
      <Image path={currentUser.img || "/general/noAvatar.png"} alt="" />

      <Image
        onClick={() => setOpen((prev) => !prev)}
        path="/general/arrow.svg"
        alt=""
        className="arrow"
      />
      {open && (
        <div className="userOptions">
          <Link to={`/profile/${currentUser.userName}`} className="userOption">
            Profile
          </Link>
          <div className="userOption">Settings</div>
          <div className="userOption" onClick={handleLogout}>
            Logout
          </div>
        </div>
      )}
    </div>
  ) : (
    <Link to="/auth" className="loginLink">
      Login / Sign Up
    </Link>
  );
};

export default UserButton;

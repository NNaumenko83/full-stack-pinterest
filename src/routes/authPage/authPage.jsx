import "./authPage.css";
import { useState } from "react";
import Image from "../../components/image/image.jsx";
import apiRequest from "../../utils/apiRequest.js";
import { useNavigate } from "react-router";
import useAuthStore from "../../utils/authStore.js";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await apiRequest.post(
        `/users/auth/${isRegister ? "register" : "login"}`,
        data
      );

      setCurrentUser(res.data.user);

      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="/general/logo.png" alt="logo" w={36} h={36} />
        <h1 className="">
          {isRegister ? "Create an account" : "Login to your account"}
        </h1>
        {isRegister ? (
          <form key="register" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="userName"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">Name</label>
              <input
                type="text"
                name="displayName"
                id="displayName"
                placeholder="Name"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">Register</button>
            <p className="" onClick={() => setIsRegister(false)}>
              Do you have an account? <b>Login</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form key="login" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">Login</button>
            <p className="" onClick={() => setIsRegister(true)}>
              Don't have an account <b>Register</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;

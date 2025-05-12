import "./authPage.css";
import { useState } from "react";
import Image from "../../components/image/image.jsx";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="/general/logo.png" alt="logo" w={36} h={36} />
        <h1 className="">
          {isRegister ? "Create an account" : "Login to your account"}
        </h1>
        {isRegister ? (
          <form key="register">
            <div className="formGroup">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
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
            {error && <p classname="error">{error}</p>}
          </form>
        ) : (
          <form key="login">
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
            {error && <p classname="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;

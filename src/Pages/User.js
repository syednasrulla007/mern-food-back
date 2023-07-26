import React, { useState } from "react";
import axios from "axios";
import "./user.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    navigate("/auth");
  };
  return (
    <>
      {" "}
      <div className="usercontainer"> </div>
      {!cookies.access_token ? (
        <Login />
      ) : (
        <div className="logdiv">
          <i
            class="fa fa-times"
            onClick={() => {
              navigate("/");
            }}
          ></i>
          <button onClick={logout} className="logout">
            Log out
          </button>
        </div>
      )}
    </>
  );
};
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [ setCookies] = useCookies(["access_token"]);
  // const [ _,setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const Onsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://food-backend-zcam.onrender.com/auth/login",
        {
          username,
          password,
        }
      );
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userId", response.data.userId);
      alert("logged in Successfully!!!!!!");
      navigate("/");
    } catch (error) {
      console.error("error");
    }
  };
  return (
    <div className="login">
      <i
        class="fa fa-times"
        on
        onClick={() => {
          navigate("/");
        }}
      ></i>
      <form on onSubmit={Onsubmit}>
        <h2>LOG IN </h2>

        <div className="inputdiv">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username1"
            placeholder="Enter UserName Here"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password1"
            value={password}
            placeholder="Enter Password Here "
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="yellow">
          LOG IN
        </button>
      </form>

      <p>
        Don't have an Account yet?{" "}
        <Link to="/auth/register" className="link">
          Sign Up
        </Link>{" "}
      </p>
    </div>
  );
};

export default User;

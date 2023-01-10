import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import { useNavigate } from "react-router-dom";

import Button from "../Button";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./style.scss";

const Loader = () => {
  return (
    <div style={{ width: "100px" }}>
      <ContentLoader viewBox="0 0 100 30">
        <rect x="0" y="0" rx="10" ry="10" width="100" height="30" />
      </ContentLoader>
    </div>
  );
};

const AuthMenu = ({ user, isLoading, logout }) => {
  const navigate = useNavigate();
  const [showAuthMenu, setShowAuthMenu] = useState(false);
  return isLoading ? (
    <Loader />
  ) : user ? (
    <div className="auth-container">
      <Button
        label={
          <span className="auth-text">
            {user && `Hi, ${user?.first_name} ${user?.last_name}`}{" "}
            <ArrowDropDownIcon />
          </span>
        }
        onClick={() => setShowAuthMenu(!showAuthMenu)}
      />
      {showAuthMenu && (
        <ul className="options-wrapper">
          <li
            className="auth-menu-option"
            onClick={() => {
              setShowAuthMenu(false);
              navigate("/dashboard");
            }}
          >
            My Dashboard
          </li>
          <li
            className="auth-menu-option"
            onClick={() => {
              setShowAuthMenu(false);
              localStorage.removeItem("authToken");
              logout();
              navigate("/");
            }}
          >
            Logout
          </li>
        </ul>
      )}
    </div>
  ) : (
    <>
      <Button
        label={"Login"}
        className="login-btn"
        variant={"secondary"}
        onClick={() => navigate("/login")}
      />
      <Button label={"Sign Up"} onClick={() => navigate("/create-account")} />
    </>
  );
};

export default AuthMenu;

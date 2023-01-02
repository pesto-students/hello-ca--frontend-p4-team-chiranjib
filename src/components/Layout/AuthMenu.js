import React from "react";
import ContentLoader from "react-content-loader";
import { useNavigate } from "react-router-dom";

import Button from "../Button";

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

const AuthMenu = ({ user, isLoading }) => {
  const navigate = useNavigate();
  return isLoading ? (
    <Loader />
  ) : user ? (
    <Button label={user && `Hi, ${user?.first_name} ${user?.last_name}`} />
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

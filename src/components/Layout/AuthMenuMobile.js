import React from "react";
import { MenuItem, Typography } from "@mui/material";

import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeUserDetails } from "../../store/common/User/actions";

const AuthMenuMobile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if(user?.data) {
      return (
          <>
          <MenuItem key="login" onClick={() => navigate("/dashboard")}>
            <Typography textAlign="center">My Dashboard</Typography>
          </MenuItem>
    
          <MenuItem key="signup" onClick={() => {
              localStorage.removeItem("authToken");
              dispatch(removeUserDetails())
              navigate("/");
          }}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
          </>
      )
  }

  return (
    <>
      <MenuItem key="login" onClick={() => navigate("/login")}>
        <Typography textAlign="center">Login</Typography>
      </MenuItem>

      <MenuItem key="signup" onClick={() => navigate("/create-account")}>
        <Typography textAlign="center">Sign Up</Typography>
      </MenuItem>
    </>
  );
};

export default AuthMenuMobile;

import React, { useEffect } from "react";

import Grid from "@mui/material/Grid";

import Layout from "../../components/Layout";
import LoginForm from "./LoginForm";

import theme from "../../config/theme";

import "./style.scss";

const Login = () => {
  useEffect(() => {
    document.title = "Login | Hello CA";
  }, []);

  return (
    <Layout className="login-container">
      <Grid container>
        <Grid item md={6}>
          <div
            className="login-image-container"
            style={{
              backgroundColor: theme.palette.background.dark,
            }}
          ></div>
        </Grid>
        <Grid item md={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Login;

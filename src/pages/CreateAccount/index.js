import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";

import Layout from "../../components/Layout";
import CreateAccountWrapper from "./CreateAccountWrapper";

import theme from "../../config/theme";

import "./style.scss";

const CreateAccount = () => {
  useEffect(() => {
    document.title = "Create New Account | Hello CA";
  }, []);

  return (
    <Layout className="create-account-container">
      <Grid container alignItems="center">
        <Grid item md={6}>
          <div
            className="create-account-image-container"
            style={{
              backgroundColor: theme.palette.background.dark,
            }}
          ></div>
        </Grid>
        <Grid item md={6}>
          <CreateAccountWrapper />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CreateAccount;

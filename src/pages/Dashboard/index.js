import React from "react";
import "./style.scss";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Talktime from "./components/Talktime";
import ProfileCard from "./components/ProfileCard";
import History from "./components/History";
import Topics from "./components/Topics";

import { getUserDetails } from "../../utils/helpers/common";

const Dashboard = () => {
  const userInfo = getUserDetails();
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={9}>
          <Card variant="filled">
            <Typography
              component="h1"
              variant="h1"
              fontSize={20}
              className="welcome-text"
            >
              Welcome {userInfo.name}, get started with a call
            </Typography>

            <Topics />
          </Card>

          <History />
        </Grid>

        <Grid item xs={12} lg={3}>
          <Talktime />

          <ProfileCard />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;

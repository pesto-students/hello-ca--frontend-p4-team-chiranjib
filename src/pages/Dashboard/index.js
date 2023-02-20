import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Talktime from "./components/Talktime";
import ProfileCard from "./components/ProfileCard";
import History from "./components/History";
import Topics from "./components/Topics";

const Dashboard = () => {
  const user = useSelector((state) => state.user);
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
              Welcome{" "}
              <b>
                {user?.data?.first_name} {user?.data?.last_name}
              </b>
              ,{" "}
              {user?.data?.user_type === "USER"
                ? "get started with a call"
                : user?.data?.user_type === "CA"
                ? "enable topics to get calls"
                : ""}
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

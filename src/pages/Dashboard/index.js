import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Talktime from "./components/Talktime";
import ProfileCard from "./components/ProfileCard";
import History from "./components/History";
import Topics from "./components/Topics";

const Dashboard = (props) => {
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
                {props?.user?.data?.first_name} {props?.user?.data?.last_name}
              </b>
              , get started with a call
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // getUserDetails: getUserDetails,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

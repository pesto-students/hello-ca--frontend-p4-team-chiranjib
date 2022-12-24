import React, { useState } from "react";
import "./style.scss";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Talktime from "./components/Talktime";
import ProfileCard from "./components/ProfileCard";
import History from "./components/History";

import { getUserDetails } from "../../utils/helpers/common";

const Dashboard = () => {
  const [selectedTopic, setSelectedTopic] = useState(["TAX"]);
  const userInfo = getUserDetails();

  const topics = [
    {
      label: "Tax",
      slug: "TAX",
    },
    {
      label: "GST",
      slug: "GST",
    },
    {
      label: "Audit",
      slug: "AUDIT",
    },
    {
      label: "Start Up",
      slug: "START_UP",
    },
    {
      label: "Tax Planning",
      slug: "TAX_PLANNING",
    },
    {
      label: "TDS",
      slug: "TDS",
    },
    {
      label: "Partnership",
      slug: "PARTNERSHIP",
    },
  ];
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

            <Grid container className="topics-wrapper">
              <Grid item xs={6}>
                <Grid container spacing={1}>
                  {topics?.map((topic) => (
                    <Grid item xs={4}>
                      <div
                        className={`topic ${
                          selectedTopic.includes(topic.slug) ? "selected" : ""
                        }`}
                      >
                        {topic.label}
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid xs={6}>{/* Image */}</Grid>
            </Grid>

            <Button label={"Get Started"} className="get-started-btn" />
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

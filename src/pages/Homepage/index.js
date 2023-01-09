import React, { useEffect } from "react";

import Layout from "../../components/Layout";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import displayImg from "../../assets/img/girl-hero-bg.png";

import "./style.scss";

const Home = () => {
  useEffect(() => {
    document.title = "Hello CA - CA Just Call Away";
  }, []);

  return (
    <Layout className="homepage-container">
      <Grid
        container
        component="section"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={7} component="section" sx={{ pl: 5 }}>
          <Typography
            variant="h1"
            component="h1"
            align="left"
            sx={{ fontSize: 40, color: "#1f396d", lineHeight: "60px" }}
          >
            Get All Your <br /> Queries Answered <br /> By Our Experienced
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            align="left"
            sx={{ fontSize: 60, color: "#000", lineHeight: "100px" }}
          >
            Charted Accountants
          </Typography>
          <Box sx={{ mt: 3, mb: 3 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ fontSize: 20, padding: "10px 50px" }}
            >
              GET STARTED
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} component="section">
          <Box
            component="img"
            src={`${displayImg}`}
            alt="Hello CA - Get CA advice on call"
            loading="lazy"
            minHeight="600px"
            height="600px"
          ></Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;

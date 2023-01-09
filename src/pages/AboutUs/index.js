import React, { useEffect } from "react";

import Layout from "../../components/Layout";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "./style.scss";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | Hello CA";
  }, []);

  return (
    <Layout className="about-us-container">
      <Grid
        container
        component="main"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <CssBaseline />
        <Grid item component="section" maxWidth="md">
          <Typography
            component="h2"
            variant="h2"
            sx={{
              mt: 5,
              mb: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            About Us
          </Typography>

          <Typography
            component="p"
            variant="h6"
            sx={{
              mt: 5,
              mb: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            align="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            vehicula dapibus tincidunt. Duis sapien elit, euismod sed vestibulum
            quis, sagittis ut massa. Donec at neque eget lacus placerat sodales.
          </Typography>

          <Box
            sx={{
              mt: 3,
              mb: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button type="submit" variant="contained" size="large">
              CONTACT US
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AboutUs;

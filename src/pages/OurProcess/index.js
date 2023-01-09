import React, { useEffect } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Layout from "../../components/Layout";

import ourProcessImage from "../../assets/img/our-process.png";

import "./style.scss";

const OurProcess = () => {
  useEffect(() => {
    document.title = "Our Process | Hello CA";
  }, []);

  return (
    <Layout className="our-services-container">
      <Grid
        container
        component="main"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box xs={12}>
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
            Our Process
          </Typography>
        </Box>

        <Grid
          container
          component="section"
          spacing={2}
          maxWidth="lg"
          direction="row"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 5 }}
          sx={{
            backgroundImage: `url(${ourProcessImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            width: "70vw",
            height: "50vh",
          }}
        ></Grid>
      </Grid>

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
          Get Started
        </Button>
      </Box>
    </Layout>
  );
};

export default OurProcess;

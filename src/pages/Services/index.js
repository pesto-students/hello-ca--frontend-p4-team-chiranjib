import React, { useEffect } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Layout from "../../components/Layout";

import "./style.scss";

import useUI from "../../hooks/useUI.hook";

import CallIllustration from "../../assets/img/call-illustration-bg.png";
import { serviceList } from "../../utils/constants/siteSettings";

const Services = () => {
  const { getStarted } = useUI();

  useEffect(() => {
    document.title = "Services | Hello CA";
  }, []);

  return (
    <Layout className="services-container">
      <Grid container justifyContent="center">
        <Grid container component="main" maxWidth="lg">
          <Box
            xs={12}
            align="center"
            sx={{
              width: "100%",
              mt: 5,
              mb: 5,
            }}
          >
            <Typography component="h2" variant="h2">
              Queries We Answer
            </Typography>
          </Box>

          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <img
                src={CallIllustration}
                alt="call-illustration-bg"
                style={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <ul>
                {serviceList?.map((service) => (
                  <li>{service}</li>
                ))}
              </ul>

              <Box
                xs={12}
                // align="center"
                sx={{
                  width: "100%",
                  mt: 3,
                  mb: 3,
                  ml: 3,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  onClick={getStarted}
                >
                  Get Started
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Services;

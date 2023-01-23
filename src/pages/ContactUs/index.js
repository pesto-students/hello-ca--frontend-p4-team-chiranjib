import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Layout from "../../components/Layout";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import theme from "../../config/theme";

import displayImg from "../../assets/img/girl-hero-bg.png";
import logoImg from "../../assets/img/hello-ca-logo.svg";

import "./style.scss";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us | Hello CA";
  }, []);

  return (
    <Layout className="contact-us-container">
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          component="section"
          xs={false}
          sm={false}
          md={6}
          sx={{
            backgroundImage: `url(${displayImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: theme.palette.background.dark,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />

        <Grid item component="section" xs={12} sm={12} md={6} sx={{ p: 7 }}>
          <Box
            component="img"
            src={`${logoImg}`}
            alt="Hello CA - Get CA advice on call"
            loading="lazy"
            width="250px"
            sx={{ mb: 3 }}
          ></Box>

          <Typography component="h1" variant="h1" sx={{ mb: 4 }}>
            All your queries are just a call away.
          </Typography>

          <Button type="submit" variant="contained" size="large">
            Get Started
          </Button>

          <Typography component="address" variant="p" sx={{ mb: 4 }}>
            Add your location <br /> 123 Anywhere St., <br /> Any City, ST 12345
          </Typography>

          <Typography component="p" variant="p" sx={{ mb: 4 }}>
            123-456-7890
          </Typography>

          <Typography component="p" variant="p" sx={{ mb: 4 }}>
            hello@hello-ca.com
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mb: 5 }}>
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </Stack>

          <Stack direction="row" spacing={2}>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/our-process">Our Process</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/login">Login</Link>
          </Stack>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ContactUs;

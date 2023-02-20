import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/system";
import { Helmet } from "react-helmet";

import Footer from "./Footer";
import Header from "./Header";

import theme from "../../config/theme";

import siteSettings from "../../utils/constants/siteSettings";

const Layout = ({
  children,
  className = "",
  style = {},
  title,
  desciption,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{title || siteSettings.siteName}</title>
        <meta
          name="description"
          content={desciption || siteSettings.siteDescription}
        />
      </Helmet>
      <div className={className} style={style}>
        <CssBaseline />
        <Header />
        <Container>{children}</Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/system";

import Footer from "./Footer";
import Header from "./Header";

import theme from "../../config/theme";

const Layout = ({ children, className = "", style = {} }) => {
  return (
    <ThemeProvider theme={theme}>
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

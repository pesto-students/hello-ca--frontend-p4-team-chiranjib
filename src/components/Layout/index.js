import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/system";

import Footer from "./Footer";
import Header from "./Header";

import theme from "../../config/theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

import {
  Button,
  FormControl,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Logo from "../../components/Logo";

import "./style.scss";

const LoginForm = () => {
  const handleLogin = (event) => {
    console.log("Login");
  };
  return (
    <div className="login-form-container">
      <Logo />
      <Typography component="h1" variant="h1" sx={{ mb: 4 }}>
        Login
      </Typography>
      <Typography component="div" variant="p" sx={{ mb: 4 }}>
        Welcome Back !
      </Typography>
      <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
        <FormControl sx={{ mb: 4 }}>
          <InputLabel>Please Enter Mobile</InputLabel>
          <OutlinedInput
            name="mobile"
            placeholder="00000 00000"
            autoFocus
            required
          />
        </FormControl>

        <FormControl sx={{ mb: 2 }}>
          <InputLabel>Please Enter OTP</InputLabel>
          <OutlinedInput
            name="otp"
            placeholder="Please Enter OTP"
            type="password"
            required
          />
        </FormControl>

        <FormControl
          sx={{
            mt: 3,
            mb: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button type="submit" variant="contained" size="large" componant="">
            Login
          </Button>
        </FormControl>

        <Grid
          container
          sx={{
            my: 4,
            pl: 10,
            pr: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid item>
            <Link href="/create-account" variant="body1">
              {"Don't have an account"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default LoginForm;

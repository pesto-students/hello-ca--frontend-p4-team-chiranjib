import React from "react";
import { Avatar, Paper, Typography } from "@mui/material";

import Button from "../../../../components/Button";

import theme from "../../../../config/theme";

const ProfileCard = () => {
  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        mt: 2,
        p: 4,
        border: "2px solid",
        borderColor: theme.palette.primary.main,
      }}
      justifyContent="center"
    >
      <Avatar alt="Remy Sharp" sx={{ width: 125, height: 125, margin: "auto" }}>
        BK
      </Avatar>

      <Typography component="p" fontSize={13} sx={{ mt: 3, color: "gray" }}>
        Name : First Name Last Name
      </Typography>

      <Typography component="p" fontSize={13} sx={{ mt: 1, color: "gray" }}>
        Mobile : +91 00000 00000
      </Typography>

      <Typography component="p" fontSize={13} sx={{ mt: 1, color: "gray" }}>
        Last Login : 1 Dec 2022, 12 PM
      </Typography>

      <Typography component="p" fontSize={13} sx={{ mt: 1, color: "gray" }}>
        Last Payment Done : ₹ 100
      </Typography>

      <Button
        className="add-talktime-btn"
        label={"Update Profile"}
        variant={"primary"}
        fullWidth
      />
    </Paper>
  );
};

export default ProfileCard;

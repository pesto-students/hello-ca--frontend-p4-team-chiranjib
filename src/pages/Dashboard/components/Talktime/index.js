import React from "react";
import "./style.css";
import { Paper, Typography } from "@mui/material";

import Card from "../../../../components/Card";
import Button from "../../../../components/Button";
import theme from "../../../../config/theme";

const Talktime = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        pr: 3,
        pl: 3,
        pb: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(to right bottom, #007FFF, #003479 120%)",
        color: "#fff",
      }}
    >
      <Typography component="span" fontSize={70} fontWeight={700}>
        100
        <Typography component="span" fontSize={25}>
          min
        </Typography>
      </Typography>
      
      <Typography component="span" fontSize={18} sx={{ mt: -1 }}>
        Available Talk Time
      </Typography>

      <Button
        className="add-talktime-btn"
        label={"Add Talk Time"}
        variant={"secondary"}
        fullWidth
      />
    </Paper>
  );
};

export default Talktime;

import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./style.scss";
import { Paper, Typography } from "@mui/material";

import Button from "../../../../components/Button";

const Talktime = (props) => {
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
        {props?.user?.data?.available_talk_time || 0}
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // getUserDetails: getUserDetails,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Talktime);

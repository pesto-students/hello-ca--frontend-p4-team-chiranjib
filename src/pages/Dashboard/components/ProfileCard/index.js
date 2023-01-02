import React from "react";
import { Avatar, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Button from "../../../../components/Button";

import theme from "../../../../config/theme";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const ProfileCard = (props) => {
  const navigate = useNavigate();

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
        {props?.user?.data?.first_name &&
          props?.user?.data?.first_name[0].toLocaleUpperCase()}
        {props?.user?.data?.last_name &&
          props?.user?.data?.last_name[0].toLocaleUpperCase()}
      </Avatar>

      <Typography component="p" fontSize={13} sx={{ mt: 3, color: "gray" }}>
        <b>Name :</b> {props?.user?.data?.first_name}{" "}
        {props?.user?.data?.last_name}
      </Typography>

      <Typography component="p" fontSize={13} sx={{ mt: 1, color: "gray" }}>
        <b>Mobile :</b> {props?.user?.data?.country_code}{" "}
        {props?.user?.data?.mobile}
      </Typography>

      <Typography component="p" fontSize={13} sx={{ mt: 1, color: "gray" }}>
        <b>Last Login :</b> {props?.user?.data?.last_login}
      </Typography>

      <Typography component="p" fontSize={13} sx={{ mt: 1, color: "gray" }}>
        <b>Last Payment Done :</b>{" "}
        {props?.user?.data?.last_payment &&
          `₹ ${props?.user?.data?.last_payment}`}
      </Typography>

      <Button
        className="add-talktime-btn"
        label={"Update Profile"}
        variant={"primary"}
        fullWidth
        onClick={() => navigate("/profile")}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);

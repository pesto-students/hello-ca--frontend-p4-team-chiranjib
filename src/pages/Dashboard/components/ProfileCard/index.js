import React, { useEffect, useState } from "react";
import { Avatar, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";

import UpdateProfileModal from "../UpdateProfileModal";

import theme from "../../../../config/theme";

const ProfileCard = (props) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [showUpdateProfileModal, setUpdateProfileModal] = useState(false);

  const openUpdateProfileModal = () => {
    setUpdateProfileModal(true);
  };

  const closeUpdateProfileModal = () => {
    setUpdateProfileModal(false);
  };

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
        {user?.data?.first_name &&
          user?.data?.first_name[0].toLocaleUpperCase()}
        {user?.data?.last_name && user?.data?.last_name[0].toLocaleUpperCase()}
      </Avatar>

      <Typography component="p" fontSize={13} sx={{ mt: 3, color: "gray" }}>
        <b>Name :</b> {user?.data?.first_name} {user?.data?.last_name}
      </Typography>

      <Typography component="p" fontSize={13} sx={{ mt: 1, color: "gray" }}>
        <b>Mobile :</b> {user?.data?.country_code} {user?.data?.mobile}
      </Typography>

      {user?.data?.user_type === "USER" ? (
        <Typography component="p" fontSize={13} sx={{ mt: 1, color: "gray" }}>
          <b>Last Login :</b> {props?.user?.data?.last_login}
        </Typography>
      ) : user?.data?.user_type === "CA" ? (
        <Typography component="p" fontSize={13} sx={{ mt: 1, color: "gray" }}>
          <b>CA Reg.No :</b> {user?.data?.member_registration_number}
        </Typography>
      ) : null}

      {user?.data?.user_type === "USER" ? (
        <Typography component="p" fontSize={13} sx={{ mt: 1, color: "gray" }}>
          <b>Last Payment Done :</b>{" "}
          {user?.data?.last_payment && `₹ ${user?.data?.last_payment}`}
        </Typography>
      ) : user?.data?.user_type === "CA" ? (
        <Typography component="p" fontSize={13} sx={{ mt: 1, color: "gray" }}>
          <b>Last Payout Done :</b>{" "}
          {user?.data?.last_payout && `₹ ${user?.data?.last_payout}`}
        </Typography>
      ) : null}

      <Button
        className="add-talktime-btn"
        label={"Update Profile"}
        variant={"primary"}
        fullWidth
        onClick={openUpdateProfileModal}
      />

      <Modal
        open={showUpdateProfileModal}
        handleClose={closeUpdateProfileModal}
        showCloseBtn
      >
        <UpdateProfileModal handleClose={closeUpdateProfileModal} />
      </Modal>
    </Paper>
  );
};

export default ProfileCard;

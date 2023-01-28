import React, { useEffect } from "react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import "./style.scss";

import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../../store/common/User/actions";

const UpdateProfileModal = ({ handleClose }) => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("authToken") && !user?.data) {
      dispatch(getUserDetails());
    }
  }, []);

  return (
    <div className="call-modal-container">
      <div className="call-modal-header">Update Profile</div>
      <div className="call-modal-content">
      <Input
          label="First Name"
          name="firstName"
          className="input-field-wrapper"
          placeholder="Enter your first name"
          value={user?.data?.first_name}
        />
        <Input
          label="Last Name"
          name="lastName"
          className="input-field-wrapper"
          placeholder="Enter your last name"
          value={user?.data?.last_name}
        />
        <Input
          label="Mobile Number"
          name="mobileNumber"
          className="input-field-wrapper"
          placeholder="Please enter Mobile number"
          value={user?.data?.mobile}
          disabled
        />
        <Button label="Update Profile" className="close-btn" />
      </div>
    </div>
  );
};

export default UpdateProfileModal;
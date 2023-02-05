import React, { useState } from "react";
import qs from "qs";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../../store/common/User/actions";
import { updateUserDetails } from "../../../../api";

import "./style.scss";

const PersonalUpdate = ({ handleClose }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [responseError, setResponseError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    firstName: user?.data?.first_name,
    lastName: user?.data?.last_name,
    mobile: user?.data?.mobile,
  });
  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    mobile: null,
  });

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    let error = errors[fieldName];

    switch (fieldName) {
      case "firstName":
        if (fieldValue) {
          error = "";
        } else {
          error = "Required!";
        }
        break;

      case "lastName":
        if (fieldValue) {
          error = "";
        } else {
          error = "Required!";
        }
        break;

      default:
        break;
    }

    setResponseError(null);

    setFormFields({
      ...formFields,
      [fieldName]: fieldValue,
    });

    setErrors({
      ...errors,
      [fieldName]: error,
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    const data = qs.stringify({
      first_name: formFields.firstName,
      last_name: formFields.lastName,
    });

    const headers = {
      "content-type": "application/x-www-form-urlencoded",
    };

    setIsLoading(true);
    const response = await updateUserDetails(data, headers);

    if (response && response?.data?.status === 200) {
      dispatch(getUserDetails());
      setIsLoading(false);
      handleClose(false);
    } else {
      console.log(response?.data?.error);
      setIsLoading(false);
    }
  };

  return (
    <form className="update-personal-details-form">
      <Input
        label="First Name"
        name="firstName"
        className="input-field-wrapper"
        placeholder="Enter your first name"
        onChange={handleChange}
        value={formFields.firstName}
        error={errors.firstName}
      />
      <Input
        label="Last Name"
        name="lastName"
        className="input-field-wrapper"
        placeholder="Enter your last name"
        onChange={handleChange}
        value={formFields.lastName}
        error={errors.lastName}
      />
      <Input
        label="Mobile Number"
        name="mobileNumber"
        className="input-field-wrapper"
        placeholder="Please enter Mobile number"
        onChange={handleChange}
        value={formFields.mobile}
        disabled
      />
      <Button
        label="Update"
        className="button primary btn"
        type="submit"
        fullWidth
        onClick={handleUpdate}
        isLoading={isLoading}
        disabled={isLoading}
      />
    </form>
  );
};

export default PersonalUpdate;

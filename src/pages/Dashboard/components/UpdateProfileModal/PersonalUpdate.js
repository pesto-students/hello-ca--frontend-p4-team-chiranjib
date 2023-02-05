import React, {useState} from "react";
import qs from "qs";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import { useSelector } from "react-redux";
import {updateUserDetails} from "../../../../api";

const PersonalUpdate = () => {

  const user = useSelector((state) => state.user);
  const [showUpdateProfileModal, setUpdateProfileModal] = useState(true);
  const [responseError, setResponseError] = useState(null);
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
          error = "First name can not be empty";
        }
      case "lastName":
        if (fieldValue) {
          error = "";
        } else {
          error = "Last name can not be empty";
        }
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
      first_name  : formFields.firstName,
      last_name   : formFields.lastName,
    });

    const headers = {
      "content-type": "application/x-www-form-urlencoded",
    };

    const response = await updateUserDetails(data, headers);
    
    if (response && response?.data?.status === 200) {
      setUpdateProfileModal(false);
    } else {
      console.log(response?.data?.error);
    }
    
  };

  return (
    <form>
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
        onClick={handleUpdate}
        />
    </form>
  );
};

export default PersonalUpdate;
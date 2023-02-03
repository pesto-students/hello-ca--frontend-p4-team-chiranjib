import React from "react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import { useSelector } from "react-redux";

const PersonalUpdate = () => {

  const user = useSelector((state) => state.user);

  return (
    <div>
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
      <Button label="Update" className="button primary btn" />
    </div>
  );
};

export default PersonalUpdate; 



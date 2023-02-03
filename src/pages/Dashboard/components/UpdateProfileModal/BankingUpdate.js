import React from "react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import { useSelector } from "react-redux";

const BankingUpdate = () => {

  const user = useSelector((state) => state.user);

  return (
    <div>
      <Input
        label="Please Enter Bank Name"
        name="bankName"
        className="input-field-wrapper"
        placeholder="Enter your first name"
        value={user?.data?.bank_name}
      />
      <Input
        label="Please Enter Branch Name"
        name="branchName"
        className="input-field-wrapper"
        placeholder="Enter your last name"
        value={user?.data?.branch_name}
      />
      <Input
        label="Please Enter IFSC Code"
        name="ifscCode"
        className="input-field-wrapper"
        placeholder="Please enter Mobile number"
        value={user?.data?.ifsc_code}
      />
      <Input
        label="Please Enter Account Number"
        name="accountNumber"
        className="input-field-wrapper"
        placeholder="Please enter Mobile number"
        value={user?.data?.account_number}
      />

      <Button label="Update" className="button primary btn" />
    </div>
  );
};

export default BankingUpdate;



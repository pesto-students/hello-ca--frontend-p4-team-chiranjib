import React, {useState} from "react";
import qs from "qs";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import { useSelector } from "react-redux";
import {updateUserDetails} from "../../../../api";

const BankingUpdate = () => {

  const user = useSelector((state) => state.user);
  const [showUpdateProfileModal, setUpdateProfileModal] = useState(true);
  const [responseError, setResponseError] = useState(null);
  
  const [formFields, setFormFields] = useState({
    bankName: user?.data?.bank_name,
    branchName: user?.data?.branch_name,
    ifscCode: user?.data?.ifsc_code,
    accountNumber: user?.data?.account_number
  });
  
  const [errors, setErrors] = useState({
    bankName: null,
    branchName: null,
    ifscCode: null,
    accountNumber: null,
  });

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    let error = errors[fieldName];

    switch (fieldName) {
      case "bankName":
        if (fieldValue) {
          error = "";
        } else {
          error = "Bank name can not be empty";
        }
      case "branchName":
        if (fieldValue) {
          error = "";
        } else {
          error = "Branch name can not be empty";
        }
      case "ifscCode":
        if (fieldValue) {
          error = "";
        } else {
          error = "IFSC code can not be empty";
        }
      case "accountNumber":
        if (fieldValue) {
          error = "";
        } else {
          error = "Account number can not be empty";
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
      bank_name   : formFields.bankName,
      branch_name   : formFields.branchName,
      ifsc_code   : formFields.ifscCode,
      account_number   : formFields.accountNumber
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
        label="Please Enter Bank Name"
        name="bankName"
        className="input-field-wrapper"
        placeholder="Enter your bank name"
        onChange={handleChange}
        value={formFields.bankName}
        error={errors.bankName}
      />
      <Input
        label="Please Enter Branch Name"
        name="branchName"
        className="input-field-wrapper"
        placeholder="Enter your branch name"
        onChange={handleChange}
        value={formFields.branchName}
        error={errors.branchName}
      />
      <Input
        label="Please Enter IFSC Code"
        name="ifscCode"
        className="input-field-wrapper"
        placeholder="Please enter ifsc code"
        onChange={handleChange}
        value={formFields.ifscCode}
        error={errors.ifscCode}
      />
      <Input
        label="Please Enter Account Number"
        name="accountNumber"
        className="input-field-wrapper"
        placeholder="Please enter account number"
        onChange={handleChange}
        value={formFields.accountNumber}
        error={errors.accountNumber}
      />

      <Button label="Update" className="button primary btn" />
    </form>
  );
};

export default BankingUpdate;



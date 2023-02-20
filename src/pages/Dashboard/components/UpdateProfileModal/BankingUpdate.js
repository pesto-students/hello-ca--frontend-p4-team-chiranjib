import React, { useState } from "react";
import qs from "qs";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../../store/common/User/actions";
import { updateUserDetails } from "../../../../api";

import "./style.scss";

const BankingUpdate = ({ handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseError, setResponseError] = useState(null);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState({
    bankName: user?.data?.bank_name,
    branchName: user?.data?.branch_name,
    ifscCode: user?.data?.ifsc_code,
    accountNumber: user?.data?.account_number,
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
        break;

      case "branchName":
        if (fieldValue) {
          error = "";
        } else {
          error = "Branch name can not be empty";
        }
        break;

      case "ifscCode":
        if (fieldValue) {
          error = "";
        } else {
          error = "IFSC code can not be empty";
        }
        break;

      case "accountNumber":
        if (fieldValue) {
          error = "";
        } else {
          error = "Account number can not be empty";
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
      bank_name: formFields.bankName,
      branch_name: formFields.branchName,
      ifsc_code: formFields.ifscCode,
      account_number: formFields.accountNumber,
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
    <form className="update-bank-details-form">
      <Input
        label="Please Enter Bank Name"
        name="bankName"
        className="input-field-wrapper"
        placeholder="Bank name"
        onChange={handleChange}
        value={formFields.bankName}
        error={errors.bankName}
      />
      <Input
        label="Please Enter Branch Name"
        name="branchName"
        className="input-field-wrapper"
        placeholder="Branch name"
        onChange={handleChange}
        value={formFields.branchName}
        error={errors.branchName}
      />
      <Input
        label="Please Enter IFSC Code"
        name="ifscCode"
        className="input-field-wrapper"
        placeholder="Ifsc code"
        onChange={handleChange}
        value={formFields.ifscCode}
        error={errors.ifscCode}
      />
      <Input
        label="Please Enter Account Number"
        name="accountNumber"
        className="input-field-wrapper"
        placeholder="Account number"
        onChange={handleChange}
        value={formFields.accountNumber}
        error={errors.accountNumber}
      />

      <Button
        label="Update"
        className="button primary btn"
        fullWidth
        isLoading={isLoading}
        disabled={isLoading}
        onClick={handleUpdate}
      />
    </form>
  );
};

export default BankingUpdate;

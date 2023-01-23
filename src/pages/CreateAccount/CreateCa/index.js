/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Alert from "../../../components/Alert";
import LoaderWrapper from "../../../components/Loader";

import "./style.scss";

import { getUserDetails } from "../../../store/common/User/actions";

import { charRegex, mobileRegex } from "../../../utils/constants/regex";
import { generateOtpForRegister, verifyOtp } from "../../../api";

const CreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    firstName: null,
    lastName: null,
    registrationNumber: null,
    mobileNumber: null,
    otp: null,
  });
  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    registrationNumber: null,
    mobileNumber: null,
    otp: null,
  });
  const [isOTPEnabled, setEnableOtp] = useState(false);
  const [responseError, setResponseError] = useState(null);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    let error = errors[fieldName];

    switch (fieldName) {
      case "firstName":
      case "lastName":
        if (fieldValue) {
          if (charRegex.test(fieldValue)) {
            error = "";
          } else {
            error = `Only Characters are allowed!`;
          }
        } else {
          error = "Required!";
        }
        break;

      case "registrationNumber":
        if (fieldValue) {
          //  Need to regex for CA number.
          error = "";
        } else {
          error = "Required!";
        }
        break;

      case "mobileNumber":
        if (fieldValue) {
          if (mobileRegex.test(fieldValue)) {
            error = "";
          } else {
            error = "Inavlid Mobile Numner";
          }
        } else {
          error = "Required!";
        }
        break;

      case "otp":
        if (fieldValue) {
          error = "";
        } else {
          error = "Inavlid OTP";
        }
        break;

      default:
        break;
    }

    if (fieldName !== "otp") setEnableOtp(false);

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

  const validate = async (event) => {
    event?.preventDefault();
    const requiredFields = [
      "firstName",
      "lastName",
      "registrationNumber",
      "mobileNumber",
    ];

    if (isOTPEnabled) requiredFields.push("otp");

    let newErrors = { ...errors };

    await requiredFields.map((fieldName) => {
      if (!formFields[fieldName]) {
        newErrors[fieldName] = "Required!";
      }
      return null;
    });

    await setErrors(newErrors);

    const hasData = requiredFields.map((fieldName) => formFields[fieldName]);
    const hasError = requiredFields.some((fieldName) => newErrors[fieldName]);

    if (hasData && !hasError) {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    if (!isOTPEnabled) {
      try {
        const data = qs.stringify({
          first_name: formFields.firstName,
          last_name: formFields.lastName,
          member_registration_number: formFields.registrationNumber,
          country_code: "91",
          mobile: formFields.mobileNumber,
          user_type: "CA",
        });

        const headers = {
          // "content-type": "application/x-www-form-urlencoded",
        };

        const response = await generateOtpForRegister(data, headers);

        if (response && response?.data?.status === 200) {
          setEnableOtp(true);
          setIsLoading(false);
        } else {
          setResponseError(response?.data?.info);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Login Error", error);
        setIsLoading(false);
      }
    } else {
      try {
        const response = await verifyOtp({
          country_code: "91",
          mobile: formFields.mobileNumber,
          otp: formFields.otp,
        });

        if (response && response?.status === 200 && response?.data?.token) {
          //   setEnableOtp(true);
          await localStorage.setItem("authToken", response?.data?.token);
          dispatch(getUserDetails());
          setIsLoading(false);
          navigate("/dashboard");
        } else {
          setResponseError(response?.data?.info);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Verifying OTP Error", error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (user?.data) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <div className="create-user-container">
      <form className="create-user-form">
        {responseError && (
          <Alert
            message={responseError}
            type="error"
            className="custom-alert-wrapper"
          />
        )}

        <Input
          label="First Name"
          name="firstName"
          className="input-field-wrapper"
          placeholder="Please enter First Name"
          onChange={handleChange}
          value={formFields.firstName}
          error={errors.firstName}
        />

        <Input
          label="Last Name"
          name="lastName"
          className="input-field-wrapper"
          placeholder="Please enter Last Name"
          onChange={handleChange}
          value={formFields.lastName}
          error={errors.lastName}
        />

        <Input
          label="CA Registration Number"
          name="registrationNumber"
          type="number"
          className="input-field-wrapper"
          placeholder="Please enter CA Registration Number"
          onChange={handleChange}
          value={formFields.registrationNumber}
          error={errors.registrationNumber}
        />

        <Input
          label="Mobile Number"
          name="mobileNumber"
          type="number"
          className="input-field-wrapper"
          placeholder="Please enter Mobile Number"
          onChange={handleChange}
          value={formFields.mobileNumber}
          error={errors.mobileNumber}
        />

        {isOTPEnabled && (
          <Input
            label="OTP"
            name="otp"
            type="number"
            className="input-field-wrapper"
            placeholder="Please enter OTP"
            onChange={handleChange}
            value={formFields.otp}
            error={errors.otp}
            autoFocus
          />
        )}

        <div className="login-btn-container">
          <Button
            label={!isOTPEnabled ? "Generate OTP" : "Create Account"}
            type="submit"
            onClick={validate}
          />
        </div>

        <p className="back-to-home-txt">
          <Link to="/">Back to Home</Link>
        </p>
      </form>

      {isLoading && <LoaderWrapper />}
    </div>
  );
};

export default CreateUser;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { Typography } from "@mui/material";

import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Alert from "../../components/Alert";
import LoaderWrapper from "../../components/Loader";

import "./style.scss";

import { getUserDetails } from "../../store/common/User/actions";

import { mobileRegex } from "../../utils/constants/regex";
import { generateOtpForLogin, verifyOtp } from "../../api";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    mobileNumber: null,
    otp: null,
  });
  const [errors, setErrors] = useState({
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
      case "mobileNumber":
        if (fieldValue && mobileRegex.test(fieldValue)) {
          error = "";
        } else {
          error = "Inavlid Mobile Numner";
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
    const requiredFields = ["mobileNumber"];

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
          country_code: "91",
          mobile: formFields.mobileNumber,
        });

        const headers = {
          "content-type": "application/x-www-form-urlencoded",
        };

        const response = await generateOtpForLogin(data, headers);

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
    <div className="login-form-container">
      <Logo />
      <Typography component="h1" variant="h1" sx={{ mb: 4 }}>
        Login
      </Typography>

      <Typography component="div" variant="p" sx={{ mb: 4 }}>
        Welcome Back !
      </Typography>

      <form className="login-form">
        {responseError && (
          <Alert
            message={responseError}
            type="error"
            className="custom-alert-wrapper"
          />
        )}

        <Input
          label="Mobile Number"
          name="mobileNumber"
          type="number"
          className="input-field-wrapper"
          placeholder="Please enter Mobile number"
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
            label={!isOTPEnabled ? "Generate OTP" : "Login"}
            type="submit"
            onClick={validate}
          />
        </div>

        <p className="register-text">
          Don't have an account? <Link to="/create-account">Register</Link>
        </p>
      </form>

      {isLoading && <LoaderWrapper />}
    </div>
  );
};

export default LoginForm;

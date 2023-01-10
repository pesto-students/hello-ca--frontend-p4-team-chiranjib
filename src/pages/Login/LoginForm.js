import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import qs from "qs";
import { Typography } from "@mui/material";

import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Alert from "../../components/Alert";

import "./style.scss";

import { getUserDetails } from "../../store/common/User/actions";

import { mobileRegex } from "../../utils/constants/regex";
import { generateOtpForLogin, verifyOtp } from "../../api";

const LoginForm = (props) => {
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

  const handleLogin = async (event) => {
    event?.preventDefault();
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
        } else {
          setResponseError(response?.data?.info);
        }
      } catch (error) {
        console.log("Login Error", error);
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
          await localStorage.setItem("AuthToken", response?.data?.token);
          props.getUserDetails();
          navigate("/dashboard");
        } else {
          setResponseError(response?.data?.info);
        }
      } catch (error) {
        console.log("Verifying OTP Error", error);
      }
    }
  };

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
            className="input-field-wrapper"
            placeholder="Please enter OTP"
            onChange={handleChange}
            value={formFields.otp}
            error={errors.otp}
          />
        )}

        <div className="login-btn-container">
          <Button
            label={!isOTPEnabled ? "Generate OTP" : "Login"}
            type="submit"
            onClick={handleLogin}
          />
        </div>

        <p className="register-text">
          Don't have an account? <Link to="/create-account">Register</Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUserDetails: getUserDetails,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

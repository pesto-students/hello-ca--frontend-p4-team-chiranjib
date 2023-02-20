/**
 *
 * Usage
 *
 *      <Alert
 *          message={responseError}
 *          type="error"
 *          className="custom-alert-wrapper"
 *      />
 *
 */

import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Alert = ({ message, type = "info", className = "" }) => {
  return (
    <div
      className={`custom-alert ${
        type === "error"
          ? "alert-error"
          : type === "success"
          ? "alert-success"
          : "alert-info"
      } ${className}`}
    >
      {message}
    </div>
  );
};

export default Alert;

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

Alert.defaultProps = {
  message: "",
  type: "info",
  className: "",
};

/**
 *
 * Usage
 *
 * <Button
 *      label={"Button"}
 *      className=""
 *      variant="primary"   //  it will be one of ["primary", "secondary"]
 *      onClick={handleClick}   //  click func
 *      ...
 * />
 *
 */

import React from "react";
import PropTypes from "prop-types";

import "./style.scss";
import InlineLoader from "../Loader/InlineLoader";

const Button = ({
  label,
  type,
  variant,
  className,
  onClick,
  disabled = false,
  fullWidth,
  isLoading = false,
}) => {
  return (
    <button
      className={`button ${variant} ${className}`}
      style={{ width: fullWidth && "100%" }}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
      {isLoading && (
        <InlineLoader width={"20px"} height={"20px"} color={"#ccc"} />
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  label: "Button",
  type: "button",
  variant: "primary",
  className: "",
  onClick: () => {},
  disabled: false,
  fullWidth: false,
};

export default Button;

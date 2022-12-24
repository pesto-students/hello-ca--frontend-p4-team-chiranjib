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

const Button = ({
  label,
  type,
  variant,
  className,
  onClick,
  disabled,
  fullWidth,
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

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./input.scss";
import { inputTypes } from "./inputTypes";

// npm install --save-dev @iconify/react @iconify/icons-bx
import { Icon, InlineIcon } from '@iconify/react';
import bxsCheckCircle from '@iconify/icons-bx/bxs-check-circle';
import bxsXCircle from '@iconify/icons-bx/bxs-x-circle';

function Input({
  placeholder,
  inputType,
  value,
  handleOnChange,
  checked,
  isRequired,
  withError,
}) {
  return (
    <div className="icon-input">
      <input
        className={` ${withError ? "valid" : "invalid"}`}
        placeholder={placeholder}
        type={inputType}
        value={value}
        checked={checked}
        onChange={(e) => handleOnChange(e.target.value)}
        required={isRequired}
      />
      <div className="icons">
        <Icon icon={bxsCheckCircle} className="check" />
        <Icon icon={bxsXCircle} className="x" />
      </div>
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  withError: PropTypes.bool,
  messageError: PropTypes.string,
  size: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "",
  inputType: inputTypes.TEXT,
  maxLength: "120",
  minLength: "2",
  isRequired: true,
  withError: false,
  size: "",
  messageError: "",
};

export default Input;

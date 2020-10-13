import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./input.scss";
import { inputTypes } from "./inputTypes";

// npm install --save-dev @iconify/react @iconify/icons-bx
import { Icon, InlineIcon } from "@iconify/react";
import bxsCheckCircle from "@iconify/icons-bx/bxs-check-circle";
import bxsXCircle from "@iconify/icons-bx/bxs-x-circle";

function Input({
  placeholder,
  inputType,
  value,
  handleOnChange,
  checked,
  isRequired,
  withError,
  useError,
}) {
  return (
    <div className="icon-input">
      <input
        className={` ${useError ? (withError ? "valid" : "invalid") : null}`}
        placeholder={placeholder}
        type={inputType}
        value={value}
        checked={checked}
        onChange={(e) => handleOnChange(e.target.value)}
        required={isRequired}
      />
      {inputType !== inputTypes.FILTER ? (
        <div className="icons">
          <Icon icon={bxsCheckCircle} className="check" />
          <Icon icon={bxsXCircle} className="x" />
        </div>
      ) : null}
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  useError: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: "",
  inputType: inputTypes.FILTER,
  isRequired: true,
  withError: false,
  useError: false,
};

export default Input;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Input from "~/components/input/index";
import { inputTypes } from "~/components/input/inputTypes";
import { translationText } from "~/utils/language/index";
import "./login.scss";

function Login({ language }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const languageText = translationText(language)["langding"];

  useEffect(() => {
    error && setError(false);
  }, [login, password]);

  return (
    <div>
      <div className="containerLogin">
        <h2>{languageText["signIn"]}</h2>
        <form>
          <Input
            placeholder={languageText["placeholderUSER"]}
            inputType={inputTypes.USER}
            value={login}
            handleOnChange={setLogin}
            withError={error}
          />
          <Input
            placeholder={languageText["placeholderPASSWORD"]}
            inputType={inputTypes.PASSWORD}
            value={password}
            handleOnChange={setPassword}
            withError={error}
          />
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {};

const mapToStateToProps = (state) => state;

export default connect(mapToStateToProps)(Login);

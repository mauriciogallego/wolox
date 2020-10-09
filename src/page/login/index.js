import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Input from "~/components/input/index";
import { inputTypes } from "~/components/input/inputTypes";
import { translationText } from "~/utils/language/index";
import Menu from "~/components/menu/index";
import "./login.scss";
import img from "~/assets/Ic_Tecnologys.svg";
import Text from "~/components/text/index";
import { Button } from "~/components/buttons/index";
import * as httpClient from "~/Api/index";
import { LOGIN } from "~/utils/constants";
import {} from "wouter";
import useLocation from "wouter/use-location";

function Login({ language, authRedux }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);
  const languageText = translationText(language);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    error && setError(false);
  }, [login, password]);

  const auth = async (e) => {
    e.preventDefault();
    const res = await httpClient.post("/login", {
      data: { email: login, password },
    });
    authRedux({ auth: { token: res.token }, user: login });
    setLocation("/list");
  };
  return (
    <div className="container">
      <Menu />
      <div className="containerLogin">
        <div className="containerImg">
          <img src={img} />
        </div>
        <div className="form">
          <form className="login">
            <Text
              ClassName="textTitle"
              paragraph={languageText["titleLogin"]}
            />
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
            <div className="checkbox">
              <Input
                inputType={inputTypes.CHECKBOX}
                handleOnChange={setCheck}
                cheked={check}
                isRequired={false}
                withError={error}
              />
              <p>Recordar usuario</p>
            </div>
            <Button handleClick={auth} title="Entrar" />
          </form>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {};

const mapDispatchToProp = (dispatch) => {
  return {
    authRedux: (payload) => dispatch({ type: LOGIN, payload }),
  };
};

const mapToStateToProps = (state) => {
  console.log("state", state);
  return state;
};

export default connect(mapToStateToProps, mapDispatchToProp)(Login);

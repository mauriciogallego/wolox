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
import useLocation from "wouter/use-location";

function Login({ language, authRedux }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);
  const languageText = translationText(language);
  const [location, setLocation] = useLocation();

  const auth = async (e) => {
    e.preventDefault();
    if (error) return
    const res = await httpClient.post("/login", {
      data: { email: login, password },
    });
    authRedux({
      auth: { token: res.token },
      user: { email: login, remember: check },
    });
    setLocation("/list");
  };

  const handleUser = (e) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("e", e);
    if (emailRegex.test(e)) {
      setError(false);
    } else {
      setError(true);
    }
    setLogin(e);
  };

  console.log('check', check)
  return (
    <div className="container">
      <Menu />
      <div className="containerLogin">
        <div className="containerImgLogin">
          <img src={img} />
        </div>
        <div className="form">
          <form onSubmit={auth} className="login">
            <Text
              ClassName="textTitle"
              paragraph={languageText["titleLogin"]}
            />
            <div className="br" />
            <Input
              placeholder={languageText["placeholderUSER"]}
              inputType={inputTypes.USER}
              value={login}
              handleOnChange={handleUser}
              withError={error}
              useError={login == "" ? false : true}
            />
            <div className="br" />
            <Input
              placeholder={languageText["placeholderPASSWORD"]}
              inputType={inputTypes.PASSWORD}
              value={password}
              handleOnChange={setPassword}
            />
            <div className="br" />
            <div className="checkbox">
              <Input
                inputType={inputTypes.CHECKBOX}
                handleOnChange={() => setCheck(!check)}
                cheked={check}
                isRequired={false}
                withError={error}
              />
              <p>{languageText["remember"]}</p>
            </div>
            <div className="br" />
            <Button title={languageText["access"]} />
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
  return state;
};

export default connect(mapToStateToProps, mapDispatchToProp)(Login);

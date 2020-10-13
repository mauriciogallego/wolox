import React from "react";
import PropTypes from "prop-types";
import Logo from "~/assets/logo_full_color.svg";
import { connect } from "react-redux";
import { translationText } from "~/utils/language/index";
import { LOGOUT } from "~/utils/constants";
import "./menu.scss";
import { Button } from "~/components/buttons/index";
import useLocation from "wouter/use-location";

function Menu({ language, auth, authRedux }) {
  const languageText = translationText(language);
  const [location, setLocation] = useLocation();
  return (
    <div className="containerMenu">
      <div className="containerImg">
        <img className="logo" src={Logo} />
      </div>
      <div className="containerButton">
        <Button
          title={languageText["buttonHome"]}
          ClassName="buttonClasic"
          handleClick={() => {
            setLocation("/");
          }}
        />
        <Button
          handleClick={() => {
            setLocation("/list");
          }}
          title={languageText["buttonBenefits"]}
          ClassName="buttonClasic"
        />
        <div className="containerButton3">
          {auth.token !== '' ? (
            <Button
              handleClick={() => {
                authRedux();
                setLocation("/");
              }}
              title={languageText["logout"]}
              ClassName="button3"
            />
          ) : (
            <Button
              handleClick={() => {
                setLocation("/login");
              }}
              title={languageText["signIn"]}
              ClassName="button3"
            />
          )}
        </div>
      </div>
    </div>
  );
}

Menu.propTypes = {};

const mapDispatchToProp = (dispatch) => {
  return {
    authRedux: () => dispatch({ type: LOGOUT }),
  };
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, mapDispatchToProp)(Menu);

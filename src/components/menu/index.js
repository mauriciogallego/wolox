import React from "react";
import PropTypes from "prop-types";
import Logo from "~/assets/logo_full_color.svg";
import { connect } from "react-redux";
import { translationText } from "~/utils/language/index";
import { Link } from "wouter";
import "./menu.scss";
import { Button } from "~/components/buttons/index";


function Menu({ language }) {
  const languageText = translationText(language);
  return (
    <div className="containerMenu">
      <div className="containerImg">
        <img className="logo" src={Logo} />
      </div>
      <div className="containerMenu-containerButton">
        <Link>
          <Button
            title={languageText["buttonHome"]}
            ClassName=""
          />
        </Link>
        <Link>
          <Button
            title={languageText["buttonBenefits"]}
            ClassName=""
          />
        </Link>
        <Link>
          <Button
            title={languageText["signIn"]}
            ClassName=""
          />
        </Link>
      </div>
    </div>
  );
}

Menu.propTypes = {};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Menu);

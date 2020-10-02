import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translationText } from "~/utils/language/index";

function Landing({ language }) {
  const languageText = translationText(language)["langding"];
  return <div>{languageText["title"]}</div>;
}

Landing.propTypes = {};

const mapToStateToProps = (state) => state;

export default connect(mapToStateToProps)(Landing);

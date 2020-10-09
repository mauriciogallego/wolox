import React from "react";
import PropTypes from "prop-types";
import { translationText } from "~/utils/language/index";
import Menu from "~/components/menu/index";
import { connect } from "react-redux";

function Filter({language}) {
  const languageText = translationText(language)["langding"];
  return <div className="container">
    <Menu />
  </div>;
}

Filter.propTypes = {};

const mapToStateToProps = (state) =>state;

export default connect(mapToStateToProps)(Filter);

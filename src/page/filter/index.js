import React from "react";
import PropTypes from "prop-types";
import { translationText } from "~/utils/language/index";
import { connect } from "react-redux";

function Filter({language}) {
  const languageText = translationText(language)["langding"];
  return <div>Filter</div>;
}

Filter.propTypes = {};

const mapToStateToProps = (state) =>state;

export default connect(mapToStateToProps)(Filter);

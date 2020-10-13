import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Text from "~/components/text/index";
import "./listOfTechs.scss";
import { translationText } from "~/utils/language/index";

function ListOfTechs({ techs, optionsFilter, language }) {
  const languageText = translationText(language);
  var applyFilter = [];
  let count = 0;
  useEffect(() => {
    techs.sort(optionsFilter.order == true ? asd : des);
  }, [optionsFilter]);

  applyFilter = techs.filter((i) => {
    if (optionsFilter.option == "") return true;
    return i.type == optionsFilter.option;
  });

  applyFilter = applyFilter.filter((element) => {
    if (optionsFilter.search === "") return true;
    let name = element.tech.toLowerCase();
    return name.startsWith(optionsFilter.search);
  });

  count = applyFilter.length;
  return (
    <Fragment>
      <div className="listTechs">
        {applyFilter.map((i) => {
          return (
            <div className="cardTech">
              <img src={i.logo} alt={i.tech} />
              <div className="textCard">
                <p className="titleTech">{i.tech}</p>
                <p>{`${languageText["language"]}: ${i.language}`}</p>
                <p>{`${languageText["type"]}: ${i.type}`}</p>
                <p>{`${languageText["year"]}: ${i.year}`}</p>
                <p>{`${languageText["license"]}: ${i.license}`}</p>
                <p>{`${languageText["author"]}: ${i.author}`}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="sumTechs">
        <Text
          orderColors={["bold"]}
          ClassName=""
          paragraph={languageText["sumTechs"]}
        />
        <p>{count}</p>
      </div>
    </Fragment>
  );
}

ListOfTechs.propTypes = {};

export default ListOfTechs;

const asd = (a, b) => {
  if (a.tech > b.tech) {
    return 1;
  }
  if (a.tech < b.tech) {
    return -1;
  }
  return 0;
};

const des = (a, b) => {
  if (a.tech < b.tech) {
    return 1;
  }
  if (a.tech > b.tech) {
    return -1;
  }
  return 0;
};

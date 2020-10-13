import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./listOfTechs.scss";

function ListOfTechs({ techs, optionsFilter }) {
  var applyFilter = [];
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

  return (
    <div className="listTechs">
      {applyFilter.map((i) => {
        return (
          <div className="cardTech">
            <img src={i.logo} alt={i.tech} />
            <div className="textCard">
              <p className="titleTech">{i.tech}</p>
              <p>{`Language: ${i.language}`}</p>
              <p>{`type: ${i.type}`}</p>
              <p>{`year: ${i.year}`}</p>
              <p>{`license: ${i.license}`}</p>
              <p>{`author: ${i.author}`}</p>
            </div>
          </div>
        );
      })}
    </div>
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

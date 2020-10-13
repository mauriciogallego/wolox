import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { translationText } from "~/utils/language/index";
import Menu from "~/components/menu/index";
import { connect } from "react-redux";
import { get } from "~/Api/index";
import ListOfTechs from "../../components/listOfTechs";
import Input from "~/components/input/index";
import "./filter.scss";
import { inputTypes } from "~/components/input/inputTypes";
import Text from "~/components/text/index";

function Filter({ language }) {
  const languageText = translationText(language);
  const [techs, setTechs] = useState([]);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState({
    selected: "",
    options: [""],
  });
  const [order, setOrder] = useState(true);

  useEffect(() => {
    const data = async () => {
      const response = await get("/techs");
      let typeTechs = [];
      response.map((i) => {
        if (typeTechs.indexOf(i.type) == -1) {
          typeTechs.push(i.type);
        }
      });
      setOption({ ...option, options: option.options.concat(typeTechs) });
      setTechs(response);
    };
    data();
  }, []);
  console.log("options", option);

  function changeSelect(e) {
    setOption({ ...option, selected: e.target.value });
  }

  const handleCheck = () => {
    setOrder(!order);
  };
  return (
    <div className="container">
      <Menu />
      <div className="containerTitleFilter">
        <Text
          orderColors={["bold blue"]}
          ClassName="titleFilter"
          paragraph={languageText["titleFilter"]}
        />
      </div>
      <div className="optionToFilter">
        <Input
        placeholder={languageText["searchTech"]}
          inputType={inputTypes.USER}
          value={search}
          handleOnChange={setSearch}
        />
        <select onChange={changeSelect} value={option.selected}>
          {option.options.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </select>
        <div className="filterChecked">
          <Input
            inputType={inputTypes.CHECKBOX}
            checked={!order}
            handleOnChange={handleCheck}
          />
          <p>{languageText["asd"]}</p>
        </div>
        <div className="filterChecked">
          <Input
            inputType={inputTypes.CHECKBOX}
            checked={order}
            handleOnChange={handleCheck}
          />
          <p>{languageText["des"]}</p>
        </div>
      </div>

      <ListOfTechs
        techs={techs}
        language={language}
        optionsFilter={{ search, option: option.selected, order }}
      />
    </div>
  );
}

Filter.propTypes = {};

const mapToStateToProps = (state) => state;

export default connect(mapToStateToProps)(Filter);

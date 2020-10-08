import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translationText } from "~/utils/language/index";
import { Button } from "~/components/buttons/index";
import CardIcon from "~/components/cardIcon/index";
import { listBenefits } from "./listBenefits";
import Menu from "~/components/menu/index";
import "./langding.scss";
import img from "~/assets/Img Hero/Ic_ilustra_Hero@3x.png";
import woloxFooter from "~/assets/Ic_Wolox_Footer.svg";
import Text from "~/components/text/index";

function Landing({ language }) {
  const languageText = translationText(language);
  return (
    <div className="containerLangding">
      <div className="header">
        <Menu />
        <div className="containerRow">
          <div className="containerTextWelcome">
            <Text
              orderColors={["bold", "bold", "green bold"]}
              ClassName="textWelcome"
              paragraph={languageText["posterLanding"]}
            />
          </div>
          <img className="img" src={img} alt={"Ic_ilustra_Hero@2x.png"} />
        </div>
      </div>
      <div className="containerRow">
        <div className="sectionA fiftyPorcent">
          <Text
            paragraph={languageText["twitterTitle"]}
            ClassName="textSection"
            orderColors={["blue", "green", "green"]}
          />
          <div>
            <icon />
            <Text
              paragraph={languageText["@Wolox"]}
              ClassName="twitterSectionA"
            />
          </div>
          <Button title={languageText["follow"]} />
        </div>
        <div className="sectionB fiftyPorcent">
          <Text
            paragraph={languageText["textBox1"]}
            ClassName={"textSection"}
            orderColors={["blue", "green"]}
          />
        </div>
      </div>
      <div className='containerBenefits'>
        <Text
          ClassName="textBenefits"
          orderColors={["blue"]}
          paragraph={languageText["textBenefits"]}
        />
      </div>

      <div className="containerRow listBenefits">
        {listBenefits.map((i, index) => {
          return (
            <CardIcon key={index} text={languageText[i.text]} icon={i.icon} />
          );
        })}
      </div>
      <div className="footer">
        <Text
          orderColors={["blue", "blue", "blue"]}
          paragraph={languageText["textFooter"]}
          ClassName="textFooter"
        />
        <Text
          orderColors={[]}
          paragraph={languageText["subTextFooter"]}
          ClassName="subTextFooter"
        />
        <Button title={languageText["buttonFooter"]} />
      </div>
      <img className="svg-footer" src={woloxFooter} alt="footer" />
    </div>
  );
}

Landing.propTypes = {};

const mapToStateToProps = (state) => state;

export default connect(mapToStateToProps)(Landing);

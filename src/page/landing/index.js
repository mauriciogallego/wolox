import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translationText } from "~/utils/language/index";
import { Button } from "~/components/buttons/index";
import CardIcon from "~/components/cardIcon/index";
import { listBenefits } from "./listBenefits";
import Menu from "~/components/menu/index";
import "./landing.scss";
import img from "~/assets/Img Hero/Ic_ilustra_Hero@3x.png";
import Text from "~/components/text/index";
import useLocation from "wouter/use-location";

function Landing({ language }) {
  const languageText = translationText(language);
  const [localtion, setLocation] = useLocation();
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
          <a target="_blank" href="https://twitter.com/Wolox">
            <Button title={languageText["follow"]} ClassName="buttonSectionA" />
          </a>
        </div>
        <div className="sectionB fiftyPorcent">
          <Text
            paragraph={languageText["textBox1"]}
            ClassName={"textSection"}
            orderColors={["blue", "green"]}
          />
        </div>
      </div>
      <div className="containerBenefits">
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
        <a target="_blank" href="https://www.wolox.com.ar/">
          <Button
            ClassName="buttonFooter"
            title={languageText["buttonFooter"]}
          />
        </a>
      </div>
    </div>
  );
}

Landing.propTypes = {};

const mapToStateToProps = (state) => state;

export default connect(mapToStateToProps)(Landing);

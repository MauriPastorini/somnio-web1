import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/About-us-header.module.scss"

const AboutUsHeaderSection = () => {
  const { t } = useTranslation();

  return (
    <div className="AboutUsHeaderSection">
      <img src={`./assets/images/about-us/about-us-header-bg.svg`} alt="" className="about-us-header__bg" />
      <img src={`./assets/images/about-us/about-us-header-path-1.svg`} alt="" className="about-us-header__path" />

      <div className="wrapper-content">
        <div className="text-and-image container custom-container">
          <div className="about-us-header-img__wrapper">
            <img src={`./assets/images/about-us/header-img.svg`} alt="" className="about-us-header-img img-fluid" />
          </div>

          <div className="about-us-header-text__wrapper" data-aos="fade-left">
            <h1 className="about-us-header-text title-1">{t("about_us.header.text_1")}</h1>
            <p className="about-us-header-text paragraph-1">{t("about_us.header.text_2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeaderSection;

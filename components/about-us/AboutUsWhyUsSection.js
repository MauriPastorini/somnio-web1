import React from "react";
import Background from "../../public/assets/about-us/about-us-why-us-bg.svg";
import { useTranslation } from "react-i18next";
import "./AboutUsWhyUsSection.module.scss";

const AboutUsWhyUsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="AboutUsWhyUsSection" style={{ backgroundImage: `url(${Background})` }}>
      <div className="about-us__content">
        <div className="section-header-light pt-100" data-aos="fade-in">
          <h2>{t("about_us.why_us.title")}</h2>
          <img src={"./assets/images/home-services-line-light.svg"} alt="" />
        </div>
        <p className="about-us__text container custom-container">{t("about_us.why_us.text_1")}</p>
        <p className="about-us__text container custom-container">{t("about_us.why_us.text_2")}</p>
        <p className="about-us__text container custom-container">{t("about_us.why_us.text_3")}</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default AboutUsWhyUsSection;

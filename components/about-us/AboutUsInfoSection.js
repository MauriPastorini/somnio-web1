import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/About-us-info.module.scss";

const AboutUsInfoSection = () => {
  const { t } = useTranslation();
  return (
    <div className="AboutUsInfoSection mt-200 mb-200">
      <img src="./assets/images/about-us/about-us-info-dots1.svg" className="about-us-info-dots1" alt="" />
      <div className="info-text-and-img container custom-container">
        <img src="./assets/images/common/logo-2.png" className="info-img" alt="" />
        <p className="info-text" data-aos="fade-left">
          {t("about_us.info.text")}
        </p>
      </div>
    </div>
  );
};

export default AboutUsInfoSection;

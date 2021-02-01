import React from "react";
//import AboutUsHowWeWorkCard from "../../../../components/AboutUsHowWeWorkCard/AboutUsHowWeWorkCard";
import { useTranslation } from "react-i18next";
import "./AboutUsHowWeWorkSection.module.scss";


const AboutUsHowWeWorkSection = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t("about_us.how_we_work.text_1"),
      text: t("about_us.how_we_work.text_2"),
      img: "howwework-card-agile.svg",
    },
    {
      title: t("about_us.how_we_work.text_3"),
      text: t("about_us.how_we_work.text_4"),
      img: "howwework-card-design.svg",
    },
  ];
  
  return (
    <div className="AboutUsHowWeWorkSection">
      <div className="how-we-work__content">
        <div className="section-header-light pt-100" data-aos="fade-in">
          <h2>{t("about_us.how_we_work.title")}</h2>
          <img src={"./assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div className="how-we-work__card-list container custom-container mb-150" data-aos="fade-up">
          {data.map((d, i) => (
            {/*<AboutUsHowWeWorkCard key={i} title={d.title} text={d.text} img={d.img} />*/}
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsHowWeWorkSection;

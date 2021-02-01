import React from "react";
//import AboutUsOurValueCard from "../../../../components/AboutUsOurValueCard/AboutUsOurValueCard";
//import { useTranslation } from 'react-i18next';
import "./AboutUsOurValuesSection.module.scss";


const AboutUsOurValuesSection = () => {
  const { t } = useTranslation();
  const firstRecord = [
    {
      img: "value-passion.svg",
      classImgName:'passion_shadow',
      title: t('about_us.our_values.value_1.title'),
      text: t('about_us.our_values.value_1.text')
    },
    {
      img: "value-quality.svg",
      classImgName:'quality_shadow',
      title: t('about_us.our_values.value_2.title'),
      text: t('about_us.our_values.value_2.text')
    },
    {
      img: "value-empathy.svg",
      classImgName:'empathy_shadow',
      title: t('about_us.our_values.value_3.title'),
      text: t('about_us.our_values.value_3.text')
    },
  ];
  
  const secondRecord = [
    {
      img: "value-communication.svg",
      classImgName:'communication_shadow',
      title: t('about_us.our_values.value_4.title'),
      text: t('about_us.our_values.value_4.text')
    },
    {
      img: "value-team.svg",
      classImgName:'team_shadow',
      title: t('about_us.our_values.value_5.title'),
      text: t('about_us.our_values.value_5.text')
    },
  ];
  
  return(
  <div className="AboutUsOurValuesSection">
    <img src="./assets/images/about-us/about-us-our-values-dots1.svg" className="about-us-our-values-dots1" alt=""/>
    <img src="./assets/images/about-us/about-us-our-values-dots2.svg" className="about-us-our-values-dots2" alt=""/>
    <div className="section-header-dark pt-100 mb-100" data-aos="fade-in">
  <h2>{t('about_us.our_values.title')}</h2>
      <img src={"./assets/images/home-services-line.svg"} alt="" />
    </div>
    <div className="values-list--first mb-50 container custom-container">
        {firstRecord.map((r, i) => (
          {/*<AboutUsOurValueCard key={i} img={r.img} title={r.title} text={r.text} classImgName={r.classImgName} />*/}
        ))}
      </div>
      <div className="values-list--second mb-100 container custom-container">
        {secondRecord.map((r, i) => (
          {/*<AboutUsOurValueCard key={i} img={r.img} title={r.title} text={r.text} classImgName={r.classImgName} />*/}
        ))}
      </div>
  </div>
)};

export default AboutUsOurValuesSection;

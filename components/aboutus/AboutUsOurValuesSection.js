import PropTypes from "prop-types";
import AboutUsOurValueCard from "../../components/common/AboutUsOurValueCard";
import { withTranslation } from "../../i18n";

const AboutUsOurValuesSection = ({ t }) => {
  const value = [
    {
      img: "value-passion.svg",
      classImgName: "passion_shadow",
      title: t("about_us.our_values.value_1.title"),
      text: t("about_us.our_values.value_1.text"),
      altImg:"Passion | One of our main values"
    },
    {
      img: "value-quality.svg",
      classImgName: "quality_shadow",
      title: t("about_us.our_values.value_2.title"),
      text: t("about_us.our_values.value_2.text"),
      altImg:"Quality | One of our main values"
    },
    {
      img: "value-truts.svg",
      classImgName: "trust_shadow",
      title: t("about_us.our_values.value_6.title"),
      text: t("about_us.our_values.value_6.text"),
      altImg:"Trust | One of our main values"
    },
    {
      img: "value-empathy.svg",
      classImgName: "communication_shadow",
      title: t("about_us.our_values.value_3.title"),
      text: t("about_us.our_values.value_3.text"),
      altImg:"Empathy | One of our main values"
    },
    {
      img: "value-team.svg",
      classImgName: "team_shadow",
      title: t("about_us.our_values.value_5.title"),
      text: t("about_us.our_values.value_5.text"),
      altImg:"Team Synergy | One of our main values"
    },
    {
      img: "value-communication.svg",
      classImgName: "communication_shadow",
      title: t("about_us.our_values.value_4.title"),
      text: t("about_us.our_values.value_4.text"),
      altImg:"Clear Communication | One of our main values"
    },
  ];


  return (
    <section className="AboutUsOurValuesSection" id="our-values">
      <img src="/assets/images/about-us/about-us-our-values-dots1.svg" className="about-us-our-values-dots1" alt="" />
      <img src="/assets/images/about-us/about-us-our-values-dots2.svg" className="about-us-our-values-dots2" alt="" />

      <div className="header--dark" data-aos="fade-in">
        <h2>{t("about_us.our_values.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>

      <div className="grid-content custom-container">
        {value.map((r, i) => (
          <AboutUsOurValueCard key={i} img={r.img} title={r.title} text={r.text} classImgName={r.classImgName} altImg={r.altImg}/>
        ))}
      </div>

      <style jsx>{`
        .AboutUsOurValuesSection {
          position: relative;
          padding-top: 122px;
          padding-bottom: 160px;

          .grid-content {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr 1fr;
            row-gap: 110px;
            max-width: 1170px !important;
          }

          .header--dark {
            margin-bottom: 129px;
          }

          .about-us-our-values-dots1 {
            position: absolute;
            left: 174px;
            bottom: 129px;
          }

          .about-us-our-values-dots2 {
            position: absolute;
            top: 102px;
            right: 108px;
          }
        }

        @media screen and (max-width: 1280px) {
          .AboutUsOurValuesSection {
            position: relative;
            padding-top: 58px;
            padding-bottom: 11px;

            .grid-content {
              grid-template-columns: 1fr;
              grid-template-rows: repeat(6, 1fr);
              row-gap: 0;
            }

            .header--dark {
              margin-bottom: 58px;
            }

            .about-us-our-values-dots1 {
              position: absolute;
              top: 43px;
              left: 80%;
              width: 77px;
            }

            .about-us-our-values-dots2 {
              display: none;
            }
          }
        }
      `}</style>
    </section>
  );
};

AboutUsOurValuesSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(AboutUsOurValuesSection);

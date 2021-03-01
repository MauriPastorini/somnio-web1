import PropTypes from "prop-types";
import AboutUsOurValueCard from "../../components/common/AboutUsOurValueCard";
import { withTranslation } from "../../i18n";

const AboutUsOurValuesSection = ({ t }) => {
  const firstRecord = [
    {
      img: "value-passion.svg",
      classImgName: "passion_shadow",
      title: t("about_us.our_values.value_1.title"),
      text: t("about_us.our_values.value_1.text"),
    },
    {
      img: "value-quality.svg",
      classImgName: "quality_shadow",
      title: t("about_us.our_values.value_2.title"),
      text: t("about_us.our_values.value_2.text"),
    },
    {
      img: "value-empathy.svg",
      classImgName: "empathy_shadow",
      title: t("about_us.our_values.value_3.title"),
      text: t("about_us.our_values.value_3.text"),
    },
  ];

  const secondRecord = [
    {
      img: "value-communication.svg",
      classImgName: "communication_shadow",
      title: t("about_us.our_values.value_4.title"),
      text: t("about_us.our_values.value_4.text"),
    },
    {
      img: "value-team.svg",
      classImgName: "team_shadow",
      title: t("about_us.our_values.value_5.title"),
      text: t("about_us.our_values.value_5.text"),
    },
  ];

  return (
    <section className="AboutUsOurValuesSection" id="our-values">
      <img src="/assets/images/about-us/about-us-our-values-dots1.svg" className="about-us-our-values-dots1" alt="" />
      <img src="/assets/images/about-us/about-us-our-values-dots2.svg" className="about-us-our-values-dots2" alt="" />
      <div className="section-header-dark header-wrapper" data-aos="fade-in">
        <h2>{t("about_us.our_values.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>
      <div className="values-list--first custom-container">
        {firstRecord.map((r, i) => (
          <AboutUsOurValueCard key={i} img={r.img} title={r.title} text={r.text} classImgName={r.classImgName} />
        ))}
      </div>
      <div className="values-list--second custom-container">
        {secondRecord.map((r, i) => (
          <AboutUsOurValueCard key={i} img={r.img} title={r.title} text={r.text} classImgName={r.classImgName} />
        ))}
      </div>
      <style jsx>{`
        .AboutUsOurValuesSection {
          position: relative;
          padding-top: 122px;
          padding-bottom: 160px;

          .values-list--first {
            display: flex;
            justify-content: space-between;
            max-width: 1100px !important;
            margin: 0 auto 110px auto;
          }

          .values-list--second {
            display: flex;
            justify-content: space-between;
            max-width: 800px !important;
            margin: 0 auto 0 auto;
          }

          .header-wrapper {
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
            padding-bottom: 66px;

            .values-list--first {
              display: flex;
              justify-content: space-between;
              max-width: 100%;
              margin: 0 auto 0 auto;
              flex-direction: column;
            }

            .values-list--second {
              display: flex;
              justify-content: space-between;
              max-width: 100%;
              margin: 0 auto 0 auto;
              flex-direction: column;
            }

            .header-wrapper {
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

AboutUsOurValuesSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

AboutUsOurValuesSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(AboutUsOurValuesSection);

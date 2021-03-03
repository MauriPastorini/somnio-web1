import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const AboutUsWhyUsSection = ({ t }) => {
  return (
    <div className="AboutUsWhyUsSection">
      <div className="section-header-light header-wrapper" data-aos="fade-in">
        <h2>{t("about_us.why_us.title")}</h2>
      </div>
      <p className="about-us__text custom-container">{t("about_us.why_us.text_1")}</p>
      <p className="about-us__text custom-container">{t("about_us.why_us.text_2")}</p>
      <p className="about-us__text custom-container">{t("about_us.why_us.text_3")}</p>

      <style jsx>{`
        .AboutUsWhyUsSection {
          position: relative;
          width: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url(/assets/images/about-us/why-us-bg.svg);
          background-position: center;
          overflow: hidden;
          padding: 125px 0 200px 0;

          .header-wrapper {
            margin-bottom: 62px !important;

            h2 {
              margin: 0;
            }
          }

          .about-us__text {
            color: #efefef;
            font-size: 25px;
            text-align: center;
            font-weight: 500;
            max-width: 1150px !important;
            margin-bottom: 22px;
          }
        }

        @media screen and (max-width: 1280px) {
          .AboutUsWhyUsSection {
            position: relative;
            width: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url(/assets/images/about-us/mobile/why-us-bg.svg);
            background-position: center;
            overflow: hidden;
            padding: 96px 0 80px 0;
  
            .header-wrapper {
              margin-bottom: 53px !important;
  
              h2 {
                font-size: 28px;
              }
            }
  
            .about-us__text {
              color: #efefef;
              font-size: 15px;
              text-align: center;
              font-weight: 500;
              line-height: 19px;
              max-width: 1150px !important;
              margin-bottom: 22px;
            }
          }
        }
      `}</style>
    </div>
  );
};

AboutUsWhyUsSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(AboutUsWhyUsSection);

import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const WhyFlutterWhySection = ({ t }) => {
  return (
    <div
      className="WhyFlutterWhySection">
      <h1 className="whyflutter-title custom-container" data-aos="fade-in">
        {t("why_flutter.change_how_we_work.title")}
      </h1>
      <p className="whyflutter-text custom-container" data-aos="fade-in">
        {t("why_flutter.change_how_we_work.text")}
      </p>
      <style jsx>{`
        .WhyFlutterWhySection {
          padding: 148px 0 169px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          background-image: url(/assets/images/why-flutter/whyflutter-banner-bg.svg);
          
          .whyflutter-title {
            font-size: 54px;
            font-weight: 700;
            color: #ffffff;
            text-align: center;
            max-width: 1070px;
            margin-bottom: 49px;
          }
          
          .whyflutter-text {
            font-size: 25px;
            color: #ffffff;
            text-align: center;
            max-width: 1065px;
          }
        }
        
        @media screen and (max-width: 1280px) {
          .WhyFlutterWhySection {
            padding: 82px 0 57px 0;
            .whyflutter-title {
              font-size: 38px;
              line-height: 44px;
              margin-bottom: 42px;
            }
            
            .whyflutter-text {
              font-size: 25px;
              line-height: 32px;
              text-align: center;
            }
          }
        }

        @media screen and (max-width: 428px) {
          .WhyFlutterWhySection {
            .whyflutter-title {
              font-size: 28px;
              line-height: 34px;
              margin-bottom: 42px;
            }
            
            .whyflutter-text {
              font-size: 15px;
              line-height: 22px;
              text-align: center;
            }
          }
        }
      `}</style>
    </div>
  );
};

WhyFlutterWhySection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(WhyFlutterWhySection);

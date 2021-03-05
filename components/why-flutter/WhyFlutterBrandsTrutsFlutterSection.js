import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const WhyFlutterBrandsTrutsFlutterSection = ({ t }) => {
  return (
    <section className="WhyFlutterBrandsTrutsFlutterSection">
      <div className="section-header-dark custom-container" data-aos="fade-in">
        <h2>{t("why_flutter.trust_flutter.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>

      <div className="custom-container">
        <div className="brand-list">
          <img src="/assets/images/why-flutter/google.png" alt="" />
          <img src="/assets/images/why-flutter/ebay.png" alt="" />
          <img src="/assets/images/why-flutter/bmw.png" alt="" />
          <img src="/assets/images/why-flutter/square.png" alt="" />
          <img src="/assets/images/why-flutter/alibaba.png" alt="" />
        </div>

        <div className="brand-list--mobile">
          <div className="first-wrapper">
            <img className="google-logo" src="/assets/images/why-flutter/google.png" alt="" />
            <img className="ebay-logo" src="/assets/images/why-flutter/ebay.png" alt="" />
          </div>
          <div className="second-wrapper">
            <img className="bmw-logo" src="/assets/images/why-flutter/bmw.png" alt="" />
            <img className="square-logo" src="/assets/images/why-flutter/square.png" alt="" />
            <img className="alibaba-logo" src="/assets/images/why-flutter/alibaba.png" alt="" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .WhyFlutterBrandsTrutsFlutterSection {
          .section-header-dark {
            margin-top: 129px;
            margin-bottom: 89px;
          }

          .brand-list {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 173px;
          }

          .brand-list--mobile {
            display: none;
          }
        }

        @media screen and (max-width: 1280px) {
          .WhyFlutterBrandsTrutsFlutterSection {
            .section-header-dark {
              margin-top: 48px;
              margin-bottom: 38px !important;
            }
            
            .brand-list {
              display: none;
            }
            
            .brand-list--mobile {
              display: block;
              
              .first-wrapper{
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                margin-bottom: 33px !important;
              }
              
              .second-wrapper{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 80px !important;
              }
              
              .google-logo{
                width: 128px;
              }
              
              .ebay-logo{
                width: 104px;
              }
              
              .bmw-logo{
                width: 68px;
              }
              
              .square-logo{
                width: 117px;
              }
              
              .alibaba-logo{
                width: 107px;
              }
            }
          }
        }
      `}</style>
    </section>
  );
};

WhyFlutterBrandsTrutsFlutterSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(WhyFlutterBrandsTrutsFlutterSection);

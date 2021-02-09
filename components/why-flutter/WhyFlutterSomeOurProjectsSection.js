import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const WhyFlutterSomeOurProjectsSection = ({ t }) => {
  return (
    <div className="WhyFlutterSomeOurProjectsSection">
      <div className="section-header-dark header-wrapper" data-aos="fade-in">
        <h2>{t("why_flutter.some_our_projects.title")}</h2>
        <img src={"./assets/images/home-services-line.svg"} alt="" />
      </div>

      <div className="flutter-projects-card">
        <div className="project-card">
          <img src="./assets/images/why-flutter/phone-jaac.png" alt="" />
          <h4>Jaac</h4>
          <div className="store-button-content">
            <img src="./assets/images/why-flutter/appstore.png" alt="" />
            <img src="./assets/images/why-flutter/googleplay.png" alt="" />
          </div>
        </div>
        <div className="project-card">
          <img src="./assets/images/why-flutter/phone-crime.png" alt="" />
          <h4>CrimeDoor</h4>
          <div className="store-button-content">
            <img src="./assets/images/why-flutter/appstore.png" alt="" />
            <img src="./assets/images/why-flutter/googleplay.png" alt="" />
          </div>
        </div>
      </div>

      <button className="btn custom-button-2"> {t("common.button_2")}</button>

      <div className="agency-say-content">
        <div className="agency-say-card">
          <div className="agency-say-logos">
            <div className="burble meetup-wrapper">
              <img src="./assets/images/why-flutter/meetup-logo.png" alt="" />
            </div>
            <div className="burble flutter-wrapper">
              <img src="./assets/images/why-flutter/flutter-logo-min.svg" alt="" />
            </div>
          </div>
          <h3 className="agency-say-card__title mb-2">{t("why_flutter.card.text_1")}</h3>
          <div className="d-flex justify-content-center mt-50">
            <button className="btn-outline-navbar btn">{t("why_flutter.card.button_1")}</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .WhyFlutterSomeOurProjectsSection {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 181px;

          .header-wrapper {
            margin-bottom: 73px !important;
          }

          .flutter-projects-card {
            display: flex;
            justify-content: space-between;
            margin-bottom: 231px;
            max-width: 1200px !important;
            width: 100%;
            margin-left: auto;
            margin-right: auto;

            .project-card {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 0 50px;

              img {
                margin-bottom: 44px;
              }

              h4 {
                color: #001331;
                font-size: 40px;
                font-weight: bold;
                text-align: center;
                margin-bottom: 29px;
              }

              .store-button-content {
                display: flex;
                justify-content: space-evenly;
                position: relative;
                width: 486px;

                img:nth-of-type(1) {
                  position: absolute;
                  left: 0;
                }
                img:nth-of-type(2) {
                  position: absolute;
                  right: 0;
                  top: 5px;
                }
              }
            }
          }

          .btn-outline-navbar {
            border: 2px solid #ffffff;
            border-radius: 43px;
            min-width: 200px;
            font-size: 25px;
            color: #ffffff;
            padding: 15px 54px !important;

            &:hover {
              background-color: #ffffff !important;
              color: #001331;
            }
          }

          .agency-say-content {
            margin-top: 266px !important;

            .agency-say-card{
              padding: 49px 125px 69px 125px;

              .agency-say-card__title{
                max-width: 722px;
                font-size: 35px;
                font-weight: 700;
              }
            }

            .agency-say-logos {
              align-items: center;
              display: flex;
              justify-content: space-between;
              max-width: 300px;
              margin: 0 auto 52px auto;

              .burble {
                border-radius: 50%;
                background-color: #fff;
                display:flex;
                justify-content: center;
                align-items: center;
              }

              .meetup-wrapper {
                width: 152px;
                height: 152px;
              }

              .flutter-wrapper {
                width: 113px;
                height: 113px;
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

WhyFlutterSomeOurProjectsSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

WhyFlutterSomeOurProjectsSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(WhyFlutterSomeOurProjectsSection);

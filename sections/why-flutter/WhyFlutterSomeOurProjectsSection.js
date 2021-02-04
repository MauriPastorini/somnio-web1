import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const WhyFlutterSomeOurProjectsSection = ({ t }) => {
  return (
    <div className="WhyFlutterSomeOurProjectsSection">
      <div className="section-header-dark" data-aos="fade-in">
        <h2>{t("why_flutter.some_our_projects.title")}</h2>
        <img src={"./assets/images/home-services-line.svg"} alt="" />
      </div>

      <div className="flutter-projects-card">
        <div className="project-card">
          <img src="./assets/images/why-flutter/phone-crime.png" alt="" />
          <h4>CrimeDoor</h4>
          <div className="store-button-content">
            <img src="./assets/images/why-flutter/appstore.png" alt="" />
            <img src="./assets/images/why-flutter/googleplay.png" alt="" />
          </div>
        </div>
        <div className="project-card">
          <img src="./assets/images/why-flutter/phone-jaac.png" alt="" />
          <h4>Jaac</h4>
          <div className="store-button-content">
            <img src="./assets/images/why-flutter/appstore.png" alt="" />
            <img src="./assets/images/why-flutter/googleplay.png" alt="" />
          </div>
        </div>
      </div>

      <button className="btn custom-button-2"> {t("common.button_2")}</button>

      <div className="agency-say-content mt-300">
        <div className="agency-say-card">
          <h3 className="agency-say-card__title mb-2">{t("why_flutter.card.text_1")}</h3>
          <div className="d-flex justify-content-center mt-50">
            <button className="btn-outline-navbar btn"> {t("why_flutter.card.button_1")}</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .WhyFlutterSomeOurProjectsSection {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 350px;

          .flutter-projects-card {
            display: flex;
            justify-content: center;
            margin-bottom: 137px;

            .project-card {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-left: 80px;
              margin-right: 80px;

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
              }
            }
          }

          .btn-outline-navbar {
            border: 2px solid #ffffff;
            border-radius: 43px;
            min-width: 200px;
            font-size: 25px;
            color: #ffffff;

            &:hover {
              background-color: transparent !important;
              border: 2px solid #001331;
              color: #001331;
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

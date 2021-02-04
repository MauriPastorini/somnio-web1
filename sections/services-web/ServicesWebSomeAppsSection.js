import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesWebSomeAppsSection = ({ t }) => {
  return (
    <div className="ServicesWebSomeAppsSection d-flex flex-column align-items-center mb-200">
      <div className="section-header-dark mt-100" data-aos="fade-in">
        <h2>{t("services_web.some_apps.title")}</h2>
        <img src={"./assets/images/home-services-line.svg"} alt="" />
      </div>
      <div className="app-wrapper-1 custom-container">
        <img src="./assets/images/services-web/formula.png" alt="" />
        <h2>Fórmula</h2>
      </div>
      <div className="app-wrapper-2 custom-container mb-100">
        <img src="./assets/images/services-web/ICUC.png" alt="" />
        <h2>ICUC</h2>
      </div>

      <button className="btn custom-button-2">{t("common.button_2")}</button>

      <div className="agency-say-content custom-container mt-100">
        <div
          className="agency-say-card"
        >
          <p className="agency-say-card__text">{t("services_web.some_apps.agency_say.text_1")}</p>

          <div className="agency-say-card__footer">
            <img src="./assets/images/common/clutch.png" className="card__footer-logo" alt="" />
            <div className="card__footer-person">
              <img src="./assets/images/services-web/falta_imagen.png" alt="" />
              <div className="card__footer-name">
                <p>Nicole Sanz</p>
                <p>Project Manager</p>
                <p>Fórmula</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ServicesWebSomeAppsSection {
          .app-wrapper-1 {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            min-height: 875px;
            h2 {
              color: #031533;
              font-size: 54px;
              font-weight: bold;
            }
            img {
              position: absolute;
              left: 0;
            }
          }
          .app-wrapper-2 {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            min-height: 875px;

            h2 {
              color: #031533;
              font-size: 54px;
              font-weight: bold;
            }

            img {
              position: absolute;
              right: 0;
            }
          }
        }
      `}</style>
    </div>
  );
};

ServicesWebSomeAppsSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesWebSomeAppsSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesWebSomeAppsSection);

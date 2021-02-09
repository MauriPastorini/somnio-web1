import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesMobileSomeAppsSection = ({ t }) => {
  return (
    <div className="ServicesMobileSomeAppsSection d-flex flex-column align-items-center pb-100">
      <div className="section-header-dark header-wrapper" data-aos="fade-in">
        <h2>{t("services_mobile.some_apps.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>
      <div className="app-wrapper-1">
        <img src="/assets/images/services-mobile/jacc.png" alt="" />
        <h2 className="custom-container">Jaac</h2>
      </div>
      <div className="app-wrapper-2">
        <img src="/assets/images/home/home-portfolio-paymytrades.png" alt="" />
        <h2 className="custom-container">Pay my trades</h2>
      </div>

      <button className="btn custom-button-2">{t("common.button_2")}</button>

      <div className="agency-say-content custom-container mt-100">
        <div
          className="agency-say-card"
          style={{ backgroundImage: `url(/assets/images/services/services-agency-say-bg.svg)` }}
        >
          <p className="agency-say-card__text">{t("services_mobile.some_apps.agency_say.text_1")}</p>
          <div className="agency-say-card__footer">
            <img src="/assets/images/common/clutch.png" className="card__footer-logo" alt="" />
            <div className="card__footer-person">
              <img src="/assets/images/services-mobile/tonyjaac.png" alt="" />
              <div className="card__footer-name">
                <p>Mark Smith</p>
                <p>CEO</p>
                <p>Jaac</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ServicesMobileSomeAppsSection {

          .header-wrapper{
            margin-bottom: 62px;
          }

          .app-wrapper-1 {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            min-height: 875px;
            position: relative;
            width: 100%;

            h2 {
              color: #031533;
              font-size: 54px;
              font-weight: bold;
              text-align: end;
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
            min-height: 811px;
            position: relative;
            width: 100%;

            h2 {
              color: #031533;
              font-size: 54px;
              font-weight: bold;
              margin-bottom: 90px;
            }

            img {
              position: absolute;
              right: 0;
              top: -186px;
            }
          }
        }
      `}</style>
    </div>
  );
};

ServicesMobileSomeAppsSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesMobileSomeAppsSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesMobileSomeAppsSection);

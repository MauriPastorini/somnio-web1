import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesWebSomeAppsSection = ({ t }) => {
  return (
    <div className="ServicesWebSomeAppsSection d-flex flex-column align-items-center">
      <div className="section-header-dark mt-100 header-wrapper" data-aos="fade-in">
        <h2>{t("services_web.some_apps.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>
      <div className="app-wrapper app-wrapper-1">
        <img src="/assets/images/services-web/formula.png" alt="" />
        <h2 className="custom-container">Fórmula</h2>
      </div>
      <div className="app-wrapper app-wrapper-2">
        <img src="/assets/images/services-web/ICUC.png" alt="" />
        <h2 className="custom-container">ICUC</h2>
      </div>

      <button className="btn btn-custom-2 btn-mobile">{t("common.button_2")}</button>

      <div className="agency-say-content custom-container">
        <div className="agency-say-card">
          <p className="agency-say-card__text">{t("services_web.some_apps.agency_say.text_1")}</p>

          <div className="agency-say-card__footer">
            <img src="/assets/images/common/clutch.png" className="card__footer-logo" alt="" />
            <div className="card__footer-person">
              <img style={{ width: 118, height: 118 }} src="/assets/images/common/nicolesanz.png" alt="" />
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
          margin-bottom: 200px;
          .header-wrapper {
            margin-bottom: 62px !important;
          }

          .app-wrapper {
            display: flex;
            align-items: center;
            position: relative;
          }

          .app-wrapper-1 {
            justify-content: flex-end;
            min-height: 875px;
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
            justify-content: flex-start;
            min-height: 811px;
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

          .agency-say-content {
            margin-top: 100px;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesWebSomeAppsSection {
            margin-bottom: 0;

            .header-wrapper {
              margin-bottom: 100px;
            }

            .app-wrapper {
              display: flex;
              align-items: center;
              position: relative;
              flex-direction: column;
            }

            .app-wrapper {
              display: flex;
              align-items: center;
              position: relative;
              flex-direction: column;
            }

            .app-wrapper-1 {
              display: flex;

              align-items: flex-start;
              min-height: unset;
              position: relative;
              width: 100%;

              h2 {
                color: #031533;
                font-size: 22px;
                font-weight: bold;
                text-align: end;
                margin-bottom: 0;
              }

              img {
                position: relative;
                left: 0;
                width: 90%;
                max-width: 970px;
                order: 1;
                margin-bottom: 50px;
              }
            }

            .app-wrapper-2 {
              display: flex;
              align-items: flex-end;
              min-height: unset;
              position: relative;
              width: 100%;

              h2 {
                color: #031533;
                font-size: 22px;
                font-weight: bold;
                margin-bottom: 10px;
              }

              img {
                position: relative;
                right: 0;
                top: 0px;
                width: 90%;
                max-width: 970px;
                order: 1;
              }
            }

            .btn-mobile {
              width: 241px !important;
              font-size: 16px !important;
              margin-top: 77px !important;
            }

            .agency-say-content {
              margin-top: 69px;
              margin-bottom: 69px;
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

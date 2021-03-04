import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesUxUiWhySection = ({ t }) => {
  return (
    <div className="ServicesUxUiWhySection">
      <div className="uxui__content custom-container">
        <h2>{t("services_uxui.important.title")}</h2>
        <p className="uxui__text">{t("services_uxui.important.text_1")}</p>
        <p className="uxui__text">{t("services_uxui.important.text_2")}</p>
      </div>
      <style jsx>{`
        .ServicesUxUiWhySection {
          position: relative;
          width: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          background-image: url(/assets/images/services-uxui/franja1.svg);
          padding-top: 150px;
          padding-bottom: 150px;

          .uxui__content {
            position: relative;
            width: 100%;
            display:flex;
            align-items: center;
            flex-direction: column;

            h2 {
              color: #fff;
              text-align: center;
              font-weight: 700;
              font-size: 54px;
              margin-bottom: 62px;
            }

            .uxui__text {
              color: #efefef;
              font-size: 25px;
              text-align: center;
              max-width: 1137px !important;
              font-weight: 500;
              margin-bottom: 25px;
            }
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesUxUiWhySection {
            padding-top: 59px;
            padding-bottom: 68px;

            .uxui__content {
              position: relative;
              width: 100%;

              h2 {
                font-size: 28px;
                margin-bottom: 62px;
              }

              .uxui__text {
                font-size: 15px;
                margin-bottom: 25px;
              }
            }
          }
        }

        @media screen and (max-width: 428px) {
          .ServicesUxUiWhySection {
            background-image: url(/assets/images/services-uxui/mobile/franja1.svg);
          }
        }
      `}</style>
    </div>
  );
};

ServicesUxUiWhySection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesUxUiWhySection);

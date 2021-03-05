import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesUxUiVitalSection = ({ t }) => {
  return (
    <section className="ServicesUxUiVitalSection">
      <div className="sub-bg"></div>
      <div className="content custom-container">
        <h2>{t("services_uxui.vital.title")}</h2>
        <p>{t("services_uxui.vital.text_1")}</p>
        <p className="last-text">{t("services_uxui.vital.text_2")}</p>
      </div>
      <style jsx>{`
        .ServicesUxUiVitalSection {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;

          .sub-bg {
            position: absolute;
            width: 100%;
            min-height: 1000px;
            background: transparent linear-gradient(119deg, #1e6ac5 0%, #29218c 100%) 0% 0% no-repeat padding-box;
          }

          .content {
            margin-top: 175px;
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center !important;
          }

          h2 {
            color: #fff;
            font-size: 54px;
            font-weight: 700;
            text-align: center;
            margin-bottom: 68px;
          }
          p {
            font-size: 25px;
            color: #fff;
            text-align: center;
            max-width: 1065px;
          }
          .last-text {
            margin-bottom: 131px !important;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesUxUiVitalSection {

            .content {
              margin-top: 95px;
            }

            h2 {
              font-size: 28px;
              margin-bottom: 68px;
            }
            p {
              font-size: 15px;
            }
            .last-text {
              margin-bottom: 100px !important;
            }
          }
        }
      `}</style>
    </section>
  );
};

ServicesUxUiVitalSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesUxUiVitalSection);

import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesUxUiVitalSection = ({ t }) => {
  return (
    <div className="ServicesUxUiVitalSection">
      <div className="sub__bg"></div>
      <div className="content custom-container">
        <h2>{t("services_uxui.vital.title")}</h2>
        <p>{t("services_uxui.vital.text_1")}</p>
        <p className="mb-150">{t("services_uxui.vital.text_2")}</p>
      </div>
      <style jsx>{`
        .ServicesUxUiVitalSection {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 180px;

          .sub__bg {
            position: absolute;
            width: 100vw;
            min-height: 800px;
            background: transparent linear-gradient(119deg, #1e6ac5 0%, #29218c 100%) 0% 0% no-repeat padding-box;
          }

          .content {
            margin-top: 122px;
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
        }
      `}</style>
    </div>
  );
};

ServicesUxUiVitalSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesUxUiVitalSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesUxUiVitalSection);

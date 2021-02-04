import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesUxUiWhySection = ({ t }) => {
  return (
    <div
      className="ServicesUxUiWhySection pt-150"
      style={{ backgroundImage: `url(./assets/images/services-uxui/franja1.svg)` }}
    >
      <div className="uxui__content">
        <h2>{t("services_uxui.important.title")}</h2>
        <p className="uxui__text custom-container">{t("services_uxui.important.text_1")}</p>
        <p className="uxui__text custom-container">{t("services_uxui.important.text_2")}</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <style jsx>{`
        .ServicesUxUiWhySection {
          position: relative;
          width: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;

          .uxui__content {
            position: relative;
            width: 100%;

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
              max-width: 1100px;
            }
          }
        }
      `}</style>
    </div>
  );
};

ServicesUxUiWhySection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesUxUiWhySection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesUxUiWhySection);

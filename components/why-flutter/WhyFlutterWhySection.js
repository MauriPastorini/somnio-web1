import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const WhyFlutterWhySection = ({ t }) => {
  return (
    <div
      className="WhyFlutterWhySection"
      style={{ backgroundImage: `url(./assets/images/why-flutter/whyflutter-banner-bg.svg)` }}
    >
      <h1 className="whyflutter-title" data-aos="fade-in">
        {t("why_flutter.change_how_we_work.title")}
      </h1>
      <p className="whyflutter-text" data-aos="fade-in">
        {t("why_flutter.change_how_we_work.text")}
      </p>
      <style jsx>{`
        .WhyFlutterWhySection {
          min-height: 560px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .whyflutter-title {
            font-size: 54px;
            font-weight: 700;
            color: #ffffff;
            text-align: center;
            max-width: 1070px;
            margin-bottom: 49px;
          }

          .whyflutter-text {
            font-size: 25px;
            color: #ffffff;
            text-align: center;
            max-width: 1065px;
          }
        }
      `}</style>
    </div>
  );
};

WhyFlutterWhySection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

WhyFlutterWhySection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(WhyFlutterWhySection);

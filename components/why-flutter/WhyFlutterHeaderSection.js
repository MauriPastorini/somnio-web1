import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const WhyFlutterHeaderSection = ({ t }) => {
  return (
    <div className="WhyFlutterHeaderSection">
      <img src="./assets/images/why-flutter/header-bg.svg" alt="" className="header__bg" />
      <img src="./assets/images/why-flutter/header-path.svg" alt="" className="header__path" />
      <div className="wrapper-content">
        <h1 className="header-title custom-container">{t("why_flutter.header.text_1")}</h1>
      </div>
      <style jsx>{`
        .WhyFlutterHeaderSection {
          position: relative;
          overflow: hidden;

          .header__bg {
            width: 100%;
            top: 0;
            z-index: -2;
          }

          .header__path {
            position: absolute;
            top: -620px;
            left: -600px;
            z-index: 0;
            max-width: 90%;
            height: auto;
          }

          .header-title {
            font-weight: bold;
            font-size: 80px;
            color: #ffffff;
            text-align: center;
            z-index: 1;
            max-width: 1348px;
            margin-top: 300px;
          }

          @media screen and (max-width: 1700px) {
            .header__bg {
              width: auto;
              min-height: 600px;
            }
          }
        }
      `}</style>
    </div>
  );
};

WhyFlutterHeaderSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

WhyFlutterHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(WhyFlutterHeaderSection);

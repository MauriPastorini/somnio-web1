import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const WhyFlutterHeaderSection = ({ t }) => {
  return (
    <div className="WhyFlutterHeaderSection">
      <img src="/assets/images/why-flutter/header-path.svg" alt="" className="header__path" />

      <h1 className="header-title custom-container">{t("why_flutter.header.text_1")}</h1>
      <style jsx>{`
        .WhyFlutterHeaderSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/why-flutter/header-bg.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 200%;
          padding: 505px 0 505px 0;

          .header__path {
            position: absolute;
            top: -653px;
            left: -659px;
            z-index: 0;
            height: auto;
          }

          .header-title {
            position: relative;
            font-weight: bold;
            font-size: 70px;
            color: #ffffff;
            text-align: center;
            z-index: 1;
            max-width: 1410px !important;
          }
        }

        @media screen and (max-width: 1920px) {
          .WhyFlutterHeaderSection {
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: top;
          }
        }

        @media screen and (max-width: 1280px) {
          .WhyFlutterHeaderSection {
            padding: 350px 0 350px 0;

            .header__path {
              left: -259px;
              height: auto;
              position: absolute;
              top: -437px;
              width: 784px;
              z-index: 0;
            }

            .header-title {
              font-size: 36px;
            }
          }
        }

        @media screen and (max-width: 428px) {
          .WhyFlutterHeaderSection {
            background-image: url(/assets/images/why-flutter/mobile/header-bg.svg);
            padding: 370px 0 370px 0;
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
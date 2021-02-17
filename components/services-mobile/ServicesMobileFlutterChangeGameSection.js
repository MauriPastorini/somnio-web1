import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesMobileFlutterChangeGameSection = ({ t }) => {
  return (
    <div className="ServicesMobileFlutterChangeGameSection custom-container">
      <div className="text-wrapper">
        <h2>{t("services_mobile.flutter_change_game.title")}</h2>
        <p>{t("services_mobile.flutter_change_game.text_1")}</p>
        <p>{t("services_mobile.flutter_change_game.text_2")}</p>
      </div>
      <img src="/assets/images/services-mobile/change-game-img.svg" className="img-desktop" alt="" />
      <img src="/assets/images/services-mobile/mobile/change-game-img.svg" className="img-mobile" alt="" />
      <style jsx>{`
        .ServicesMobileFlutterChangeGameSection {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 100px;

          .text-wrapper {
            h2 {
              color: #001331;
              font-size: 40px;
              font-weight: bold;
              margin-bottom: 30px;
              max-width: 570px;
            }
            p {
              font-size: 20px;
              max-width: 582px;
              margin-bottom: 40px;
            }
          }

          .img-mobile {
            display: none;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesMobileFlutterChangeGameSection {
            justify-content: center;
            align-items: center;
            padding-top: 100px;
            flex-direction: column;

            .text-wrapper {
              h2 {
                font-size: 24px;
                margin-bottom: 35px;
                text-align: center;
                max-width: 500px;
              }
              p {
                font-size: 14px;
                margin-bottom: 20px;
                text-align: center;
                max-width: 500px;
              }
            }

            .img-desktop {
              display: none;
            }

            .img-mobile {
              margin-top: 22px;
              display: block;
            }
          }
        }
      `}</style>
    </div>
  );
};

ServicesMobileFlutterChangeGameSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesMobileFlutterChangeGameSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesMobileFlutterChangeGameSection);

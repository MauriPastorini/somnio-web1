import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesMobileHeaderSection = ({ t }) => {
  return (
    <div className="ServicesMobileHeaderSection">
      <img src="./assets/images/services-mobile/header-bg.svg" alt="" className="services-mobile-header__bg" />
      <img src="./assets/images/services-mobile/header-path.svg" alt="" className="services-mobile-header__path" />
      <div className="wrapper-content">
        <div className="text-and-image custom-container">
          <div className="services-mobile-header-text-wrapper" data-aos="fade-right">
            <h1 className="services-mobile-header-title">{t("services_mobile.header.text_1")}</h1>
            <p className="services-mobile-header-text">{t("services_mobile.header.text_2")}</p>
          </div>
          <div className="services-mobile-header-img-wrapper">
            <img src={`./assets/images/services-mobile/header-img.svg`} alt="" className="header-img img-fluid" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .ServicesMobileHeaderSection {
          position: relative;
          overflow: hidden;
        }

        .services-mobile-header__bg {
          width: 100%;
          top: 0;
          z-index: -2;
        }

        .services-mobile-header__path {
          position: absolute;
          top: -420px;
          left: -700px;
          z-index: 0;
          max-width: 90%;
          height: auto;
        }

        .text-and-image {
          display: flex;
          align-items: center;
          margin-top: 70px;

          .services-mobile-header-text-wrapper {
            width: 45%;

            .services-mobile-header-title {
              width: 580px;
              font-weight: bold;
              font-size: 50px;
              color: #ffffff;
              margin-bottom: 50px;
            }
            .services-mobile-header-text {
              width: 550px;
              font-size: 30px;
              color: #ffffff;
            }
          }

          .services-mobile-header-img-wrapper {
            margin-top: 50px;
            width: 55%;

            .services-mobile-header-img {
              width: 95%;
              margin-left: 5%;
            }
          }
        }

        @media screen and (max-width: 1700px) {
          .services-mobile-header__bg {
            width: auto;
            min-height: 600px;
          }
        }
      `}</style>
    </div>
  );
};

ServicesMobileHeaderSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesMobileHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesMobileHeaderSection);

import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesWebHeaderSection = ({ t }) => {
  return (
    <div className="ServicesWebHeaderSection">
      <img src="./assets/images/services-web/header-bg.svg" alt="" className="services-web-header__bg" />
      <img src="./assets/images/services-web/header-path.svg" alt="" className="services-web-header__path" />
      <div className="wrapper-content">
        <div className="text-and-image custom-container">
          <div className="services-web-header-img-wrapper">
            <img src={`./assets/images/services-web/header-img.svg`} alt="" className="header-img" />
          </div>
          <div className="services-web-header-text-wrapper" data-aos="fade-right">
            <h1 className="services-web-header-title">{t("services_web.header.text_1")}</h1>
            <p className="services-web-header-text">{t("services_web.header.text_2")}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ServicesWebHeaderSection {
          position: relative;
          overflow: hidden;

          .services-web-header__bg {
            width: 100%;
            top: 0;
            z-index: -2;
          }

          .services-web-header__path {
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

            .services-web-header-text-wrapper {
              display: flex;
              flex-direction: column;
              align-items: flex-end;

              width: 45%;

              .services-web-header-title {
                width: 580px;
                font-weight: bold;
                font-size: 80px;
                color: #ffffff;
                margin-bottom: 50px;
                text-align: end;
              }
              .services-web-header-text {
                font-size: 30px;
                color: #ffffff;
                text-align: end;
                max-width: 391px;
              }
            }

            .services-web-header-img-wrapper {
              margin-top: 80px;
              width: 55%;

              .header-img {
                width: 95%;
                margin-right: 5%;
              }
            }
          }

          @media screen and (max-width: 1700px) {
            .services-web-header__bg {
              width: auto;
              min-height: 600px;
            }
          }
        }
      `}</style>
    </div>
  );
};

ServicesWebHeaderSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesWebHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesWebHeaderSection);

import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesMobileHeaderSection = ({ t }) => {
  return (
    <div className="ServicesMobileHeaderSection">
      <img src="/assets/images/services-mobile/header-path.svg" alt="" className="services-mobile-header__path" />
      <div className="text-and-image custom-container">
        <div className="services-mobile-header-text-wrapper" data-aos="fade-right">
          <h1 className="services-mobile-header-title">{t("services_mobile.header.text_1")}</h1>
          <p className="services-mobile-header-text">{t("services_mobile.header.text_2")}</p>
        </div>
        <div className="services-mobile-header-img-wrapper">
          <img src={`/assets/images/services-mobile/header-img.svg`} alt="" className="header-img img-fluid" />
        </div>
      </div>
      <style jsx>{`
        .ServicesMobileHeaderSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/services-mobile/header-bg.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 200%;
          padding: 178px 0 250px 0;
        }

        .services-mobile-header__path {
          position: absolute;
          top: -461px;
          left: -743px;
          z-index: 0;
          height: auto;
        }

        .text-and-image {
          position: relative;
          display: flex;
          align-items: center;

          .services-mobile-header-text-wrapper {
            width: 45%;

            .services-mobile-header-title {
              width: 580px;
              font-weight: bold;
              font-size: 80px;
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
            margin-top: 90px;
            width: 55%;

            .services-mobile-header-img {
              width: 95%;
              margin-left: 5%;
            }
          }
        }

        @media screen and (max-width: 1920px) {
          .ServicesMobileHeaderSection {
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: top;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesMobileHeaderSection {
            padding: 47px 0 202px 0;
          }

          .services-mobile-header__path {
            position: absolute;
            top: -620px;
            left: -861px;
            z-index: 0;
            height: auto;
          }

          .text-and-image {
            align-items: center;
            flex-direction: column;
            margin-top: 120px;

            .services-mobile-header-text-wrapper {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;

              .services-mobile-header-title {
                width: 100%;
                text-align: center;
                font-size: 35px;
                margin-bottom: 28px;
              }
              .services-mobile-header-text {
                font-size: 18px;
                text-align: center;
                max-width: 300px;
              }
            }

            .services-mobile-header-img-wrapper {
              margin-top: 90px;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              .services-mobile-header-img {
                width: 100%;
                margin: 0;
                max-width: 800px;
              }
            }
          }
        }

        @media screen and (max-width: 428px) {
          .ServicesMobileHeaderSection {
            background-image: url(/assets/images/services-mobile/mobile/header-bg.svg);

            .services-mobile-header__path {
              position: absolute;
              top: -133px;
              left: -175px;
              z-index: 0;
              max-width: 100%;
              height: auto;
            }
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

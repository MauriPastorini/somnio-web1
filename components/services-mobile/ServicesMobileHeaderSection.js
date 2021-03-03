import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesMobileHeaderSection = ({ t }) => {
  return (
    <div className="ServicesMobileHeaderSection">
      <img src="/assets/images/services-mobile/header-path.svg" alt="" className="header__path" />
      <div className="text-and-image custom-container">
        <div className="header-text-wrapper" data-aos="fade-right">
          <h1 className="header-title">{t("services_mobile.header.text_1")}</h1>
          <p className="header-text">{t("services_mobile.header.text_2")}</p>
        </div>
        <div className="header-img-wrapper">
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
          padding: 190px 0 263px 0;
        }

        .header__path {
          position: absolute;
          top: -461px;
          left: -743px;
          z-index: 0;
          height: auto;
        }

        .text-and-image {
          align-items: center;
          display: flex;
          position: relative;

          .header-text-wrapper {
            width: 45%;

            .header-title {
              width: 580px;
              font-weight: bold;
              font-size: 80px;
              color: #ffffff;
              margin-bottom: 50px;
            }
            .header-text {
              width: 550px;
              font-size: 30px;
              color: #ffffff;
            }
          }

          .header-img-wrapper {
            margin-top: 90px;
            width: 55%;

            .header-img {
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

          .header__path {
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

            .header-text-wrapper {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;

              .header-title {
                width: 100%;
                text-align: center;
                font-size: 35px;
                margin-bottom: 28px;
              }
              .header-text {
                font-size: 18px;
                text-align: center;
                max-width: 300px;
              }
            }

            .header-img-wrapper {
              margin-top: 90px;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              .header-img {
                width: 100%;
                margin: 0;
                max-width: 500px;
              }
            }
          }
        }

        @media screen and (max-width: 428px) {
          .ServicesMobileHeaderSection {
            background-image: url(/assets/images/services-mobile/mobile/header-bg.svg);

            .header__path {
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

ServicesMobileHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesMobileHeaderSection);

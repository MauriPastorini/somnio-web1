import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesMobileHeaderSection = ({ t }) => {
  return (
    <section className="ServicesMobileHeaderSection">
      <img src="/assets/images/services-mobile/header-path.svg" alt="" className="header__path" />
      <img src="/assets/images/services-mobile/mobile/header-path.svg" alt="" className="header__path--mobile" />
      <div className="text-and-image custom-container">
        <div className="header__text-wrapper" data-aos="fade-right">
          <h1 className="header__title">{t("services_mobile.header.text_1")}</h1>
          <p className="header__text">{t("services_mobile.header.text_2")}</p>
        </div>
        <div className="header__img-wrapper">
          <img src={`/assets/images/services-mobile/header-img.svg`} alt="" className="header__img img-fluid" />
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

        .header__path--mobile{
          display: none;
        }

        .text-and-image {
          align-items: center;
          display: flex;
          position: relative;

          .header__text-wrapper {
            width: 45%;

            .header__title {
              width: 580px;
              font-weight: bold;
              font-size: 80px;
              color: #ffffff;
              margin-bottom: 50px;
            }
            .header__text {
              width: 550px;
              font-size: 30px;
              color: #ffffff;
            }
          }

          .header__img-wrapper {
            margin-top: 90px;
            width: 55%;

            .header__img {
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
            padding: 158px 0 216px 0
          }

          .header__path {
            display: none;
          }
          
          .header__path--mobile{
            display: block;
            position: absolute;
            z-index: 0;
            top: -168px;
            left: -156px;
          }

          .text-and-image {
            align-items: center;
            flex-direction: column;

            .header__text-wrapper {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;

              .header__title {
                width: 100%;
                text-align: center;
                font-size: 35px;
                margin-bottom: 30px;
              }
              .header__text {
                font-size: 18px;
                text-align: center;
                max-width: 315px;
                line-height: 22px;
              }
            }

            .header__img-wrapper {
              margin-top: 90px;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              .header__img {
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
          }
        }
      `}</style>
    </section>
  );
};

ServicesMobileHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesMobileHeaderSection);

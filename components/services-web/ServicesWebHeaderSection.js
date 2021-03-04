import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesWebHeaderSection = ({ t }) => {
  return (
    <div className="ServicesWebHeaderSection">
      <img src="/assets/images/services-web/header-path.svg" alt="" className="header__path" />
      <img src="/assets/images/services-web/mobile/header-path.svg" alt="" className="header__path--mobile" />

      <div className="text-and-image custom-container">
        <div className="header-img-wrapper">
          <img src={`/assets/images/services-web/header-img.svg`} alt="" className="header-img" />
        </div>
        <div className="header-text-wrapper" data-aos="fade-right">
          <h1 className="header-title">{t("services_web.header.text_1")}</h1>
          <p className="header-text">{t("services_web.header.text_2")}</p>
        </div>
      </div>
      <style jsx>{`
        .ServicesWebHeaderSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/services-web/header-bg.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 200%;
          padding: 196px 0 274px 0;

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
            position: relative;
            display: flex;
            align-items: center;

            .header-text-wrapper {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              margin-top: 26px;
              width: 45%;

              .header-title {
                width: 580px;
                font-weight: bold;
                font-size: 80px;
                color: #ffffff;
                margin-bottom: 50px;
                text-align: end;
              }
              .header-text {
                font-size: 30px;
                color: #ffffff;
                text-align: end;
                max-width: 391px;
              }
            }

            .header-img-wrapper {
              margin-top: 80px;
              width: 55%;

              .header-img {
                width: 100%;
              }
            }
          }
        }

        @media screen and (max-width: 1920px) {
          .ServicesWebHeaderSection {
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: top;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesWebHeaderSection {
            padding: 50px 0 257px 0;
  
            .header__path {
              position: absolute;
              top: -620px;
              left: -861px;
              z-index: 0;
              height: auto;
            }
  
            .text-and-image {
              align-items: center;
              display: flex;
              flex-direction: column;
              margin-top: 103px;
              position: relative;
              justify-content: space-between;
  
              .header-text-wrapper {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 0;

                .header-title {
                  width: 100%;
                  text-align: center;
                  font-size: 35px;
                  margin-bottom: 28px;
                  max-width: 340px;
                }
                .header-text {
                  font-size: 18px;
                  text-align: center;
                  max-width: 300px;
                }
              }
  
              .header-img-wrapper {
                margin-top: 110px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                order:1;

                .header-img {
                  width: 100%;
                  margin: 0;
                  max-width: 500px;
                }
              }
            }
          }
        }

        @media screen and (max-width: 428px) {
          .ServicesWebHeaderSection {
            background-image: url(/assets/images/services-web/mobile/header-bg.svg);

            .header__path {
              display: none;
            }
            
            .header__path--mobile{
              display: block;
              position: absolute;
              top: -197px;
              left: -160px;
              z-index: 0;
            }

            .text-and-image {
              .header-text-wrapper {
                .header-title {
                }
                .header-text {
                }
              }
  
              .header-img-wrapper {
                .header-img {
                  max-width: 294px;
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

ServicesWebHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesWebHeaderSection);

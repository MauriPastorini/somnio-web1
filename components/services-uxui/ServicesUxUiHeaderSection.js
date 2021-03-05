import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesUxUiHeaderSection = ({ t }) => {
  return (
    <section className="ServicesUxUiHeaderSection">
      <img src="/assets/images/services-uxui/header-path.svg" alt="" className="header__path" />
      <img src="/assets/images/services-uxui/header-path2.svg" alt="" className="header__path2" />
      <img src="/assets/images/services-uxui/mobile/header-path2.svg" alt="" className="header__path2--mobile" />
      <div className="text-and-image custom-container">
        <div className="header__text-wrapper" data-aos="fade-right">
          <h1 className="header__title">{t("services_uxui.header.text_1")}</h1>
          <p className="header__text">{t("services_uxui.header.text_2")}</p>
        </div>
        <div className="header__img-wrapper">
          <img src={`/assets/images/services-uxui/header-img.svg`} alt="" className="header__img img-fluid" />
        </div>
      </div>
      <style jsx>{`
        .ServicesUxUiHeaderSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/services-uxui/header-bg.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 200%;
          padding: 260px 0 287px 0;

          .header__path {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            max-width: 90%;
            height: auto;
          }

          .header__path2 {
            position: absolute;
            top: -200px;
            right: -700px;
            z-index: 0;
            height: auto;
          }

          .header__path2--mobile{
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
              width: 55%;

              .header__img {
                max-width: 656px;
              }
            }
          }
        }

        @media screen and (max-width: 1920px) {
          .ServicesUxUiHeaderSection {
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: top;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesUxUiHeaderSection {
            padding: 47px 0 202px 0;

            .header__path {
              position: absolute;
              top: -200px;
              left: -200px;
              z-index: 0;
              max-width: 90%;
              height: auto;
            }
  
            .header__path2 {
              position: absolute;
              top: -200px;
              right: -900px;
              z-index: 0;
              height: auto;
            }

            .text-and-image {
              align-items: center;
              flex-direction: column;
              margin-top: 136px;

              .header__text-wrapper {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .header__title {
                  width: 100%;
                  text-align: center;
                  font-size: 35px;
                  margin-bottom: 45px;
                }
                .header__text {
                  font-size: 18px;
                  text-align: center;
                  max-width: 300px;
                }
              }
  
              .header__img-wrapper {
                margin-top: 120px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
  
                .header__img {
                  width: 100%;
                  margin: 0;
                  max-width: 310px;
                }
              }
            }
          }
        }

        @media screen and (max-width: 428px) {
          .ServicesUxUiHeaderSection {
            background-image: url(/assets/images/services-uxui/mobile/header-bg.svg);

            .header__path {
              position: absolute;
              top: -80px;
              left: -80px;
              z-index: 0;
              max-width: 90%;
              height: auto;
            }
  
            .header__path2 {
              display: none;
            }

            .header__path2--mobile {
              display: block;
              position: absolute;
              top: 137px;
              right: -267px;
              z-index: 0;
              height: auto;
            }
          }
        }
      `}</style>
    </section>
  );
};

ServicesUxUiHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesUxUiHeaderSection);

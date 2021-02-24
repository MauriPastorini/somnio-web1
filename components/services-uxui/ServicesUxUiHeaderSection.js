import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesUxUiHeaderSection = ({ t }) => {
  return (
    <div className="ServicesUxUiHeaderSection">
      <img src="/assets/images/services-uxui/header-path.svg" alt="" className="header__path" />
      <img src="/assets/images/services-uxui/header-path2.svg" alt="" className="header__path2" />
      <img src="/assets/images/services-uxui/mobile/header-path2.svg" alt="" className="header__path2--mobile" />
      <div className="text-and-image custom-container">
        <div className="header-text-wrapper" data-aos="fade-right">
          <h1 className="header-title">{t("services_uxui.header.text_1")}</h1>
          <p className="header-text">{t("services_uxui.header.text_2")}</p>
        </div>
        <div className="header-img-wrapper">
          <img src={`/assets/images/services-uxui/header-img.svg`} alt="" className="header-img img-fluid" />
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
          padding: 260px 0 235px 0;

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
              width: 55%;

              .header-img {
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
              top: 62px;
              right: -289px;
              z-index: 0;
              height: auto;
            }
          }
        }
      `}</style>
    </div>
  );
};

ServicesUxUiHeaderSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesUxUiHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesUxUiHeaderSection);

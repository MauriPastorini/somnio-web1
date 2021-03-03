import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const AboutUsHeaderSection = ({ t }) => {
  return (
    <div className="AboutUsHeaderSection">
      <img src={`/assets/images/about-us/header-path-1.svg`} alt="" className="header__path" />
      <img src={`/assets/images/about-us/mobile/header-path-1.svg`} alt="" className="header__path-mobile" />

      <div className="text-and-image custom-container">
        <div className="header-img__wrapper">
          <img src={`/assets/images/about-us/header-img.svg`} alt="" className="header-img img-fluid" />
        </div>

        <div className="header-text__wrapper" data-aos="fade-left">
          <h1 className="title-1">{t("about_us.header.text_1")}</h1>
          <p className="paragraph-1">{t("about_us.header.text_2")}</p>
        </div>
      </div>
      <style jsx>{`
        .AboutUsHeaderSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/about-us/header-bg.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 200%;

          .header__path {
            position: absolute;
            top: -420px;
            left: -700px;
            z-index: 0;
            max-width: 80%;
            height: auto;
          }

          .header__path-mobile {
            display: none;
          }

          .text-and-image {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin-top: 220px;
            margin-bottom: 340px;
            position: relative;
            z-index: 1;

            .header-text__wrapper {
              width: 45%;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              max-width: 450px;

              .title-1 {
                font-weight: bold;
                font-size: 80px;
                color: #ffffff;
                text-align: end;
              }

              .paragraph-1 {
                font-size: 30px;
                color: #ffffff;
                font-weight: 500;
                text-align: end;
              }
            }

            .header-img__wrapper {
              margin-top: 50px;
              width: 55%;

              .header-img {
                width: 95%;
                margin-right: 5%;
              }
            }
          }
        }

        @media screen and (max-width: 1920px) {
          .AboutUsHeaderSection {
            background-repeat: no-repeat;
            background-size: 200% 100%;
            background-position: bottom;
          }
        }

        @media screen and (max-width: 1280px) {
          .AboutUsHeaderSection {
            background-image: url(/assets/images/about-us/mobile/header-bg.svg);
            background-repeat: no-repeat;
            background-size: cover;

            .header__path {
              display: none;
            }

            .header__path-mobile {
              display: block;
              position: absolute;
              top: -200px;
              left: -121px;
              z-index: 0;
              max-width: unset;
              height: auto;
            }

            .text-and-image {
              align-items: center;
              display: flex;
              flex-direction: column;
              margin-bottom: 182px;
              margin-top: 179px;

              .header-text__wrapper {
                width: 100%;
                margin: 0;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title-1 {
                  font-size: 36px;
                  line-height: 44px;
                  text-align: center;
                  margin-bottom: 34px;
                }

                .paragraph-1 {
                  font-size: 18px;
                  line-height: 22px;
                  text-align: center;
                }
              }

              .header-img__wrapper {
                margin-top: 81px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                order: 1;

                .header-img {
                  width: 100%;
                  margin: 0;
                  max-width: 500px;
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

AboutUsHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(AboutUsHeaderSection);

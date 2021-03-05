import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const OurWorkHeaderSection = ({ t }) => {
  return (
    <div className="OurWorkHeaderSection">
      <img src="/assets/images/our-work/header-path.svg" alt="" className="header__path" />
      <img src="/assets/images/our-work/mobile/header-path.svg" alt="" className="header__path--mobile" />
      <div className="text-and-image custom-container">
        <div className="header-text-wrapper" data-aos="fade-right">
          <h1 className="header-title">{t("our_work.header.text_1")}</h1>
          <p className="header-text">{t("our_work.header.text_2")}</p>
        </div>
        <div className="header-img-wrapper">
          <img src={`/assets/images/our-work/header-img.svg`} alt="" className="header-img img-fluid" />
        </div>
      </div>
      <style jsx>{`
        .OurWorkHeaderSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/our-work/header-bg.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 200%;
          padding-top: 222px;
          padding-bottom: 796px;

          .header__path {
            position: absolute;
            top: -435px;
            left: -574px;
            z-index: 0;
            height: auto;
          }

          .header__path--mobile {
            display: none;
          }

          .text-and-image {
            align-items: center;
            display: flex;
            justify-content: space-between;
            position: relative;

            .header-text-wrapper {
              margin-top: 15px;

              .header-title {
                width: 580px;
                font-weight: bold;
                font-size: 80px;
                color: #ffffff;
                margin-bottom: 50px;
                line-height: 90px;
              }

              .header-text {
                width: 550px;
                font-size: 30px;
                color: #ffffff;
                line-height: 37px;
              }
            }

            .header-img-wrapper {
              .header-img {
                max-width: 830px;
                width: 100%;
              }
            }
          }
        }

        @media screen and (max-width: 1920px) {
          .OurWorkHeaderSection {
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: top;
          }
        }

        @media screen and (max-width: 1280px) {
          .OurWorkHeaderSection {
            padding-top: 197px;
            padding-bottom: 171px;

            .header__path {
              display: none;
            }

            .header__path--mobile {
              display: block;
              position: absolute;
              top: -203px;
              left: -244px;
              z-index: 0;
              height: auto;
            }

            .text-and-image {
              align-items: center;
              flex-direction: column;

              .header-text-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 0;
                max-width: 300px;
                margin-bottom: 50px;

                .header-title {
                  width: 100%;
                  text-align: center;
                  font-size: 36px;
                  margin-bottom: 35px;
                  line-height: 44px;
                }

                .header-text {
                  font-size: 18px;
                  text-align: center;
                  max-width: 300px;
                  line-height: 22px;
                }
              }
            }
          }
        }

        @media screen and (max-width: 428px) {
          .OurWorkHeaderSection {
            background-image: url(/assets/images/our-work/mobile/header-bg.svg);
          }
        }
      `}</style>
    </div>
  );
};

OurWorkHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(OurWorkHeaderSection);

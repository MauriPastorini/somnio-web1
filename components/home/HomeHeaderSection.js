import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const HomeHeaderSection = ({ t }) => {
  return (
    <div className="HomeHeaderSection">
      <img src="/assets/images/home/home-header-path.svg" alt="" className="home-header__path" />
      <img src="/assets/images/home/mobile/home-header-path.svg" alt="" className="home-header__path--mobile" />
      <div className="text-and-image custom-container">
        <div className="home-header-text-wrapper" data-aos="fade-right">
          <h1 className="home-header-text">{t("home.header.text_1")}</h1>
          <button className="btn btn-custom-1 btn-shadow btn-desktop">{t("common.button_1")}</button>
        </div>
        <div className="home-header-img-wrapper">
          <img src={`/assets/images/home/home-header-img.svg`} alt="" className="home-header-img img-fluid" />
          <button className="btn btn-custom-1 btn-shadow btn-mobile">{t("common.button_1")}</button>
        </div>
      </div>

      <style jsx>{`
        .HomeHeaderSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/home/home-header-bg.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 200%;

          .btn-shadow {
            -webkit-box-shadow: 32px 32px 87px -20px rgba(0, 0, 0, 1);
            -moz-box-shadow: 32px 32px 87px -20px rgba(0, 0, 0, 1);
            box-shadow: 32px 32px 87px -20px rgba(0, 0, 0, 1);
          }

          .home-header__path {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            // max-width: 42%;
            height: auto;
          }

          .home-header__path--mobile {
            display: none;
          }

          .text-and-image {
            display: flex;
            align-items: center;
            margin-top: 220px;
            margin-bottom: 344px;
            z-index: 1;
            position: relative;

            .home-header-text-wrapper {
              width: 45%;
              margin-top: 55px;

              .home-header-text {
                width: 584px;
                font-weight: bold;
                font-size: 60px;
                color: #ffffff;
                margin-bottom: 80px;
              }
            }

            .home-header-img-wrapper {
              width: 55%;

              .home-header-img {
                width: 97%;
                margin-left: 3%;
              }
            }

            .btn-desktop {
              display: block;
            }

            .btn-mobile {
              display: none;
            }
          }
        }

        @media screen and (max-width: 1920px) {
          .HomeHeaderSection {
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: bottom;
          }
        }

        @media screen and (max-width: 1280px) {
          .HomeHeaderSection {

            .home-header__path {
              position: absolute;
              top: 0;
              left: 0;
              z-index: 0;
              max-width: 42%;
              height: auto;
            }

            .text-and-image {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 160px;
              margin-bottom: 182px;

              .home-header-text-wrapper {
                width: 100%;
                margin: 0;
                display: flex;
                flex-direction: column;
                align-items: center;

                .home-header-text {
                  width: 100%;
                  font-weight: bold;
                  font-size: 36px;
                  color: #ffffff;
                  margin-bottom: 43px;
                  text-align: center;
                  max-width: 600px;
                }
              }

              .home-header-img-wrapper {
                width: 100%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;

                .home-header-img {
                  width: 100%;
                  margin: 0;
                  max-width: 500px;
                }
              }

              .btn-desktop {
                display: none;
              }

              .btn-mobile {
                display: block;
                margin-top: 55px;
                width: 240px;
                height: 49px;
                font-size: 19px !important;
              }
            }
          }
        }

        @media screen and (max-width: 428px) {
          .HomeHeaderSection {
            background-image: url(/assets/images/home/mobile/home-header-bg.svg);
          }
        }
      `}</style>
    </div>
  );
};

HomeHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomeHeaderSection);

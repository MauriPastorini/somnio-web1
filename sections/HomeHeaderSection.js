import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";

const HomeHeaderSection = ({ t }) => {
  return (
    <div className="HomeHeaderSection">
      <img src="./assets/images/home/home-header-bg.svg" alt="" className="home-header__bg" />
      <img src="./assets/images/home/home-header-path.svg" alt="" className="home-header__path" />
      <div className="wrapper-content">
        <div className="text-and-image custom-container">
          <div className="home-header-text-wrapper" data-aos="fade-right">
            <h1 className="home-header-text">{t("home.header.text_1")}</h1>
            <button className="btn custom-button-1">{t("common.button_1")}</button>
          </div>
          <div className="home-header-img-wrapper">
            <img src={`./assets/images/home/home-header-img.svg`} alt="" className="home-header-img img-fluid" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .HomeHeaderSection {
          position: relative;
          overflow: hidden;

          .home-header__bg {
            width: 100%;
            top: 0;
            z-index: -2;
          }

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
            align-items: center;
            margin-top: 130px;

            .home-header-text-wrapper {
              width: 45%;

              .home-header-text {
                width: 594px;
                font-weight: bold;
                font-size: 60px;
                color: #ffffff;
                margin-bottom: 50px;
              }
            }

            .home-header-img-wrapper {
              width: 55%;

              .home-header-img {
                width: 95%;
                margin-left: 5%;
              }
            }
          }
        }

        @media screen and (max-width: 1700px) {
          .home-header__bg {
            width: auto;
            min-height: 600px;
          }
        }
      `}</style>
    </div>
  );
};

HomeHeaderSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

HomeHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomeHeaderSection);

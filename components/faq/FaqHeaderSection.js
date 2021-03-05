import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const FaqHeaderSection = ({ t }) => {
  return (
    <section className="FaqHeaderSection">
      <img className="path-1" src="/assets/images/faq/path-1.svg" alt="" />
      <img className="path-2" src="/assets/images/faq/path-2.svg" alt="" />
      <img className="dots" src="/assets/images/faq/mobile/dots.svg" alt="" />
      <h1 className="header-title custom-container">{t("faq.header.text_1")}</h1>

      <style jsx>{`
        .FaqHeaderSection {
          padding: 505px 0 505px 0;
          overflow: hidden;
          position: relative;

          .header-title {
            position: relative;
            font-weight: bold;
            font-size: 70px;
            color: #ffffff;
            text-align: center;
            z-index: 1;
            max-width: 1080px !important;
          }

          .path-1 {
            position: absolute;
            top: 0;
            left: 0;
          }
          .path-2 {
            position: absolute;
            top: 0;
            right: -37px;
          }

          .dots {
            display: none;
          }
        }

        @media screen and (max-width: 1280px) {
          .FaqHeaderSection {
            padding: 377px 0 413px 0;

            .header-title {
              font-size: 35px;
              line-height: 44px;

              max-width: 1080px !important;
            }

            .path-1 {
              position: absolute;
              top: 0;
              left: 0;
              width: 346px;
            }

            .path-2 {
              position: absolute;
              top: auto;
              bottom: 0;
              right: -37px;
              height: 575px;
            }

            .dots {
              display: block;
              top: 811px;
              position: absolute;
              left: 31px;
            }
          }
        }
      `}</style>
    </section>
  );
};

FaqHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(FaqHeaderSection);

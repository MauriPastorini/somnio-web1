import React from "react";
import { withTranslation } from "../../i18n";
import PropTypes from "prop-types";
import Link from "next/link";

const HomeWhyFlutterSection = ({ t }) => {
  return (
    <section className="HomeWhyFlutterSection">
      <div className="whyfluter-content custom-container">
        <h1 className="whyflutter__title" data-aos="fade-in">
          {t("home.why_flutter.title")}
        </h1>
        <p className="whyflutter__text" data-aos="fade-in">
          {t("home.why_flutter.text")}
        </p>
        <Link href="/why-flutter">
          <a className="whyflutter__link" data-aos="fade-in">
            {t("common.text_1")}
            <img src="/assets/images/common/arrow1.svg" alt="" />
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .HomeWhyFlutterSection {
            min-height: 646px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            background-image: url(/assets/images/home/home-bg-why-flutter.svg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            position: relative;
            overflow: hidden;

            .whyfluter-content {
              position: absolute;
              width: 100%;
              top: 0;
              z-index: 1;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .whyflutter__title {
              font-size: 54px;
              font-weight: 700;
              color: #ffffff;
              text-align: center;
              margin-bottom: 70px;
              letter-spacing: 0px;
            }

            .whyflutter__text {
              font-size: 25px;
              color: #efefef;
              text-align: center;
              max-width: 1024px;
              margin-bottom: 70px;
              letter-spacing: 0px;
            }

            .whyflutter__link {
              font-size: 27px;
              font-weight: 700;
              color: #ffffff;
              text-align: center;
              text-decoration: none;

              img {
                margin-left: 12px;
              }
            }
          }

          @media screen and (max-width: 1280px) {
            .HomeWhyFlutterSection {
              min-height: 522px;
              background-image: url(/assets/images/home/mobile/home-bg-why-flutter.svg);

              .whyflutter__title {
                font-size: 28px;
                line-height: 34px;
                margin-bottom: 45px;
              }

              .whyflutter__text {
                font-size: 15px;
                line-height: 22px;
                margin-bottom: 45px;
              }

              .whyflutter__link {
                font-size: 16px;

                img {
                  margin-left: 12px;
                }
              }
            }
          }
        `}
      </style>
    </section>
  );
};

HomeWhyFlutterSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomeWhyFlutterSection);

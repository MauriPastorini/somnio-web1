import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const AngencySayCard = ({ t }) => {
  return (
    <div className="agency-say-content custom-container">
      <div className="agency-say-card">
        <div className="agency-say-logos">
          <div className="burble meetup-wrapper">
            <img src="/assets/images/why-flutter/meetup-logo.png" alt="" />
          </div>
          <div className="burble flutter-wrapper">
            <img src="/assets/images/why-flutter/flutter-logo-min.svg" alt="" />
          </div>
        </div>
        <h3 className="agency-say-card__title mb-2">{t("why_flutter.card.text_1")}</h3>
        <div className="d-flex justify-content-center mt-50">
          <button className="btn-outline-navbar btn">{t("why_flutter.card.button_1")}</button>
        </div>
      </div>

      <style jsx>{`
        .agency-say-content {
          margin-top: 266px !important;

          .agency-say-card {
            padding: 49px 125px 69px 125px;

            .agency-say-card__title {
              max-width: 722px;
              font-size: 35px;
              font-weight: 700;
            }

            .btn-outline-navbar {
              border: 2px solid #ffffff;
              border-radius: 43px;
              min-width: 200px;
              font-size: 25px;
              color: #ffffff;
              padding: 15px 54px !important;

              &:hover {
                background-color: #ffffff !important;
                color: #001331;
              }
            }
          }

          .agency-say-logos {
            align-items: center;
            display: flex;
            justify-content: space-between;
            max-width: 300px;
            margin: 0 auto 52px auto;

            .burble {
              border-radius: 50%;
              background-color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .meetup-wrapper {
              width: 152px;
              height: 152px;
            }

            .flutter-wrapper {
              width: 113px;
              height: 113px;
            }
          }
        }

        @media screen and (max-width: 767px) {
          .agency-say-content {
            margin-top: 80px !important;
            max-width: 100%;

            .agency-say-card {
              padding: 50px 29px;

              .agency-say-card__title {
                max-width: 722px;
                font-size: 16px;
              }

              .btn-outline-navbar {
                font-size: 16px;
                padding: 8px 44px !important;
              }
            }

            .agency-say-logos {
              max-width: 204px;
              margin: 0 auto 33px auto;

              .meetup-wrapper {
                width: 103px;
                height: 103px;

                img {
                  width: 80px;
                  height: 31px;
                }
              }

              .flutter-wrapper {
                width: 77px;
                height: 77px;

                img {
                  width: 42px;
                  height: 52px;
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

const WhyFlutterSomeOurProjectsSection = ({ t }) => {
  return (
    <section className="WhyFlutterSomeOurProjectsSection">
      <img className="path" src="/assets/images/why-flutter/path.svg" alt="" />
      <img className="path--mobile" src="/assets/images/why-flutter/mobile/path.svg" alt="" />
      <img className="dots" src="/assets/images/why-flutter/dots.svg" alt="" />

      <div className="section-header-dark custom-container" data-aos="fade-in">
        <h2>{t("why_flutter.some_our_projects.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>

      <div className="projects custom-container">
        <div className="project__card">
          <img src="/assets/images/why-flutter/phone-jaac.png" alt="" />
          <h4>Jaac</h4>
          <div className="store-button-content">
            <img src="/assets/images/why-flutter/appstore.png" alt="" />
            <img src="/assets/images/why-flutter/googleplay.png" alt="" />
          </div>
        </div>
        <div className="project__card">
          <img src="/assets/images/why-flutter/phone-crime.png" alt="" />
          <h4>CrimeDoor</h4>
          <div className="store-button-content">
            <img src="/assets/images/why-flutter/appstore.png" alt="" />
            <img src="/assets/images/why-flutter/googleplay.png" alt="" />
          </div>
        </div>
      </div>

      <Link href="/our-work">
        <a className="btn btn-custom-2 btn-position"> {t("common.button_2")}</a>
      </Link>

      <AngencySayCard t={t} />

      <style jsx>{`
        .WhyFlutterSomeOurProjectsSection {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 181px;
          position: relative;

          .dots {
            position: absolute;
            left: 113px;
            top: 0;
          }

          .path {
            position: absolute;
            left: 0;
            top: -39px;
            z-index: -1;
          }

          .path--mobile {
            display: none;
          }

          .section-header-dark {
            margin-bottom: 73px !important;
          }

          .projects {
            display: flex;
            justify-content: space-between;
            margin-bottom: 231px;
            max-width: 1200px !important;
            width: 100%;
            margin-left: auto;
            margin-right: auto;

            .project__card {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 0 50px;

              img {
                margin-bottom: 44px;
              }

              h4 {
                color: #001331;
                font-size: 40px;
                font-weight: bold;
                text-align: center;
                margin-bottom: 29px;
              }

              .store-button-content {
                display: flex;
                justify-content: space-evenly;
                position: relative;
                width: 486px;

                img:nth-of-type(1) {
                  position: absolute;
                  left: 0;
                }
                img:nth-of-type(2) {
                  position: absolute;
                  right: 0;
                  top: 5px;
                }
              }
            }
          }
        }

        @media screen and (max-width: 1280px) {
          .WhyFlutterSomeOurProjectsSection {
            margin-bottom: 130px;

            .projects {
              max-width: 850px !important;
              margin-bottom: 150px;

              .project__card {
                img {
                  margin-bottom: 0;
                  max-width: 280px;
                }

                h4 {
                  font-size: 30px;
                  margin-bottom: 29px;
                }

                .store-button-content {
                  display: flex;
                  flex-direction: column;

                  max-width: unset;
                  width: auto;

                  img:nth-of-type(1) {
                    position: relative;
                    left: unset;
                    width: 100%;
                  }

                  img:nth-of-type(2) {
                    position: relative;
                    right: unset;
                    top: unset;
                    width: 100%;
                  }
                }
              }
            }
          }
        }

        @media screen and (max-width: 767px) {
          .WhyFlutterSomeOurProjectsSection {
            margin-bottom: 50px;

            .dots {
              display: none;
            }

            .path {
              display: none;
            }

            .path--mobile {
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              z-index: -1;
            }

            .projects {
              max-width: 650px !important;
              width: 100%;
              margin-bottom: 60px;

              .project__card {
                img {
                  max-width: 200px;
                }

                h4 {
                  font-size: 20px;
                }

                .store-button-content {
                  display: flex;
                  flex-direction: column;

                  max-width: unset;
                  width: auto;

                  img:nth-of-type(1) {
                    position: relative;
                    left: unset;
                    width: 100%;
                  }

                  img:nth-of-type(2) {
                    position: relative;
                    right: unset;
                    top: unset;
                    width: 100%;
                  }
                }
              }
            }

            .btn-position {
              display: flex;
              justify-content: center;
              width: 239px;
              height: 44px;
              margin-left: auto;
              margin-right: auto;
              padding: 11px 39px !important;
              font-size: 16px !important;
            }
          }
        }

        @media screen and (max-width: 600px) {
          .WhyFlutterSomeOurProjectsSection {
            .projects {
              max-width: 500px !important;

              .project__card {
                margin: 0 15px;

                h4 {
                  font-size: 14px;
                  line-height: 18px;
                }

                img {
                  max-width: 134px;
                }
              }
            }
          }
        }
      `}</style>
    </section>
  );
};

WhyFlutterSomeOurProjectsSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(WhyFlutterSomeOurProjectsSection);

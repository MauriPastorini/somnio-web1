import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const AngencySayCard = ({ t }) => (
  <div className="agency-say-content custom-container">
    <div className="agency-say-card">
      <p className="agency-say-card__text">{t("services_web.some_apps.agency_say.text_1")}</p>

      <div className="agency-say-card__footer">
        <img src="/assets/images/common/clutch.png" className="card__footer-logo" alt="" />
        <div className="card__footer-person">
          <img style={{ width: 110, height: 110 }} src="/assets/images/common/nicolesanz.png" alt="" />
          <div className="card__footer-name">
            <p>Nicole Sanz</p>
            <p>Project Manager</p>
            <p>Fórmula</p>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .agency-say-content {
        margin-top: 100px;
      }

      @media screen and (max-width: 1280px) {
        .agency-say-content {
          margin-top: 104px;
          margin-bottom: 69px;

          .agency-say-card {
            .agency-say-card__footer {
              flex-direction: row;
              align-items: center;

              .card__footer-person {
                img {
                  width: 56px !important;
                  height: 56px !important;
                }

                .card__footer-name {
                  p {
                    font-weight: normal;
                    margin-left: 9px;
                  }
                }
              }

              .card__footer-logo {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    `}</style>
  </div>
);

const ServicesWebSomeAppsSection = ({ t }) => {
  return (
    <section className="ServicesWebSomeAppsSection d-flex flex-column align-items-center">
      <div className="header--dark" data-aos="fade-in">
        <h2>{t("services_web.some_apps.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>
      <div className="app app--1">
        <img className="app__photo" src="/assets/images/services-web/formula.png" alt="" />

        <div className="app__text-container custom-container">
          <div className="app__text-wrapper">
            <h2>Fórmula</h2>
            <p>
              Fórmula is a platform for beauty, makeup, skincare, and haircare lovers and enthusiasts. It is the most
              notable community of Beauty in Uruguay.
            </p>
            <Link href="javascript:void(0)">
              <a className="success-case-link">
                <p>
                  View success case
                  <img className="arrow-icon" src="/assets/images/common/arrow2.svg" alt="" />
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="app app--2">
        <img className="app__photo" src="/assets/images/services-web/ICUC.png" alt="" />

        <div className="app__text-container custom-container">
          <div className="app__text-wrapper">
            <h2>ICUC</h2>
            <p>
              ICUC is a learning platform that aims to help surgeons and future surgeons analyze, review and learn
              treatments from the world’s leading surgeons.
            </p>
            <Link href="javascript:void(0)">
              <a className="success-case-link">
                <p>
                  View success case
                  <img className="arrow-icon" src="/assets/images/common/arrow2.svg" alt="" />
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <a href="/our-work" className="btn btn-custom-2 btn-mobile">
        {t("common.button_2")}
      </a>

      <AngencySayCard t={t} />

      <style jsx>{`
        .ServicesWebSomeAppsSection {
          margin-bottom: 200px;

          .header--dark {
            margin-top: 100px !important;
            margin-bottom: 62px !important;
          }

          .app {
            display: flex;
            align-items: center;
            position: relative;

            .app__text-wrapper {
              max-width: 417px;

              h2 {
                color: #031533;
                font-size: 54px;
                font-weight: bold;
                text-align: start;
                margin-bottom: 45px;
              }
              p {
                text-align: start;
                margin-bottom: 36px;
              }

              .success-case-link {
                color: #1681e3;
                font-size: 18px;
                margin-bottom: 40px;
                text-decoration: none;
                font-weight: 700;

                .arrow-icon {
                  width: 8px;
                  height: 12px;
                  margin-left: 16px;
                }
              }
            }
          }

          .app--1 {
            justify-content: flex-end;
            min-height: 875px;
            width: 100%;

            .app__text-container {
              display: flex;
              justify-content: flex-end;
            }

            .app__photo {
              position: absolute;
              left: 0;
            }
          }

          .app--2 {
            justify-content: flex-start;
            min-height: 811px;
            width: 100%;

            .app__text-container {
              display: flex;
              justify-content: flex-start;
            }

            .app__photo {
              position: absolute;
              right: 0;
              top: -186px;
            }
          }

          .agency-say-content {
            margin-top: 100px;
          }
        }

        @media screen and (max-width: 1440px) {
          .app {
            .app__photo {
              max-width: 700px;
            }
          }

          .app--2 {
            min-height: unset !important;

            .app__text-container {
              margin-bottom: 255px;
            }
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesWebSomeAppsSection {
            margin-bottom: 0;

            .header--dark {
              margin-bottom: 100px;
            }

            .app {
              display: flex;
              align-items: center;
              position: relative;
              flex-direction: column;
            }

            .app {
              display: flex;
              align-items: center;
              position: relative;
              flex-direction: column;

              .app__photo {
                position: relative;
              }

              .app__text-wrapper {
                h2 {
                  color: #031533;
                  margin-bottom: 0;
                  font-size: 42px;
                  font-weight: bold;
                  margin-bottom: 0 !important;
                }

                p,
                .success-case-link {
                  display: none;
                }
              }
            }

            .app--1 {
              display: flex;
              align-items: flex-start;
              min-height: unset;
              position: relative;
              width: 100%;

              h2 {
                text-align: end;
              }

              img {
                left: 0;
                width: 100%;
                max-width: 970px;
                order: 1;
                margin-bottom: 50px;
              }
            }

            .app--2 {
              display: flex;
              align-items: flex-end;
              min-height: unset;
              position: relative;
              width: 100%;

              img {
                right: 0;
                top: 0px;
                width: 100%;
                max-width: 970px;
                order: 1;
              }

              .app__photo {
                top: 0;
              }

              .app__text-container {
                margin-bottom: 0;
              }
            }

            .btn-mobile {
              width: 241px !important;
              font-size: 16px !important;
              margin-top: 77px !important;
            }
          }
        }

        @media screen and (max-width: 600px) {
          .ServicesWebSomeAppsSection {
            .app {
              .app__text-wrapper {
                h2 {
                  font-size: 22px;
                }
              }
            }
          }
        }
      `}</style>
    </section>
  );
};

ServicesWebSomeAppsSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesWebSomeAppsSection);

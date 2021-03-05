import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const AngencySayCard = ({ t }) => (
  <div className="agency-say-content custom-container">
    <div
      className="agency-say-card"
      style={{ backgroundImage: `url(/assets/images/services/services-agency-say-bg.svg)` }}
    >
      <p className="agency-say-card__text">{t("services_mobile.some_apps.agency_say.text_1")}</p>
      <div className="agency-say-card__footer">
        <img src="/assets/images/common/clutch.png" className="card__footer-logo" alt="" />
        <div className="card__footer-person">
          <img src="/assets/images/services-mobile/tonyjaac.png" alt="" />
          <div className="card__footer-name">
            <p>Mark Smith</p>
            <p>CEO</p>
            <p>Jaac</p>
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
          margin-top: 69px;
          margin-bottom: 69px;

          .agency-say-card {
            .agency-say-card__footer {
              flex-direction: row;
            }
          }
        }
      }
    `}</style>
  </div>
);

const ServicesMobileSomeAppsSection = ({ t }) => {
  return (
    <section className="ServicesMobileSomeAppsSection d-flex flex-column align-items-center">
      <div className="section-header-dark" data-aos="fade-in">
        <h2>{t("services_mobile.some_apps.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>

      <div className="app app--1">
        <img className="app__photo" src="/assets/images/services-mobile/jacc.png" alt="" />
        <div className="app__text custom-container">
          <div className="text-wrapper">
            <h2>Jaac</h2>
            <p>
              Jaac is a platform that improves customer service for restaurants and at the same time helps the
              restaurant have better management and save revenue.
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
        <img className="app__photo" src="/assets/images/home/home-portfolio-paymytrades.png" alt="" />
        <div className="app__text custom-container">
          <div className="text-wrapper">
            <h2>Pro Wallet</h2>
            <p>
              Pro Wallet is an instant payment solution for the construction industry that digitalizes and facilitates
              payment processes.
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

      <Link href="/our-work">
        <a className="btn btn-custom-2 btn-mobile">{t("common.button_2")}</a>
      </Link>

      <AngencySayCard t={t} />

      <style jsx>{`
        .ServicesMobileSomeAppsSection {
          padding-bottom: 100px;

          .section-header-dark {
            margin-bottom: 62px;
          }

          .app {
            display: flex;
            align-items: center;
            position: relative;

            .text-wrapper {
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

            .app__text {
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

            .app__text {
              display: flex;
              justify-content: flex-start;
            }

            .app__photo {
              position: absolute;
              right: 0;
              top: -186px;
            }
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

            .app__text {
              margin-bottom: 255px;
            }
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesMobileSomeAppsSection {
            padding-bottom: 0;

            .section-header-dark {
              margin-bottom: 100px;
            }

            .app {
              display: flex;
              align-items: center;
              position: relative;
              flex-direction: column;

              .app__photo {
                position: relative;
              }

              .text-wrapper {
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

              .app__text {
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
          .ServicesMobileSomeAppsSection {
            .app {
              .text-wrapper {
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

ServicesMobileSomeAppsSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesMobileSomeAppsSection);

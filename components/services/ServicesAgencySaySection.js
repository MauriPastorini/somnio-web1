import React from "react";

import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesAgencySaySection = ({ t }) => {
  return (
    <section className="ServicesAgencySaySection">
      <div className="section-header-dark" data-aos="fade-in">
        <h2>{t("services.what_agency_say.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>

      <div className="agency-say-content custom-container">
        <div
          className="agency-say-card"
          style={{ backgroundImage: `url(/assets/images/services/services-agency-say-bg.svg)` }}
        >
          <p className="agency-say-card__text">{t("services.what_agency_say.text")}</p>

          <div className="agency-say-card__footer">
            <img src="/assets/images/common/clutch.png" className="card__footer-logo" alt="" />
            <div className="card__footer-person">
              <img src="/assets/images/services/mohamad.png" alt="" />
              <div className="card__footer-name">
                <p>{t("services.what_agency_say.name")}</p>
                <p>{t("services.what_agency_say.position")}</p>
                <p>{t("services.what_agency_say.proyect")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ServicesAgencySaySection {
          .section-header-dark {
            margin-top: 106px;
          }

          .agency-say-content {
            display: flex;
            justify-content: center;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesAgencySaySection {
            .section-header-dark {
              margin-top: 48px;
              margin-bottom: 59px;
            }

            .agency-say-content {
              display: flex;
              justify-content: center;

              .agency-say-card__footer {
                flex-direction: row;
                align-items: center;

                img {
                  margin-bottom: 0;
                }

                .card__footer-person {
                  .card__footer-name {
                    p {
                      font-weight: normal;
                      margin-left: 9px;
                    }
                  }
                }
              }
            }
          }
        }
      `}</style>
    </section>
  );
};

ServicesAgencySaySection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesAgencySaySection);

import React from "react";

import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesAgencySaySection = ({ t }) => {
  return (
    <div className="ServicesAgencySaySection">
      <div className="section-header-dark header-wrapper" data-aos="fade-in">
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
          .header-wrapper {
            margin-top: 106px;
          }

          .agency-say-content {
            display: flex;
            justify-content: center;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesAgencySaySection {
            .header-wrapper {
              margin-top: 48px;
              margin-bottom: 59px;
            }
          }
        }

      `}</style>
    </div>
  );
};

ServicesAgencySaySection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesAgencySaySection);

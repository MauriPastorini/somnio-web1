import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import CommonCoveredCard from "../../components/common/CommonCoveredCard";

const ServicesWebCoveredSection = ({ t }) => {
  const cardInfo = [
    {
      title: t("services_mobile.covered.text_1"),
      description: t("services_mobile.covered.text_2"),
    },
    {
      title: t("services_mobile.covered.text_3"),
      description: t("services_mobile.covered.text_4"),
    },
  ];

  return (
    <div className="ServicesWebCoveredSection">
      <div className="sub__bg"></div>
      <div className="content custom-container">
        <div className="section-header-light" data-aos="fade-in">
          <h2>We’ve got you covered</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div className="services-covered-card-list">
          {cardInfo.map((info, index) => (
            <CommonCoveredCard key={index} title={info.title} description={info.description} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .ServicesWebCoveredSection {
          position: relative;
          padding: 122px 0 226px 0;

          .content {
            position: relative;
            z-index: 1;

            .services-covered-card-list {
              display: flex;
              justify-content: space-between;
              max-width: 1360px;
              margin: 0 auto;
            }
          }

          .sub__bg {
            position: absolute;
            width: 100%;
            min-height: 1200px;
            background: transparent linear-gradient(119deg, #1783e3 0%, #003ba8 100%) 0% 0% no-repeat padding-box;
            top: 0;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesWebCoveredSection {
            position: relative;
            padding: 77px 0 81px 0;
            background: transparent linear-gradient(119deg, #1783e3 0%, #003ba8 100%) 0% 0% no-repeat padding-box;

            .content {
              position: relative;
              z-index: 1;

              .services-covered-card-list {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                max-width: unset;
              }
            }

            .sub__bg {
              display: none;
            }
          }
        }
      `}</style>
    </div>
  );
};

ServicesWebCoveredSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesWebCoveredSection);

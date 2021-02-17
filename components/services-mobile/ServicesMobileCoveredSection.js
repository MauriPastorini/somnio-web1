import PropTypes from "prop-types";
import CommonCoveredCard from "../../components/common/CommonCoveredCard";
import { withTranslation } from "../../i18n";

const ServicesMobileCoveredSection = ({ t }) => {
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
    <div className="ServicesMobileCoveredSection">
      <div className="custom-container">
        <div className="section-header-light header-wrapper" data-aos="fade-in">
          <h2>{t("services_mobile.covered.title")}</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div className="card-list">
          {cardInfo.map((info, index) => (
            <CommonCoveredCard key={index} title={info.title} description={info.description} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .ServicesMobileCoveredSection {
          background: transparent linear-gradient(119deg, #1783e3 0%, #003ba8 100%) 0% 0% no-repeat padding-box;
          padding: 122px 0 226px 0;

          .header-wrapper {
            margin-bottom: 100px !important;
          }
          .card-list {
            display: flex;
            justify-content: space-between;
            max-width: 1360px;
            margin: 0 auto;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesMobileCoveredSection {
            padding: 58px 0 81px 0;
            background: transparent linear-gradient(119deg, #1783e3 0%, #003ba8 100%) 0% 0% no-repeat padding-box;

            .header-wrapper {
              margin-bottom: 48px !important;
            }

            .card-list {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              max-width: unset;
            }
          }
        }
      `}</style>
    </div>
  );
};

ServicesMobileCoveredSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesMobileCoveredSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesMobileCoveredSection);

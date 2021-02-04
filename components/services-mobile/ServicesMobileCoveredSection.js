import PropTypes from "prop-types";
import CommonCoveredCard from "../../components/common/CommonCoveredCard";
import { withTranslation } from "../../i18n";

const ServicesMobileCoveredSection = ({t}) => {
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
    <div className="ServicesMobileCoveredSection pt-100 pb-100">
      <div className="custom-container">
        <div className="section-header-light" data-aos="fade-in">
          <h2>{t("services_mobile.covered.title")}</h2>
          <img src={"./assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div className="services-covered-card-list">
          {cardInfo.map((info, index) => (
            <CommonCoveredCard key={index} title={info.title} description={info.description} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .ServicesMobileCoveredSection {
          background: transparent linear-gradient(119deg, #1783e3 0%, #003ba8 100%) 0% 0% no-repeat padding-box;

          .services-covered-card-list {
            display: flex;
            justify-content: space-between;
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

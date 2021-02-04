import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import CommonCoveredCard from "../../components/CommonCoveredCard";

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
    <div className="ServicesWebCoveredSection pt-100 pb-100">
      <div className="sub__bg"></div>
      <div className="content custom-container">
        <div className="section-header-light" data-aos="fade-in">
          <h2>We’ve got you covered</h2>
          <img src={"./assets/images/home-services-line-light.svg"} alt="" />
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

          .content {
            position: relative;
            z-index: 1;
            margin-top: 122px;

            .services-covered-card-list {
              display: flex;
              justify-content: space-between;
            }
          }

          .sub__bg {
            position: absolute;
            width: 100vw;
            min-height: 1200px;
            background: transparent linear-gradient(119deg, #1783e3 0%, #003ba8 100%) 0% 0% no-repeat padding-box;
          }
        }
      `}</style>
    </div>
  );
};

ServicesWebCoveredSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesWebCoveredSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesWebCoveredSection);

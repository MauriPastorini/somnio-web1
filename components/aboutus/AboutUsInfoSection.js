import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const AboutUsInfoSection = ({ t }) => {
  return (
    <div className="AboutUsInfoSection mt-200 mb-200">
      <img src="/assets/images/about-us/about-us-info-dots1.svg" className="about-us-info-dots1" alt="" />
      <div className="info-text-and-img custom-container">
        <img src="/assets/images/common/logo-2.png" className="info-img" alt="" />
        <p className="info-text" data-aos="fade-left">
          {t("about_us.info.text")}
        </p>
      </div>
      <style jsx>{`
        .AboutUsInfoSection {
          position: relative;
        }

        .info-text-and-img {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .info-img {
            max-width: 95%;
            margin-right: 5%;
          }

          .info-text {
            color: #001331;
            font-size: 23px;
            font-weight: 500;
            max-width: 600px;
          }
        }

        .about-us-info-dots1 {
          position: absolute;
          top: -220px;
          right: 150px;
        }
      `}</style>
    </div>
  );
};

AboutUsInfoSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

AboutUsInfoSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(AboutUsInfoSection);

import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesWebInfoSection = ({ t }) => {
  return (
    <div className="ServicesWebInfoSection">
      <div className="web-text-and-img custom-container">
        <p className="web-text" data-aos="fade-left">
          {t("services_web.info")}
        </p>
        <div className="web-img-wrapper">
          <img src={`./assets/images/services-web/info-path.svg`} className="path-img img-fluid" alt="" />
          <img src={`./assets/images/services-web/info-img.png`} className="group-img" alt="" />
        </div>
      </div>
      <style jsx>{`
        .ServicesWebInfoSection {
          margin-top: 132px !important;
          margin-bottom: 66px !important;
        }

        .web-text-and-img {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .web-img-wrapper {
            position: relative;
            width: 60%;
            height: 100%;
            margin-left: 50px;
            min-height: 500px;

            .path-img {
              position: absolute;
              top: -90px;
              right: 0;
            }
            .group-img {
              position: absolute;
              top: 20px;
              right: 42px;
              max-width: 80%;
              height: auto;
            }
          }

          .web-text {
            color: #001331;
            font-size: 23px;
            max-width: 600px;
            width: 40%;
          }
        }
      `}</style>
    </div>
  );
};

ServicesWebInfoSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesWebInfoSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesWebInfoSection);

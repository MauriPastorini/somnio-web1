import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesMobileInfoSection = ({ t }) => {
  return (
    <div className="ServicesMobileInfoSection">
      <div className="mobile-text-and-img custom-container">
        <div className="mobile-img-wrapper">
          <img src={`/assets/images/services-mobile/info-img-bg.svg`} className="path-img img-fluid" alt="" />
          <img src={`/assets/images/services-mobile/info-img.png`} className="group-img" alt="" />
        </div>
        <p className="mobile-text" data-aos="fade-left">
          {t("services_mobile.info.text_1")}
        </p>
      </div>
      <style jsx>{`
        .ServicesMobileInfoSection {
          margin-top: 200px;
          margin-bottom: 180px;
        }

        .mobile-text-and-img {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .mobile-img-wrapper {
            position: relative;
            width: 60%;
            height: 100%;
            margin-right: 50px;
            min-height: 500px;

            .path-img {
              position: absolute;
              top: -90px;
              left: 0;
            }
            .group-img {
              position: absolute;
              top: 11px;
              left: 33px;
              max-width: 90%;
              height: auto;
            }
          }

          .mobile-text {
            color: #001331;
            font-size: 23px;
            max-width: 600px;
            width: 40%;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesMobileInfoSection {
            margin-top: 82px;
            margin-bottom: 75px;
          }

          .mobile-text-and-img {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;

            .mobile-img-wrapper {
              position: relative;
              width: 100%;
              height: auto;
              margin-right: 0;
              max-width: 800px;
              min-height: unset;
              order: 1;

              .path-img {
                position: relative;
                top: 0;
                left: 0;
              }
              .group-img {
                position: absolute;
                top: 57px;
                left: 21px;
                max-width: 90%;
                height: auto;
              }
            }

            .mobile-text {
              color: #001331;
              font-size: 15px;
              max-width: 600px;
              width: 100%;
              text-align: center;
              margin-bottom: 50px;
            }
          }
        }


      `}</style>
    </div>
  );
};

ServicesMobileInfoSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesMobileInfoSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesMobileInfoSection);

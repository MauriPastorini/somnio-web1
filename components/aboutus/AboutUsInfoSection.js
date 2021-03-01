import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const AboutUsInfoSection = ({ t }) => {
  return (
    <div className="AboutUsInfoSection">
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
          padding: 200px 0;

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
            top: -85px;
            right: 150px;
          }
        }

        @media screen and (max-width: 1280px) {
          .AboutUsInfoSection {
            position: relative;
            padding: 77px 0 46px 0;

            .info-text-and-img {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
    
              .info-img {
                width: 100%;
                max-width: 231px;
                margin-right: 0;
                margin-bottom: 53px;
              }
    
              .info-text {
                color: #001331;
                font-size: 15px;
                font-weight: 500;
                max-width: 600px;
                text-align: center;
                
              }
            }
    
            .about-us-info-dots1 {
              position: absolute;
              top: 0px;
              right: 23px;
              width: 72px;
              height: auto;
            }
          }
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

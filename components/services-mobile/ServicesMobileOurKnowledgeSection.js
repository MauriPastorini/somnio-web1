import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesMobileOurKnowledgeSection = ({ t }) => {
  return (
    <div className="ServicesMobileOurKnowledgeSection custom-container">
      <div className="text-wrapper" data-aos="fade-right">
        <h3 className="mb-50"> {t("services_mobile.our_knowledge.title")}</h3>
        <p>{t("services_mobile.our_knowledge.text_1")}</p>
        <p className="mb-100">{t("services_mobile.our_knowledge.text_2")}</p>
        <button className="btn custom-button-1"> {t("common.navbar.button")}</button>
      </div>
      <div className="img-wrapper">
        <img src="./assets/images/services-mobile/knowledge-img.png" className="group-img" alt="" />
        <img src="./assets/images/services-mobile/knowledge-img-bg.svg" className="path-img img-fluid" alt="" />
      </div>
      <style jsx>{`
        .ServicesMobileOurKnowledgeSection {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 300px;
          padding-bottom: 100px;

          .text-wrapper {
            width: 50%;

            h3 {
              color: #001331;
              font-size: 40px;
              font-weight: bold;
              max-width: 550px;
            }
            p {
              font-size: 20px;
              max-width: 550px;
              margin-bottom: 40px;
            }
          }

          .img-wrapper {
            position: relative;
            width: 50%;
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
              top: 50px;
              left: 50px;
              max-width: 90%;
              height: auto;
              z-index: 1;
            }
          }
        }
      `}</style>
    </div>
  );
};

ServicesMobileOurKnowledgeSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesMobileOurKnowledgeSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesMobileOurKnowledgeSection);

import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesWebOurKnowledgeSection = ({ t }) => {
  return (
    <div className="ServicesWebOurKnowledgeSection container custom-container pt-200 pb-100">
      <div className="text-wrapper" data-aos="fade-right">
        <h3 className="mb-50">{t("services_mobile.our_knowledge.title")}</h3>
        <p className="mb-30">{t("services_mobile.our_knowledge.text_1")}</p>
        <p className="mb-50">{t("services_mobile.our_knowledge.text_2")}</p>
        <button className="btn btn-custom-1 mt-40">{t("common.navbar.button")}</button>
      </div>
      <div className="img-wrapper">
        <img src="/assets/images/services-web/knowledge-img.png" className="group-img" alt="" />
        <img src="/assets/images/services-mobile/knowledge-img-bg.svg" className="path-img img-fluid" alt="" />
      </div>
      <style jsx>{`
        .ServicesWebOurKnowledgeSection {
          display: flex;
          justify-content: space-between;
          align-items: center;

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
            }
            button{
              -webkit-box-shadow: 0px 12px 59px -14px rgba(3,208,219,1);
              -moz-box-shadow: 0px 12px 59px -14px rgba(3,208,219,1);
              box-shadow: 0px 12px 59px -14px rgba(3,208,219,1);
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
              top: -44px;
              left: 10px;
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

ServicesWebOurKnowledgeSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesWebOurKnowledgeSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesWebOurKnowledgeSection);

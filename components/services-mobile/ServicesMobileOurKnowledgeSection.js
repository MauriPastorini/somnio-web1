import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesMobileOurKnowledgeSection = ({ t }) => {
  return (
    <div className="ServicesMobileOurKnowledgeSection custom-container">
      <div className="text-wrapper" data-aos="fade-right">
        <h3> {t("services_mobile.our_knowledge.title")}</h3>
        <p>{t("services_mobile.our_knowledge.text_1")}</p>
        <p>{t("services_mobile.our_knowledge.text_2")}</p>
        <Link href="/get-in-touch">
          <a className="btn btn-custom-1 btn-desktop"> {t("common.navbar.button")}</a>
        </Link>
      </div>
      <div className="img-wrapper">
        <img src="/assets/images/services-mobile/knowledge-img.png" className="group-img" alt="" />
        <img src="/assets/images/services-mobile/knowledge-img-bg.svg" className="path-img img-fluid" alt="" />
        <Link href="/get-in-touch">
          <a className="btn btn-custom-1 btn-mobile"> {t("common.navbar.button")}</a>
        </Link>
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
              margin-bottom: 50px;
            }

            p {
              font-size: 20px;
              max-width: 550px;
              margin-bottom: 40px;

              &:last-of-type {
                margin-bottom: 100px;
              }
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

          .btn-desktop {
          }
          .btn-mobile {
            display: none;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesMobileOurKnowledgeSection {
            flex-direction: column;

            .text-wrapper {
              width: 100%;

              h3 {
                font-size: 24px;
                max-width: 595px;
                text-align: center;
                margin: 0 auto 30px auto !important;
              }
              p {
                font-size: 14px;
                max-width: 550px;
                text-align: center;
                margin: 0 auto 20px auto !important;

                &:last-of-type {
                  margin-bottom: 50px !important;
                }
              }
            }

            .img-wrapper {
              position: relative;
              width: 100%;
              height: auto;
              margin-right: 0;
              min-height: unset;
              max-width: 500px;

              .path-img {
                position: relative;
                top: 0px;
                left: 0;
              }

              .group-img {
                position: absolute;
                top: 50px;
                left: 18px;
                max-width: 90%;
                height: auto;
                z-index: 1;
              }
            }
          }

          .btn-desktop {
            display: none;
          }
          .btn-mobile {
            display: block !important;
            width: 241px;
            font-size: 20px !important;
            margin: 66px auto 0 auto;
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
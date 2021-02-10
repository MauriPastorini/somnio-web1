import PropTypes from "prop-types";
import ServicesProcessCard from "../../components/common/ServicesProcessCard";
import { withTranslation } from "../../i18n";

const ServicesProcessSection = ({ t }) => {
  const process = [
    {
      img: "process-design.svg",
      title: t("services.process.process_1.title"),
      text: t("services.process.process_1.text"),
      color: "rgba(101, 63, 223, 1)",
    },
    {
      img: "process-requeriments.svg",
      title: t("services.process.process_2.title"),
      text: t("services.process.process_2.text"),
      color: "rgba(16,148,240,1)",
    },
    {
      img: "process-ux-ui.svg",
      title: t("services.process.process_3.title"),
      text: t("services.process.process_3.text"),
      color: "rgba(40,214,222,1)",
    },
    {
      img: "process-software.svg",
      title: t("services.process.process_4.title"),
      text: t("services.process.process_4.text"),
      color: "rgba(158,107,245,1)",
    },
    {
      img: "process-development.svg",
      title: t("services.process.process_5.title"),
      text: t("services.process.process_5.text"),
      color: "rgba(94,58,219,1)",
    },
    {
      img: "process-qa.svg",
      title: t("services.process.process_6.title"),
      text: t("services.process.process_6.text"),
      color: "rgba(13,158,247,1)",
    },
    {
      img: "process-launch.svg",
      title: t("services.process.process_7.title"),
      text: t("services.process.process_7.text"),
      color: "rgba(44,212,224,1)",
    },
  ];

  return (
    <div className="ServicesProcessSection custom-container">
      <div className="section-header-dark header-wrapper" data-aos="fade-in">
        <h2>{t("services.process.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>

      <img className="process-line-bg" src="/assets/images/services/process-lines.svg" alt="" />
      <div className="process-card-list mb-200">
        {process.map((p, i) => (
          <div key={i} className="process-card-wrapper" data-aos="fade-up">
            <ServicesProcessCard data={p} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .ServicesProcessSection {
          position: relative;

          .process-line-bg {
            position: absolute;
            top: 378px;
            left: 90px;
          }
        }

        .header-wrapper {
          margin-top: 213px;
          margin-bottom: 140px !important;
        }

        .process-card-wrapper {
          // Design Thinking
          &:nth-child(1) {
            margin-left: 0px;
            margin-bottom: 80px;
          }

          // Requirements Survey
          &:nth-child(2) {
            margin-left: 670px;
            margin-bottom: 180px;
          }

          // UI/UX
          &:nth-child(3) {
            margin-left: 20px;
            margin-bottom: 150px;
          }

          // Software Architecture and Design
          &:nth-child(4) {
            margin-left: 450px;
            margin-bottom: 230px;
          }

          // Development
          &:nth-child(5) {
            margin-left: 0px;
            margin-bottom: 200px;
          }

          // QA testing
          &:nth-child(6) {
            margin-left: 450px;
            margin-bottom: 170px;
          }

          // Launch and Maintenance
          &:nth-child(7) {
            margin-left: 0px;
          }
        }
      `}</style>
    </div>
  );
};

ServicesProcessSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesProcessSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesProcessSection);

import PropTypes from "prop-types";
import ServicesProcessCard from "../../components/common/ServicesProcessCard";
import { withTranslation } from "../../i18n";

const ServicesProcessSection = ({ t }) => {
  const process = [
    {
      img: "process-design.svg",
      title: t("services.process.process_1.title"),
      text: t("services.process.process_1.text"),
    },
    {
      img: "process-requeriments.svg",
      title: t("services.process.process_2.title"),
      text: t("services.process.process_2.text"),
    },
    {
      img: "process-ux-ui.svg",
      title: t("services.process.process_3.title"),
      text: t("services.process.process_3.text"),
    },
    {
      img: "process-software.svg",
      title: t("services.process.process_4.title"),
      text: t("services.process.process_4.text"),
    },
    {
      img: "process-development.svg",
      title: t("services.process.process_5.title"),
      text: t("services.process.process_5.text"),
    },
    {
      img: "process-qa.svg",
      title: t("services.process.process_6.title"),
      text: t("services.process.process_6.text"),
    },
    {
      img: "process-launch.svg",
      title: t("services.process.process_7.title"),
      text: t("services.process.process_7.text"),
    },
  ];

  return (
    <div className="ServicesProcessSection custom-container">
      <div className="section-header-dark mt-200" data-aos="fade-in">
        <h2>{t("services.process.title")}</h2>
        <img src={"./assets/images/home-services-line.svg"} alt="" />
      </div>

      <img className="process-line-bg" src="./assets/images/services/process-lines.svg" alt="" />
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
            top: 340px;
            left: 90px;
          }
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

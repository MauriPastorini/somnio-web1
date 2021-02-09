import ServicesWorkingToolsSlide from "../../components/common/ServicesWorkingToolsSlide";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const ServiceWorkingToolsSection = ({ t }) => {
  const workingTools = [
    {
      tool: "Slack",
      type: t("services.tools.tool_1.type"),
      text: t("services.tools.tool_1.text"),
      img: "tool-slack.png",
    },
    {
      tool: "Jira",
      type: t("services.tools.tool_2.type"),
      text: t("services.tools.tool_2.text"),
      img: "tool-jira.png",
    },
    {
      tool: "Clockify",
      type: t("services.tools.tool_3.type"),
      text: t("services.tools.tool_3.text"),
      img: "tool-clockify.png",
    },
    {
      tool: "Confluence",
      type: t("services.tools.tool_4.type"),
      text: t("services.tools.tool_4.text"),
      img: "tool-confluence.png",
    },
    {
      tool: "Gsuite",
      type: t("services.tools.tool_5.type"),
      text: t("services.tools.tool_5.text"),
      img: "tool-gsuite.png",
    },
  ];

  return (
    <div className="ServiceWorkingToolsSection">
      <div className="section-header-dark header-wrapper" data-aos="fade-in">
        <h2>{t("services.tools.title")}</h2>
        <img src={"./assets/images/home-services-line.svg"} alt="" />
      </div>

      <Swiper spaceBetween={50} slidesPerView={1} pagination loop>
        {workingTools.map((_slide, i) => (
          <SwiperSlide>
            <ServicesWorkingToolsSlide key={i} slide={_slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .ServiceWorkingToolsSection {
          margin-bottom: 86px;
        }
        .header-wrapper {
          margin-bottom: 70px !important;
        }
      `}</style>
    </div>
  );
};

ServiceWorkingToolsSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServiceWorkingToolsSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServiceWorkingToolsSection);

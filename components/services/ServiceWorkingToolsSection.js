import ServicesWorkingToolsSlide from "../../components/common/ServicesWorkingToolsSlide";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import Slider from "react-slick";

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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="ServiceWorkingToolsSection">
      <div className="section-header-dark" data-aos="fade-in">
        <h2>{t("services.tools.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>

      <Slider {...settings}>
        {workingTools.map((_slide, index) => (
          <ServicesWorkingToolsSlide key={index} slide={_slide} />
        ))}
      </Slider>

      <style jsx>{`
        .ServiceWorkingToolsSection {
          margin-bottom: 86px;

          .section-header-dark {
            margin-bottom: 54px !important;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServiceWorkingToolsSection {
            padding-top: 86px;
            padding-bottom: 50px;
  
            .section-header-dark {
              margin-bottom: 70px !important;
            }
          }
        }
      `}</style>
    </div>
  );
};

ServiceWorkingToolsSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServiceWorkingToolsSection);

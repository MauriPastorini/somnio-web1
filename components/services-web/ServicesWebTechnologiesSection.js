import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";


const tech_list = [
  {
    img: "tech_html.png",
    size: 140,
    top: 452,
    left: 463,
  },
  {
    img: "tech_dev_ops.png",
    size: 200,
    top: 485,
    left: 862,
  },
  {
    img: "tech_vue.png",
    size: 140,
    top: 481,
    left: 1203,
  },
  {
    img: "tech_typescript.png",
    size: 150,
    top: 517,
    left: 1455,
  },
  {
    img: "tech_mongo.png",
    size: 200,
    top: 537,
    left: 618,
  },
  {
    img: "tech_pwa.png",
    size: 150,
    top: 584,
    left: 266,
  },
  {
    img: "tech_js.png",
    size: 150,
    top: 658,
    left: 440,
  },
  {
    img: "tech_react.png",
    size: 200,
    top: 709,
    left: 809,
  },
  {
    img: "tech_node.png",
    size: 200,
    top: 624,
    left: 1035,
  },
  {
    img: "tech_github.png",
    size: 150,
    top: 629,
    left: 1308,
  },
  {
    img: "tech_stack.png",
    size: 150,
    top: 839,
    left: 322,
  },
  {
    img: "tech_postgresql.png",
    size: 200,
    top: 781,
    left: 546,
  },
  {
    img: "tech_jenkins.png",
    size: 200,
    top: 924,
    left: 743,
  },

  {
    img: "tech_aws.png",
    size: 200,
    top: 880,
    left: 992,
  },

  {
    img: "tech_css.png",
    size: 150,
    top: 797,
    left: 1228,
  },

  {
    img: "tech_npm.png",
    size: 150,
    top: 996,
    left: 1225,
  },

  {
    img: "tech_redis.svg",
    size: 150,
    top: 768,
    left: 1430,
  },
];

const ServicesWebTechnologiesSection = ({ t }) => {
  const leftCal = 266;
  const topCal = 452;
  return (
    <div className="ServicesWebTechnologiesSection">
      <img src="/assets/images/services-mobile/tecgnologies-bg.svg" alt="" className="technologies__bg" />

      <div className="technologies__content">
        <div className="section-header-light header-wrapper" data-aos="fade-in">
          <h2 style={{ maxWidth: 800 }}>{t("services_web.tech_list.title")}</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div className="tech-list">
          {tech_list.map((tech, index) => (
            <div
              key={index}
              className="tech-item"
              style={{ width: tech.size, height: tech.size, top: tech.top - topCal, left: tech.left - leftCal }}
            >
              <img src={`/assets/images/services-web/${tech.img}`} alt="" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .ServicesWebTechnologiesSection {
          position: relative;
          overflow: hidden;
        }

        .header-wrapper {
          width: 100%;
          z-index: 0;
          margin-top: 221px;
        }

        .technologies__bg {
          width: 100%;
        }

        .technologies__content {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          z-index: 2;
        }

        .tech-list {
          width: 1343px;

          background-color: red;
          top: 0;
          position: relative;
          margin: 0 auto;

          .tech-item {
            border-radius: 50%;
            background-color: #fff;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-box-shadow: 10px 10px 28px -13px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 10px 10px 28px -13px rgba(0, 0, 0, 0.75);
            box-shadow: 10px 10px 28px -13px rgba(0, 0, 0, 0.75);
            overflow: hidden;

            &:nth-child(4) {
              img {
                width: 50%;
              }
            }
          }
        }

        @media screen and (max-width: 1919px) {
          .technologies__bg {
            width: auto;
            min-height: 1425px;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesWebTechnologiesSection {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

ServicesWebTechnologiesSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesWebTechnologiesSection);

import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const tech_desktop_list = [
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

const tech_mobile_list = [
  {
    img: "tech_html.png",
    imgSize: 39,
    size: 71,
    top: 108,
    left: 101,
  },
  {
    img: "tech_dev_ops.png",
    imgSize: 69,
    size: 100,
    top: 179,
    left: 170,
  },
  {
    img: "tech_vue.png",
    imgSize: 36,
    size: 72,
    top: 149,
    left: 287,
  },
  {
    img: "tech_typescript.png",
    imgSize: 30,
    size: 71,
    top: 28,
    left: 41,
  },
  {
    img: "tech_mongo.png",
    imgSize: 81,
    size: 100,
    top: 205,
    left: 45,
  },
  {
    img: "tech_pwa.png",
    imgSize: 47,
    size: 74,
    top: 19,
    left: 283,
  },
  {
    img: "tech_js.png",
    imgSize: 36,
    size: 72,
    top: 458,
    left: 16,
  },
  {
    img: "tech_react.png",
    imgSize: 100,
    size: 101,
    top: 293,
    left: 143,
  },
  {
    img: "tech_node.png",
    imgSize: 66,
    size: 101,
    top: 250,
    left: 259,
  },
  {
    img: "tech_github.png",
    imgSize: 39,
    size: 71,
    top: 0,
    left: 153,
  },
  {
    img: "tech_stack.png",
    imgSize: 49,
    size: 74,
    top: 536,
    left: 121,
  },
  {
    img: "tech_postgresql.png",
    imgSize: 59,
    size: 100,
    top: 330,
    left: 9,
  },
  {
    img: "tech_jenkins.png",
    imgSize: 69,
    size: 100,
    top: 413,
    left: 109,
  },

  {
    img: "tech_aws.png",
    imgSize: 57,
    size: 100,
    top: 380,
    left: 237,
  },

  {
    img: "tech_css.png",
    imgSize: 36,
    size: 73,
    top: 134,
    left: 0,
  },

  {
    img: "tech_npm.png",
    imgSize: 45,
    size: 75,
    top: 520,
    left: 230,
  },

  {
    img: "tech_redis.svg",
    imgSize: 51,
    size: 76,
    top: 79,
    left: 211,
  },
];

const ServicesWebTechnologiesSection = ({ t }) => {
  const leftCal = 266;
  const topCal = 452;
  return (
    <section className="ServicesWebTechnologiesSection">
      <div className="header--light custom-container" data-aos="fade-in">
        <h2 style={{ maxWidth: 800 }}>{t("services_web.tech_list.title")}</h2>
        <img src={"/assets/images/home-services-line-light.svg"} alt="" />
      </div>

      <div className="tech-list--destop">
        {tech_desktop_list.map((tech, index) => (
          <div
            key={index}
            className="tech__item"
            style={{ width: tech.size, height: tech.size, top: tech.top - topCal, left: tech.left - leftCal }}
          >
            <img src={`/assets/images/services-web/${tech.img}`} alt="" />
          </div>
        ))}
      </div>

      <div className="tech-list--mobile">
        {tech_mobile_list.map((tech, index) => (
          <div
            key={index}
            className="tech__item"
            style={{ width: tech.size, height: tech.size, top: tech.top, left: tech.left }}
          >
            <img
              style={{ width: tech.imgSize, height: "auto" }}
              src={`/assets/images/services-web/${tech.img}`}
              alt=""
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .ServicesWebTechnologiesSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/services-mobile/tecgnologies-bg.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 200%;
          padding: 226px 0 290px 0;
        }

        .header--light {
          width: 100%;
          z-index: 0;
        }

        .technologies__content {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          z-index: 2;
        }

        .tech-list--destop {
          width: 1343px;
          height: 720px;
          top: 0;
          position: relative;
          margin: 0 auto;

          .tech__item {
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

        .tech-list--mobile {
          display: none;
        }

        @media screen and (max-width: 1920px) {
          .ServicesWebTechnologiesSection {
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: top;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesWebTechnologiesSection {
            padding: 116px 0 105px 0;
          }
          .tech-list--destop {
            display: none;
          }
          .tech-list--mobile {
            display: block;
            width: 360px;
            height: 608px;
            top: 0;
            position: relative;
            margin: 0 auto;
            padding-right: 31px !important;
            padding-left: 31px !important;
            margin-right: auto;
            margin-left: auto;

            .tech__item {
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
            }
          }
        }

        @media screen and (max-width: 428px) {
          .ServicesWebTechnologiesSection {
            padding: 116px 0 105px 0;
            background-image: url(/assets/images/services-mobile/mobile/tecgnologies-bg.svg);
          }
        }
      `}</style>
    </section>
  );
};

ServicesWebTechnologiesSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesWebTechnologiesSection);

import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const tech_list = [
  {
    img: "tech_firebase.png",
    size: 150,
    top: 446,
    left: 424,
  },
  {
    img: "tech_fastlane.png",
    size: 150,
    top: 427,
    left: 719,
  },
  {
    img: "tech_github.png",
    size: 150,
    top: 429,
    left: 1051,
  },
  {
    img: "tech_java.png",
    size: 150,
    top: 451,
    left: 1333,
  },
  {
    img: "tech_jenkins.png",
    size: 150,
    top: 611,
    left: 331,
  },
  {
    img: "tech_android.png",
    size: 175,
    top: 564,
    left: 569,
  },
  {
    img: "tech_serveless.png",
    size: 150,
    top: 546,
    left: 879,
  },
  {
    img: "tech_ios.png",
    size: 200,
    top: 567,
    left: 1131,
  },
  {
    img: "tech_pwa.png",
    size: 150,
    top: 573,
    left: 1498,
  },
  {
    img: "tech_dart.png",
    size: 150,
    top: 796,
    left: 249,
  },
  {
    img: "tech_adobexd.png",
    size: 150,
    top: 789,
    left: 469,
  },
  {
    img: "tech_dev_ops.png",
    size: 200,
    top: 750,
    left: 664,
  },
  {
    img: "tech_flutter.png",
    size: 200,
    top: 716,
    left: 902,
  },
  {
    img: "tech_android_studio.png",
    size: 150,
    top: 791,
    left: 1153,
  },
  {
    img: "tech_swift.png",
    size: 150,
    top: 690,
    left: 1350,
  },
  {
    img: "tech_kotlin.png",
    size: 150,
    top: 988,
    left: 402,
  },
  {
    img: "tech_xcode.png",
    size: 150,
    top: 997,
    left: 666,
  },
  {
    img: "tech_code_magic.png",
    size: 200,
    top: 935,
    left: 929,
  },
  {
    img: "tech_nodejs.png",
    size: 150,
    top: 971,
    left: 1195,
  },
  {
    img: "tech_algolia.png",
    size: 150,
    top: 892,
    left: 1394,
  },
];

const ServicesMobiletechnologiesSection = ({ t }) => {
  const leftCal = 249;
  const topCal = 427;
  return (
    <div className="ServicesMobiletechnologiesSection">
      <img src="/assets/images/services-mobile/tecgnologies-bg.svg" alt="" className="technologies__bg" />

      <div className="technologies__content">
      <div className="section-header-light header-wrapper" data-aos="fade-in">
        <h2 style={{ maxWidth: 800 }}>{t("services_mobile.tech_list.title")}</h2>
        <img src={"/assets/images/home-services-line-light.svg"} alt="" />
      </div>

      
      <div className="tech-list">
        {tech_list.map((tech, index) => (
          <div
            key={index}
            className="tech-item"
            style={{ width: tech.size, height: tech.size, top: (tech.top - topCal), left: (tech.left - leftCal) }}
          >
            <img src={`/assets/images/services-mobile/${tech.img}`} alt="" />
          </div>
        ))}
      </div>
      </div>
      <style jsx>{`
        .ServicesMobiletechnologiesSection {
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
          width: 1396px;
          
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

            &:nth-child(2) {
              img{
                width: 80%;
              }
            }
            &:nth-child(3) {
              img{
                width: 70%;
              }
            }
            &:nth-child(4) {
              img{
                width: 80%;
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
          .ServicesMobiletechnologiesSection {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

ServicesMobiletechnologiesSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesMobiletechnologiesSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesMobiletechnologiesSection);
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const tech_desktop_list = [
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

const tech_mobile_list = [
  {
    img: "tech_firebase.png",
    imgSize: 58,
    size: 72,
    top: 95,
    left: 0,
  },
  {
    img: "tech_fastlane.png",
    imgSize: 54,
    size: 72,
    top: 144,
    left: 78,
  },
  {
    img: "tech_github.png",
    imgSize: 37,
    size: 71,
    top: 153,
    left: 247,
  },
  {
    img: "tech_java.png",
    imgSize: 56,
    size: 75,
    top: 50,
    left: 280,
  },
  {
    img: "tech_jenkins.png",
    imgSize: 49,
    size: 70,
    top: 561,
    left: 13,
  },
  {
    img: "tech_android.png",
    imgSize: 44,
    size: 86,
    top: 219,
    left: 8,
  },
  {
    img: "tech_serveless.png",
    imgSize: 68,
    size: 70,
    top: 213,
    left: 140,
  },
  {
    img: "tech_ios.png",
    imgSize: 77,
    size: 100,
    top: 237,
    left: 259,
  },
  {
    img: "tech_pwa.png",
    imgSize: 47,
    size: 75,
    top: 36,
    left: 75,
  },
  {
    img: "tech_dart.png",
    imgSize: 47,
    size: 75,
    top: 575,
    left: 207,
  },
  {
    img: "tech_adobexd.png",
    imgSize: 28,
    size: 78,
    top: 93,
    left: 165,
  },
  {
    img: "tech_dev_ops.png",
    imgSize: 65,
    size: 100,
    top: 325,
    left: 23,
  },
  {
    img: "tech_flutter.png",
    imgSize: 79,
    size: 100,
    top: 306,
    left: 151,
  },
  {
    img: "tech_android_studio.png",
    imgSize: 59,
    size: 75,
    top: 378,
    left: 282,
  },
  {
    img: "tech_swift.png",
    imgSize: 58,
    size: 76,
    top: 629,
    left: 107,
  },
  {
    img: "tech_kotlin.png",
    imgSize: 46,
    size: 75,
    top: 534,
    left: 113,
  },
  {
    img: "tech_xcode.png",
    imgSize: 37,
    size: 75,
    top: 449,
    left: 30,
  },
  {
    img: "tech_code_magic.png",
    imgSize: 81,
    size: 100,
    top: 425,
    left: 154,
  },
  {
    img: "tech_nodejs.png",
    imgSize: 46,
    size: 75,
    top: 499,
    left: 270,
  },
  {
    img: "tech_algolia.png",
    imgSize: 55,
    size: 75,
    top: 0,
    left: 183,
  },
];

const ServicesMobiletechnologiesSection = ({ t }) => {
  const leftCal = 249;
  const topCal = 427;

  return (
    <section className="ServicesMobiletechnologiesSection">
      <div className="section-header-light custom-container" data-aos="fade-in">
        <h2 style={{ maxWidth: 800 }}>{t("services_mobile.tech_list.title")}</h2>
        <img src={"/assets/images/home-services-line-light.svg"} alt="" />
      </div>

      <div className="tech-list--desktop">
        {tech_desktop_list.map((tech, index) => (
          <div
            key={index}
            className="tech__item"
            style={{ width: tech.size, height: tech.size, top: tech.top - topCal, left: tech.left - leftCal }}
          >
            <img src={`/assets/images/services-mobile/${tech.img}`} alt="" />
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
              src={`/assets/images/services-mobile/${tech.img}`}
              alt=""
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .ServicesMobiletechnologiesSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/services-mobile/tecgnologies-bg.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 200%;
          padding: 227px 0 288px 0;
        }

        .section-header-light {
          width: 100%;
          z-index: 0;
        }

        .tech-list--desktop {
          width: 1396px;
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

            &:nth-child(2) {
              img {
                width: 80%;
              }
            }

            &:nth-child(3) {
              img {
                width: 70%;
              }
            }
            
            &:nth-child(4) {
              img {
                width: 80%;
              }
            }
          }
        }

        .tech-list--mobile {
          display: none;
        }

        @media screen and (max-width: 1920px) {
          .ServicesMobiletechnologiesSection {
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: top;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesMobiletechnologiesSection {
            padding: 116px 0 105px 0;
            
            .tech-list--desktop {
              display: none;
            }
            
            .tech-list--mobile {
              display: block;
              width: 360px;
              height: 702px;
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
          
          .section-header-light {
            margin-bottom: 48px;
          }
        }

        @media screen and (max-width: 428px) {
          .ServicesMobiletechnologiesSection {
            padding: 116px 0 105px 0;
            background-image: url(/assets/images/services-mobile/mobile/tecgnologies-bg.svg);
          }
        }
      `}</style>
    </section>
  );
};

ServicesMobiletechnologiesSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesMobiletechnologiesSection);

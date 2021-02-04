import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const small = 195;
// const medium = 180;
// const big = 240;

const tech_list = [
  {
    img: "tech_firebase.png",
    size: small,
  },
  {
    img: "tech_fastlane.png",
    size: small,
  },
  {
    img: "tech_github.png",
    size: small,
  },
  {
    img: "tech_java.png",
    size: small,
  },
];

const ServicesMobiletechnologiesSection = ({ t }) => {

  return (
    <div className="ServicesMobiletechnologiesSection">
      <img src="./assets/images/services-mobile/tecgnologies-bg.svg" alt="" className="technologies__bg" />
      <div className="technologies__content">
        <div className="section-header-light mt-50" data-aos="fade-in">
          <h2 style={{ maxWidth: 650 }}>{t("services_mobile.tech_list.title")}</h2>
          <img src={"./assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div className="tech-list custom-container">
          {tech_list.map((tech, index) => (
            <div key={index} className="tech-item" style={{ width: tech.size, height: tech.size }}>
              <img src={`./assets/images/services-mobile/${tech.img}`} alt="" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .ServicesMobiletechnologiesSection {
          position: relative;
          overflow: hidden;
        }

        .technologies__bg {
          width: 100vw;
        }

        .technologies__content {
          position: absolute;
          width: 100%;
          height: 1000px;
          top: 100px;
          z-index: 2;
        }

        .tech-list {
          position: relative;
          width: 100%;
          background-color: red;
          top: 0;

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

            &:nth-child(1) {
              top: 150px;
              left: 0;
            }
            &:nth-child(2) {
              top: 0;
              left: 300px;
            }
            &:nth-child(3) {
              top: 30px;
              right: 300px;
            }
            &:nth-child(4) {
              top: 100px;
              right: 0;
            }
          }
        }

        @media screen and (max-width: 1400px) {
          .technologies__bg {
            width: auto;
            min-height: 1500px;
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

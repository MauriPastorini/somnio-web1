import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesUxUiInfoSection = ({ t }) => {
  return (
    <div className="ServicesUxUiInfoSection custom-container mt-100 mb-150">
      <div className="uxui-card">
        <h2>UI</h2>
        <div className="uxui-card-image-content_1">
          <img src="./assets/images/services-uxui/daniel-korpai.png" alt="" className="main-img" />
          <img src="./assets/images/services-uxui/path1.svg" alt="" className="path-img" />
        </div>
        <h3>{t("services_uxui.info.text_1")}</h3>
        <p>{t("services_uxui.info.text_2")}</p>
      </div>
      <div className="uxui-card">
        <h2>UX</h2>
        <div className="uxui-card-image-content_2">
          <img src="./assets/images/services-uxui/kelly-sikkema.png" alt="" className="main-img" />
          <img src="./assets/images/services-uxui/path2.svg" alt="" className="path-img" />
        </div>
        <h3>{t("services_uxui.info.text_3")}</h3>
        <p>{t("services_uxui.info.text_4")}</p>
      </div>
      <style jsx>{`
        .ServicesUxUiInfoSection {
          display: flex;
          justify-content: space-evenly;

          .uxui-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            h2 {
              color: #001331;
              font-size: 40px;
              font-weight: bold;
              text-align: center;
              margin-bottom: 62px;
            }

            h3 {
              color: #001739;
              font-size: 38px;
              font-weight: bold;
              text-align: center;
              margin-bottom: 33px;
              max-width: 300px;
            }

            p {
              color: #707070;
              font-size: 18px;
              max-width: 520px;
              text-align: center;
            }

            .uxui-card-image-content_1 {
              position: relative;
              margin-bottom: 140px;

              .main-img {
              }
              .path-img {
                position: absolute;
                top: -70px;
                left: -80px;
                z-index: -1;
              }
            }
            .uxui-card-image-content_2 {
              position: relative;
              margin-bottom: 140px;

              .main-img {
              }
              .path-img {
                position: absolute;
                bottom: -70px;
                right: -80px;
                z-index: -1;
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesUxUiInfoSection;

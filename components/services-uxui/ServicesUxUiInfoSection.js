import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesUxUiInfoSection = ({ t }) => {
  return (
    <div className="ServicesUxUiInfoSection custom-container">
      <div className="uxui-card">
        <h2>UX</h2>
        <div className="uxui-card-image-content_1">
          <img src="/assets/images/services-uxui/daniel-korpai.png" alt="" className="main-img" />
          <img src="/assets/images/services-uxui/path1.svg" alt="" className="path-img" />
        </div>
        <h3>{t("services_uxui.info.text_3")}</h3>
        <p>{t("services_uxui.info.text_4")}</p>
      </div>
      <div className="uxui-card">
        <h2>UI</h2>
        <div className="uxui-card-image-content_2">
          <img src="/assets/images/services-uxui/kelly-sikkema.png" alt="" className="main-img" />
          <img src="/assets/images/services-uxui/path2.svg" alt="" className="path-img" />
        </div>
        <h3>{t("services_uxui.info.text_1")}</h3>
        <p>{t("services_uxui.info.text_2")}</p>
      </div>
      <style jsx>{`
        .ServicesUxUiInfoSection {
          display: flex;
          justify-content: space-evenly;
          margin-bottom: 135px !important;
          margin-top: 100px !important;

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
                width: 274px;
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
                width: 274px;
              }
            }
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesUxUiInfoSection {
            display: flex;
            justify-content: space-evenly;
            margin-top: 50px !important;
            margin-bottom: 50px !important;
            flex-direction: column;
            align-items: center;

            .uxui-card {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
              max-width: 500px;
              margin-bottom: 50px;


              &:last-of-type{
                h2{
                  margin-bottom: 40px !important;
                }
              }

              h2 {
                color: #001331;
                font-size: 24px;
                font-weight: bold;
                text-align: center;
                margin-bottom: 0;
              }

              h3 {
                color: #001739;
                font-size: 24px;
                font-weight: bold;
                text-align: center;
                margin-bottom: 33px;
                max-width: 300px;
              }

              p {
                color: #707070;
                font-size: 14px;
                max-width: 520px;
                text-align: center;
              }

              .uxui-card-image-content_1 {
                position: relative;
                margin-bottom: 39px;
                width: 100%;

                .main-img {
                  width: 90%;
                  margin-top: 10%;
                  margin-left: 10%;
                }
                .path-img {
                  position: absolute;
                  top: 0;
                  left: 0;
                  z-index: -1;
                  width: 158px;
                  height: auto;
                }
              }

              .uxui-card-image-content_2 {
                position: relative;
                margin-bottom: 39px;
                padding-bottom: 39px;
                width: 100%;

                .main-img {
                  width: 90%;
                }

                .path-img {
                  position: absolute;
                  bottom: 0px;
                  right: 0px;
                  z-index: -1;
                  width: 158px;
                  height: auto;
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

ServicesUxUiInfoSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesUxUiInfoSection);

import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServiceCard = ({ img, title, text }) => (
  <div className="uxui-service-card">
    <img src={`./assets/images/services-uxui/${img}`} alt="" />
    <div className="uxui-service-card__text">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
);

const ServicesUxUiServicesSection = ({ t }) => {
  const card_1 = {
    img: "service_icon_1.svg",
    title: t("services_uxui.services.service_1.title"),
    text: t("services_uxui.services.service_1.text"),
  };
  const card_2 = {
    img: "service_icon_2.svg",
    title: t("services_uxui.services.service_2.title"),
    text: t("services_uxui.services.service_2.text"),
  };
  const card_3 = {
    img: "service_icon_3.svg",
    title: t("services_uxui.services.service_3.title"),
    text: t("services_uxui.services.service_3.text"),
  };
  const card_4 = {
    img: "service_icon_4.svg",
    title: t("services_uxui.services.service_4.title"),
    text: t("services_uxui.services.service_4.text"),
  };
  const card_5 = {
    img: "service_icon_5.svg",
    title: t("services_uxui.services.service_5.title"),
    text: t("services_uxui.services.service_5.text"),
  };
  const card_6 = {
    img: "service_icon_6.svg",
    title: t("services_uxui.services.service_6.title"),
    text: t("services_uxui.services.service_6.text"),
  };

  return (
    <div className="ServicesUxUiServicesSection mt-200 mb-200 container custom-container">
      <div className="service_item"></div>
      <div className="service_item">
        <ServiceCard img={card_1.img} title={card_1.title} text={card_1.text} />
      </div>
      <div className="service_item">
        <img src="./assets/images/services-uxui/arrow_1.svg" alt="" />
      </div>
      <div className="service_item">
        <ServiceCard img={card_6.img} title={card_6.title} text={card_6.text} />
      </div>
      <div className="service_item"></div>
      <div className="service_item">
        <ServiceCard img={card_2.img} title={card_2.title} text={card_2.text} />
      </div>
      <div className="service_item">
        <img src="./assets/images/services-uxui/arrow_5.svg" alt="" />
      </div>
      <div className="service_item">
        <h2>UX/UI</h2>
        <p>{t("services_uxui.services.title")}</p>
      </div>
      <div className="service_item">
        <img src="./assets/images/services-uxui/arrow_2.svg" alt="" />
      </div>
      <div className="service_item">
        <ServiceCard img={card_5.img} title={card_5.title} text={card_5.text} />
      </div>
      <div className="service_item"></div>
      <div className="service_item">
        <ServiceCard img={card_3.img} title={card_3.title} text={card_3.text} />
      </div>
      <div className="service_item">
        <img src="./assets/images/services-uxui/arrow_4.svg" alt="" />
      </div>
      <div className="service_item">
        <ServiceCard img={card_4.img} title={card_4.title} text={card_4.text} />
      </div>
      <div className="service_item">
        <img src="./assets/images/services-uxui/arrow_3.svg" alt="" />
      </div>
      <style jsx>{`
        .ServicesUxUiServicesSection {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

          .uxui-service-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 200px;
            img {
              margin-right: 40px;
            }
            .uxui-service-card__text {
              h4 {
                color: #001739;
                font-size: 23px;
                font-weight: 700;
                margin-bottom: 20px;
              }
              p {
                color: #707070;
                font-size: 16px;
              }
            }
          }

          .service_item {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .service_item:nth-of-type(3) {
            position: relative;
            img {
              position: absolute;
              top: 30px;
              left: 50px;
            }
          }
          .service_item:nth-of-type(8) {
            display: flex;
            flex-direction: column;
            align-items: center;
            h2 {
              color: #001739;
              font-size: 54px;
              font-weight: bold;
            }
            p {
              color: #001739;
              font-size: 33px;
              font-weight: bold;
            }
          }
          .service_item:nth-of-type(13) {
            position: relative;
            img {
              position: absolute;
              top: 0px;
              right: 90px;
            }
          }
          .service_item:nth-of-type(14) {
            .uxui-service-card {
              align-items: flex-end;
            }
          }
          .service_item:nth-of-type(15) {
            position: relative;
            img {
              position: absolute;
              top: 0px;
              left: 50px;
            }
          }
        }
      `}</style>
    </div>
  );
};

ServicesUxUiServicesSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesUxUiServicesSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesUxUiServicesSection);

import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServiceCard = ({ img, title, text }) => (
  <div className="uxui-service-card">
    <img src={`/assets/images/services-uxui/${img}`} alt="" />
    <div className="uxui-service-card__text">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
    <style jsx>{`
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

      @media screen and (max-width: 1280px) {
        .uxui-service-card {
          flex-direction: column;
          min-height: 200px;
          margin-bottom: 15px;

          img {
            margin: 0;
            margin-bottom: 28px;
          }

          .uxui-service-card__text {
            h4 {
              font-size: 24px;
              margin-bottom: 20px;
              text-align: center;
            }

            p {
              font-size: 14px;
              text-align: center;
              max-width: 560px;
            }
          }
        }
      }
    `}</style>
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
    <>
      <section className="ServicesUxUiServicesSection custom-container">
        <div className="service__item"></div>
        <div className="service__item">
          <ServiceCard img={card_1.img} title={card_1.title} text={card_1.text} />
        </div>
        <div className="service__item">
          <img src="/assets/images/services-uxui/arrow_1.svg" alt="" />
        </div>
        <div className="service__item">
          <ServiceCard img={card_6.img} title={card_6.title} text={card_6.text} />
        </div>
        <div className="service__item"></div>
        <div className="service__item">
          <ServiceCard img={card_2.img} title={card_2.title} text={card_2.text} />
        </div>
        <div className="service__item">
          <img src="/assets/images/services-uxui/arrow_5.svg" alt="" />
        </div>
        <div className="service__item">
          <h2>UX/UI</h2>
          <p>{t("services_uxui.services.title")}</p>
        </div>
        <div className="service__item">
          <img src="/assets/images/services-uxui/arrow_2.svg" alt="" />
        </div>
        <div className="service__item">
          <ServiceCard img={card_5.img} title={card_5.title} text={card_5.text} />
        </div>
        <div className="service__item"></div>
        <div className="service__item">
          <ServiceCard img={card_3.img} title={card_3.title} text={card_3.text} />
        </div>
        <div className="service__item">
          <img src="/assets/images/services-uxui/arrow_4.svg" alt="" />
        </div>
        <div className="service__item">
          <ServiceCard img={card_4.img} title={card_4.title} text={card_4.text} />
        </div>
        <div className="service__item">
          <img src="/assets/images/services-uxui/arrow_3.svg" alt="" />
        </div>
      </section>
      <section className="ServicesUxUiServicesSection--mobile custom-container">
        <div className="header--dark header-wrapper" data-aos="fade-in">
          <h2>UX/UI</h2>
          <h3>{t("services_uxui.services.title")}</h3>
          <img src={"/assets/images/home-services-line.svg"} alt="" />
        </div>

        <div className="service__item">
          <ServiceCard img={card_1.img} title={card_1.title} text={card_1.text} />
        </div>
        <div className="service__item">
          <ServiceCard img={card_2.img} title={card_2.title} text={card_2.text} />
        </div>
        <div className="service__item">
          <ServiceCard img={card_3.img} title={card_3.title} text={card_3.text} />
        </div>
        <div className="service__item">
          <ServiceCard img={card_4.img} title={card_4.title} text={card_4.text} />
        </div>
        <div className="service__item">
          <ServiceCard img={card_5.img} title={card_5.title} text={card_5.text} />
        </div>
        <div className="service__item">
          <ServiceCard img={card_6.img} title={card_6.title} text={card_6.text} />
        </div>
      </section>
      <style jsx>{`
        .ServicesUxUiServicesSection {
          padding-top: 200px;
          padding-bottom: 105px;

          display: grid;
          grid-template-columns: auto auto auto;
          grid-template-rows: auto auto auto auto auto;

          .service__item {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .service__item:nth-of-type(2) {
            margin-bottom: 25px;
          }

          .service__item:nth-of-type(3) {
            position: relative;
            img {
              position: absolute;
              top: 40px;
              left: 50px;
            }
          }
          .service__item:nth-of-type(9) {
            position: relative;
            img {
              margin-left: 50px;
            }
          }
          .service__item:nth-of-type(10) {
            position: relative;
            img {
              margin-right: 25px;
            }
          }
          .service__item:nth-of-type(8) {
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
          .service__item:nth-of-type(13) {
            position: relative;
            img {
              position: absolute;
              top: 0px;
              right: 90px;
            }
          }
          .service__item:nth-of-type(14) {
            padding-top: 90px;
            .uxui-service-card {
              align-items: flex-end;
            }
          }
          .service__item:nth-of-type(15) {
            position: relative;
            img {
              position: absolute;
              top: 0px;
              left: 50px;
            }
          }
        }

        .ServicesUxUiServicesSection--mobile {
          display: none;
        }

        @media screen and (max-width: 1280px) {
          .ServicesUxUiServicesSection {
            display: none;
          }

          .ServicesUxUiServicesSection--mobile {
            display: block;
            padding: 44px 0;

            .header-wrapper {
              margin-bottom: 67px !important;

              h2 {
                margin-bottom: 5px !important;
              }

              h3 {
                font-size: 22px;
                font-weight: bold;
              }
            }
          }
        }
      `}</style>
    </>
  );
};

ServicesUxUiServicesSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesUxUiServicesSection);

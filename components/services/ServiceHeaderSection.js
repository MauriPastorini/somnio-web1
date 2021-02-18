import PropTypes from "prop-types";
import ServicesHowWeWorkCard from "../../components/common/ServicesHowWeWorkCard";
import { withTranslation } from "../../i18n";

const ServiceHeaderSection = ({ t }) => {
  const cardContent1 = {
    img: "configuraciones.svg",
    title: t("services.header.how_we_work.text_1"),
    text1: t("services.header.how_we_work.text_2"),
    text2: t("services.header.how_we_work.text_3"),
  };

  const cardContent2 = {
    img: "puzzle.svg",
    title: t("services.header.how_we_work.text_4"),
    text1: t("services.header.how_we_work.text_5"),
    text2: t("services.header.how_we_work.text_6"),
  };

  return (
    <div className="ServiceHeaderSection">
      {/* <img src={`/assets/images/services/services-header-bg.svg`} alt="" className="services-header__bg" /> */}
      <img src={`/assets/images/services/services-header-path.svg`} alt="" className="services-header__path" />

      <div className="text-and-image custom-container">
        <div className="services-header-img__wrapper">
          <img
            src={`/assets/images/services/services-header-img.svg`}
            alt=""
            className="services-header-img img-fluid"
          />
        </div>

        <div className="services-header-text__wrapper" data-aos="fade-left">
          <h1 className="services-header-text title-1">{t("services.header.text_1")}</h1>
          <p className="services-header-text paragraph-1">{t("services.header.text_2")}</p>
        </div>
      </div>

      <div className="section-header-light header-wrapper" data-aos="fade-in">
        <h2>{t("services.header.how_we_work.title")}</h2>
        <img src={"/assets/images/home-services-line-light.svg"} alt="" />
      </div>

      <div className="services-header-how-we-work__content">
        <span id="full-product-development">
          <ServicesHowWeWorkCard data={cardContent1} />
        </span>
        <span className="card--second" id="staff-augmentation">
          <ServicesHowWeWorkCard data={cardContent2} />
        </span>
      </div>

      <style jsx>{`
        .ServiceHeaderSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/services/services-header-bg.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 200%;

          .services-header__path {
            position: absolute;
            top: -420px;
            left: -700px;
            z-index: 0;
            max-width: 100%;
            height: auto;
          }

          .text-and-image {
            display: flex;
            align-items: center;
            margin-top: 205px;
            position: relative;
            justify-content: space-between;

            .services-header-text__wrapper {
              width: 45%;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              margin-top: 85px;

              .services-header-text {
                width: 450px;
              }

              .title-1 {
                font-weight: bold;
                font-size: 80px;
                color: #ffffff;
                text-align: end;
                margin-bottom: 50px;
              }

              .paragraph-1 {
                font-size: 30px;
                color: #ffffff;
                font-weight: 500;
                text-align: end;
              }
            }

            .services-header-img__wrapper {
              margin-top: 50px;
              width: 55%;

              .services-header-img {
                // width: 95%;
                // margin-right: 5%;
              }
            }
          }

          .header-wrapper {
            margin-top: 250px;
          }

          .services-header-how-we-work__content {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 1280px;
            margin: 0 auto 240px auto;

            .card--second {
              margin-top: 200px;
            }
          }
        }

        @media screen and (max-width: 1920px) {
          .ServiceHeaderSection {
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: top;
          }
        }

        @media screen and (max-width: 1280px) {
          .ServiceHeaderSection {
            .text-and-image {
              align-items: center;
              display: flex;
              flex-direction: column;
              margin-top: 120px;
              position: relative;
              justify-content: space-between;

              .services-header-text__wrapper {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 25px;
                margin-bottom: 35px;

                .services-header-text {
                  width: 100%;
                  text-align: center;
                  max-width: 300px;
                }

                .title-1 {
                  font-size: 35px;
                  margin-bottom: 28px;
                }

                .paragraph-1 {
                  font-size: 18px;
                }
              }

              .services-header-img__wrapper {
                margin-top: 50px;
                width: 100%;
                order: 1;
                display: flex;
                justify-content: center;
                align-items: center;

                .services-header-img {
                  width: 100%;
                  margin: 0;
                  max-width: 500px;
                }
              }
            }

            .header-wrapper {
              margin-top: 300px;
              margin-bottom: 65px;
            }

            .services-header-how-we-work__content {
              margin: 0 auto 40px auto;
              padding-left: 36px;
              padding-right: 36px;
              flex-direction: column;
              align-items: center;

              .card--second {
                margin-top: 0;
              }
            }
          }
        }

        @media screen and (max-width: 428px) {
          .ServiceHeaderSection {
            background-image: url(/assets/images/services/mobile/services-header-bg.svg);

            .services-header__path {
              position: absolute;
              top: -133px;
              left: -175px;
              z-index: 0;
              max-width: 100%;
              height: auto;
            }
          }
        }
      `}</style>
    </div>
  );
};

ServiceHeaderSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServiceHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServiceHeaderSection);

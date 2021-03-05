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
      <img src={`/assets/images/services/services-header-path.svg`} alt="" className="header__path" />
      <img src={`/assets/images/services/mobile/services-header-path.svg`} alt="" className="header__path--mobile" />
      <img src={`/assets/images/services/mobile/dots.svg`} alt="" className="header__dot" />

      <div className="text-and-image custom-container">
        <div className="header__img-wrapper">
          <img src={`/assets/images/services/services-header-img.svg`} alt="" className="header__img img-fluid" />
        </div>

        <div className="header__text-wrapper" data-aos="fade-left">
          <h1 className="header__text title-1">{t("services.header.text_1")}</h1>
          <p className="header__text paragraph-1">{t("services.header.text_2")}</p>
        </div>
      </div>

      <div className="header--light header-wrapper" data-aos="fade-in">
        <h2>{t("services.header.how_we_work.title")}</h2>
        <img src={"/assets/images/home-services-line-light.svg"} alt="" />
      </div>

      <div className="header__how-we-work-content">
        <span id="full-product-development">
          <ServicesHowWeWorkCard data={cardContent1} />
        </span>
        <span className="second-card" id="staff-augmentation">
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

          .header__path {
            position: absolute;
            top: -420px;
            left: -700px;
            z-index: 0;
          }

          .header__path--mobile {
            display: none;
          }

          .header__dot {
            display: none;
          }

          .text-and-image {
            display: flex;
            align-items: center;
            margin-top: 205px;
            position: relative;
            justify-content: space-between;

            .header__text-wrapper {
              width: 45%;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              margin-top: 85px;

              .header__text {
                width: 510px;
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

            .header__img-wrapper {
              margin-top: 50px;
              width: 55%;
            }
          }

          .header-wrapper {
            margin-top: 250px;
          }

          .header__how-we-work-content {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 1280px;
            margin: 0 auto 240px auto;

            .second-card {
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
            .header__dot {
              display: block;
              position: absolute;
              top: 833px;
              left: 26px;
            }

            .header__path {
              display: none;
            }

            .header__path--mobile {
              display: block;
              position: absolute;
              z-index: 0;
              top: -256px;
              left: -440px;
            }

            .text-and-image {
              align-items: center;
              display: flex;
              flex-direction: column;
              margin-top: 143px;
              position: relative;
              justify-content: space-between;

              .header__text-wrapper {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 25px;
                margin-bottom: 35px;

                .header__text {
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

              .header__img-wrapper {
                margin-top: 50px;
                width: 100%;
                order: 1;
                display: flex;
                justify-content: center;
                align-items: center;

                .header__img {
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

            .header__how-we-work-content {
              margin: 0 auto 40px auto;
              padding-left: 36px;
              padding-right: 36px;
              flex-direction: column;
              align-items: center;

              .second-card {
                margin-top: 0;
              }
            }
          }
        }

        @media screen and (max-width: 428px) {
          .ServiceHeaderSection {
            background-image: url(/assets/images/services/mobile/services-header-bg.svg);
          }
        }
      `}</style>
    </div>
  );
};

ServiceHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServiceHeaderSection);

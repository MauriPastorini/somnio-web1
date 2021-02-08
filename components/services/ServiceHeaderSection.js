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
      <img src={`./assets/images/services/services-header-bg.svg`} alt="" className="services-header__bg" />
      <img src={`./assets/images/services/services-header-path.svg`} alt="" className="services-header__path" />

      <div className="wrapper-content">
        <div className="text-and-image custom-container">
          <div className="services-header-img__wrapper">
            <img
              src={`./assets/images/services/services-header-img.svg`}
              alt=""
              className="services-header-img img-fluid"
            />
          </div>

          <div className="services-header-text__wrapper" data-aos="fade-left">
            <h1 className="services-header-text title-1">{t("services.header.text_1")}</h1>
            <p className="services-header-text paragraph-1">{t("services.header.text_2")}</p>
          </div>
        </div>

        <div className="section-header-light mt-250" data-aos="fade-in">
          <h2>{t("services.header.how_we_work.title")}</h2>
          <img src={"./assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div className="services-header-how-we-work__content">
          <ServicesHowWeWorkCard data={cardContent1} />
          <span className="mt-200">
            <ServicesHowWeWorkCard data={cardContent2} />
          </span>
        </div>
      </div>
      <style jsx>{`
        .ServiceHeaderSection {
          overflow: hidden;
        }

        .services-header__bg {
          width: 100%;
          top: 0;
          z-index: -2;
        }

        .services-header__path {
          position: absolute;
          top: -420px;
          left: -700px;
          z-index: 0;
          max-width: 80%;
          height: auto;
        }

        .text-and-image {
          display: flex;
          align-items: center;
          margin-top: 70px;

          .services-header-text__wrapper {
            width: 45%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-top: 85px;
            .services-header-text {
              width: 450px;
            }

            h1 {
              margin-bottom: 50px;
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

        .services-header-how-we-work__content {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        @media screen and (max-width: 1800px) {
          .services-header__bg {
            width: auto;
            min-height: 1000px;
          }
        }

        @media screen and (max-width: 1500px) {
          .text-and-image {
            margin-top: 100px;
            .services-header-img__wrapper {
              .services-header-img {
                width: 85%;
                margin-right: 15%;
              }
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

import PropTypes from "prop-types";
import Slider from "react-slick";
import HomeServiceCard from "../../components/common/HomeServiceCard";
import { withTranslation } from "../../i18n";

const HomeServicesSection = ({ t }) => {
  const data = [
    {
      headerImg: "assets/images/home/home-services-img2.svg",
      title: t("home.services.mobile.title"),
      text: t("home.services.mobile.text"),
      footerImg: "assets/images/home/home-services-img4.png",
      link: "/services/mobile-app-development",
    },
    {
      headerImg: "assets/images/home/home-services-img3.svg",
      title: t("home.services.web.title"),
      text: t("home.services.web.text"),
      footerImg: "assets/images/home/home-services-img5.png",
      link: "/services/web-development",
    },
    {
      headerImg: "assets/images/home/home-services-img1.svg",
      title: t("home.services.ux_ui.title"),
      text: t("home.services.ux_ui.text"),
      footerImg: "assets/images/home/home-services-img-6.png",
      link: "/services/ux-ui",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="HomeServicesSection custom-container">
      <img src={`/assets/images/home/home-dots-1.svg`} className="dots" alt="" />
      <img src={`/assets/images/home/mobile/home-dots-1.svg`} className="dots-mobile" alt="" />
      <div className="section-header-dark service-header" data-aos="fade-in">
        <h2>{t("home.services.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>
      <div className="service-list" data-aos="slide-up">
        {data.map((d, i) => (
          <HomeServiceCard
            key={i}
            headerImg={d.headerImg}
            text={d.text}
            title={d.title}
            footerImg={d.footerImg}
            link={d.link}
          />
        ))}
      </div>

      <div className="service-list-mobile">
        <Slider {...settings}>
          {data.map((d, i) => (
            <HomeServiceCard
              key={i}
              headerImg={d.headerImg}
              text={d.text}
              title={d.title}
              footerImg={d.footerImg}
              link={d.link}
            />
          ))}
        </Slider>
      </div>

      <style jsx>
        {`
          .HomeServicesSection {
            position: relative;
            padding-top: 53px;
            padding-bottom: 191px;

            .service-header {
              margin-bottom: 138px !important;
            }

            .service-list {
              display: flex;
              justify-content: space-between;
              max-width: 1150px;
              margin: 0 auto;
              width: 100% !important;
            }

            .service-list-mobile {
              display: none;
            }

            .dots {
              position: absolute;
              top: -150px;
              left: -50px;
            }

            .dots-mobile {
              display: none;
            }
          }

          @media screen and (max-width: 1280px) {
            .HomeServicesSection {
              .service-header {
                margin-bottom: 75px !important;
              }

              .service-list {
                display: none;
              }

              .service-list-mobile {
                display: block;
              }

              .dots {
                display: none;
              }

              .dots-mobile {
                position: absolute;
                display: block;
                bottom: 32px;
                right: 21px;
              }
            }
          }
        `}
      </style>
    </div>
  );
};

HomeServicesSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

HomeServicesSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomeServicesSection);

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
      footerImgWidth: 283,
      imgAlt: "Mobile App Development services | Somnio Software",
      logosAlt: "Technologies we use for Mobile App Development | Flutter, Android, iOS, Serverless, Firebase, PWA, Code Magic"
    },
    {
      headerImg: "assets/images/home/home-services-img3.svg",
      title: t("home.services.web.title"),
      text: t("home.services.web.text"),
      footerImg: "assets/images/home/home-services-img5.png",
      link: "/services/web-development",
      footerImgWidth: 176,
      imgAlt: "Web Development services | Somnio Software",
      logosAlt: "Technologies we use for Web Development | React, Vue.js, Node.js, Amazon Web Services, HTML, Java Script, CSS"
    },
    {
      headerImg: "assets/images/home/home-services-img1.svg",
      title: t("home.services.ux_ui.title"),
      text: t("home.services.ux_ui.text"),
      footerImg: "assets/images/home/home-services-img-6.png",
      link: "/services/ux-ui",
      footerImgWidth: 216,
      imgAlt: "UX/UI Design services | Somnio Software",
      logosAlt: "Technologies we use for UX/UI Design | Figma, Zeplin, Adobe Illustrator, Adobe XD, Adobe Photoshop"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section className="HomeServicesSection custom-container">
      <img src={`/assets/images/home/home-dots-1.svg`} className="dots" alt="" />
      <img src={`/assets/images/home/mobile/home-dots-1.svg`} className="dots--mobile" alt="" />

      <div className="header--dark" data-aos="fade-in">
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
            footerImgWidth={d.footerImgWidth}
            imgAlt={d.imgAlt}
            logosAlt={d.logosAlt}
          />
        ))}
      </div>

      <div className="service-list--mobile">
        <Slider {...settings}>
          {data.map((d, i) => (
            <HomeServiceCard
              key={i}
              headerImg={d.headerImg}
              text={d.text}
              title={d.title}
              footerImg={d.footerImg}
              link={d.link}
              footerImgWidth={d.footerImgWidth}
              imgAlt={d.imgAlt}
              logosAlt={d.logosAlt}
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

            .header--dark {
              margin-bottom: 138px !important;
            }

            .service-list {
              display: flex;
              justify-content: space-between;
              max-width: 1150px;
              margin: 0 auto;
              width: 100% !important;
            }

            .service-list--mobile {
              display: none;
            }

            .dots {
              position: absolute;
              top: -150px;
              left: -50px;
            }

            .dots--mobile {
              display: none;
            }
          }

          @media screen and (max-width: 1280px) {
            .HomeServicesSection {
              .header--dark {
                margin-bottom: 48px !important;
              }

              .service-list {
                display: none;
              }

              .service-list--mobile {
                display: block;
              }

              .dots {
                display: none;
              }

              .dots--mobile {
                position: absolute;
                display: block;
                top: -13px;
                left: 27px;
                width: 98px;
              }
            }
          }
        `}
      </style>
    </section>
  );
};

HomeServicesSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomeServicesSection);

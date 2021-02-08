import PropTypes from "prop-types";
import HomeServiceCard from "../../components/common/HomeServiceCard";
import { withTranslation } from "../../i18n";

const HomeServicesSection = ({ t }) => {
  const data = [
    {
      headerImg: "assets/images/home/home-services-img2.svg",
      title: t("home.services.mobile.title"),
      text: t("home.services.mobile.text"),
      footerImg: "assets/images/home/home-services-img4.png",
      link: "/mobile-development",
    },
    {
      headerImg: "assets/images/home/home-services-img3.svg",
      title: t("home.services.web.title"),
      text: t("home.services.web.text"),
      footerImg: "assets/images/home/home-services-img5.png",
      link: "/web-development",
    },
    {
      headerImg: "assets/images/home/home-services-img1.svg",
      title: t("home.services.ux_ui.title"),
      text: t("home.services.ux_ui.text"),
      footerImg: "assets/images/home/home-services-img-6.png",
      link: "/ux-ui",
    },
  ];

  return (
    <div className="HomeServicesSection custom-container">
      <img src={`./assets/images/home/home-dots-1.svg`} className="home-dots-1" alt="" />
      <div className="section-header-dark service-header" data-aos="fade-in">
        <h2>{t("home.services.title")}</h2>
        <img src={"./assets/images/home-services-line.svg"} alt="" />
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
      <style jsx>
        {`
          .HomeServicesSection {
            position: relative;
            margin-top: 53px;
            margin-bottom: 191px;
          }

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

          .home-dots-1 {
            position: absolute;
            top: -150px;
            left: -50px;
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

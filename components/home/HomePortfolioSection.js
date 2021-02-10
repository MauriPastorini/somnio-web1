import { withTranslation } from "../../i18n";
import PropTypes from "prop-types";
import HomePorfolioSlide from "../../components/common/HomePorfolioSlide";
import Slider from "react-slick";

const HomePortfolioSection = ({ t }) => {
  const portfolio = [
    {
      title: t("home.portfolio.jaac.title"),
      text: t("home.portfolio.jaac.text"),
      img: "/assets/images/home/home-porfolio-jaac.png",
    },
    {
      title: t("home.portfolio.crimedoor.title"),
      text: t("home.portfolio.crimedoor.text"),
      img: "/assets/images/home/home-portfolio-crime.png",
    },
    {
      title: t("home.portfolio.pay_my_trades.title"),
      text: t("home.portfolio.pay_my_trades.text"),
      img: "/assets/images/home/home-portfolio-paymytrades.png",
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
    pauseOnHover: true
  };

  return (
    <div className="HomePortfolioSection">
      <img src={"/assets/images/home/home-dots-2.svg"} alt="" className="home-dots-2" />
      <img src={"/assets/images/home/home-porfolio-path.png"} alt="" className="home-porfolio-path" />
      <div className="section-header-dark mb-0" data-aos="fade-in">
        <h2>{t("home.portfolio.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>

      <Slider {...settings}>
        {portfolio.map((_slide, index) => (
          <HomePorfolioSlide key={index} title={_slide.title} text={_slide.text} img={_slide.img} />
        ))}
      </Slider>

      <div className="d-flex justify-content-center mt-30">
        <button className="btn custom-button-2">{t("common.button_2")}</button>
      </div>
      <style jsx>
        {`
          .HomePortfolioSection {
            position: relative;
            margin-bottom: 92px;
          }

          .home-dots-2 {
            position: absolute;
            top: 0;
            left: 294px;
          }

          .home-porfolio-path {
            position: absolute;
            top: -850px;
            left: -50px;
          }
        `}
      </style>
    </div>
  );
};

HomePortfolioSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

HomePortfolioSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomePortfolioSection);

import { withTranslation } from "../i18n";
import PropTypes from "prop-types";
import AgencySayCard from "../components/AgencySayCard";
import Slider from "react-slick";
import HomePorfolioSlide from "../components/HomePorfolioSlide";
import { Swiper, SwiperSlide } from "swiper/react";

const HomePortfolioSection = ({ t }) => {
  const portfolio = [
    {
      title: t("home.portfolio.jaac.title"),
      text: t("home.portfolio.jaac.text"),
      img: "./assets/images/home/home-porfolio-jaac.png",
    },
    {
      title: t("home.portfolio.crimedoor.title"),
      text: t("home.portfolio.crimedoor.text"),
      img: "./assets/images/home/home-portfolio-crime.png",
    },
    {
      title: t("home.portfolio.pay_my_trades.title"),
      text: t("home.portfolio.pay_my_trades.text"),
      img: "./assets/images/home/home-portfolio-paymytrades.png",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // pauseOnHover: true,
  };

  return (
    <div className="HomePortfolioSection">
      <img src={"./assets/images/home/home-dots-2.svg"} alt="" className="home-dots-2" />
      <img src={"./assets/images/home/home-porfolio-path.png"} alt="" className="home-porfolio-path" />
      <div className="section-header-dark" data-aos="fade-in">
        <h2>{t("home.portfolio.title")}</h2>
        <img src={"./assets/images/home-services-line.svg"} alt="" />
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination
        loop
      >
        {portfolio.map((_slide, i) => (
          <SwiperSlide>
            <HomePorfolioSlide key={i} title={_slide.title} text={_slide.text} img={_slide.img} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Slider {...settings}>
        {portfolio.map((_slide, i) => (
          <p>{_slide.text}</p>
          // <HomePorfolioSlide key={i} title={_slide.title} text={_slide.text} img={_slide.img} />
        ))}
      </Slider> */}

      <div className="d-flex justify-content-center mt-40 mb-50">
        <button className="btn custom-button-2">{t("common.button_2")}</button>
      </div>
      <style jsx>
        {`
          .HomePortfolioSection {
            position: relative;
          }

          .home-dots-2 {
            position: absolute;
            top: 0;
            left: 350px;
          }

          .home-porfolio-path {
            position: absolute;
            top: -800px;
            left: 0;
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

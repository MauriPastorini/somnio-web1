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
      color: "red",
    },
    {
      title: t("home.portfolio.crimedoor.title"),
      text: t("home.portfolio.crimedoor.text"),
      img: "/assets/images/home/home-portfolio-crime.png",
      color: "green",
    },
    {
      title: t("home.portfolio.pay_my_trades.title"),
      text: t("home.portfolio.pay_my_trades.text"),
      img: "/assets/images/home/home-portfolio-paymytrades.png",
      color: "blue",
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
    <div className="HomePortfolioSection">
      <img src={"/assets/images/home/home-dots-2.svg"} alt="" className="home-dots-2" />
      {/* <img src={"/assets/images/home/home-porfolio-path.png"} alt="" className="home-porfolio-path" /> */}
      {/* <img src={"/assets/images/home/mobile/home-portfolio-path.svg"} alt="" className="home-porfolio-path-mobile" /> */}

      <div className="section-header-dark header-wrapper" data-aos="fade-in">
        <h2>{t("home.portfolio.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>

      <Slider {...settings}>
        {portfolio.map((_slide, index) => (
          <HomePorfolioSlide key={index} title={_slide.title} text={_slide.text} img={_slide.img} color={_slide.color}/>
        ))}
      </Slider>

      <button className="btn btn-custom-2 btn-position">{t("common.button_2")}</button>
      <style jsx>
        {`
          .HomePortfolioSection {
            position: relative;
            margin-bottom: 92px;
            overflow-x: hidden;
            
            .header-wrapper {
              margin-bottom: 0;
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

            // .home-porfolio-path-mobile {
            //   display:none;
            // }

            .btn-position {
              display: flex;
              justify-content: center;
              margin-top: 30px !important;
            }
          }

          @media screen and (max-width: 1280px) {
            .HomePortfolioSection {
              position: relative;
              margin-bottom: 72px;

              .header-wrapper {
                margin-bottom: 55px;
              }

              .home-dots-2 {
                position: absolute;
                top: 0;
                left: 46px;
                width: 55px;
              }

              .home-porfolio-path {
                display: none;
              }

              // .home-porfolio-path-mobile {
              //   display: block;
              //   position: absolute;
              //   top: -270px;
              //   left: -100px;
              // }

              .btn-position {
                display: flex;
                justify-content: center;
                margin-top: 100px !important;
                width: 239px;
                height: 44px;
                margin-left: auto;
                margin-right: auto;
                padding: 11px 39px !important;
                font-size: 16px !important;
              }
            }
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

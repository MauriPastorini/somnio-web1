import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const HomeAboutUsSection = ({ t }) => {
  return (
    <div className="HomeAboutUsSection">
      <img src={`/assets/images/home/home-dots-3.svg`} className="path-img-1" alt="" />
      <img src={`/assets/images/home/home-path-about-us.svg`} className="path-img-2" alt="" />
      <img src={`/assets/images/home/mobile/home-path-about-us.svg`} className="path-img-2-mobile" alt="" />

      <div className="section-header-dark header-wrapper" data-aos="fade-in">
        <h2>{t("home.about_us.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>

      <div className="text-and-image custom-container">
        <div className="home-aboutus-text-wrapper" data-aos="fade-right">
          <p className="home-aboutus-text">{t("home.about_us.text_1")}</p>
          <p className="home-aboutus-text">{t("home.about_us.text_2")}</p>
        </div>
        <div className="home-aboutus-img-wrapper">
          <img src={`/assets/images/home/home-our-img1.svg`} className="path-img img-fluid" alt="" />
          <img src={`/assets/images/home/home-our-img2.png`} className="group-img" alt="" />
        </div>
      </div>
      <style jsx>{`
        .HomeAboutUsSection {
          height: 100vh;
          max-height: 900px;
          position: relative;
          padding-top: 71px;
          overflow: hidden;
          
          .text-and-image {
            display: flex;
            align-items: center;
            height: 100vh;
            max-height: 600px;

            .home-aboutus-text-wrapper {
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 40%;
              height: 100%;

              .home-aboutus-text {
                font-size: 20px;
                max-width: 480px;
              }
            }

            .home-aboutus-img-wrapper {
              position: relative;
              width: 60%;
              height: 100%;

              .path-img {
                position: absolute;
                top: -90px;
                right: 150px;
              }
              .group-img {
                position: absolute;
                top: 50px;
                right: 10px;
                max-width: 90%;
                height: auto;
              }
            }
          }

          .path-img-1 {
            position: absolute;
            left: 50px;
            top: 150px;
          }

          .path-img-2 {
            position: absolute;
            right: -480px;
            top: -100px;
          }

          .path-img-2-mobile {
            display: none;
          }
        }

        @media screen and (max-width: 1280px) {
        }

        @media screen and (max-width: 428px) {
          .HomeAboutUsSection {
            height: 100vh;
            max-height: 734px;
            position: relative;
            padding-top: 81px;

            .header-wrapper {
              margin-bottom: 63px !important;
            }

            .text-and-image {
              display: flex;
              align-items: center;
              flex-direction: column;
              height: 100vh;

              .home-aboutus-text-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: auto;
                margin-bottom: 25px;

                .home-aboutus-text {
                  font-size: 15px;
                  max-width: 480px;
                  text-align: center;
                }
              }

              .home-aboutus-img-wrapper {
                position: relative;
                width: 100%;
                height: auto;

                .path-img {
                  position: absolute;
                  top: -17px;
                  right: 60px;
                  max-width: 300px;
                }

                .group-img {
                  position: absolute;
                  top: 50px;
                  right: 10px;
                  max-width: 316px;
                  height: auto;
                }
              }
            }

            .path-img-1 {
              position: absolute;
              left: 36px;
              top: 38px;
              width: 73px;
            }

            .path-img-2 {
              display: none;
            }

            .path-img-2-mobile {
              display: block;
              position: absolute;
              right: -180px;
              top: 300px;
            }
          }
        }
      `}</style>
    </div>
  );
};

HomeAboutUsSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

HomeAboutUsSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomeAboutUsSection);

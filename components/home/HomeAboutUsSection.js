import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const HomeAboutUsSection = ({ t }) => {
  return (
    <div className="HomeAboutUsSection">
      <img src={`./assets/images/home/home-dots-3.svg`} className="path-img-1" alt="" />
      <img src={`./assets/images/home/home-path-about-us.png`} className="path-img-2" alt="" />

      <div className="section-header-dark" data-aos="fade-in">
        <h2>{t("home.about_us.title")}</h2>
        <img src={"./assets/images/home-services-line.svg"} alt="" />
      </div>
      <div className="text-and-image custom-container">
        <div className="home-aboutus-text-wrapper" data-aos="fade-right">
          <p className="home-aboutus-text">{t("home.about_us.text_1")}</p>
          <p className="home-aboutus-text">{t("home.about_us.text_2")}</p>
        </div>
        <div className="home-aboutus-img-wrapper">
          <img src={`./assets/images/home/home-our-img1.svg`} className="path-img img-fluid" alt="" />
          <img src={`./assets/images/home/home-our-img2.png`} className="group-img" alt="" />
        </div>
      </div>
      <style jsx>{`
        .HomeAboutUsSection {
          height: 100vh;
          max-height: 900px;
          position: relative;
          padding-top: 71px;

          .text-and-image {
            display: flex;
            align-items: center;
            height: 100vh;
            max-height: 600px;
          }

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

          .path-img-1 {
            position: absolute;
            left: 50px;
            top: 150px;
          }

          .path-img-2 {
            position: absolute;
            right: 0;
            top: 0;
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

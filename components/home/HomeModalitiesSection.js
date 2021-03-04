import PropTypes from "prop-types";
import HomeModalityCard from "../../components/common/HomeModalityCard";
import { withTranslation } from "../../i18n";

const HomeModalitiesSection = ({ t }) => {
  const data = [
    {
      headerImg: "assets/images/home/home-modality-img2.svg",
      title: t("home.modalities.development.title"),
      text: t("home.modalities.development.text"),
      link: "/services/working-modalities#full-product-development",
    },
    {
      headerImg: "assets/images/home/home-modality-img1.svg",
      title: t("home.modalities.augmentation.title"),
      text: t("home.modalities.augmentation.text"),
      link: "/services/working-modalities#staff-augmentation",
    },
  ];

  return (
    <div className="HomeModalitiesSection">
      <img src="/assets/images/home/mobile/path-modalities.svg" alt="" className="path" />
      <img src="/assets/images/home/mobile/path-modalities2.svg" alt="" className="path2" />
      <div className="section-header-dark header-wrapper" data-aos="fade-in">
        <h2>{t("home.modalities.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>
      <div className="modality-list" data-aos="slide-up">
        {data.map((d, i) => (
          <HomeModalityCard key={i} headerImg={d.headerImg} text={d.text} title={d.title} link={d.link} />
        ))}
      </div>

      <style jsx>
        {`
          .HomeModalitiesSection {
            padding-bottom: 240px;
            padding-top: 134px !important;
            position: relative;

            .header-wrapper {
              margin-bottom: 120px !important;
            }

            .path {
              display: none;
            }

            .path2 {
              display: none;
            }

            .modality-list {
              display: flex;
              justify-content: space-between;

              margin: 20px auto 0 auto;
              max-width: 1129px;
            }
          }

          @media screen and (max-width: 767px) {
            .HomeModalitiesSection {
              padding-top: 62px !important;
              padding-bottom: 60px;

              .path {
                display: block;
                position: absolute;
                right: 0;
                top: 125px;
              }

              .path2 {
                display: block;
                position: absolute;
                left: -134px;
                bottom: -90px;
              }

              .header-wrapper {
                margin-bottom: 63px !important;
              }

              .modality-list {
                flex-direction: column;
              }
            }
          }
        `}
      </style>
    </div>
  );
};

HomeModalitiesSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomeModalitiesSection);

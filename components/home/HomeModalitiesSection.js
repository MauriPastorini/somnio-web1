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
            margin-bottom: 240px;

            .header-wrapper{
              margin-top: 134px !important;
              margin-bottom: 120px !important;
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
              margin-bottom: 100px;
  
              .header-wrapper{
                margin-top: 62px !important;
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

HomeModalitiesSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

HomeModalitiesSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomeModalitiesSection);
